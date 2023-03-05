<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newToDoItem" v-on:keyup.enter="addToDo" />
    <span class="addContainer" v-on:click="addToDo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <p slot="body">적절한 값을 입력하세요.</p>
    </Modal>
  </div>
</template>
<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newToDoItem: "",
      showModal: false,
    };
  },
  methods: {
    addToDo() {
      if (this.newToDoItem !== "") {
        // this.$emit("addTodoItem", this.newToDoItem);
        const text = this.newToDoItem.trim();
        this.$store.commit("addOneItem", text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newToDoItem = "";
    },
  },
  components: {
    Modal,
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
.closeModalBtn {
  color: #42b983;
}
</style>
