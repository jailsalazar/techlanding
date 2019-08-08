<template>
  <v-container>
    <div v-if="cart.length">
      <v-card flat>
        <v-card-title class="headline">Cart Details</v-card-title>
        <v-card-text>({{ totalItems }} items)</v-card-text>
      </v-card>

      <v-card flat v-for="(item, index) in cart" :key="index">
        <v-layout row>
          <v-flex lg2>
            <v-img :src="item.images[0].url" max-width="200" max-height="200"></v-img>
          </v-flex>

          <v-flex lg8>
            <v-card-title class="bolded">{{ item.name }}</v-card-title>
            <v-card-text class="small">{{ item.sku }} {{ item.manufacturer }}</v-card-text>
            <v-card-text class="price">${{ item.price }}</v-card-text>
          </v-flex>
        </v-layout>
        <v-divider/>
      </v-card>

      <v-card flat>
        <v-card-title>Total</v-card-title>
        <v-card-text>${{ total }}</v-card-text>
      </v-card>
    </div>
    <div v-else>
      <v-card flat>
        <v-card-title class="headline">Your Cart is Empty</v-card-title>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      items: this.$store.state.cart
    };
  },
  computed: {
    ...mapState(["cart"]),
    total: function () {
      let sum = 0;

      this.items.forEach(item => {
        sum = sum + (item.price * item.quantity);
      });

      return sum;
    },
    totalItems: function () {
      let items = 0;
      this.items.forEach(item => {
        items = items + item.quantity;
      });

      return items;
    }
  }
};
</script>

<style>
  .price {
    font-size: 1.5rem;
  }
</style>

