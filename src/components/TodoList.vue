<template>
  <div>
    <ul>
      <li
        v-for="(toDoItem, index) in toDoItems"
        v-bind:key="toDoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: toDoItem.completed }"
          v-on:click="toggleComplete(toDoItem, index)"
        ></i>
        <span v-bind:class="{ textCompleted: toDoItem.completed }">{{
          toDoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo(toDoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      toDoItems: [],
    };
  },
  beforeCreate() {},
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.toDoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    removeTodo: function (toDoItem, index) {
      localStorage.removeItem(toDoItem);
      this.toDoItems.splice(index, 1);
    },
    toggleComplete: function (toDoItem) {
      toDoItem.completed = !toDoItem.completed;
      localStorage.removeItem(toDoItem.item);
      localStorage.setItem(toDoItem.item, JSON.stringify(toDoItem));
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
