<template>
    <div>
        <!-- Page container -->
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">

                    <div class="panel panel-flat">
                        <div class="panel-heading">
                            <h5 class="panel-title">Daftar Pelanggan</h5>
                        </div>
                        
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Username</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (user, index) in users" :key="user.id">
                                    <td>{{index+1}}</td>
                                    <td>{{user.nama}}</td>
                                    <td>{{user.username}}</td>
                                    <td class="text-center">
                                        <ul class="icons-list">
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                    <i class="icon-menu9"></i>
                                                </a>

                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <nuxt-link :to="'/laporan/pelanggan/'+user.id+'/edit'">
                                                            <i class="icon-pencil"></i> Edit User
                                                        </nuxt-link>
                                                    </li>
                                                    <li @click="onDelete(user.username)">
                                                        <a style="color:red">
                                                            <i class="icon-trash"></i> <b>Hapus</b>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "dashboard",
  async asyncData() {
    const { data } = await axios.get(
      process.env.myapi + "/graphql?query={users{id,nama,username}}"
    );
    return { users: data.data.users };
  },
  methods: {
    async onDelete(username) {
      if (confirm("Apakah anda yakin ?")) {
        await axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation+a{Deactivate(username:"' +
              username +
              '"){nama}}'
          )
          .then(res => (window.location = "/laporan/pelanggan"))
          .catch(err => console.log(err));
      } else {
      }
    }
  }
};
</script>