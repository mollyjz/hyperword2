import React from "react";
//import AnswerSpace from "../AnswerSpace";
import "./AnswerSpace.css";
//import "../Keyboard"

const AnswerSpace = (props) => {
    return (
        <div>
            <h1 className="letters">
                &nbsp;
                {props.guesses.toString()}
            </h1>
        </div>
    )
};

export default AnswerSpace;
