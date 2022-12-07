<template>
    <div class="slider">
        <ul class="slides" :style="sliderStyle">
            <li>
                <div class="slide">
                    <div class="slide__description">
                        <div class="description__title">
                            Gold big hoops
                        </div>
                        <div class="description__price">
                            $ 68,00
                        </div>
                        <a href="#">
                            <div class="description__link">
                                View Product
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li>
                <div class="slide">
                    <div class="slide__description">
                        <div class="description__title">
                            Gold big hoops
                        </div>
                        <div class="description__price">
                            $ 68,00
                        </div>
                        <a href="#">
                            <div class="description__link">
                                View Product
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li>
                <div class="slide">
                    <div class="slide__description">
                        <div class="description__title">
                            Gold big hoops
                        </div>
                        <div class="description__price">
                            $ 68,00
                        </div>
                        <a href="#">
                            <div class="description__link">
                                View Product
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li>
                <div class="slide">
                    <div class="slide__description">
                        <div class="description__title">
                            Gold big hoops
                        </div>
                        <div class="description__price">
                            $ 68,00
                        </div>
                        <a href="#">
                            <div class="description__link">
                                View Product
                            </div>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
        <nav class="manual-navigation">
            <div class="manual-navigation__btn" @click="changeSlide(1)" :class="{ active: activeButtonIndex === 1}">

            </div>
            <div class="manual-navigation__btn" @click="changeSlide(2)" :class="{ active: activeButtonIndex === 2}">

            </div>
            <div class="manual-navigation__btn" @click="changeSlide(3)" :class="{ active: activeButtonIndex === 3}">

            </div>
            <div class="manual-navigation__btn" @click="changeSlide(4)" :class="{ active: activeButtonIndex === 4}">

            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    data() {
        return {
            activeButtonIndex: 1,
            sliderStyle: {
                marginLeft: '0px',
            },
            backgroundImages: {
                firstImage: {
                    backgroundImage: '/storage/images/woman.png',
                }
            }
        }
    },
    methods: {
        changeSlide(slide) {
            if (slide > 4) {
                slide = 1;
            }
            this.activeButtonIndex = slide;
            this.sliderStyle.marginLeft = (slide - 1) * -88 + 'vw';

        },
        autoSlider() {
            setInterval(() => {
                this.changeSlide(++this.activeButtonIndex)
            }, 7000)
        }
    },
    mounted() {
        this.autoSlider();
    }

}
</script>

<style scoped>
    .slider {
        width: 100%;
        height: 80vh;
        overflow: hidden;
        border: #FFFFFF 1px;
        border-radius: 18px;
        position: relative;
        margin-top: 20px;
    }

    .slides {
        width: 9999px;
        height: 80vh;
        transition: 1s;
    }

    .slides > li {
        display: inline-block;
        height: 80vh;
        width: 88vw;
    }

    .slide {
        background-image: url('/storage/images/woman.png');
        background-size: cover;
        width: 88vw;
        height: 80vh;
    }

    .slide__description {
        padding-top: 15%;
        padding-left: 80px;
        color: white;
    }

    .slide__description a {
        text-decoration: none;
        text-align: center;
    }

    .description__title {
        font-size: 33px;
    }

    .description__price {
        margin-top: 25px;
        font-size: 26px;
    }

    .description__link {
        display: inline-block;
        border: 2px solid white;
        border-radius: 5px;
        padding: 14px 32px;
        margin-top: 48px;
        font-size: 20px;
        color: white;
    }

    .manual-navigation {
        left: 48%;
        width: 108px;
        position: absolute;
        bottom: 15px;
        display: flex;
        justify-content: space-between;
    }

    .manual-navigation__btn {
        width: 18px;
        height: 18px;
        border-radius: 50px;
        background-color: #fff;
    }

    .active {
        background-color: #CDCDCD;
        border: 1px solid white;
    }

</style>
