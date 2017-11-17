<template>
  <div>
    <v-banner></v-banner>

    <div class="m-sitebar">
      <div class="panel">
        <div class="site_replace" data-mtaid="buy.exchange_btn"></div>
        <div class="on_site">
          <span class="left_icon"></span>
          <div v-on:click="mapShow" id="on_site" class="hair_bottom" data-m="<span>从哪儿出发</span>">
            启明国际大厦
          </div>
        </div>
        <div class="off_site hair_bottom">
          <span class="left_icon"></span>
          <div id="off_site">
            <span>你要去哪儿</span>
          </div>
        </div>
        <div v-on:click="" class="btn-search-bus">查询巴士</div>
      </div>
    </div>

    <line-model></line-model>

  </div>
</template>

<script type="text/ecmascript-6">
  import banner from '../../components/banner/banner'
  import LineModel from '../../components/lineModel/lineModel'

  export default {
    methods: {
      mapShow:function(e){
        //alert(1);
      }
    },
    components: {
      'v-banner': banner,
      LineModel
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-sitebar{
    display: inline-block;
    width: 100%;
    background: #fff;
    .panel{
      position: relative;
      margin: 0 .30rem;
      .on_site,.off_site{
        position: relative;
        width: auto;
        font-size: .28rem;
        color: #323232;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .on_site .left_icon,.off_site .left_icon{
        position: absolute;
        top: 0;
        left: 0;
        width: .14rem;
        height: 100%;
        margin-right: .10rem;
        border-radius: 100%;
        vertical-align: middle;
        background-size: .14rem .14rem;
        background-position: center center;
        background-repeat: no-repeat;
      }
      .on_site .left_icon{
        background-image: url("../../common/image/icon_index_start.png");
      }
      .off_site .left_icon{
        background-image: url("../../common/image/icon_index_end.png");
      }
      .on_site div,.off_site div{
        width: auto;
        height: .88rem;
        line-height: .88rem;
        margin-right: .75rem;
        padding-left: .3rem;
        padding-right: .15rem;
        color: #323232;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
       }
      .on_site div span,.off_site div span{
        color: #c8c8c8;
      }
      .site_replace{
        position: absolute;
        top: .64rem;
        right: 0;
        width: .48rem;
        height: .48rem;
        border-bottom: none;
        background: url("../../common/image/icon_index_change.png") no-repeat;
        background-size: .48rem .48rem;
        background-position: right center;
      }
      .btn-search-bus{
        width:100%;
        height: .72rem;
        line-height: .72rem;
        margin: 10px auto;
        border-radius: .06rem;
        color: #fff;
        font-size: .32rem;
        text-align: center;
        font-weight: normal;
        background:#48c6af;
        cursor: pointer;
      }
    }
  }

  .hair_bottom{
    border-bottom: 1px solid #e6e6e6;
  }


  /*top_ads*/
  .root_notice {
    position: relative;
    padding: 0 30px;
    border-bottom: 1px solid #ece8c0;
    background-color: #fffbcc;
    zoom: 1;
    font-size: 12px;
  }
  .root_notice_text_wrap {
    position: relative;
    height: 28px;
    overflow: hidden;
    zoom: 1;
  }
  .root_notice_text {
    color: #ff8050;
    text-align: center;
    line-height: 28px;
  }
  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    zoom: 1;
  }
  .absolute_full {
    overflow: hidden;
    zoom: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .text_link {
    color: #5e696e;
    cursor: pointer;
    text-decoration: underline;
  }
  .root_notice_close {
    top: 5px;
    right: 3px;
    padding: 6px;
    cursor: pointer;
  }
  .ico_wrap {
    position: absolute;
    line-height: 0;
    font-size: 0;
    white-space: nowrap;
    border: 0;
  }
  .ico {
    font-weight: normal;
    line-height: normal;
    overflow: hidden;
    line-height: 0;
    font-size: 0;
    text-align: center;
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
  }
  .ico_misc_close_big {
    background-position: -352px 0;
    height: 10px;
    width: 10px;
    background: #1abc9c;
  }
</style>
