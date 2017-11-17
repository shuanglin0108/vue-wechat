<template>
  <transition name="move">
    <div v-show="showHotline" ref="hotWrapper" class="hot-wrapper">
      <div class="m-line"><!-- id="m-line"-->

        <section class="info" v-for="line in lines" to="/goods">
          <div class="line"><div>{{line.BusLineName}}</div> <i v-if="line.LineType=='freey'"></i></div>
          <div class="line-detail">
            <div class="place start-station">
              <div class="start marquee-line"><time class="tic-time">{{line.DepartTime}}</time>{{line.StartStation}}</div>
              <div class="end marquee-line"><time class="tic-time">{{line.ArrivalTime}}</time>{{line.EndStation}}</div>
            </div>
            <div class="subinfo">
              <div class="price" ms-visible="line.price"><span>{{line.DayTicketMoney}}元</span>{{line.DayTicketRealityMoney}}元</div>
            </div>
          </div>
        </section>

      </div>
    </div>

  </transition>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;

  export default {
    props: {
      list: {
        type: Object
      }
    },
    data() {
      return {
        showHotline: false,
        lines: []
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

    },
    methods: {
      /*hotLine(lines, event) {
        if (!event._constructed) {
          return;
        }
        this.hotLines = lines;
        this.$refs.lines.show();
      },*/
      show() {
        this.showHotline = true;
      },
      hide() {
        this.showHotline = false;
      }
    },
    components: {

    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  @import '../../common/less/lineModel.css';
.hot-wrapper{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 45px;
  background: #fff;
  width: 100%;
  z-index: 6666;
  &.move-enter-active,&.move-leave-active{
    transition: all .2s linear;
    transform: translate3d(0,0,0);
  }
  &.move-enter,&.move-leave-active{
    transform: translate3d(100%,0,0);
  }
}
</style>
