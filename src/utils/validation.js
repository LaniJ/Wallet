import Vue from 'vue';
import {
  ValidationProvider, ValidationObserver, extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

import store from '@/store';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('username_check', {
  message: () => 'Username already exists',
  validate: async (value) => {
    const chosenUsername = await store.dispatch('auth/checkUserName', value);
    return chosenUsername.message === 'Username available';
  },
});
