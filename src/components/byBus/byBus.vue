<template>

  <div class="login-item">
    <!--<nav>
        <button class="back spec-back" onclick="window.history.go(-1)"></button>
        <span>输入密码</span>
    </nav>-->

    <div class="bybus_default">
      <img src="../../common/image/bycar_default.png" alt=""/>
      <p>登录后进行购票和乘车</p>
    </div>

    <div class="btn-busCou">
      <router-link class="btn rgba-btn next-btn m-btn" to="/login"><span>登录</span></router-link>
    </div>

    <router-view :login="login"></router-view>

  </div><!-- 登录 -->

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        login: {}
      }
    },
    created() {
      var url = "http://d1bustest.d1-bus.com/socialbus/api/home/";
      this.$http.get(url).then((response) => {
        //方法
        response = response.body;
        this.lines = response.list;
//      console.log(response.list);

      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .bybus_default{
    display: block;
    margin: 2rem auto .5rem;
  }
  .bybus_default img{
    display: block;
    width: 66%;
    margin: 0 auto .3rem;
  }
  .bybus_default p{
    font-size: .28rem;
    color: #969696;
    text-align: center;
  }


  .btn-busCou{
    /* display: -webkit-box;*/
    padding: 0 .3rem;
    margin-top: .3rem;
  }

  .btn-busCou .btn {
    -webkit-box-flex: 1;
    box-flex: 1;
    /*width: 50%;*/
    height: .88rem;
    line-height: .88rem;
    color: #3ac9af;
    border-radius: .1rem;
    text-align: center;
    box-sizing: border-box;
    display: block;
    border: 1px solid #3ac9af;
    overflow: hidden;
    background: #fff;
  }
  .btn-busCou span{
    display: block;
    color: #48c6af;
    font-size: .32rem;
  }
  .btn-busCou .m-btn span{
    color: #fff;
    background: #48c6af;
  }
</style>
