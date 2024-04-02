import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

const TodoItems = (
  {
    /*todoItems,*/
    /*onDeleteClick*/
  }
) => {
  // const todoItemsFromContext = useContext(TodoItemsContext);
  // const todoItems = useContext(TodoItemsContext);
  // console.log(todoItemsFromContext)

  // const contextObj= useContext(TodoItemsContext)
  // const todoItems= contextObj.todoItems

  const { todoItems, /*deleteItem*/ } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          // onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
