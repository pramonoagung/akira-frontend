// import axios from "axios";
// import Vuex from "vuex";
// import Cookies from "js-cookie";

// export const state = () => ({
//   auth: null,
//   credentials: {
//     username: "",
//     nama: ""
//   },
//   token: ""
// });

// export const mutations = {
//   // SET USER
//   setUser(state, user) {
//     state.user = user;
//   },
//   // SET TOKEN
//   setToken(state, token) {
//     state.token = token;
//   }
// };

// export const getters = {
//   loggedIn(state) {
//     return Boolean(state.user && state.token);
//   }
// };

// export const actions = {
//   async nuxtServerInit({ dispatch }, { req }) {
//     await dispatch("fetch");
//   },
//   // Update token
//   async updateToken({ commit }, token) {
//     // Update token in store's state
//     commit("setToken", token);
//     // Set Authorization token for all axios requests
//     this.$axios.setToken(token, "");
//     // Update cookies
//     if (process.browser) {
//       // ...Browser
//       if (token) {
//         Cookies.set("ccmsToken", token, { expires: 1 });
//       } else {
//         Cookies.remove("ccmsToken");
//       }
//     } else {
//       // ...Server
//       let params = {
//         domain: "/"
//       };
//       if (!token) {
//         let expires;
//         let date = new Date();
//         expires = date.setDate(date.getDate() + 1);
//         params.expires = new Date(expires);
//       }
//       this.$axios.defaults.headers.common["Authorization"] = token;
//       this.app.context.res.setHeader(
//         "Authorization",
//         Cookie.serialize("ccmsToken", token, params)
//       );
//       console.log("Axios: ", this.$axios.defaults.headers.common.Authorization);
//     }
//   },

//   // Fetch Token
//   async fetchToken({ dispatch }) {
//     let token;
//     // Try to extract token from cookies
//     if (!token) {
//       const cookieStr = process.browser
//         ? document.cookie
//         : this.app.context.req.headers.cookie;
//       const cookies = Cookie.parse(cookieStr || "") || {};
//       token = cookies["ccmsToken"];
//     }
//     if (token) {
//       await dispatch("updateToken", token);
//     }
//     if (process.browser) {
//       console.log("Browser token: ", token);
//     } else {
//       console.log("Server token: ", token);
//     }
//   },

//   // Reset
//   async reset({ dispatch, commit }) {
//     commit("setUser", null);
//     await dispatch("updateToken", null);
//   },

//   // Fetch
//   async fetch(
//     { getters, state, commit, dispatch },
//     username = "admin",
//     { endpoint = "https://climatecms-api.herokuapp.com/api/user" } = {}
//   ) {
//     // Fetch and update latest token
//     await dispatch("fetchToken");
//     // Skip if there is no token set
//     if (!state.token) {
//       return;
//     }

//     // Try to get user profile
//     try {
//       const data = await this.$axios.$get(endpoint + "?username=" + username);
//       commit("setUser", data);
//     } catch (e) {
//       // Reset store
//       await dispatch("reset");
//     }
//   },

//   // Login
//   async login(
//     { dispatch },
//     { fields, endpoint = "https://climatecms-api.herokuapp.com/api/login" } = {}
//   ) {
//     try {
//       // Send credentials to API
//       let data = await this.$axios.$post(endpoint, fields);
//       if (data.success) {
//         await dispatch("updateToken", data["token"]);
//         // Fetch authenticated user
//         await dispatch("fetch", data.user.username);
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         throw new Error("Bad credentials");
//       }
//       throw error;
//     }
//   },

//   // Logout
//   async logout({ dispatch, state }) {
//     try {
//       await dispatch("reset");
//     } catch (e) {
//       console.error("Error while logging out", e);
//     }
//   }
// };
