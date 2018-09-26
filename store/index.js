import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";
import createPersistedState from "vuex-persistedstate";

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      authenticateUser(vuexContext, authData) {
        return axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation+Authenticate{Authenticate(input: {username:"' +
              authData.username +
              '",password:"' +
              authData.password +
              '"}) {token,user {id, username, nama, organizations{nama,scopes}}}}'
          )
          .then(res => {
            vuexContext.commit("setToken", res.data.data.Authenticate.token);
            localStorage.setItem("token", res.data.data.Authenticate.token);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + 3600
            );
            Cookie.set("jwt", res.data.data.Authenticate.token);
            Cookie.set("expirationDate", new Date().getTime() + 3600);
          })
          .catch(e => alert("Username atau Password Salah!"));
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("No token or invalid token");
          vuexContext.dispatch("logout");
          return;
        }
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },
    getters: {
      isAuthenticated(state) {
        //return state.token != null;
        return true;
      }
    }
  });
};

export default createStore;
