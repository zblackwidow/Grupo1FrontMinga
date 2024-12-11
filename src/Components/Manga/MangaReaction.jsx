import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReaction, getReactions, updateReaction } from "../../Store/actions/reactionActions";

const ReactionBar = ({ contentId, rolId }) => {

  const dispatch = useDispatch();

  const [selectedReaction, setSelectedReaction] = useState(null); // Estado para la reacción seleccionada

  // Obtenemos las reacciones del estado Redux, asegurándonos que es un arreglo
  const reactionsFromState = useSelector((state) =>
    Array.isArray(state.reaction) ? state.reaction.reactions : []
  );



  // Cargar las reacciones cuando el componente se monta o se actualiza
  useEffect(() => {
    dispatch(getReactions());
  }, [dispatch]);

  useEffect(() => {
    // Al cargar las reacciones buscamos si existe una reacción registrada
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
  // Función para manejar el click en una reacción
  const handleReactionClick = (reactionValue) => {
    setSelectedReaction(reactionValue); 

    const reactionPayload = {
      manga_id: contentId, 
      reaction: reactionValue,
    };
    console.log(selectedReaction);

    // Si ya existe una reacción seleccionada, actualízala
    if (selectedReaction) {
      dispatch(updateReaction({ ...reactionPayload }, userToken));
    } else {
      dispatch(createReaction(reactionPayload));
    }
  };

  
  const reactions = [
    { emoji: "👍", value: 1 }, 
    { emoji: "👎", value: 2 }, 
    { emoji: "😮", value: 3 }, 
    { emoji: "😍", value: 4 }, 
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
