<template>
  <div class="film">
    <div class="b">
      <Header title="猫眼电影"></Header>
      <div class="film_slider">
        <span class="film_slider_1">青岛</span>
        <span :class="{film_slider_2:true,on: tabIndex == 0}" @click="switchSwiper(0)">正在热映</span>
        <span :class="{film_slider_3:true,on: tabIndex == 1}" @click="switchSwiper(1)">即将上映</span>
        <span class="film_slider_4" @click="p()"><i class="fa fa-search" aria-hidden="true"></i></span>
      </div>
    </div>
    <div class="film_swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper swiper-no-swiping">
          <div class="swiper-slide"><Hot></Hot></div>
          <div class="swiper-slide"><Soon></Soon></div>
        </div>
      </div>
    </div>
    <footer>
      <div v-for="item,index in newArr" :class="{film_nav:true, current:isShow === index}" @click.stop="go(index)" :key="index">
        <p><i :class="item.ico" aria-hidden="true"></i></p>
        <p>{{item.title}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
    import Header from "../components/Header";
    import Hot from "../components/Hot"
    import Soon from "../components/Soon"
    export default {
        name: "Film",
      components:{Header, Hot, Soon},
      data(){
        return {
          title:"猫眼电影",
          isShow:0,
          tabIndex:0,
          mySwiper:"",
          newArr:[
            {title:"电影",ico:"fa fa-film",path:"/film"},
            {title:"影视",ico:"fa fa-picture-o",path:"/cinema"},
            {title:"我的",ico:"fa fa-user-o",path:"/mine"}
          ]
        }
      },
      mounted(){
        this.mySwiper = new Swiper('.swiper-container', {
          // autoplay: true,
        })
      },
      methods:{
        p(){
          this.$router.push("/detail");
        },
        go(index){
          // console.log(index);
          this.isShow = index;
          this.$router.push(this.newArr[index].path);
        },
        switchSwiper(index){
          this.tabIndex = index;
          this.mySwiper.slideTo(index, 1000, false);
        }
      }
    }
</script>

<style scoped>
  .film{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .b{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  /*.film_title{*/
  /*line-height: 50px;*/
  /*background-color: #e54847;*/
  /*color: #ffffff;*/
  /*font-size: 20px;*/
  /*text-align: center;*/
  /*}*/
  .film_swiper{
    width: 100%;
    height: auto;
  }
  .film_slider{
    display: flex;
    line-height: 44px;
    padding: 0 20px;
    background-color: gainsboro;
  }
  .film_slider_1{
    text-align: left;
  }
  .film_slider_4{
    text-align: right;
    color: #e54847;
    font-size: 22px;
  }
  .film_slider_1,.film_slider_4{
    width: 50px;
  }
  .film_slider_2,.film_slider_3{
    flex: 1;
    text-align: center;
  }
  .film_slider_2.on,.film_slider_3.on{
    color: #f03d37;
    border-bottom: 2px solid #f03d37;
  }
  footer{
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: calc(100vw);
    padding: 4px 0;
    border-top: .5px solid #d8d8d8;
    background-color: #fff;
  }
  .film_nav{
    flex: 1;
    text-align: center;
  }
  .film_nav p{
    font-size: 16px;
    line-height: 25px;
  }
  .current{
    color: #f03d37;
    cursor: pointer;
  }


</style>
