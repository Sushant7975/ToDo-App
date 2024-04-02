import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = (/*todoItems*/) => {

  // const todoItems = useContext(TodoItemsContext);
  // const contextObj= useContext(TodoItemsContext)
  // const todoItems= contextObj.todoItems

  const {todoItems}= useContext(TodoItemsContext)

  return (
    todoItems.length === 0 && <p className= {styles.messageContainer} >Enjoy Your Day!</p>
  );
}

export default WelcomeMessage;