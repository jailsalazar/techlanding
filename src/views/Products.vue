<template>
  <v-layout align-center justify-center column fill-height>
    <v-flex lg9>
      <!-- <vueper-slides arrows-outside> -->
      <!-- <vueper-slide v-for="product in products" :key="product.id"> -->
      <v-card v-for="product in products" :key="product.id">
        <v-layout row>
          <v-flex lg6>
            <v-img :src="product.images[0].url" max-width="400" max-height="400" aspect-ratio="2"></v-img>
          </v-flex>

          <v-flex lg6>
            <v-card-title class="bolded">{{ product.name }}</v-card-title>
            <br />
            <v-card-text class="small">{{ product.sku }} {{ product.manufacturer }}</v-card-text>
            <br />
            <v-card-text class="price">${{ product.price }}</v-card-text>

            <br />
            <v-card-title class="bolded">About the Product</v-card-title>
            <br />
            <v-card-text class="small">{{ product.description }}</v-card-text>
            <br />
            <v-btn @click="addToCart(product)">ADD TO CART</v-btn>
          </v-flex>
        </v-layout>
      </v-card>
      <!-- </vueper-slide> -->
      <!-- </vueper-slides> -->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Products",
  components: { VueperSlides, VueperSlide },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    addToCart(item) {
      item.quantity++;
      this.$store.dispatch("addToCart", item);
    }
  }
};
</script>

<style scoped>
.bolded {
  font-weight: 700;
  padding: 10px;
  font-size: 2rem;
}
.about {
  padding-top: 20px;
}
.small {
  font-size: 1rem;
  padding: 10px;
}
.price {
  font-size: 1rem;
  padding: 20px;
}
</style>
