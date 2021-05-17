export default {
  userToken: (state) => state.loggedUserToken,
  userEmail: (state) => state.loggedUserEmail,
  getCurrentUser: (state) => state.currentUser,
  transactions: (state) => state.userTransactions,
  userNairaBalance: (state) => state.nairaBalance,
};
