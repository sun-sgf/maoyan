<template>
  <div class="home">
    <router-view></router-view>
    <footer>
      <div v-for="item,index in newArr" :class="{home_nav:true, current:isShow === index}" @click.stop="go(index)">
        <p><i :class="item.ico" aria-hidden="true"></i></p>
        <p>{{item.title}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return {
            isShow:0,
            newArr:[
              {title:"电影",ico:"fa fa-film",path:"/film"},
              {title:"影视",ico:"fa fa-picture-o",path:"/cinema"},
              {title:"我的",ico:"fa fa-user-o",path:"/mine"}
            ]
          }
        },
        methods:{
          go(index){
            console.log(index);
            this.isShow = index;
            this.$router.push(this.newArr[index].path);
          },
        }
    }
</script>

<style scoped>
  .home{
    width:100%;
    height: 100%;
  }
  footer{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding:4px 0;
    border-top: 0.5px solid #d8d8d8;
    background-color: #fff;
  }
  .home_nav{
    flex: 1;
    text-align: center;
  }
  .home_nav p{
    line-height: 25px;
  }
  .current{
    color: #f03d37;
  }
</style>
