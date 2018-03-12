<template>
    <el-row class="wrap-info">
      <el-col :sm="4" class="brand">
        <img :src="imgUrl" alt="logo">
      </el-col>
      <el-col :sm="12" tag='ul' class="title hidden-md-and-down">
        <li v-for="(title,index) in titleData" :key="index" :class="{active:title.active}" @click='beActive(index)'>
          <a href="javascript:" class="title-item">{{title.titleName}}</a>
        </li>
      </el-col>
      <el-col :sm="8" tag="ul" class="date-weather">
        <li>
          <i class="el-icon-date"></i>
        </li>
        <li>
          <span class="date">{{nowDate}}</span>
          <span>管理员</span>
        </li>
      </el-col>
    </el-row>
</template>
<script>
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
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
      ],
      nowDate: moment().format('LLLL')
    };
  },

  // components: {},
  // computed: {},
  
  mounted () {
    this.getNowDate();
  },

  destroyed () {
    clearInterval(this.timer);
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
    },
    getNowDate () {
      this.timer = setInterval(()=>{
        this.nowDate = moment().format('LLLL');
      },60000)
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
    .date-weather {
      display: flex;
      align-items: center;
      justify-content:flex-end;
      .el-icon-date{
        font-size: 18px;
         margin-right: 10px;
      }
    }
  }
</style>