<template>
  <div class="noteslist">
      <div class="list_header">
          <h2>NOTES</h2>
          <div class="show_button">
            <button class="show_all" @click="show='all'" :class="{active: show === 'all'}">All Note</button>
            <button class="show_fav" @click="show='favorite'" :class="{active: show === 'favorite'}" >Favourite</button>
          </div>
          <div class="note_list">
            <a
              @click="setActiveNote(note)"
              v-for="note in filteredNotes"
              >
              <h4 :class="{select: selectedNote === note}">{{note.text.substring(0,20)}}</h4>
            </a>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  data() {
    return {
      show: 'all'
    }
  },
  computed:{ 
    ...mapState([
    'notes'
    ]),
    ...mapGetters([
      'selectedNote'
    ]),
    filteredNotes () {
      if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favorite') {
          return this.notes.filter(note => note.favorite)
        }
    },
  },
  methods:{
    ...mapMutations([
      'setActiveNote'
    ])
  }
}
</script>

<style scoped>

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
  cursor: pointer;
}
.note_list {
  height: 360px;
	overflow: auto;
  width: 100%;
  padding: 0;
}
.active {
  color:rgb(201, 154, 1);
}
.select {
  color: rgb(226, 107, 107);
}

</style>


