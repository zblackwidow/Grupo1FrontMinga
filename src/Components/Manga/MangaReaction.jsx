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

   
    if (rolId) {
      reactionPayload.author_id = rolId;
    }

    console.log("Payload enviado:", reactionPayload);

  
    if (selectedReaction === reactionValue) {
      console.log("La reacción ya está seleccionada.");
    } else if (selectedReaction) {
     
      dispatch(updateReaction(reactionPayload));
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
    <div className="flex space-x-4">
      {reactions.map((reaction) => (
        <button
          key={reaction.value}
          onClick={() => handleReactionClick(reaction.value)}
          className={`p-4 text-2xl ${selectedReaction === reaction.value ? "bg-blue-500 text-white rounded-lg" : "bg-gray-200"}`}
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;
