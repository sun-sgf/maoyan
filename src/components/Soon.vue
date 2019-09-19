<template>
  <div class="soon">
    <div class="soon_box">
      <ul class="soon_slider" ref="ul">
        <li v-for="item,index in 5" @click="goDetail()">
          <div>{{item}}</div>
        </li>
        <!--<li @click="getMore()" class="last">-->
          <!--<div>加载更多</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
    export default {
        name: "Soon",
        methods:{
          initUl(){
            let w = this.$refs.ul.children[0].offsetWidth;
            let l = this.$refs.ul.children.length;
            this.$refs.ul.style.width = (w * l) + 'px';
          },
          goDetail(){
            console.log("111");
          },
          // getMore(){
          //   setTimeout(function () {
          //     console.log("aaa");
          //   },2000)
          // }
        },
        mounted(){
          let self = this;
          this.initUl();
        //  使用better-scroll
          // 1、想要滑动谁，要去找他的父元素   2、想要滑动谁，其必须是position：absolute
          let scroll = new BetterScroll('.soon_box',{scrollX:true, scrollY:false, click:true});
          scroll.on('scrollEnd', function (res) {
            // console.log(res);
            let left = Math.abs(res.x);
            let cw = document.documentElement.clientWidth;
            let mw = parseInt(self.$refs.ul.style.width);
            if (left + cw >=mw){
              console.log("aa");
            }
          })
        },
    }
</script>

<style scoped>
  .soon{
    width: 100%;
    height: 100%;
    padding: 96px 0 50px 0;
  }
  .soon_box{
    width: calc(100vw);
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .soon_slider{
    position: absolute;
  }
  .soon_slider li{
    width: 180px;
    height: 200px;
    display: inline-block;
    padding:0 15px;
  }
  .soon_slider .last{
    width: 100px;

  }
  .soon_slider li div{
    height: 200px;
    line-height: 200px;
    text-align: center;
    background-color: red;
  }
</style>
