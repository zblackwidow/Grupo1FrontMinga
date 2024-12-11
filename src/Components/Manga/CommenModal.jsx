import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment, deleteComment, getCommentsByChapterId } from "../../Store/actions/commentActions";
import { getCompanyByUserId } from "../../Store/actions/companyActions";
import { getAuthorByUserId } from "../../Store/actions/authorActions";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useParams } from "react-router-dom";

const CommentModal = ({ isOpen, onClose, commentsID }) => {
  if (!isOpen) return null;
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { author } = useSelector((state) => state.author);
  const { company } = useSelector((state) => state.company);
  const { commentsByChapterId, loading, error } = useSelector(
    (state) => state.comment
  );
  const handleError = (e) => {
    e.target.src = "../../../public/erroruser.png";
};
const [commenstById, setCommentsById] = useState(commentsID);
  const [refreshComments, setRefreshComments] = useState(false); // Nuevo estado
  useEffect (() => {
    if (commentsID === undefined) {
      setCommentsById(id);
    }
  }, [commentsID]);
  const [newComment, setNewComment] = useState({
    chapter_id: commenstById,
    message: "",
  });

  console.log(commenstById);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByChapterId(commenstById));
    setRefreshComments(false);
  }, [dispatch, commenstById, refreshComments]); // Añade refreshComments como dependencia

  useEffect(() => {
    if (user.role === 1) {
      dispatch(getAuthorByUserId(user._id)).then(() => {
        setNewComment((prev) => ({
          ...prev,
          author_id: author?.response[0]?._id,
        }));
      });
    } else if (user.role === 2) {
      dispatch(getCompanyByUserId(user._id)).then(() => {
        setNewComment((prev) => ({
          ...prev,
          company_id: company?.response[0]?._id,
        }));
      });
    }
  }, [dispatch, user.role]);

  const handleNewComment = (e) => {
    e.preventDefault();
    dispatch(createComment(newComment)); // Espera que se cree el comentario
    setNewComment((prev) => ({ ...prev, message: "" })); // Limpia el campo de texto
    setRefreshComments((prev) => !prev); // Cambia el estado para recargar los comentarios
  };

  const handleDeleteComment = (e, commentId) => {
    e.preventDefault();
    dispatch(deleteComment( commentId));
    console.log(commentId);
    
    setRefreshComments((prev) => !prev); 
  };

  const comments = commentsByChapterId?.response || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <div className="max-h-96 overflow-y-auto space-y-4">
          {loading ? (
            <p className="text-sm text-gray-500">Loading comments...</p>
          ) : error ? (
            <p className="text-sm text-red-500">
              Error loading comments. Please try again.
            </p>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="flex justify-between w-[100%] items-center bg-gray-100 p-3 rounded-lg"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-2">
                    <img
                      src={
                        comment?.author_id
                          ? comment?.author_id?.photo
                          : comment?.company_id?.photo
                      }
                      alt={
                        comment?.author_id
                          ? comment?.author_id?.name +
                            " " +
                            comment?.author_id?.lastName
                          : comment?.company_id?.name
                      }
                      className="w-10 h-10 rounded-full"
                      onError={handleError}
                    />
                    <p className="text-sm font-bold">
                      {comment?.author_id
                        ? comment?.author_id?.name +
                          " " +
                          comment?.author_id?.lastName
                        : comment?.company_id?.name}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">{comment.message}</p>
                </div>
                <div className="flex items-start justify-end h-full">
                  <button onClick={(e) => {handleDeleteComment(e, comment._id)}}>
                  <RiDeleteBin7Line />
                  </button>

                </div>
                
                
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No comments available.</p>
          )}
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-4 mt-2 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Say Something here..."
            value={newComment.message}
            onChange={(e) =>
              setNewComment({ ...newComment, message: e.target.value })
            }
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            className="ml-2 text-gray-500 hover:text-blue-500"
            onClick={handleNewComment}
          >
            <RiSendPlaneFill className="w-6 h-6" />
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default React.memo(CommentModal);
