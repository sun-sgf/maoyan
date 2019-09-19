<template>
  <div class="header">
    <span class="header_span" @click="back" v-if="flag"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
    <div :class="{ header_title: true,on: flag}">{{title}}</div>
  </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
          title:{
            type:String,
            required:false,
            default:"猫眼电影"
          },
          flag:{
            // type:Boolean,
            required:false,
            default:false
          }
        },
      methods:{
          back(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    line-height: 50px;
    background-color: #e54847;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    display: flex;
  }
  .header_span{
    display: inline-block;
    width: 50px;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    font-size: 22px;
  }
  .header_title{
    flex: 1;
  }
  .header_title.on{
    margin-right: 25px;
  }
</style>
