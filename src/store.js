import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use (Vuex);

export default new Vuex.Store ({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    setProducts (state, products) {
      state.products = products;
    },
    setCart (state, item) {
      if (!state.cart.some (cartItem => cartItem.id === item.id)) {
        item.quantity++;
        state.cart.push (item);
      } else {
        state.cart.map (cartItem => {
          if (cartItem.id === item.id) {
            cartItem.quantity++;
          }
        });
      }
    },
    add (state, item) {
      state.cart.map (cartItem => {
        if (cartItem.id === item.id) {
          cartItem.quantity++;
        }
      });
    },
    subtract (state, item) {
      state.cart.map (cartItem => {
        if (cartItem.id === item.id) {
          cartItem.quantity--;
          if(cartItem.quantity === 0) {
            state.cart = state.cart.filter(product => {
              return product.id != item.id;
            });
          }
          }
        });
    }
  },
  actions: {
    getProducts({commit}) {
      axios
        .get ('https://my-json-server.typicode.com/simpatra/mockapi/products')
        .then (response => response.data)
        .then (products => {
          products.map (item => (item.quantity = 0));
          commit ('setProducts', products);
        });
    },
    addToCart ({commit}, item) {
      commit ('setCart', item);
    },
    decrement ({commit}, item) {
      commit ('subtract', item);
    },
    increment ({commit}, item) {
      commit ('add', item);
    },
  },
});
