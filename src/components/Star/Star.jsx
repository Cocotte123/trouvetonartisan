import React from "react";
import { FaStar, FaStarHalfAlt,  } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import '../../components/Star/Star.css';

const Star = ({note}) => {
    const ratingStar = Array.from({length : 5},(elem, index)=>{
        let number = index + 0.5;
   
    
    return (
        <div key={index}>
            {note >= index+1
            ? <FaStar /> 
            : note >= number
            ? <FaStarHalfAlt />
            : <AiOutlineStar />

            }
        </div>
    )
    })

    return (
        <div id="ratingStar">
            {ratingStar}
        </div>
    )
};

export default Star;