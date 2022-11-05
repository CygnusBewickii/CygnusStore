<template>
    <div class="carousel">
        <ul class="carousel__slides">
            <li class="carousel__slide">
                <img :src="'/storage/images/woman.png'" alt="">
            </li>

            <li class="carousel__slide">
                <img :src="'/storage/images/woman.png'" alt="">
            </li>

            <div>
                <div class="carousel__picker">
                    <div class="carousel__picker__circle">

                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Carousel"
}
</script>

<style scoped>
    .carousel {
        width: 100%;
        min-height: 650px;
        max-height: 900px;
        border-radius: 18px;
        overflow: hidden;
        position: relative;
    }

    .carousel__picker {
        position: absolute;
        bottom: 5px;
    }

    .carousel__picker__circle {
        width: 5px;
        height: 5px;
        background-color: #ffffff;

    }

    .carousel__slides {
        width: 9999px;
    }

    .carousel__slide {
        width: 100%;
        display: inline-block;
        border-radius: 18px;
        overflow: hidden;
    }

    .carousel__slide img {
        display: inline-block;
        object-fit: cover;
        width: 100vw;
    }
</style>
