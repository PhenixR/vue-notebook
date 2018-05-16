<template>
  <div id="app">
    <div class="left_control">
      <note-control></note-control>
      <notes-list></notes-list>
    </div>
    <note-content></note-content>
  </div>
</template>

<script>
import NoteControl from './components/NoteControl'
import NotesList from './components/NotesList'
import NoteContent from './components/NoteContent'
export default {
  name: 'App',
  components: {
    NoteControl,
    NotesList,
    NoteContent
  }
}
</script>

<style>
@import 'https://use.fontawesome.com/releases/v5.0.9/css/all.css';

* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: row;
  height: 500px;;
}
.left_control {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items:center;
}
</style>
