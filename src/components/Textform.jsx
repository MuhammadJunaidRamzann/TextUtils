import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Upper Case was clicked" + text);
    let newtext = text.toUpperCase();

    setText(newtext);
    props.showAlert("Converted to Upper Case!", "success");
  };
  const handleLoClick = () => {
    console.log("Upper Case was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case!", "success");
  };
  const handleClearClick = () => {
    console.log("Upper Case was clicked" + text);
    let newtext = "";
    setText(newtext);
    props.showAlert("Text is Clear Successfully!", "success");
  };

  //passing event object
  //event
  const handleOnChange = (event) => {
    console.log("On change");
    //correct way to do this since variable exists
    //event
    setText(event.target.value);

    //wrong way since junaid is not a variable
    //  setText(junaid); //-> this will throw error since varaible not declared

    //correct way now
    //  setText("junaid");

    //convert randome values to string

    //setState function can take any value
  };

  // const sayHello = (name) => {
  //   console.log("Hello " + name + "!")
  // }

  // sayHello(text)
  // sayHello("Ahsan")
  // sayHello(1)

  const handleInverseClick = (event) => {
    //First we convert string to array so we can use it in loop
    let textArray = text.split("");

    //initialize an empty array where we will put our new text
    let newText = [];

    //we loop through every element in array (which will be the text string so if word is "test", we do "t", "e", "s", "t" one by one)
    textArray.forEach((letter) => {
      //in loop we first check if current letter is uppercase
      if (letter === letter.toUpperCase()) {
        //if it is we set it to lower case and push into new empty array
        newText.push(letter.toLowerCase());
      } else {
        //else make it uppercase
        newText.push(letter.toUpperCase());
      }
    });

    //now we use join function to convert array back to string like we did opposite in first step
    //then set the value
    setText(newText.join(""));
    props.showAlert("Inverse is Successfully Done!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        }
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleInverseClick}>
        Convert to Inverse
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>

      <div />
      <div className=" container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>PREVIEW</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
