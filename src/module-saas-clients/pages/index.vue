<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <el-table :data="dataList" border style="width: 100%">
          <el-table-column fixed type="index" label="序号" width="150"></el-table-column>
          <el-table-column fixed prop="name" label="企业名称" width="150"></el-table-column>
          <el-table-column fixed prop="version" label="版本" width="150"></el-table-column>
          <el-table-column fixed prop="companyphone" label="联系电话" width="150"></el-table-column>
          <el-table-column fixed prop="expirationDate" label="截止时间" width="150"></el-table-column>
          <el-table-column fixed prop="state" label="状态" width="150">
            <template slot-scope="scope">
            <el-switch
              v-model="scope.row.state"
              inactive-value="0"
              active-value="1"
              disabled
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="250">
            <template slot-scope="scope">
              <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
              <router-link :to="'/saas-clients/details/' + scope.row.id">查看</router-link>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
import { list } from '@/api/base/saasClient';
export default {
  name: 'saas-clients-index',
  data() {
    return {
      // dataList: []
      dataList: [],
    };
  },
  methods: {
    // 获取列表数据
    getList() {
      // list().then(res => {
      //     this.dataList = res.data.items
      //     console.log(this.dataList)
      // })
      list().then((res) => {
        this.dataList = res.data.data;
        // console.log(res.data)
      });
    },
  },
  // 创建完毕状态
  created() {
    this.getList();
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
