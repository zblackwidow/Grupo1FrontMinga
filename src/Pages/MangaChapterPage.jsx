import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getChapterByMangaId } from "../Store/actions/chapterActions";
import { getManga } from "../Store/actions/mangaActions";
import { getComments } from "../Store/actions/commentActions";
import CommentModal from "../Components/Manga/CommenModal";
import ReactionBar from "../Components/Manga/MangaReaction";

const MangaChapterPage = () => {
  const navigate = useNavigate();
  const [colorButton, setColorButton] = useState({
    color: "#FFFFFF",
    boolean: true,
  });
  const [colorButton2, setColorButton2] = useState({
    color: "#9D9D9D",
    boolean: false,
  });
  const [classInfo, setClassInfo] = useState(
    "w-[50%] h-full rounded-[20px] bg-gradient-to-r from-[#f78839] to-[#F97316] z-[0] transition-all duration-300 translate-x-0 absolute"
  );
  function buttonInfoLeft() {
    setColorButton({ color: "#FFFFFF", boolean: true });
    setColorButton2({ color: "#9D9D9D", boolean: false });
    setClassInfo(
      "w-[50%] h-full rounded-[20px] z-[0] bg-gradient-to-r from-[#f78839] to-[#F97316] z-[-1] transition-all duration-300 translate-x-0 absolute"
    );
    setIsHovered(true);
  }
  function buttonInfoRight() {
    setColorButton2({ color: "#FFFFFF", boolean: true });
    setColorButton({ color: "#9D9D9D", boolean: false });
    setClassInfo(
      "w-[50%] h-full rounded-[20px] z-[0] bg-gradient-to-r from-[#f78839] to-[#F97316] z-[-1] transition-all duration-300 translate-x-full absolute"
    );
    setIsHovered(false);
  }
  const [activeModalChapter, setActiveModalChapter] = useState(null);
  const [isHovered, setIsHovered] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { chapter, loading, error } = useSelector((state) => state.chapter);
  const { manga } = useSelector((state) => state.manga);
  const { comments } = useSelector((state) => state.comment);

  const dataUser = JSON.parse(localStorage.getItem("userManga"));
  const token = dataUser?.token;

  useEffect(() => {
    if (id && token) {
      // Cargar solo datos esenciales para este componente
      dispatch(getChapterByMangaId({ id, token }));
      dispatch(getManga({ id, token }));
      dispatch(getComments({ token }));
    }
  }, [dispatch, id, token]);

  if (loading) {
    return <div className="text-xl">Cargando capítulo...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  const filterComments = (id) =>
    commentsList.filter(
      (comment) => comment.chapter_id && comment.chapter_id._id === id
    ) || [];

  const chapters = chapter?.response || [];
  const mangaDetails = manga?.response || {};
  const commentsList = comments?.response || [];


  const handleOpenModal = (chapterId) => {
    setActiveModalChapter(chapterId);
  };

  const handleCloseModal = () => {
    setActiveModalChapter(null);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-24 justify-center gap-4 bg-[#ebebeb] min-h-screen">
      {/* Manga Cover and Info */}
      <div className="p-2 lg:w-1/4">
        <img
          src={mangaDetails?.cover_photo || "default-cover.jpg"}
          alt="Manga Cover"
          className="w-full h-1/2 lg:w-[20vw] lg:h-auto object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold">{mangaDetails?.title}</h1>
        <div className="flex justify-between mt-2">
          <p
            className={`font-semibold text-[${mangaDetails?.category_id?.color}] text-[12px] p-2 bg-[${mangaDetails?.category_id?.hover}] rounded-xl`}
          >
            {mangaDetails?.category_id?.name.charAt(0).toUpperCase() +
              mangaDetails?.category_id?.name.slice(1) || "Shonen"}
          </p>
          <p>
            {mangaDetails?.author_id?.name.charAt(0).toUpperCase() +
              mangaDetails?.author_id?.name.slice(1) || "Company Name"}
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-around items-center mt-4 h-[80px] bg-[#FFFFFF] rounded-2xl p-2 shadow-md">
          <div className="text-center">
            <p className="text-xl">{mangaDetails?.rating || "4.5/5"}</p>
            <p className="text-[12px] text-[#9D9D9D]">Rating</p>
          </div>
          <div className="border h-7 border-[#dadada]"></div>
          <div className="text-center">
            <p className="text-xl">{mangaDetails?.chapters || "265"}</p>
            <p className="text-[12px] text-[#9D9D9D]">Chapters</p>
          </div>
          <div className="border h-7 border-[#dadada]"></div>
          <div className="text-center">
            <p className="text-xl">{mangaDetails?.language || "Eng"}</p>
            <p className="text-[12px] text-[#9D9D9D]">Language</p>
          </div>
        </div>
        <ReactionBar></ReactionBar>
      </div>

      {/* Manga Content */}
      <div className="p-4 lg:w-2/3">
        <div className="w-auto mx-4 h-[34px] rounded-[20px] flex mt-[1.5rem] shadow-[0_0px_7px_0px_rgba(0,0,0,0.15)] relative">
          <div className={classInfo}></div>
          <button
            style={{ color: colorButton.color }}
            onClick={buttonInfoLeft}
            className="w-[50%] rounded-[20px] text-[12px] z-[1]  font-montserrat font-bold text-center transition-all duration-300"
          >
            Manga
          </button>
          <button
            style={{ color: colorButton2.color }}
            onClick={buttonInfoRight}
            className="w-[50%] z-[1] rounded-[20px] text-[12px] font-montserrat font-bold text-center transition-all duration-300"
          >
            Chapters
          </button>
        </div>

    {isHovered ? (
      <div className="mt-4">
        <p>{mangaDetails?.description}</p>
      </div>
    ) : (
      <div className="mt-4">
        {chapters.length > 0 ? (
          chapters.map((chapter) => (
            <div
            key={chapter._id}
            className="flex justify-between items-centerp-4 rounded-lg mb-4"
          >
            <img
              src={mangaDetails?.cover_photo}
              alt=""
              className="w-[83px] h-[74px] rounded-[8px]"
            />
            <div className="flex flex-col ">
              <div className="flex flex-row">
                <p className="text-lg text-black font-bold">
                  {" "}
                  {chapter.title}
                </p>
                <p className="text-lg text-black font-bold">
                  {" "}
                  #{chapter.order}
                </p>
              </div>
              <div className="flex justify-center gap-6">
              <button onClick={() => handleOpenModal(chapter._id)}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c6ca/d4a8/50eb70cf6e6a2e8e874cb25836f927e4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cg6-IuHbcTcjo3jLeNv9GdbsMU8UDOQbeTx6qKdr8MZgI1U1yE5qpL9060Z6owVayeaqoAA~9fyvcGldZOQR7~JcC4NNyaeUT9uBcdpWLMB-rQgsgyzCA7Ing3lVxOSBPBH5oN0wqLRATPqD5kuMh2VnPHQB0tNmp4qOKtMEWByb320urujqAOmxX1BS7RZ1dOfQ6n9mfZSwXx2TetRxhjHIHURj9hWq0vnxcHIxFMwd1jJN6QqS4vcQLGOqd3b91vrOzDwO-wJXBq~fX4gYIb9eP0knUuSAmcew9ZVRjiGzmtRNqky8lKvX0Y7M2L1Jhht6UwFFaE1RkuQvHDsS2A__"
                    alt=""
                  />
                </button>
                <CommentModal
                  isOpen={activeModalChapter === chapter._id}
                  onClose={handleCloseModal}
                  commentsID={chapter._id}
                  className="max-h-[90vh]"
                />

                <p>{filterComments(chapter._id).length}</p>
              </div>
            </div >
              <button
                className=" bg-orange-500 text-white w-auto h-[30%] px-3 py-1 rounded-3xl ml-4"
                 
                onClick={() => navigate(`/chapterByID/${chapter._id}`)}
              >
                Read
              </button>
            </div>
          ))
        ) : (
          <p>No chapters available.</p>
        )}
      </div>
    )}
  </div>
</div>
)}
export default MangaChapterPage;
