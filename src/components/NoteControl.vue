<template>
  <div class="control_bar">
      <i class="add_note fas fa-plus" @click="addNote"></i>
      <i class="toggle fas fa-star"></i>
      <i class="delete_note fas fa-trash"></i>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
  methods:mapActions([
      'addNote'
  ])
}
</script>

<style>
.control_bar {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}

i {
    margin: 20px 10px;
}
</style>


