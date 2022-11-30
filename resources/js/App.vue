<template>
    <div class="container">
        <Header/>
        <router-view></router-view>
    </div>

</template>

<script>
import Header from "./components/layouts/Header.vue";
export default {
    name: "App",
    components: {Header}
}
</script>

<style>
    body {
        background: #FFFFFF;
        font-family: 'DM sans';
    }
    .container {
        width: 88vw;
        margin: 64px auto 16px;
    }
</style>
