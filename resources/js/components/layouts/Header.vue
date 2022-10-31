<template>
    <header>
        <div class="logo">
            <span class="logo__first-letter">C</span>ygnus
        </div>
        <nav class="navbar">
            <div class="navbar__menu-links">
                <a href="" class="navbar__menu-links__link">
                    Products
                </a>
                <a href="" class="navbar__menu-links__link">
                    Blog
                </a>
                <a href="" class="navbar__menu-links__link">
                    Our story
                </a>
            </div>
            <div class="navbar__menu-icons">
                <a href="" class="navbar__menu-icons__link">
                    <img :src="'/storage/images/searcher.png'" style="margin-top: 8px;" alt="">
                </a>
                <a href="" class="navbar__menu-icons__link">
                    <img :src="'/storage/images/shopping-cart.png'" style="margin-bottom: 8px;" alt="">
                </a>
                <a href="" class="navbar__menu-icons__link">
                    <img :src="'/storage/images/profile.png'" style="margin-bottom: 8px;" alt="">
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
    }

    .logo {
        font-size: 35px;
        font-family: 'Allerta Stencil';
    }

    .logo__first-letter {
        color: #A18A68;
    }

    .navbar {
        display: flex;
        align-items: center;
        height: 27px;
    }

    .navbar__menu-links {
        border-right: 2px solid #3f3f3f;
    }

    .navbar__menu-links__link {
        text-decoration: none;
        color: black;
        margin-right: 57px;
    }


    .navbar__menu-icons__link {
        margin-left: 47px;
    }
</style>
