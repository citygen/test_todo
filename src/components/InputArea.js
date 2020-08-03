import React from "react";
import { useRef } from "react";
function InputArea({ addItem, queryList, allClick }) {
  const inputRef = useRef();
  return (
    <div className="header">
      <h2>My To Do List</h2>
      <input type="text" ref={inputRef} placeholder="Title..." />
      <div className="btnGroup">
        <button
          onClick={() => {
            addItem(inputRef.current.value);
            inputRef.current.value = "";
          }}
          className="btn"
        >
          Add
        </button>
        <button
          onClick={() => {
            queryList(inputRef.current.value);
          }}
          className="btn"
        >
          Search
        </button>
        <button
          onClick={() => {
            allClick();
          }}
          className="btn"
        >
          Complete all
        </button>
      </div>
    </div>
  );
}

export default InputArea;
