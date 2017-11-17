<template>
  <div id="app">

    <v-header></v-header>

    <div class="v-footer">
      <router-link class="tab-item tab-buyTicket" to="/home" :router="true" :class="{'isActive': active}">购票</router-link>
      <router-link class="tab-item tab-byCar" to="/byBus" :class="{'isActive': !active}">乘车</router-link><!--login-->
      <router-link class="tab-item tab-myCenter" to="/myCenter" :class="{'isActive': !active}">我</router-link>
    </div>

    <router-view class="router-view" :tabCon="tabCon" ref="homeWrapper">
    </router-view>

    <!--<loading v-show="fetchLoading"></loading>-->

  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import BScroll from 'better-scroll';
/*import { mapGetters } from 'vuex';*/
import header from './components/header/header';
import Loading from './components/loading/loading';
//import $ from 'jquery';

//import Lib from './common/js/Lib.js'
const ERR_OK = 0;

export default {
  data() {
    return {
      active:true,
      tabCon: {}
    };
  },
   /*created() {
     var url = "http://d1bustest.d1-bus.com/socialbus/api/home/";
     this.$http.get(url).then(function (data) {
       console.log(data.body);
       var hot_line = data.body.list;
       for (var i=0; i<hot_line.length; i++){
         var hot_i = hot_line[i];
         console.log(hot_i);

         var hot_wrap = '<section class="info">'+
           '<line class="line">'+ hot_i.BusLineName +'</line>'+
           '<div class="line-detail">'+
             '<div class="place start-station">'+
               '<div class="start marquee-line"><time class="tic-time">'+hot_i.DepartTime+'</time>'+hot_i.StartStation+'</div>'+
               '<div class="end marquee-line"><time class="tic-time">'+hot_i.ArrivalTime+'</time>'+hot_i.EndStation+'</div>'+
             '</div>'+
             '<div class="subinfo">'+
               '<div class="price" ms-visible="line.price"><span>'+hot_i.DayTicketMoney+'元</span>'+hot_i.DayTicketRealityMoney+'元</div>'+
             '</div>'+
           '</div>'+
           '</section>';

         $('#m-line').append(hot_wrap);

       }
     },function (response) {
       console.info(response);
     })
   },*/
  created() {
    this.$http.get('http://d1bustest.d1-bus.com/socialbus/api/home/').then((response) => {
      response = response.body;
      this.tabCon = response.data;
      if(response.errno === ERR_OK){
        this.goods = response.data;
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      }
    });
    this.$router.push('/home');
  },
  mounted: function() {
// https://api.douban.com/v2/movie/top250?count=10
    /*this.$http.jsonp('http://d1bustest.d1-bus.com/socialbus/api/home/', {}, {
      headers: {
      },
      emulateJSON: true
    }).then((response) => {
      // 这里是处理正确的回调
      this.articles = response.data.subjects
      console.log(this.articles = response.data.subjects)
    }).catch(function(response) {
      // 这里是处理错误的回调
      console.log(response)
    });*/
   /* ...mapGetters([
      'fetchLoading',
    ])*/
  },
  methods: {
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.homeWrapper, {
        click: true
      });

      this.foodsScroll.on('scroll',(pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    }
  },
  components: {
    'v-header': header,
    /*'v-index': index,*/
    /*'v-footer': footer*/
    Loading
  },
  watch: {
    '$route': function (to,from) {
      if(to.path == '/home'){
        this.active = true ;
      }else if(to.path == '/byBus'){
        this.active = false ;
      }else if(to.path == '/myCenter'){
        this.active = false ;
      }
    }
  }

}
</script>

<style lang="less" rel="stylesheet/less">

  body{
    padding: 44px 0;
   /* overflow: hidden;*/
  }
  a,button,input,textarea{
    -webkit-tap-highlight-color:rgba(255,0,0,0);
  }
  .container{
    margin: 0 auto!important;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
  }

/*
  .router-view{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 54px;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    overflow: hidden;
  }
*/

  /* footer 组件 */
  .v-footer{
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    height: .88rem;
    font-size: .20rem;
    background: #ffffff;
    z-index: 999;
    border-top: 1px solid #e6e6e6;
    .tab-item {
      flex: 1;
      text-align: center;
      color: #323232;
      text-decoration: none;
      &.active{
        color: #48c6af;
      }
      &::before{
        display: block;
        content: '';
        width: .48rem;
        height: .48rem;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 auto;
      }
      &.tab-buyTicket::before{
        background-image: url("./common/image/myCenter/icon_tab_ticket_default.png");

      }
      &.tab-byCar::before{
        background-image: url("./common/image/myCenter/icon_nav_bycar_default.png");
      }
      &.tab-myCenter::before{
        background-image: url("./common/image/myCenter/icon_tab_my_default.png");
      }


    }

  }
  .container{
    margin: 0 auto!important;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
  }


  /* footer 组件 */
  .v-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    height: .88rem;
    font-size: .20rem;
    background: #ffffff;
    z-index: 999;
    border-top: 1px solid #e6e6e6;
    .tab-item {
      flex: 1;
      text-align: center;
      color: #323232;
      text-decoration: none;
      &::before{
        display: block;
        content: '';
        width: .48rem;
        height: .48rem;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 auto;
      }
      &.tab-buyTicket::before{
        background-image: url("./common/image/myCenter/icon_tab_ticket_default.png");

      }
      &.tab-byCar::before{
        background-image: url("./common/image/myCenter/icon_nav_bycar_default.png");
      }
      &.tab-myCenter::before{
        background-image: url("./common/image/myCenter/icon_tab_my_default.png");
      }

      &.router-link-active{
        color: #48c6af;
      }

      &.tab-buyTicket.router-link-active::before{
        background-image: url("./common/image/myCenter/icon_tab_ticket_pre.png");
      }
      &.tab-byCar.router-link-active::before{
        background-image: url("./common/image/myCenter/icon_nav_bycar_pre.png");
      }
      &.tab-myCenter.router-link-active::before{
        background-image: url("./common/image/myCenter/icon_tab_my_pre.png");
      }

    }

  }
</style>
