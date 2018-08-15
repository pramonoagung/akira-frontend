import axios from "axios";
import Cookies from "js-cookie";

export const state = () => ({
  produkList: ""
});

export const actions = {
  async fetch() {
    const { data } = await axios.get(
      process.env.myapi + "/graphql?query={produk{id,nama,waktu,harga}}"
    );
    console.log(data.data.produk);
  }
};

export const mutations = {
  addProduk(state, produk) {
    state.produkList.push(produk);
  }
};

export const getters = {
  getProduk(state) {
    return state.produkList;
  }
};
