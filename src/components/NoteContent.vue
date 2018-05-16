<template>
  <div class="note_content">
      <textarea :value="activeNoteText" class="text_inpute" @input="editNote">
      </textarea>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'
export default {
  computed:{ 
    ...mapGetters ([
      'activeNoteText'
    ]),
    ...mapState([
      'notes'
    ])
  },
  methods: {
    ...mapActions([
      'editNote'
    ])
  },
}
</script>

<style>
.note_content {
  width: 100%;
  height: 100%;
}

.text_inpute {
  resize: none;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  border-bottom: none;
  border-top: none;
  border-left-width: 2px;
  outline: none;
}
</style>

