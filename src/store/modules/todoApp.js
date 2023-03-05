const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

const state = {
  toDoItems: storage.fetch(),
};

const getters = {
  storedToDoItems(state) {
    return state.toDoItems;
  },
};

const mutations = {
  addOneItem(state, toDoItem) {
    const obj = { completed: false, item: toDoItem };
    localStorage.setItem(toDoItem, JSON.stringify(obj));
    state.toDoItems.push(obj);
  },
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.toDoItem.item);
    state.toDoItems.splice(payload.index, 1);
  },
  toggleOneItem(state, payload) {
    state.toDoItems[payload.index].completed =
      !state.toDoItems[payload.index].completed;
    localStorage.removeItem(payload.toDoItem.item);
    localStorage.setItem(
      payload.toDoItem.item,
      JSON.stringify(payload.toDoItem)
    );
  },
  clearItems(state) {
    localStorage.clear();
    state.toDoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
