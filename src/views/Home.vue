<template>
  <v-container>
    <v-layout justify-space-between align-space-between column fill-height>
      <!-- SECTION ONE -->
      <v-flex lg12>
        <v-layout row class="section">
          <v-flex lg6>
            <v-card flat style="padding-top:90px;">
              <v-card-title class="headline">
                <span>
                  <span class="black">Elevate</span> Your
                  <br />Practice
                  <span class="black">Effectively</span>
                </span>
              </v-card-title>

              <v-card-text class="text">
                Add revenue to your practice. Utilize one platform
                and our technology to take your practice to the next
                level. Simpatra has created marketing tools and packages
                that work for you while you care for your patients.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- SECTION TWO   -->
      <v-flex lg12>
        <v-layout row class="section">
          <v-flex lg5 style="padding-top: 120px;">
            <v-card flat>
              <v-card-title class="secondary-headline">
                The Power
                <br />of the Directory
              </v-card-title>

              <v-list-item three-item v-for="headline in headlinesOne" :key="headline.title">
                <v-list-item-content>
                  <v-list-item-title class="subline bold">{{ headline.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    style="padding-top:5px; padding-bottom:5px"
                  >eperio bea et volorio dolenitia verrum quodit et, qua</v-list-item-subtitle>
                  <v-list-item-subtitle>Lum is maxim aceribus. Duci tem quo blaturi volor alitati</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-flex>

          <v-flex lg7>
            <v-img src="../assets/Doctor.jpeg" width="1000" height="1000"></v-img>
          </v-flex>

          <!-- <v-flex xs12>
            <v-img src="../assets/Computer_Graphic.png" max-width="200" max-height="200"></v-img>
          </v-flex>-->
        </v-layout>
      </v-flex>

      <v-divider />
      <!-- SECTION THREE: PRODUCTS -->
      <v-flex lg9>
        <product-slider/>
      </v-flex>

      <!-- SECTION FOUR -->
      <v-layout row class="section" style="padding-top: 60px;">
        <v-flex lg6>
          <v-card flat>
            <v-card-title class="secondary-headline">Want to Drive Traffic to Your Practice?</v-card-title>

            <v-list-item three-item v-for="headline in headlinesTwo" :key="headline.title">
              <v-list-item-content>
                <v-list-item-title class="subline bold">{{ headline.title }}</v-list-item-title>
                <v-list-item-subtitle
                  style="padding-top:5px; padding-bottom:5px"
                >eperio bea et volorio dolenitia verrum quodit et, qua</v-list-item-subtitle>
                <v-list-item-subtitle>Lum is maxim aceribus. Duci tem quo blaturi volor alitati</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex lg6>
          <v-img src="../assets/DriveTraffic.png" max-width="450" max-height="450"></v-img>
        </v-flex>
      </v-layout>

      <!-- SECTION FIVE -->
      <v-layout
        column
        class="section center"
        align-center
        justify-center
        style="padding-top: 100px;"
      >
        <span class="headline">
          <span class="black">Powerful</span> Tools
          <br />that Work
          <span class="black">for You!</span>
        </span>
        <span class="bold">JOIN TODAY AT $499 MONTHLY</span>
        <v-flex style="padding-top: 30px;">
          <v-btn
            depressed
            large
            dark
            style="background-color: #871385; font-weight: 700;"
            min-height="57px"
            min-width="217px"
          >GET STARTED</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ProductSlider from "../components/ProductSlider.vue";

export default {
  name: "Home",
  data() {
    return {
      headlinesOne: [
        { title: "Traffice Source with Paid Advertising" },
        { title: "Your Profile: Tell Them Who You Are!" },
        { title: "Reach Out: Generate New Leads" }
      ],
      headlinesTwo: [
        { title: "Generate Traffic" },
        { title: "Utilize Our Bots!" },
        { title: "Audience Analytics" }
      ]
    };
  },
  
  components: { ProductSlider },

  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    ...mapState(["products"])
  }
};
</script>

<style>
.rotateOrange {
  z-index: 0;
}

.text,
.subline {
  line-height: 1.8 !important;
  font-size: 1.2rem !important;
}

.headline {
  font-size: 3.5rem !important;
  padding-bottom: 20px !important;
  line-height: 1.2 !important;
}

.secondary-headline {
  font-size: 3rem !important;
  line-height: 1.2 !important;
  padding-bottom: 20px !important;
}

.black {
  font-weight: 900 !important;
}

.bold {
  font-weight: 700 !important;
}

.section {
  min-height: 500px;
  padding-top: 50px;
  padding-left: 25px;
}

.center {
  text-align: center;
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

