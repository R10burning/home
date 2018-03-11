<template>
    <el-row class="wrap-info">
      <el-col :sm="4" class="brand">
        <img :src="imgUrl" alt="logo">
      </el-col>
      <el-col :sm="16" tag='ul' class="title">
        <li v-for="(title,index) in titleData" :key="index" :class="{active:title.active}" @click='beActive(index)'>
          <a href="javascript:" class="title-item">{{title.titleName}}</a>
        </li>
      </el-col>
      <el-col :sm="4"><div></div></el-col>
    </el-row>
</template>
<script>
export default {
  data () {
    return {
      imgUrl:require('../assets/images/logo.png'),
      titleData:[
        {
          titleName:'首页',
          active:true
        },
        {
          titleName:'新闻中心',
          active:false
        },
        {
          titleName:'通知公告',
          active:false
        },
        {
          titleName:'服务大厅',
          active:false
        },
        {
          titleName:'视屏中心',
          active:false
        },
        {
          titleName:'个人中心',
          active:false
        }
      ]
    };
  },

  // components: {},
  // computed: {},
  
  mounted () {
  },

  methods: {
    beActive (index) {
      this.titleData.map((item,i)=>{
        if (i === index){
          item.active = true;
        } else {
          item.active = false;
        }
      })
    }
  }
}

</script>
<style lang='less' scoped>
  @import '../utils/mixin.less';
  .wrap-info{
    height: 100%;
    .el-col{
      &.brand{
        line-height:50px;
        img{
          vertical-align: middle;
        }
      }
      &.title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        li {
          display: flex;
          align-items: center;
          &.active{
            .title-item{
              .border-bottom-some-px(2px,solid)
            }
          }
          height: 100%;
          .title-item{
            line-height: 50px;
            display: inline-block;
            height: 80%;
            margin:0 20px;
        } 
        }
      }
      height:100%;
      & > div{
        height:100%;
      }
    }
  }
</style>