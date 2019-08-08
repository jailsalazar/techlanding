<template>
  <div id="app">
    <v-toolbar light flat src="../src/assets/OrangeBar.jpg">
      <v-img src="../src/assets/Simpatra_Logo.png" max-width="100" max-height="50"></v-img>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <router-link to="/">Features</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/">Pricing</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/cart">
            Your Cart
            <v-img src="../src/assets/CartIcon.png" max-width="15" max-height="15"></v-img>
          </router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <v-img src="../src/assets/OrangeBar.jpg"></v-img> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

html,
body {
  font-family: "Montserrat", sans-serif;
}

.bold {
  font-weight: 700;
}

.headline {
  font-weight: 300;
}
</style>

