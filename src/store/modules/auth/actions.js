import api from '@/utils/api';

export default {

  async checkUserName(context, payload) {
    const username = payload;
    console.log(payload);
    let response;
    try {
      response = await api.post('validate-username', { username });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },

  async signUp({ commit }, payload) {
    console.log(payload);
    try {
      const response = await api.post('signup', payload);
      // console.log('new user:', response);
      // console.log('data : ', response.data);
      // const { confirmation_token, email } = response.data.data;
      // localStorage.setItem('currentUserdetails', JSON.stringify({ token: confirmation_token, email }));
      commit('regNewUser', response.data.data);
      commit('setToken', response.data.data.confirmation_token);
      commit('setEmail', response.data.data.email);
      return response.data;
    } catch (error) {
      // console.log(error.response);
      return error.response;
    }
    // return Promise.resolve(response);
  },

  // async verifyEmail({ commit }, payload) {
  //   const token =
  // },

  async sendOtp({ commit, getters }, payload) {
    console.log(payload);
    try {
      const response = await api.post('auth/confirm-email', payload, {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log(response.data);
      console.log(response.data.status);
      commit('setToken', '');
      commit('setEmail', '');

      return response.data;
      // commit('oneTimePassword', payload);
    } catch (error) {
      // console.log(error.response);
      return error.response;
    }
  },

  async resendOtp({ getters }, payload) {
    console.log(payload);
    const response = await api.post('auth/resend-email-otp', payload, {
      headers: {
        authorization: `Bearer ${getters.userToken}`,
      },
    });
    console.log(response.data);
  },

  async loginUser({ commit }, payload) {
    console.log(payload);
    try {
      const response = await api.post('auth/login', payload);
      // console.log(response.data);
      // console.log(response.data.data.loginToken);
      // console.log(response.data.data.email);
      console.log(response);
      commit('setToken', response.data.data.loginToken);
      commit('setEmail', response.data.data.email);
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  },

  async callUserDetails({ commit, getters }) {
    console.log('herllo there');
    try {
      const response = await api.get('auth/user', {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log('test here');
      console.log(response.data.data);
      commit('loggedInUser', response.data.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },

  async forgotPassword({ getters }, payload) {
    console.log(payload);
    try {
      const response = await api.post('auth/forgot-password', payload, {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },

  async resetPassword(context, payload) {
    console.log(payload);
    try {
      const response = await api.post('auth/reset-password', { password: payload.password }, {
        headers: {
          authorization: `Bearer ${payload.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },

  async createPin({ getters }, payload) {
    console.log(payload);
    try {
      const response = await api.post('wallet/create-pin', payload, {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log(response.data);
      console.log(response.data.status);
      console.log(response);
      return response.data;
      // commit('oneTimePassword', payload);
    } catch (error) {
      // console.log(error.response);
      return error.response;
    }
  },
  async fundWallet({ commit, getters }, payload) {
    console.log(payload);
    try {
      const response = await api.post('wallet/deposit', payload, {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log(response);
      console.log(response.data);
      console.log(response.data.data.balance);
      commit('setNairaBalance', response.data.data.balance);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  // transfer
  // gettransactions

  async transactionHistory({ commit, getters }) {
    try {
      const response = await api.get('wallet/transaction-history?page=1&limit=6', {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log(response.data.data);
      commit('setTransactions', response.data.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },

  async checkRecipient({ getters }, payload) {
    // const recipientUsername = payload;
    console.log('this is us');
    try {
      const response = await api.post('wallet/validate-receiver', payload, {
        headers: {
          authorization: `Bearer ${getters.userToken}`,
        },
      });
      console.log(response);
      console.log('hello');
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};
