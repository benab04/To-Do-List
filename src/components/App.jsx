import React from "react";
import { useState } from "react";

function App() {
  const [inputText, changeInput] = useState("");
  const [items, updateItems] = useState([]);
  const [checkedItems, updateCheckedItems] = useState([]);
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
  function removeItem(event) {
    const thisItem = event.target.value;
    if (items.includes(thisItem)) {
      const index = items.indexOf(thisItem);
      items.splice(index, 1);
      updateItems([...items]);
    } else {
      const index = checkedItems.indexOf(thisItem);
      checkedItems.splice(index, 1);
      updateCheckedItems([...checkedItems]);
    }
  }
  function changeUnChecked(event) {
    //console.log(event.target.value);
    const thisItem = event.target.value;
    const index = items.indexOf(thisItem);
    //console.log(index);
    const removedItem = items.splice(index, 1);
    updateCheckedItems([...checkedItems, ...removedItem]);
    updateItems([...items]);
    //console.log(removedItem);
    // isChecked ? updateChecked(false) : updateChecked(true);
  }
  function changeChecked(event) {
    const thisItem = event.target.value;
    const index = checkedItems.indexOf(thisItem);
    //console.log(index);
    const removedItem = checkedItems.splice(index, 1);
    updateItems([...items, ...removedItem]);
    updateCheckedItems([...checkedItems]);
  }
  function clearAll() {
    updateItems([]);
    updateCheckedItems([]);
  }
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
          onClick={
            inputText === ""
              ? null
              : items.includes(inputText) || checkedItems.includes(inputText)
              ? console.log("Item already exists")
              : addItem
          }
          className="add-button"
        >
          <span className="add-item">Add</span>
        </button>

        <ul>
          {items.map((item) => (
            <li key={item}>
              <label className="container">
                <input
                  onChange={changeUnChecked}
                  type="checkbox"
                  value={item}
                />
                <span className="checkmark"></span>
                <span className="item">{item}</span>
                <button onClick={removeItem} value={item} className="close">
                  x
                </button>
              </label>
            </li>
          ))}
          {checkedItems.map((checkedItem) => (
            <li key={checkedItem}>
              <label className="container">
                <input
                  onChange={changeChecked}
                  type="checkbox"
                  checked="checked"
                  value={checkedItem}
                />
                <span className="checkmark"></span>
                <span
                  style={{ textDecorationLine: "line-through" }}
                  className="item"
                >
                  {checkedItem}
                </span>
                <button
                  value={checkedItem}
                  onClick={removeItem}
                  className="close"
                >
                  x
                </button>
              </label>
            </li>
          ))}
        </ul>

        <button onClick={clearAll} className="clear">
          <span className="clear-span"> Clear All</span>
        </button>
      </div>
    </div>
  );
}

export default App;
