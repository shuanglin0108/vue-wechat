<template>
  <div class="app-header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      title: '嘀一巴士'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header{
  height: .88rem;
  line-height: .88rem;
  color: #fff;
  font-size: .36rem;
  text-align: center;
  background: #48c6af;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.app-header h1{
  font-size: .36rem;
}
</style>
