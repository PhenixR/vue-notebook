<template>
  <div>
      <textarea :value="activeNoteText" class="note_content" @input="editNote">
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

</style>

