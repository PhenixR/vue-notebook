<template>
  <div>
      <div class="list_header">
          <h2>NOTES</h2>
          <button 
            class="all_notes" 
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            全部笔记
            </button>
          <button 
            class="favorites_notes" 
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}"></button>
      </div>
      <div class="node_list">
          <ul>
              <li
                v-for="note in filteredNotes"
                :class="{active: activeNote == note}"
                @click="showActiveNote(note)"
                >
                <h4>{{note.text.trim().substring(0,20)}}</h4>
                </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>


