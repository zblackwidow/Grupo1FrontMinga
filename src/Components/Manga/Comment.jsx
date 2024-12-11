import { useState } from "react";
import CommentModal from "./CommenModal";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      user: "Ignacio Borraz",
      text: "girls hit your hallelujah",
      time: "2 hours ago",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      user: "Lucas Ezequiel Silva",
      text: "sasuke!!!!!!!!!!!!!!!!",
      time: "45 mins ago",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      user: "Ignacio Borraz",
      text: "nana epico este chapter",
      time: "12 mins ago",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <button onClick={handleOpenModal} className="bg-pink-500 text-white px-4 py-2 rounded-lg">
        View Comments
      </button>
      <CommentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        comments={comments}
      />
    </div>
  );
};

export default CommentSection;