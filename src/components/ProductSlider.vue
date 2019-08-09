<template>
  <v-layout align-center justify-center column fill-height>
    <v-flex lg9>
      <slider class="slider" :speed="0" :autoplay="false">
        <slider-item v-for="product in products" :key="product.id">
          <v-card flat>
            <v-layout row>
              <v-flex lg5 height="500">
                <v-img
                  class="image"
                  contain
                  :src="product.images[0].url"
                  max-width="500"
                  max-height="500"
                ></v-img>
              </v-flex>

              <v-flex style="padding-top: 35px;" lg5>
                <v-card-text class="bolded">{{ product.sku }}</v-card-text>
                <v-card-title class="bolded orange">{{ product.name }}</v-card-title>
                <v-card-text class="small">{{ product.sku }} {{ product.manufacturer }}</v-card-text>
                <v-card-text class="bolded">${{ product.price.toFixed(2) }}</v-card-text>
                <v-card-text class="bolded">About the Product</v-card-text>
                <v-card-text class="small" style="padding-bottom: 15px;">{{ product.description }}</v-card-text>
                <v-btn style="background-color: #ef6008; font-weight: 700; margin-left: 15px;" depressed large dark @click="addToCart(product)">ADD TO CART</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </slider-item>
      </slider>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "ProductSlider",
  components: { Slider, SliderItem },
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

<style scoped>
.bolded {
  font-weight: 700;
  padding: 10px;
  font-size: 1.5rem;
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
  font-weight: 700;
}

.slider {
  width: auto;
  height: 600px !important;
  margin: 50px !important;
}
.image {
  align-self: center;
  vertical-align: center;
  margin: 45px;
}

.orange {
  color: #ef6008;
}
</style>
