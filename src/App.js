import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [inputText, setInputText] = useState("");
  const [objectItems, setObjectItems] = useState([]);
  const addTask = () => {
    const newObject = {
      id: objectItems.length + 1,
      objectName: inputText,
    };
    inputText !== "" && setObjectItems([...objectItems, newObject]);
    setInputText("");
  };
  const addTaskonEnter = (event) => {
    if (event.key === "Enter") {
      const newObject = {
        id: objectItems.length + 1,
        objectName: inputText,
      };
      inputText !== "" && setObjectItems([...objectItems, newObject]);
      setInputText("");
    }
  };
  const delTask = (itemToBeDel) => {
    const updatedArray = objectItems.filter((item) => {
      return itemToBeDel === item.id ? false : true;
    });
    setObjectItems(updatedArray);
  };

  const completedBtn = (completedId) => {
    setObjectItems(
      objectItems.map((object) => {
        if (completedId === object.id) {
          return { ...object, status: true };
        } else {
          return { ...object, status: false };
        }
      })
    );
  };

  return (
    <div className="body">
      <div className="mainHead">
        <h1>TODO List</h1>
        <input
          value={inputText}
          type="text"
          placeholder="Ex. Go to the gym"
          className="inputText"
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={addTaskonEnter}
        />
        <button onClick={addTask} className="addBtn">
          Add Task
        </button>
        <p>Note: Try to add a task with maximum of 10 to 15 words.</p>
      </div>
      <div className="listItems">
        {objectItems.map((item) => {
          return (
            <Task
              key={item.id}
              objectName={item.objectName}
              objectId={item.id}
              delTask={delTask}
              completedTask={completedBtn}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
