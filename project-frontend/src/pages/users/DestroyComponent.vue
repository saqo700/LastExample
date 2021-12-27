<template>
  <div>
    <h1>You Successfully Deleted Your Account</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$store.dispatch('DESTROY_USER')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
