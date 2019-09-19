<template>
    <div class="mine" :style="{color: $route.meta.color}">
      mine
    </div>
</template>

<script>
    export default {
        name: "Mine",
        // beforeRouteEnter(to, form, next){
        //   next(vm=>{
        //     let isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
        //     if(!isLogin){
        //       vm.$router.push("/login");
        //     }else{
        //       next();
        //     }
        //   })
        // }

    }
</script>

<style scoped>

</style>
