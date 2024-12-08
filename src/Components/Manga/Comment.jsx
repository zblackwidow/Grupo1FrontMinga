import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Ignacio Borraz",
      avatar: "https://via.placeholder.com/50",
      text: "girls hit your hallelujah",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Lucas Ezequiel Silva",
      avatar: "https://via.placeholder.com/50",
      text: "sasuke!!!!!!!!!!!!!!!!!",
      time: "45 mins ago",
    },
    {
      id: 3,
      user: "Ignacio Borraz",
      avatar: "https://via.placeholder.com/50",
      text: "nana épico este chapter",
      time: "12 mins ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: comments.length + 1,
      user: "Your Username",
      avatar: "https://via.placeholder.com/50",
      text: newComment,
      time: "Just now",
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleEditComment = (id) => {
    const updatedText = prompt("Edit your comment:");
    if (updatedText && updatedText.trim() !== "") {
      setComments(
        comments.map((comment) =>
          comment.id === id ? { ...comment, text: updatedText } : comment
        )
      );
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="bg-gray-100 mt-20 min-h-screen p-6 lg:p-8">
  <div className="space-y-4 pb-32">
    {comments.map((comment) => (
      <div
        key={comment.id}
        className="bg-white p-4 rounded-md shadow-md flex flex-col-reverse sm:flex-row sm:items-start sm:space-x-4 relative"
      >
        {/* Opciones de edición/eliminación */}
        <div className="flex justify-start space-x-2 sm:space-x-4 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-4">
          <button
            onClick={() => handleEditComment(comment.id)}
            className="bg-blue-100 text-blue-500 rounded-md px-2 py-1 text-sm flex items-center space-x-1"
          >
            <span>Edit</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z"
                stroke="#0079FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => handleDeleteComment(comment.id)}
            className="bg-red-100 text-red-500 rounded-md px-2 py-1 text-sm flex items-center space-x-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8H19M5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6C21 7.10457 20.1046 8 19 8M5 8L5 18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V8M10 12H14"
                stroke="#F87F70"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Foto de perfil */}
<div className="flex justify-end  ">
  <img
    src={comment.avatar}
    alt="User Avatar"
    className="w-10 h-10 rounded-full"
  />
</div>

        

        {/* Nombre y comentario */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{comment.user}</h4>
          <p className="text-gray-600">{comment.text}</p>
          <span className="text-sm text-gray-400">{comment.time}</span>
        </div>
      </div>
    ))}
  </div>

  {/* Caja para añadir un nuevo comentario */}
  <div className="bottom-0 left-0 right-0 bg-white p-4 shadow-md">
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Say something here..."
        className="flex-1 bg-gray-100 rounded-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white rounded-full px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11M9 21l9-9-9-9"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

  );
};

export default CommentSection;
