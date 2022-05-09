<script>
import { store } from '../src/store/message'
export default {
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    store.dispatch('getMessages').then((response) => {
      this.messages = response;
      console.log('tut', this.messages)
    })

  }
}

</script>

<template>
  <div class="container">
    <div class="chat__messages" v-for="item in messages">
      <div class="chat__message">
        <div class="chat__message-time">{{item.nickName}}</div>
        <div class="chat__message-content">{{item.message}}</div>
      </div>
    </div>
  </div>
</template>

<style>
.chat__header {
  text-align: center;
}

.chat__item {
  display: flex;
  align-items: flex-start;
}

.chat__person-avatar {
  border-radius: 50%;
}

.chat__messages {
  margin-left: 10px;
}

.chat__message {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.chat__message-content {
  border-radius: 5px;
  padding: 7px;
  background-color: #ccc;
  display: inline-block;

  margin-left: 5px;
}

.chat__item--responder {
  flex-direction: row-reverse;
}

.chat__item--responder .chat__message {
  flex-direction: row-reverse;
}

.chat__item--responder .chat__message-content {
  margin-left: 0;
  margin-right: 5px;
}
</style>
