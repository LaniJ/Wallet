export default {
  regNewUser: (state, payload) => { state.users.push(payload); },

  loggedInUser: (state, payload) => { state.currentUser = payload; },

  // oneTimePassword: (state, payload) => { state.otp = payload; },

  // checkCurrentUsername: (state, payload) => { state.currentUser = payload; },

  setToken: (state, payload) => { state.loggedUserToken = payload; },
  setEmail: (state, payload) => { state.loggedUserEmail = payload; },

  setTransactions: (state, payload) => { state.userTransactions = payload; },
  setNairaBalance: (state, payload) => { state.nairaBalance = payload; },
};
