<template>
  <div id="app">
    <note-control></note-control>
    <notes-list></notes-list>
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

#app {
  display: flex;
  flex-direction: row
}
</style>
