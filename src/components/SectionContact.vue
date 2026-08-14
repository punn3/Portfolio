<script setup lang="ts">
const contacts = [
    {
        icon: "icon-email",
        text: "puntareewanm@gmail.com",
        copy: "icon-copy",
    },
    {
        icon: "icon-phone",
        text: "096-271-2217",
        copy: "icon-copy",
    },
];
const icons = [
    {
        link: 'https://www.linkedin.com/in/puntareewan-chaiya-228b6829b/',
        icon: 'icon-linkedin',
    },
    {
        link: 'https://www.instagram.com/pnxm.c/?hl=th',
        icon: 'icon-instagram',
    },
    {
        link: 'https://github.com/punn3',
        icon: 'icon-github',
    },
];

</script>

<template>
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="heading-3-head">Contact Us</h2>
            <p class="title-head">Thailand</p>
            <div class="contact-field">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="contact-form">
                            <FormBasic></FormBasic>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 d-block align-content-center mt-3">
                        <div class="contact-copy">
                            <Contacts v-for="contact in contacts" :icon="contact.icon" :text="contact.text"
                                :copy="contact.copy"></Contacts>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-icon">
                <ContactIcons v-for="icon in icons" :link="icon.link" :icon="icon.icon"></ContactIcons>
            </div>
        </div>
    </section>
</template>
