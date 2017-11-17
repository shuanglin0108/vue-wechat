<template>
  <div class="loading">
    <img src="./../../common/image/loading.gif" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'loading',
    data () {
      return {}
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  .loading{
    position: fixed;
    top:0;
    left:0;
    z-index:121;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .loading img{
    margin:5rem auto;
  }
</style>
