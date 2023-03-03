<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newToDoItem" v-on:keyup.enter="addToDo" />
    <span class="addContainer" v-on:click="addToDo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newToDoItem: "",
    };
  },
  methods: {
    addToDo: function () {
      if (this.newToDoItem !== "") {
        const obj = {
          completed: false,
          item: this.newToDoItem,
        };

        localStorage.setItem(this.newToDoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newToDoItem = "";
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
