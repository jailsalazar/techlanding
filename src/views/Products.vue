<template>
  <v-layout align-center justify-center column fill-height>
    <v-flex lg9>
      <v-card flat v-for="product in products" :key="product.id">
        <v-layout row style="padding:50px;">
          <v-flex lg5 height="500">
            <v-img
              class="image"
              contain
              :src="product.images[0].url"
              max-width="400"
              max-height="400"
            ></v-img>
          </v-flex>

          <v-flex style="padding-top: 20px; padding-bottom: 15px;" lg5>
            <v-card-text class="bold">{{ product.sku }}</v-card-text>
            <v-card-title class="bold orange">{{ product.name }}</v-card-title>
            <v-card-text class="small">{{ product.sku }} {{ product.manufacturer }}</v-card-text>
            <v-card-text class="bold">${{ product.price.toFixed(2) }}</v-card-text>
            <v-card-text class="bold">About the Product</v-card-text>
            <v-card-text class="small" style="padding-bottom: 25px;">{{ product.description }}</v-card-text>
            <v-btn
              style="background-color: #ef6008; font-weight: 700; margin-left: 15px;"
              depressed
              large
              dark
              @click="addToCart(product)"
            >ADD TO CART</v-btn>
          </v-flex>
        </v-layout>
        <v-divider />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Products",
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    }
  }
};
</script>
