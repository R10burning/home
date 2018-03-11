<template>
  <el-container>
    <el-header id="header">
      <header-component/>
    </el-header>
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import headerComponent from './header.vue';
export default {
  data () {
    return {
      listData:'dasdds',
      red:'red',
    };
  },
  components: {
    headerComponent,
  },

  // computed: {},

  // mounted: {},

  // methods: {
  // }
}

</script>
<style lang='less' scoped>
  #header {
    height:50px !important;
    padding:0 40px;
    background-color: #fff;
  }
</style>