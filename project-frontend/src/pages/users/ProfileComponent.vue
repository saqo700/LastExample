<template>
  <div>
    <h1 class="text">PROFILE PAGE</h1>
    <hr>
    <div v-if="user" class="">
      <img class="img" src="../../../../user.png" alt="user.img">
      <span>{{user.name}} </span>
      <span>{{user.lastname}} </span>
      <b-btn variant="success"><a href="/update">EDIT</a></b-btn>
      <b-btn variant="success"><a href="/destroy">DELETE</a></b-btn>
      <b-btn variant="success"><a href="/users/user">DELETE</a></b-btn>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  data(){
    return {
      user : {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
      this.$store.dispatch('GET_USER')
        .then(res=> {
          if(res){
            console.log(res);
          }
        }).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.text{
  text-align: center;
}
.img {
  height: 250px;
  width: 250px;
}
</style>
