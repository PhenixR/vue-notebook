import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote:{},
};
const mutations = {
    ADD_NOTE (state) {
        const newNote = {
          text: 'New note',
          favorite:false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
      },
    EDIT_NOTE(state,text) {
        state.activeNote.text = text;
    },
    setActiveNote(state, note) {
        state.activeNote = note
    },
    deleteNote(state) {
        if(state.notes.length > 0) {
            let index = state.notes.indexOf(state.activeNote)
            state.notes.splice(index,1)
            state.activeNote = state.notes[0]
        }
    },
    TOGGLE_FAVORITE(state) {
        if (state.activeNote) {
          state.activeNote.favorite = !state.activeNote.favorite
        }
      },
    
};
const actions = {
    editNote({ commit }, e) {
        commit('EDIT_NOTE', e.target.value)
    },
    addNote ({commit}) {
        commit('ADD_NOTE')
    },
    toggleFavorite({ commit }) {
        commit('TOGGLE_FAVORITE')
    }
}
const getters = {
    activeNoteText: state => {
        return state.activeNote.text
    },
    noteFavorite: state => {
        if (state.activeNote) {
          return state.activeNote.favorite
        }
    },
    selectedNote: state => {
        return state.activeNote
    }

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});