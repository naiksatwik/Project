"use strict";
import React, { useState } from "react";
import Pt from "prop-types";

export default function TextForm(props) {
  let ExtractedEmail = new Set();
  const [Text, setText] = useState("");
  const HandleOnChange = (ele) => {
    setText(ele.target.value);
  };
  const upperCase = () => {
    let targetElement = document.getElementById("exampleFormControlTextarea1");
    setText(targetElement.value.toUpperCase());
    props.showAlert("Converted To upper case", "success");
  };
  const lowerCase = () => {
    let targetElement = document.getElementById("exampleFormControlTextarea1");
    setText(targetElement.value.toLowerCase());
    props.showAlert("Converted To lower case", "success");
  };
  const clear = () => {
    setText("");
    props.showAlert("Text is cleared", "success");
  };
  const Extract = () => {
    let arr = Text.split(" ");
    for (let word of arr) {
      if (word.endsWith("@gmail.com")) {
        let index = word.lastIndexOf("\n");
        console.log(word);
        if (index != -1) word = word.slice(index + 1);
        ExtractedEmail.add(word);
      }
    }
    for (let email of ExtractedEmail) {
      let li = document.createElement("li");
      li.classList.add("FSize");
      li.classList.add("li-email");
      li.innerText = email;
      document.getElementById("Enter").append(li);
    }
    props.showAlert("Extracted Email successfully...", "success");
  };

  const countWord = () => {
    let arr = Text.split(" ");
    let remove = (word) => {
      return word != " ";
    };

    let arrWord = arr.filter(remove);
    return arrWord.length;
  };
  const selectAll = () => {
    let textValue = document.getElementById(
      "exampleFormControlTextarea1"
    ).value;
    navigator.clipboard.writeText(textValue);
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1 class={`text-${props.textColor}`}>{props.heading}</h1>
        </label>
        <textarea
          className={`form-control`}
          id="exampleFormControlTextarea1"
          rows="10"
          value={Text}
          onChange={HandleOnChange}
          placeholder={props.placeholder}
          style={{ backgroundColor: props.mode === "dark" ? "gray" : "white" }}
        ></textarea>
      </div>
      <button onClick={upperCase} className="btn btn-primary mx-3 ">
        {" "}
        To Uppercase
      </button>
      <button onClick={lowerCase} className="btn btn-primary mx-3 ">
        {" "}
        To Lowercase
      </button>
      <button className="btn btn-primary mx-3 " onClick={clear}>
        Clear Text
      </button>
      <button className=" btn btn-primary mx-3 my-2" onClick={Extract}>
        Extract Email
      </button>
      <button
        className="btn btn-primary mx-3 my-2 "
        id="copy"
        onClick={selectAll}
      >
        Copy Text
      </button>
      <div className={`container text-${props.textColor}`}>
        <h1 className="my-4">{props.TextSummary}</h1>
        <p className="my2">
          {(Text.split(" ").length-1>=1)? Text.split(" ").length:0} words and {Text.length} character
        </p>
        <p>Minutes take to read:{0.008 * Text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter the text to preview......"}</p>
        <h2>Extracted Email</h2>
        <ol id="Enter"></ol>
      </div>
    </>
  );
}
TextForm.defaultProps = {
  text: "start writing...",
  TextSummary: "Your Text Summary",
  placeholder: "Enter the text...",
};
