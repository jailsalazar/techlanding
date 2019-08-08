<template>
  <div id="app">
    <v-toolbar light flat src="../src/assets/OrangeBar.jpg">
      <v-img src="../src/assets/Simpatra_Logo.png" max-width="150" max-height="100" style="margin-left: 50px;"></v-img>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/" color="#FFFFFF">
          Features
        </v-btn>
        <v-btn text to="/products" color="#FFFFFF">
          Products
        </v-btn>
        <v-btn icon to="/cart">
            <v-img src="../src/assets/CartIcon.png" max-width="20" max-height="20"></v-img>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');

html,
body {
  font-family: "Montserrat", sans-serif;
}
</style>

