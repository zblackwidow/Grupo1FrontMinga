const CommentModal = ({ isOpen, onClose, comments }) => {
    if (!isOpen) return null; // No renderiza el modal si no está abierto
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-bold">{comment.user}</p>
                    <p className="text-sm text-gray-700">{comment.text}</p>
                    <p className="text-xs text-gray-500">{comment.time}</p>
                  </div>
                  {comment.avatar && (
                    <img
                      src={comment.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No comments available.</p>
            )}
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
  
  export default CommentModal;