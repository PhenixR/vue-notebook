<template>
  <div class="noteslist">
      <div class="list_header">
          <h2>NOTES</h2>
          <div class="note_list">
                  <a
                    @click="setActiveNote(note)"
                    v-for="note in filteredNotes">
                    <h4>{{note.text.substring(0,20)}}</h4>
                  </a>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed:{ 
    ...mapState([
    'notes'
    ]),
    filteredNotes () {
        return this.notes
    }
  },
  methods:{
    ...mapMutations([
      'setActiveNote'
    ])
  }
}
</script>

<style>
h2 {
  padding-left: 6px;
}
.noteslist {
  width: 100%;
  display:flex;
  justify-content: center;
}
.note_list h4 {
  padding: 10px 10px;
}
.note_list {
  height: 360px;
	overflow: auto;
  width: 100%;
  padding: 0;
}
</style>


