import React from "react";
import KeyboardLetter from "../KeyboardLetter";
import KeyboardSpecial from "../KeyboardSpecial";
import KeyboardSubmit from "../KeyboardSubmit";
import "./Keyboard.css";

const Keyboard = props => (
  
<div className="keyboard">    

<div className="row">
    <KeyboardLetter value={"Q"} datavalue={5} onClick={props.letterClick} /> 
    <KeyboardLetter value={"W"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"E"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"R"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"T"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"Y"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"U"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"I"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"O"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"P"} datavalue={2} onClick={props.letterClick} />
</div>

<div className="row">        
    <KeyboardLetter value={"A"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"S"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"D"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"F"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"G"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"H"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"J"} datavalue={4} onClick={props.letterClick}/>
    <KeyboardLetter value={"K"} datavalue={3} onClick={props.letterClick} />
    <KeyboardLetter value={"L"} datavalue={1} onClick={props.letterClick} />
</div>

<div className="row">
    <KeyboardLetter value={"Z"} datavalue={5} onClick={props.letterClick} />
    <KeyboardLetter value={"X"} datavalue={4} onClick={props.letterClick} />
    <KeyboardLetter value={"C"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"V"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"B"} datavalue={2} onClick={props.letterClick} />
    <KeyboardLetter value={"N"} datavalue={1} onClick={props.letterClick} />
    <KeyboardLetter value={"M"} datavalue={2} onClick={props.letterClick} />
</div>

<div className="row">
    <KeyboardSpecial value={"Clear"} onClick={props.clear} />
    <KeyboardSpecial value={"Backspace"} onClick={props.backspace} />
    <KeyboardSubmit value={"Submit"} onClick={props.submit} />
</div>

</div>

);

export default Keyboard;
