<template>
  <div class="v-footer">
    <div class="tab-item tab-buyTicket" to="/index">购票</div>
    <div class="tab-item tab-byCar" to="/map">乘车</div>
    <div class="tab-item tab-myCenter" to="/myCenter">我</div>
  </div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less">
  .v-footer{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    background: #ffffff;
    z-index: 999;
    .tab-item {
      flex: 1;
      text-align: center;
      color: #323232;
      &.tab-buyTicket{

      }
      &.tab-byCar{

      }
      &.tab-myCenter{

      }
      &.active{
        color: #48c6af;
        outline: none;
        -webkit-tap-highlight-color:rgba(255,0,0,0);
      }
    }

  }
</style>
