<template>
    <div class="carousel">
        <div class="carousel__slide">
            <img :src="'/storage/images/woman.png'" alt="" style="width: 100%; object-fit: cover">
        </div>

        <div class="carousel__slide">
            <img :src="'/storage/images/woman.png'" alt="" style="width: 100%; object-fit: cover">
        </div>

        <div>
            <div class="carousel__picker">
                <div class="carousel__picker__circle">

                </div>
            </div>
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
        max-height: 650px;
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

    .carousel__slide {
        width: 100%;
        display: inline-block;
        border-radius: 18px;
        overflow: hidden;
    }

    .carousel__slide img {
        max-height: 650px;
        display: inline-block;
    }
</style>
