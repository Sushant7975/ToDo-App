import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

function AddTodo(/*{ onNewItem }*/) {

  const { addNewItem }= useContext(TodoItemsContext)
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement= useRef();
  const dueDateElement= useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   // noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   // console.log(`noOfUpdates are: ${noOfUpdates.current}`)
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName= todoNameElement.current.value;
    const dueDate= dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    // setTodoName(""); 
    // setDueDate("");
  };

  return (
    <div className={styles.addtodoContainer}>
      <form className="row sk-row" onSubmit={handleAddButtonClicked}>
       
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
              // value={todoName}
              // onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              className={styles.dateWidth}
              // value={dueDate}
              type="date"
              ref={dueDateElement}
              // onChange={handleDateChange}
            />
          </div>
          <div className="col-2">
            <button
              // onSubmit={handleAddButtonClicked}
              className="btn btn-success sk-btn"
            
            >
              <BiMessageAdd />
            </button>
          </div>
        </form>
      </div>
   
  );
}

export default AddTodo;
