import axios from "axios";

export default {
  state: {
    admin: {},
    user: {},
    token: '',
  },
  mutations: {
    setAllUsers(state, data) {
      state.admin = data
    },
    setUserData(state, data) {
      state.user = data;
    },
    setToken(state, data) {
      localStorage.setItem('access_token', data)
    }
  },
  getters: {
    getUserData(state) {
      return state.user
    }
  },
  actions: {
    LOGIN_USER(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', data)
          .then(res => {
            if (res.status === 200 && data) {
              context.commit('setToken', res.data.access_token)
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    REGISTER_USER(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/users', data)
          .then((res) => {
            if (res.status === 200) {
              resolve(res.data);
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    EDIT_USER(context, data) {
      return new Promise((resolve, reject) => {
        axios.patch('/edit', data)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          })
      })
    },
    GET_USER(context){
      return new Promise((resolve, reject) => {
        axios.post('/auth/me')
          .then(res => {
            if(res.status === 200){
              context.commit('setUserData', res.data)
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    SHOW_USERS_LIST(context, users) {
      return new Promise((resolve, reject) => {
        axios.get('/users/user')
          .then(res =>  {
            if (res.status === 200) {
              users = res.data
            }
          })
          .catch(error =>{
            reject(error)
          })
      })
    },
    DESTROY_USER(context) {
      return new Promise((resolve, reject) => {
        axios.delete('/destroy')
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    VERIFY_USER(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/verify', data)
          .then((res) => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          })
      })
    }
  }
}
