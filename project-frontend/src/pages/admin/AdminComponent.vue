<template>
  <div>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} EDIT
        </b-button>
      </template>
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.age }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
</template>
<script>


export default {
  data() {
    return {
      user: [],
      fields: ['first_name', 'last_name', 'show_details'],
      items: [
        { isActive: true, age: 40, first_name: 'this.user[0].name', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
      ],
    }
  },
  mounted() {
    this.show();
    this.log();
  },
  methods: {
    show() {
      this.$store.dispatch('SHOW_USERS_LIST', this.user)
      .then(res => {
        console.log(res);
      })
        .catch(error => {
        console.log(error);
      })
    },
    log() {
      console.log(this.user);
    }
  }
}
</script>

<style>

</style>
