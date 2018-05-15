import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote:{}
};
const mutations = {
    ADD_NOTE (state) {
        const newNote = {
          text: 'New note',
        }
        state.notes.push(newNote)
        state.activeNote = newNote
      },
    EDIT_NOTE(state,text) {
        state.activeNote.text = text;
    },
    setActiveNote(state, note) {
        state.activeNote = note
      }
};
const actions = {
    editNote({ commit }, e) {
        commit('EDIT_NOTE', e.target.value)
    },
    addNote ({commit}) {
        commit('ADD_NOTE')
    }
}
const getters = {
    activeNoteText: state => {return state.activeNote.text}
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});