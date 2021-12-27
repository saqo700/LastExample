<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="mt-3" cols="8">
          <h3 class="text-center">EDIT YOUR DETAILS</h3>
          <ValidationObserver ref="register_observer">
            <b-form @submit.prevent="editUser">
              <ValidationProvider name="name" v-slot="{ valid, errors }">
                <b-form-group>
                  <b-form-input
                    class="mt-3"
                    type="text"
                    v-model="form.name"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter Name"
                  ></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider name="lastname" v-slot="{ valid, errors }">
                <b-form-group>
                  <b-form-input
                    class="mt-3"
                    type="text"
                    v-model="form.lastname"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter LastName"
                  ></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider name="Email" v-slot="{ valid, errors }">
                <b-form-group>
                  <b-form-input
                    class="mt-3"
                    type="email"
                    v-model="form.email"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter email"
                  ></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider name="password" v-slot="{ valid, errors }">
                <b-form-group>
                  <b-form-input
                    class="mt-3"
                    type="password"
                    v-model="form.password"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter password"
                  ></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
              <b-button class="float-right" type="submit" variant="primary">EDIT</b-button>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>

import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  name: "BootstrapForm",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    form: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    }
  }),
  methods: {
    async editUser() {

      let valid = await this.$refs.register_observer.validate();
      if (!valid) return false;

      this.$store
        .dispatch('EDIT_USER', this.form)
        .then(res => {

          this.$router.push({name: "Profile"});
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>

</style>
