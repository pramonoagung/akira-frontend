import Cookies from "js-cookie";

export const state = () => ({
  auth: true,
  credentials: {
    username: "",
    nama: ""
  },
  token: ""
});

export const mutations = {
  setUser(state, credentials) {
    state.credentials.username = credentials.user.username;
    state.credentials.nama = credentials.user.nama;
    state.token = credentials.token;
    Cookies.set(credentials.user.nama, credentials.token, { expires: 1 });
  },
  setAuthenticated(state, credentials) {
    if (state.token != null) {
      state.auth = true;
    }
  },
  logout() {
    console.log(12);
    //Cookies.remove(credential.nama);
  }
};

export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  },
  getToken(state) {
    return state.token;
  }
};
