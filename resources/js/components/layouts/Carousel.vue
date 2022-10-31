<template>
    <div class="carousel">
        <div class="carousel__slide">
            <img :src="'/storage/images/woman.png'" alt="" style="width: 100%; object-fit: cover">
        </div>

        <div class="carousel__left-button">
            Влево
        </div>

        <div class="carousel__right-button">
            Вправо
        </div>
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
        height: 650px;
        border-radius: 18px;
        overflow: hidden;
        position: relative;
    }

    .carousel__left-button {
        position: absolute;
        left: 0;
        top: 50%;
    }

    .carousel__right-button {
        position: absolute;
        right: 0;
        top: 50%;
    }

    .carousel__slide {
        object-fit: fill;
        border-radius: 18px;
        overflow: hidden;
    }
</style>
