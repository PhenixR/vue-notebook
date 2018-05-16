<template>
  <div class="control_bar">
      <i class="add_note fas fa-plus" @click="addNote"></i>
      <i class="toggle fas fa-star"></i>
      <i class="delete_note fas fa-trash" @click="deleteNote"></i>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
  methods:{
      ...mapActions([
          'addNote'
      ]),
      ...mapMutations([
          'deleteNote'
      ])
  }
}
</script>

<style>
.control_bar {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
}

i {
    margin: 20px 10px;
}
</style>


