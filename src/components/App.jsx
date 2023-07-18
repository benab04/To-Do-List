import React from "react";
import { useState } from "react";

function App() {
  const [inputText, changeInput] = useState("");
  const [items, updateItems] = useState([]);
  // let [isChecked, updateChecked] = useState(false);
  function updateInput(event) {
    changeInput(event.target.value);
    //console.log(inputText);
  }
  function addItem() {
    updateItems((prev) => [...prev, inputText]);
    //console.log(items);
    changeInput("");
  }
  // function removeItem(){
  // }
  // function changeChecked(event) {
  //   //console.log(event.target);
  //   isChecked ? updateChecked(false) : updateChecked(true);
  // }
  return (
    <div className="full-box">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={updateInput}
          className="enter-item"
          type="text"
          value={inputText}
        />
        <button
          onClick={inputText === "" ? null : addItem}
          className="add-button"
        >
          <span className="add-item">Add</span>
        </button>
        <ul>
          {items.map((item) => (
            <li>
              <label className="container">
                <input
                  // onChange={changeChecked}
                  type="checkbox"
                  // value={isChecked}
                />
                <span className="checkmark"></span>
                <span
                  // style={
                  //   isChecked === true
                  //     ? { textDecorationLine: "line-through" }
                  //     : null
                  // }
                  className="item"
                >
                  {item}
                </span>
                {/* <button onClick={removeItem} className="close">x</button> */}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
