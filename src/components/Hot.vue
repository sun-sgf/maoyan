<template>
  <div class="hot" @scroll="getMore">
    <div class="hot_item" v-for="item,index in filmArr">
      {{item.nm}}
    </div>
    <div class="btom">{{word}}</div>
  </div>
</template>

<script>
  export default {
    name: "Hot",
    data(){
      return {
        word: '加载更多',
        flag: 0,
        filmArr:[],
        movieIdsArr:[],
        page:1,
      }
    },
    mounted(){
      let self = this;
      //第一种滚动获取数据方法
      // window.addEventListener('scroll', function (ev) {
      //   let scrollTop = document.documentElement.scrollTop;//滚动距离
      //   let clientHeight = document.documentElement.clientHeight;//屏幕高度
      //   let scrollHeight = document.documentElement.scrollHeight;//文档高度（滚动条高度）
      //
      //   //判断滑动到底的时候
      //   if (scrollTop + clientHeight + 20 >= scrollHeight){
      //     if (self.flag) return;
      //     self.flag = 1;
      //     self.word = "正在加载中..."
      //     self.getMore();
      //   }
      // })
      //第二种方法
      self.hsInit();
    },
    methods:{
      async getMore(){
        //第一种滚动获取数据方法
        // let self = this;
        // setTimeout(function () {
        //   console.log('aaa');
        //   self.flag = 0;
        //   self.word = "加载更多";
        //   if (data.length < self.rows){
        //     self.word = "暂无更多数据";
        //     self.flag = 1;
        //   }
        // },3000)
        //第二种方法
        // console.log(event);
        let self = this;
        let scrollTop = event.target.scrollTop;
        let clientHeight = event.target.clientHeight;
        let scrollHeight = event.target.scrollHeight;
        if (scrollTop + clientHeight + 20 >= scrollHeight){
          if (self.flag) return;
          self.flag = 1;
          self.word = "正在加载中..."
          let str = this.movieIdsArr.slice(self.page*10+2,self.page*10+12).join(",");
          if (str.length < 12){
            self.word = "暂无更多数据";
            self.flag = 1;
            return
          }
          self.hsInit(str);
          self.page++;
        }
      },
      async hsInit(str){
        if(!str){
          let data = await this.$http.get("/my/ajax/movieOnInfoList?token=");
          this.filmArr = this.filmArr.concat(data.data.movieList);
          this.movieIdsArr = this.movieIdsArr.concat(data.data.movieIds);
          console.log(data.data.movieList);
          console.log(data);
          this.flag = 0;
          return;
        }
        let data = await this.$http.get("/my/ajax/moreComingList?token=&movieIds="+str);
        this.filmArr = this.filmArr.concat(data.data.coming);
        this.flag = 0;
      }
    }
  }
</script>

<style scoped>
  .hot{
    width: calc(100vw);
    height:   calc(100vh);
    padding: 96px 0 50px 0;
    overflow: auto;
  }
  .hot_item{
    height: 100px;
    margin: 8px;
    background-color: #e54847;
    color: #ffffff;
    font-size: 18px;
  }
  .btom{
    padding: 15px;
    line-height: 30px;
    text-align: center;
  }
</style>
