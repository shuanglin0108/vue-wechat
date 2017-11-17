<template>

  <div class="device">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(index,items) in banners" :key="index"><!--<img v-bind:src="banners" />--></div>
        <!--<div class="swiper-slide" v-for="banner in banners"> <img src="http://images2015.cnblogs.com/blog/339959/201609/339959-20160930162623641-329168375.png"> </div>-->
      </div>
    </div>
    <div class="pagination"></div>
  </div>

</template>

<script>
  export default {
    name: 'device',
    props: {
      advertisement: {
        type: Object
      }
    },
    data () {
      return {
        banners: [],
        /*baseUrl: 'http://pics.d1-bus.com/upload/99490ae0-95ec-4110-bbe4-ffbf7668b9d7.jpg'*/
        /*baseUrl: []*/
      }
    },
    /*data: function () {
      return {
        dataUrl: ""
      }
    },*/
    mounted () {
//      console.log('挂载好了')
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.pagination',
        grabCursor: true,
        paginationClickable: true
      })
//      console.log(mySwiper)
    },
    created() {
      var url = "http://d1bustest.d1-bus.com/socialbus/api/home/";
      this.$http.get(url).then((response) => {
        response = response.body;
        this.banners = response.advertisement;
//        console.log(response.advertisement);


        /*var jons = JSON.stringify(response.advertisement);

        console.log(jons);

        this.dataUrl = eval("("+jons+")");*/

      })
    },
    method: {

    }

  }
</script>

<style>
  .device {
    width:100%;
    min-width: 320px;
    max-width: 640px;
    height: 110px;
    margin: 0 auto 10px;
    position: relative;
    background: #fff;
  }
  .swiper-container {
    height: 110px;
    width: 320px;
    min-width: 320px;
    max-width: 640px;
  }
  .swiper-container img{
    display: block;
    width:100%;
    min-width: 320px;
    max-width: 640px;
    height: 110px;
  }
  .content-slide {
    padding: 20px;
    color: #fff;
  }
  .title {
    font-size: 25px;
    margin-bottom: 10px;
  }
  .pagination {
    position: absolute;
    right: 10px;
    text-align: right;
    bottom:5px;
    width: 100%;
    min-width: 320px;
    max-width: 340px;
    z-index:2;
  }
  .swiper-pagination-switch {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: rgba(255,255,255,.6);
    margin: 0 3px;
    cursor: pointer;
  }
  .swiper-active-switch {
    background: #fff;
  }
</style>
