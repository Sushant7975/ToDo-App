import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([
  {
    todoItems: [] /*: todoItems*/,
    addNewItem: () => {} /*: addNewItem*/,
    deleteItem: () => {} /*: deleteItem*/,
  },
]);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    /*const*/ newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
    // setTodoItems(newTodoItems);
  } else if (action.type === "DELETE_ITEM") {
    /*const deleteTodoItems*/ newTodoItems = /*todoItems*/ currTodoItems.filter(
      (item) => item.name !== /*todoItemName*/ action.payload.itemName
    );
    // setTodoItems(deleteTodoItems);
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems /*: todoItems*/,
        addNewItem /*: addNewItem*/,
        deleteItem /*: deleteItem*/,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
