import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
// import { /*useState,*/ useReducer } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
// import { TodoItemsContext } from "./Store/todo-items-store";
import TodoItemsContextProvider from "./Store/todo-items-store";

// const todoItemsReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;
//   if (action.type === "NEW_ITEM") {
//     /*const*/ newTodoItems = [
//       ...currTodoItems,
//       { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
//     ];
//     // setTodoItems(newTodoItems);
//   } else if (action.type === "DELETE_ITEM") {
//     /*const deleteTodoItems*/ newTodoItems = /*todoItems*/ currTodoItems.filter(
//       (item) => item.name !== /*todoItemName*/ action.payload.itemName
//     );
//     // setTodoItems(deleteTodoItems);
//   }
//   return newTodoItems;
// };

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go To College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like This Video",
  //     dueDate: "27/02/2024",
  //   },
  // ];

  // const [todoItems, setTodoItems] = useState([]);

  // const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // const /*handleNewItem*/ addNewItem = (itemName, itemDueDate) => {
  //     // console.log(`New item added: ${itemName} Date: ${itemDueDate}`);

  //     const newItemAction = {
  //       type: "NEW_ITEM",
  //       payload: {
  //         itemName,
  //         itemDueDate,
  //       },
  //     };
  //     dispatchTodoItems(newItemAction);

  //     /*const newTodoItems = [
  //       ...todoItems,
  //       { name: itemName, dueDate: itemDueDate },
  //     ];
  //     setTodoItems(newTodoItems);*/
  //   };

  // const /*handleDeleteItem*/ deleteItem = (todoItemName) => {
  //     // const deleteTodoItems = todoItems.filter(
  //     //   (item) => item.name !== todoItemName
  //     // );
  //     // setTodoItems(deleteTodoItems);
      
  //     const deleteItemAction = {
  //       type: "DELETE_ITEM",
  //       payload: {
  //         itemName: todoItemName,
  //       },
  //     };
  //     dispatchTodoItems(deleteItemAction);
      
  //     // console.log(`Item deleted: ${todoItemName}`);
  //   };

 
  // const defaultTodoItems = [{ name: "Buy Ghee", dueDate:"Today" }]

  return (
    // <TodoItemsContext.Provider
    //   value={{
    //     todoItems /*: todoItems*/,
    //     addNewItem /*: addNewItem*/,
    //     deleteItem /*: deleteItem*/,
    //   }}
    // >
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo /*onNewItem={handleNewItem}*/ />
        {<WelcomeMessage /*todoItems={todoItems}*/ />}
        <TodoItems /*todoItems={todoItems}*/ /*onDeleteClick={handleDeleteItem}*/
        />
      </center>
      </TodoItemsContextProvider>
  );
}

export default App;
