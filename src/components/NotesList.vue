<template>
  <div>
      <div class="list_header">
          <h2>NOTES</h2>
          <div class="node_list">
              <ul>
                  <li
                    @click="setActiveNote(note)"
                    v-for="note in filteredNotes">
                    <h4>{{note.text}}</h4>
                    </li>
              </ul>
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

</style>


