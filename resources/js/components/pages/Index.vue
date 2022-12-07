<template>
    <main>
        <Carousel/>
        <div class="showcase">
            <div class="showcase__top">
                <div class="showcase__title">
                    Shop the latest
                </div>
                <a href="#" class="showcase__all">view all</a>
            </div>
            <div class="showcase__products">
                <div class="product">
                    <div class="product__image">
                        <img :src="'/storage/images/earrings.png'" alt="">
                    </div>
                    <div class="product__title">
                        Lira Earrings
                    </div>
                    <div class="product__price">
                        $ 20,00
                    </div>
                </div>
                <div class="product">
                    <div class="product__image">
                        <img :src="'/storage/images/earrings.png'" alt="">
                    </div>
                    <div class="product__title">
                        Lira Earrings
                    </div>
                    <div class="product__price">
                        $ 20,00
                    </div>
                </div>
                <div class="product">
                    <div class="product__image">
                        <img :src="'/storage/images/earrings.png'" alt="">
                    </div>
                    <div class="product__title">
                        Lira Earrings
                    </div>
                    <div class="product__price">
                        $ 20,00
                    </div>
                </div>
                <div class="product">
                    <div class="product__image">
                        <img :src="'/storage/images/earrings.png'" alt="">
                    </div>
                    <div class="product__title">
                        Lira Earrings
                    </div>
                    <div class="product__price">
                        $ 20,00
                    </div>
                </div>
                <div class="product">
                    <div class="product__image">
                        <img :src="'/storage/images/earrings.png'" alt="">
                    </div>
                    <div class="product__title">
                        Lira Earrings
                    </div>
                    <div class="product__price">
                        $ 20,00
                    </div>
                </div>
                <div class="product">
                    <div class="product__image">
                        <img :src="'/storage/images/earrings.png'" alt="">
                    </div>
                    <div class="product__title">
                        Lira Earrings
                    </div>
                    <div class="product__price">
                        $ 20,00
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Carousel from "../layouts/Carousel.vue";
export default {
    name: "Index",
    components: {
        Carousel,
    }
}
</script>

<style scoped>
    .showcase {
        margin-top: 64px;
    }

    .showcase__title {
        font-size: 33px;
    }

    .showcase__all {
        font-size: 20px;
        color: #A18A68;
        text-decoration: none;
        margin-top: 9px;
    }

    .showcase__top {
        display: flex;
        justify-content: space-between;
    }

    .showcase__products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        column-gap: calc((88vw - 20vw * 3) / 3);
        row-gap: 87px;
        margin-top: 40px;
    }

    .product {

    }

    .product__image {
        border-radius: 10px;
    }

    .product__image img {
        width: 100%;
    }

    .product__title {
        font-size: 20px;
        margin-top: 25px;
    }

    .product__price {
        font-size: 20px;
        margin-top: 20px;
        color: #A18A68;
    }
</style>
