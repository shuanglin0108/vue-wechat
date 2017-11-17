<template>
  <div class="line-model common-mb">
    <div class="hot-line">
      <span class="flex-left-1" >推荐线路</span>
      <a @click="show" class="flex-right-1 hot-c" href="javascript:;">
        <!--<div>热门线路</div>-->
        <router-link to="/hotLine">热门线路</router-link>
      </a>
    </div>
    <div class="m-line"><!-- id="m-line"-->

      <!--<router-link></router-link>-->
      <section class="info" v-for="line in lines" @click="lineDetailShow" v-show="lineDetail">
        <div class="line"><div>{{line.BusLineName}}</div> <i v-if="line.LineType=='freey'"></i></div>
        <div v-if="line.LineType=='freey'" class="baidu_special">
          <div class="baidu_start">
            <span class="start_icon"><img src="../../common/image/icon_baidu_start.png" alt=""></span>
            <span>{{line.DepartTime}}</span>
          </div>
          <div class="baidu_end">
            <span class="end_icon"><img src="../../common/image/icon_baidu_end.png" alt=""></span>
            <span>{{line.ArrivalTime}}</span>
          </div>
          <i class="baidu_icon baidu_icon2"></i>
        </div><!--摆渡线-->
        <div class="line-detail">
          <div class="place start-station">
            <div class="start marquee-line"><time v-if="line.LineType=='line'" class="tic-time">{{line.DepartTime}}</time>{{line.StartStation}}<small v-if="line.StartStation === line.RideStation">始发</small><small v-else="line.StartStation !== line.RideStation">途径</small></div>
            <div class="end marquee-line"><time v-if="line.LineType=='line'" class="tic-time">{{line.ArrivalTime}}</time>{{line.EndStation}}</div>
          </div>
          <div class="subinfo">
            <div class="price" ms-visible="line.price"><span>{{line.DayTicketMoney}}元</span>{{line.DayTicketRealityMoney}}元</div>
          </div>
        </div>
      </section>

    </div>

   <!-- <hotline :hotLine="hotLines" ref="hotLine"></hotline>-->

  </div>
</template>

<script type="text/ecmascript-6">
//import line_model from './common/js/line_model.js';
//import lineModel from '../line_model';
//import hotline from '../hotLine/hotLine';
const ERR_OK = 0;

export default {
  props: {
    list: {
      type: Object
    }
  },
  data () {
    return {
      lines: [],
//      hotLines: {},
      showFlag: false,
      lineDetail: true
    }
  },
  computed: {

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
   /* hotLine(lines, event) {
      if (!event._constructed) {
        return;
      }
      this.hotLines = lines;
      this.$refs.lines.show();
l
      this.$nextTick(() => {
        this.$refs.lines.show();
      })
    }*/

    show() {
      this.showFlag = true;
    },
    lineDetailShow() {
      this.$router.push('/hotLine');
      alert(11);
    }
  },
  components: {
//    hotline
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import '../../../src/common/style/lineModel.css';*/
@import 'lineModel.css';


</style>
