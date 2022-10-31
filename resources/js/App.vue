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
        margin: 64px 96px 16px;
    }
</style>
