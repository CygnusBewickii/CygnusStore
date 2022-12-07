<template>
    <div class="footer">
        <div class="footer__content">
            <div style="display: flex; justify-content: space-between">
                <div class="menu">
                    <div class="menu__item">
                        CONTACT
                    </div>
                    <div class="menu__item">
                        TERMS OF SERVICES
                    </div>
                    <div class="menu__item">
                        SHIPPING AND RETURNS
                    </div>
                </div>
                <div class="contact-form">
                    <form action="">
                        <input type="email" id="email" placeholder="Give an email, get the newsletter.">
                    </form>
                </div>
            </div>
            <div>
                <form action="">

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .footer {
        margin-top: 250px;
        border-top: 1px solid #D8D8D8;
    }

    .footer__content {
        margin-top: 40px;
    }

    .menu {
        width: 40%;
        display: flex;
        justify-content: space-between;
    }

    .contact-form {
        width: 30%;
    }

    .contact-form form {
        width: 100%;
    }

    .contact-form input {
        all: unset;
        width: 100%;
        padding-bottom: 10px;
        border-bottom: 1px solid black;
    }


</style>
