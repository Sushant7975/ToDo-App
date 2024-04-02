
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../Store/todo-items-store";

const TodoItem = ({ todoName, todoDate /*, onDeleteClick*/ }) => {

  // deleteItem= useContext(TodoItemsContext);
  const {deleteItem} = useContext(TodoItemsContext);


  return (
    <div className="container">
    <div className="row sk-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger sk-btn" onClick={() => deleteItem(todoName)}>
        <AiFillDelete />
        </button>
      </div>
    </div>
  </div>
  );
}

export default TodoItem;