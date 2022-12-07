<template>
    <div class="container">
        <Header/>
        <router-view></router-view>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
export default {
    name: "App",
    components: {Footer, Header}
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
