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

</style>
