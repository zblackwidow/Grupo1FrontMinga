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
    <div className="flex space-x-4">
      {reactions.map((reaction) => (
        <button
          key={reaction.type}
          onClick={() => handleReactionClick(reaction.type)}
          className={`p-4 text-2xl ${
            selectedReaction === reaction.type
              ? "bg-blue-500 text-white rounded-lg"
              : "bg-gray-200"
          }`}
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;
