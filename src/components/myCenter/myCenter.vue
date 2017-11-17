<template>
  <!-- 我的 开始 -->
  <div class="wrap">
    <ul class="m-avatar-list">
      <!--ms-if-->
      <li data-mtaid="mine.links.my_info">
        <a>
          <img alt="" src="../../common/image/img-wo-photo.png">
          <i></i>
        </a>

        <div>
          <h3>么么哒</h3>
          <sub>1012249</sub>
        </div>
      </li>
    </ul>

    <ul class="myCase flex">
      <li class="balance"><a>10</a><a>账号余额</a></li>
      <li class="coupon"><a>2</a><a>优惠券</a></li>
      <li class="card"><a>0</a><a>卡包</a></li>
    </ul>


    <ul class="list first-list">
      <li class="icon_interest"><a>我的关注</a></li>
      <li class="icon_comline"><a>公司线路</a></li>
      <li class="icon_order"><a>我的订单</a></li>
      <li class="icon_mytravel"></i><a>我的行程</a></li>
    </ul>

    <ul class="list">
      <li class="icon_invitation"><a>邀请有礼</a></li>
      <li class="icon_sale"><a>车票预售</a></li>
      <li class="icon_buscostom"><a>巴士定制</a></li>
      <li class="icon_community"><a>嘀一社区</a></li>
    </ul>

    <ul class="list">
      <li class="icon_install"><a>设置</a></li>
    </ul>

  </div>
  <!-- 我的 结束 -->
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="less" rel="stylesheet/less">
  ul,h1,h2,h3,a{
    padding: 0;
    margin: 0;
  }
  .border-b1px(@w:1px; @xx:solid; @c:969696){
    position: relative;
    &:after{
      display: block;
      position: absolute;
      left:0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid @c;
      content: ' ';
    }
  }

  .wrap {
    position: relative;
    padding-bottom: .9rem;
    ul{
      margin-bottom: .2rem;
      &::before{
        top: 0;
        bottom: 0;
      }
    }

    .m-avatar-list {
      background: #48c6af;
      margin-bottom: 0;
      li {
        position: relative;
        margin: 0 .3rem;
        padding: .3rem 0;
        color: #fff;
        overflow: hidden;
        a{
          position: relative;
          float: left;
          padding: .06rem;
          border-radius: 100%;
          background: rgba(255,255,255,.5);
          vertical-align: middle;
          i{
            position: absolute;
            right: 0;
            bottom: 0;
            display: block;
            width: .3rem;
            height: .3rem;
            background:url('../../common/image/icon-company.png') no-repeat;
            background-size: .3rem .3rem;
          }
        }
        img {
          display: block;
          width: 1.24rem;
          height: 1.24rem;
        }
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          width: .18rem;
          height: .33rem;
          margin-top: -.2rem;
          background: url('../../common/image/icon-nextb.png') 0 center no-repeat;
          background-size: .18rem .33rem;
        }
      }
      div {
        float: left;
        color: #fff;
        margin-top: .2rem;
        margin-left: .2rem;
      }
      h3 {
        display: block;
        font-size: .32rem;
        line-height: 1em;
        vertical-align: top;
      }
      sub {
        display: block;
        margin-top: .2rem;
        font-size: .28rem;
        line-height: 1em;
      }
    }

    .list {
      background: #fff;
      .border-b1px(@c:rgb(230,230,230));
      li {
        position: relative;
        height: 1.06rem;
        line-height: 1.06rem;
        margin-left: .3rem;
        padding: 0 0 0 .56rem;
        /*background-image: url('../../common/image/my-icon.png');
        background-position: 0 .3rem;
        background-repeat: no-repeat;
        background-size: .44rem 6rem;*/
        background-repeat: no-repeat;
        background-size: .54rem .54rem;
        background-position: left center;
        overflow: hidden;

        &.icon_interest{
          background-image: url("../../common/image/myCenter/icon_my_heart.png");
        }
        &.icon_comline {
          background-image: url("../../common/image/myCenter/icon_comany_line.png");
        }
        &.icon_order {
          background-image: url("../../common/image/myCenter/icon_myorder.png");
        }
        &.icon_mytravel {
          background-image: url("../../common/image/myCenter/icon_mytrip.png");
        }
        &.icon_invitation {
          background-image: url("../../common/image/myCenter/icon_mygift.png");
        }
        &.icon_sale {
          background-image: url("../../common/image/myCenter/icon_mytiket.png");
        }
        &.icon_buscostom {
          background-image: url("../../common/image/myCenter/icon_bus.png");
        }
        &.icon_community {
          background-image: url("../../common/image/myCenter/icon_my_community.png");
        }
        &.icon_install {
          background-image: url("../../common/image/myCenter/icon_install.png");
        }

        /*&.comline {
          background-position: 0 .24rem;
        }
        &.order {
          background-position: 0 -.5rem;
        }
        &.mytravel {
          background-position: 0  -1.16rem;
        }
        &.balance {
          background-position: 0 -1.8rem;
        }
        &.coupon {
          background-position: 0 -2.48rem;
        }
        &.card {
          background-position: 0 -3.1rem;
        }
        &.buscostom {
          background-position: 0 -3.72rem;
        }
        &.install {
          background-position: 0 -4.38rem;
        }*/

        a{
          font-size: .28rem;
          color: #323232;
          display: block;
          margin-left: .3rem;
          .border-b1px(@c:rgb(230,230,230));
          &:last-child{
            border: none;
          }
        }

        /*next_icon*/
        /*.icon {
          position: absolute;
          right: .3rem;
          top: 50%;
          width: .18rem;
          height: .33rem;
          margin-top: -.18rem;
          background: url('../../common/image/icon-next.png') 0 center no-repeat;
          background-size: .18rem .33rem;
        }
        .money{
          float: right;
          padding-right: .2rem;
          font-size: .26rem;
          color: #7c7c7c;
          line-height: .88rem;
        }*/

      }
    }

    .myCase{
      line-height: .88rem;
      display: inherit;
      padding: .3rem 0;
      background: #fff;
      li{
        /*是否允许子元素伸缩*/
        -webkit-flex: 1;        /* Chrome */
        -ms-flex: 1;            /* IE 10 */
        flex: 1;                /* NEW, Spec - Opera 12.1, Firefox 20+ */
        -webkit-box-flex: 1;    /* OLD - iOS 6-, Safari 3.1-6 */
        -moz-box-flex: 1;       /* OLD - Firefox 19- */

        text-align: center;
        /*.border-l1px(@c:rgb(230,230,230));*/
        border-left: 1px solid #e6e6e6;
        &:first-child{
          border-left: none;
        }
        a{
          display: block;
          line-height: 1;
          font-size: .26rem;
          color: #323232;
        }
        a:first-child{
          font-size: .36rem;
          color: #48c6af;
          margin-bottom: .14rem;
        }
      }
    }

    .flex{
      display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
      display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
      display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
      display: -moz-box;      /* 老版本语法: Firefox (buggy) */
      display: -ms-flexbox;   /* 混合版本语法: IE 10 */
    }
    .flex-1{
      /*是否允许子元素伸缩*/
      -webkit-flex: 1;        /* Chrome */
      -ms-flex: 1;            /* IE 10 */
      flex: 1;                /* NEW, Spec - Opera 12.1, Firefox 20+ */
      -webkit-box-flex: 1;    /* OLD - iOS 6-, Safari 3.1-6 */
      -moz-box-flex: 1;       /* OLD - Firefox 19- */
    }

  }




</style>
