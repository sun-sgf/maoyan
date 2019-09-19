<template>
    <div class="cinema">
      <Header title="影院"></Header>
    </div>
</template>

<script>
    import Header from "../components/Header"
    export default {
        name: "Cinema",
        components: {Header},
        mounted(){
          this.$http.get("/my/ajax/movieOnInfoList?token=").then(function (res) {
            console.log(res);
          })
        }
    }
</script>

<style scoped>

</style>
