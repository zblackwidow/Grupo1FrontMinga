import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReaction, updateReaction } from "../../Store/actions/reactionActions";

const ReactionBar = ({ contentId, userToken }) => {
  const dispatch = useDispatch();
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);

    const reactionPayload = {
      contentId,
      reactionType: reaction,
    };
    console.log(selectedReaction);

    // Si ya existe una reacción seleccionada, actualízala
    if (selectedReaction) {
      dispatch(updateReaction({ ...reactionPayload }, userToken));
    } else {
      dispatch(createReaction(reactionPayload, userToken));
    }
  };

  const reactions = [
    { emoji: "👍", type: "like" },
    { emoji: "👎️", type: "dislike" },
    { emoji: "😮", type: "wow" },
    { emoji: "😍", type: "love" },
  ];

  return (
    <div className="flex space-x-4 justify-center">
      {reactions.map((reaction) => (
        <button
          key={reaction.type}
          onClick={() => handleReactionClick(reaction.type)}
          className={`p-4 text-2xl rounded-full mt-4 ${
            selectedReaction === reaction.type
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
