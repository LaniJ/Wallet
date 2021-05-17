import api from '@/utils/api';

export default {
  async fundWallet({ getters }, payload) {
    console.log(payload);
    try {
      const response = await api.post('wallet/deposit', payload, {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log(response);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  // transfer
  // gettransactions

  // async transactionHistory({ commit, getters }) {
  //   try {
  //     const response = await api.get('wallet/transaction-history?page=1&limit=5', {
  //       headers: {
  //         authorization: `Bearer ${getters.userToken}`,
  //       },
  //     });
  //     console.log(response.data);
  //     // commit('loggedInUser', response.data.data);
  //     return response.data;
  //   } catch (error) {
  //     console.log(error.response);
  //     return error.response;
  //   }
  // },
};
