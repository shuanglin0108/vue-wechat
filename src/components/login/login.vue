<template>

  <div>
    <div class="login_member">
      <ul class="m-list">
        <li class="code-mes">
        </li>
        <li class="mes-login hairlines-bottom">
          <label>账号</label>
          <input id="user-name" class="list-line-input" type="text" placeholder="请输入手机号/用户名" maxlength="11" style="color: rgb(200, 200, 200);">
          <i class="list-input-close"></i>
        </li>
      </ul>

      <div class="btn-busCou">
        <span class="btn rgba-btn next-btn"><span>下一步</span></span>
        <!--<router-view class="btn rgba-btn next-btn"><span>下一步</span></router-view>-->
      </div>
    </div><!-- login_member -->


  </div>


</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" rel="stylesheet/less">
  /*body{
    background: #fff;
  }*/
  .m-list>li {
    position: relative;
    margin: 0 .3rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .26rem;
    overflow: hidden;
  }
  /*登录*/
  .mes-login label{
    font-size: .34rem;
    color: #646464;
    margin-right: .1rem;
  }
  .m-list>li .list-line-input {
    -webkit-box-flex: 1;
    box-flex: 1;
    box-sizing: border-box;
    width: 100%;
    margin-right: -10em;
    height: .9rem;
    border: none;
    overflow: hidden;
    text-overflow: ellipsis;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    font-size: .28rem;
    background: transparent;
  }
  .m-list>li .list-input-close {
    display: none;
    position: absolute;
    top: 0;
    right: .3rem;
    width: .24rem;
    height: 100%;
    background: url('../../common/image/clearBtn.png') center center no-repeat;
    background-size: .24rem .24rem;
  }

  .m-list>li p{
    font-size: .20rem;
    color: #969696;
    margin-top: -.1rem;
  }

  .btn-busCou .btn{
    border: none;
  }
  .btn-busCou .rgba-btn{
    background: rgba(72,198,175,0.5);
    color: #fff;
  }
  .btn-busCou .rgba-btn span{
    color: #fff;
  }
  .user-agree{
    display: block;
    font-size: .24rem;
    color: #969696;
    padding:.2rem  .3rem;
  }
  .user-agree a{
    color: #48c6af;
    font-style: normal;
  }

  .login-me{
    margin-top: 3.2rem;
  }

  .login-me > span{
    display: block;
    padding: 0 .3rem;
    text-align: center;
    font-size: .28rem;
    color: #969696;
    overflow: hidden;
  }
  .login-me > span:before,.login-me > span::after{
    content: '';
    display: inline-block;
    font-size: 1rem;
    border-top: 1px solid #48c6af;
    width: 1.8rem;
    vertical-align: middle;
  }
  .login-me > span:before{
    margin-right: .2rem;
  }
  .login-me > span::after{
    margin-left: .2rem;
  }

  .login-method{
    box-sizing: border-box;
    display: -webkit-box;
    display: box;
    padding: .5rem 0;
    width: 50%;
    text-align: center;
    margin: 0 auto;
  }
  .login-method>a {
    -webkit-box-flex: 1;
    box-flex: 1;
    position: relative;
    display: block;
    height: 1rem;
    line-height: 1;
    font-size: .24rem;
    color: #949494;
    cursor:pointer;
  }
  .login-method>a::before {
    content: '';
    position: absolute;
    left: 50%;
    margin-top: -.03rem;
    width: 1rem;
    height: 1rem;
    background-size: 1rem 1rem;
    background-repeat: no-repeat;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .login-method>a.login-weixin::before{
    background-image: url('../../common/image/icon-weixin.png');
  }
  .login-method>a.login-qq::before{
    background-image: url('../../common/image/icon-qq.png');
  }


  /* 错误提示 */
  .m-list li.code-mes{
    text-align: center;
  }
  .m-list li.code-mes span{
    display: inline-block;
    height: .6rem;
    line-height: .6rem;
    padding: 0 .2rem;
    margin: .2rem auto;
    border-radius: .1rem;
    text-align: center;
    color: #fff;
    background: #000;
  }

  .mes-login span{
    color: #c8c8c8;
  }

  .disable{
    background: transparent;
  }
</style>
