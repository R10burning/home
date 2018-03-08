<template>
  <el-container>
    <el-header>
      <header-component/>
    </el-header>
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import headerComponent from './header';
export default {
  data () {
    return {
      listData:'dasdds',
      red:'red'
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
</style>