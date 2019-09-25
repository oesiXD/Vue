<template>

  <v-layout
    align-center
    justify-center
  >
    <v-flex
      xs12
      sm10
      md8
      lg6
      xl4
    >

      <v-stepper
        v-model="e6"
        vertical
      >
        <v-stepper-step
          :complete="e6 > 1"
          step="1"
        >
          Select an app
          <small>Summarize if needed</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card
            color="grey lighten-1"
            class="mb-12"
          >

            <v-img
              aspect-ratio="1.779"
              contain
              src="https://image.tmdb.org/t/p/original/i7RqnkzQ5jUs5peKtZQpM024372.jpg"
            > </v-img>
          </v-card>
          <v-btn
            color="primary"
            @click="e6 = 2"
          >Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="e6 > 2"
          step="2"
        >Configure analytics for this app</v-stepper-step>

        <v-stepper-content step="2">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 3"
          >Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="e6 > 3"
          step="3"
        >Select an ad format and name ad unit</v-stepper-step>

        <v-stepper-content step="3">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 4"
          >Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="4">View setup instructions</v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper>

    </v-flex>

  </v-layout>

</template>

<script>


import { mapState } from 'vuex'

export default {
  data() {
    return {
      e6: 1,
    }
  },
  computed: {
    ...mapState('sesion',['usuario'])
 },

    
 
}
</script>