const state = {
    settings: '1'
}

const mutations = {
  SetSettings: (state, settings) => {
    state.settings = settings
    localStorage.setItem('SETTINGS', settings)
  }
}

const actions = {
  DispatchSetSettings({ commit }, settings) {
    commit('SetSettings', settings + '-dispatch')
  }
}

const getters = {
    settings: state => localStorage.getItem('SETTINGS') || state.settings
}
export default {
  state,
  mutations,
  actions,
  getters
}

