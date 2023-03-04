<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
      v-bind:propsdata="toDoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearItems="clearItems"></TodoFooter>
  </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data: function () {
    return {
      toDoItems: [],
    };
  },
  methods: {
    addOneItem: function (toDoItem) {
      const obj = {
        completed: false,
        item: toDoItem,
      };

      localStorage.setItem(toDoItem, JSON.stringify(obj));
      this.toDoItems.push(obj);
    },
    removeOneItem: function (toDoItem, index) {
      localStorage.removeItem(toDoItem.item);
      this.toDoItems.splice(index, 1);
    },
    toggleOneItem: function (toDoItem, index) {
      this.toDoItems[index].completed = !this.toDoItems[index].completed;
      localStorage.removeItem(toDoItem.item);
      localStorage.setItem(toDoItem.item, JSON.stringify(toDoItem));
    },
    clearItems: function () {
      localStorage.clear();
      this.toDoItems = [];
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.toDoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>
<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px, 10px, 5px, rgba(0, 0, 0, 0.03);
}
</style>
