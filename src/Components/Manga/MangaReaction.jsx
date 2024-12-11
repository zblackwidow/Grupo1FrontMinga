import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReaction, getReactions, updateReaction } from "../../Store/actions/reactionActions";

const ReactionBar = ({ contentId, rolId }) => {

  const dispatch = useDispatch();
  const userToken = localStorage.getItem('token');
  const [selectedReaction, setSelectedReaction] = useState(null);

  const reactionsFromState = useSelector((state) =>
    Array.isArray(state.reaction) ? state.reaction.reactions : []
  );
  useEffect(() => {
    dispatch(getReactions());
  }, [dispatch]);

  useEffect(() => {
    if (reactionsFromState.length > 0) {
      const userReaction = reactionsFromState.find(
        (reaction) =>
          reaction.manga_id === contentId ||
          reaction.author_id === rolId ||
          reaction.company_id === rolId
      );
      if (userReaction) {
        setSelectedReaction(userReaction.reaction);
      }
    }
  }, [reactionsFromState, contentId, rolId]);
  const handleReactionClick = (reactionValue) => {
    setSelectedReaction(reactionValue);

    const reactionPayload = {
      manga_id: contentId,
      reaction: reactionValue,
    };
    console.log(selectedReaction);

    if (selectedReaction) {
      dispatch(updateReaction({ ...reactionPayload }, userToken));
    } else {
      dispatch(createReaction(reactionPayload));
    }
  };


  const reactions = [
    { emoji: "👍", type:"like" },
    { emoji: "👎", type:"dislike" },
    { emoji: "😮", type:"wow"},
    { emoji: "😍", type:"love" },
  ];

  return (
    <div className="flex space-x-4 justify-center">
      {reactions.map((reaction) => (
        <button
          key={reaction.value}
          onClick={() => handleReactionClick(reaction.type)}
          className={`p-4 text-2xl rounded-full mt-4 ${selectedReaction === reaction.type
            ? "bg-orange-500 text-white rounded-full"
            : "bg-gray-300 hover:bg-orange-400"
            }`}
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;
