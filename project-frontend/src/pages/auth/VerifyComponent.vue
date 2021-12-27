<template>
  <div class=" verified">
    <div class="d-flex flex-column text-center ">
      <b>Congrats {{ details.email }} </b>
      <p>You are fully registered</p>
      <p class="">Welcome</p>
      <!--      <b-btn variant="success" v-on:click="showParams">Confirm</b-btn>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    details: {
      email: '',
      token: ''
    }
  }),
  mounted() {
    this.getTokenAndEmail();
    this.showParams();
  },
  methods: {
    getTokenAndEmail() {
      this.details.token = this.$route.query.token
      this.details.email = this.$route.query.email
    },
    showParams() {
      this.$store.dispatch('VERIFY_USER', this.details)
        .then(res => {
          if (res) {
            alert(res.message)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>

</style>
