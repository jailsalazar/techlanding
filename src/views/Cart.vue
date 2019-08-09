<template>
  <v-container>
    <div v-if="cart.length">
      <v-layout column>
        <v-flex lg12>
          <v-card flat>
            <v-card-title class="headline">Cart Details</v-card-title>
            <v-card-text>({{ totalItems }} items)</v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg12>
          <v-card flat v-for="(item, index) in cart" :key="index">
            <v-layout row>
              <v-flex lg2>
                <v-img
                  class="image"
                  contain
                  :src="item.images[0].url"
                  max-width="200"
                  max-height="200"
                ></v-img>
              </v-flex>

              <v-flex style="padding-top: 20px;" lg3>
                <v-card-text class="bolded">{{ item.sku }}</v-card-text>
                <v-card-title class="small">{{ item.name }}</v-card-title>
              </v-flex>

              <v-flex style="padding-top: 70px;" lg5>
                <v-layout row>
                  <v-flex lg1>
                    <v-btn class="plus-minus" @click="decrement(item)" depressed small>-</v-btn>
                  </v-flex>
                  <v-flex lg1>
                    <v-card-text class="quantity" v-model="item.quantity">{{ item.quantity }}</v-card-text>
                  </v-flex>
                  <v-flex lg1>
                    <v-btn class="plus-minus" @click="increment(item)" depressed small>+</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex lg2 style="padding-top: 70px;">
                <v-card-text class="price">${{ itemTotal(item) }}</v-card-text>
              </v-flex>
            </v-layout>
            <v-divider />
          </v-card>
        </v-flex>

        <v-flex lg12>
          <v-card flat>
            <v-card-text class="price">Total: ${{ total.toFixed(2) }}</v-card-text>
          </v-card>
        </v-flex>

        <v-flex style="padding-top: 30px; align-self: center;">
          <v-btn depressed large dark style="background-color: #ef6008; font-weight: 700;" min-height="57px" min-width="317px">CHECKOUT</v-btn>
        </v-flex>
      </v-layout>
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
    total: function() {
      let sum = 0;

      this.items.forEach(item => {
        sum = sum + item.price * item.quantity;
      });

      return sum;
    },
    totalItems: function() {
      let items = 0;
      this.items.forEach(item => {
        items = items + item.quantity;
      });

      return items;
    }
  },
  methods: {
    increment(item) {
      item.quantity++;
      this.$store.dispatch("addToCart", item);
    },
    decrement(item) {
      item.quantity--;
      this.$store.dispatch("addToCart", item);
    },
    itemTotal(item) {
      let total = item.quantity * item.price;
      return total.toFixed(2);
    }
  }
};
</script>

<style>
.price {
  font-size: 1.5rem;
  text-align: right;
}
.plus-minus {
  font-weight: 700;
}
.quantity {
  text-align: center;
  margin: 0;
  padding: 0;
  vertical-align: center;
}

.image {
  align-self: center;
  margin: 5px;
}
</style>

