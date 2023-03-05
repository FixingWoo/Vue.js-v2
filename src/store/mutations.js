const addOneItem = (state, toDoItem) => {
  const obj = { completed: false, item: toDoItem };
  localStorage.setItem(toDoItem, JSON.stringify(obj));
  state.toDoItems.push(obj);
};
const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.toDoItem.item);
  state.toDoItems.splice(payload.index, 1);
};
const toggleOneItem = (state, payload) => {
  state.toDoItems[payload.index].completed =
    !state.toDoItems[payload.index].completed;
  localStorage.removeItem(payload.toDoItem.item);
  localStorage.setItem(payload.toDoItem.item, JSON.stringify(payload.toDoItem));
};
const clearItems = (state) => {
  localStorage.clear();
  state.toDoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearItems };
