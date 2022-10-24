<template>
    <nav id="nav" :class="showMenu ? `navbar` : `opacity-80 navbar`">

        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">

            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                <a href="" class="--header-icon-anchor">
                    MTR
                </a>

                <button class="--header-menu-button" type="button" v-on:click="toggleNavBar()">

                    <i v-if="!showMenu" class="fas fa-bars"></i>
                    <i v-else class="fa-solid fa-xmark" ></i>
                </button>
            </div>

            <div class="lg:flex flex-grow items-center" v-bind:class="{ hidden: !showMenu, block: showMenu }" >
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li v-for="(item, index) in headerItems" :key="index" class="flex items-center" v-on:click="onTriggerCloseMenu(item.href)">
                        <div class="--header-menu-item">
                            <span class="inline-block ml-2">{{item.label}}</span>
                        </div>
                    </li>
                    <li v-on:click="onTriggerCloseMenu('contact')" class="flex items-center">
                        <button class="--header-cta-button" type="button" style="transition: all 0.15s ease 0s;">
                        Get in Touch!
                        </button>
                    </li>
                </ul>
            </div>

        </div>

    </nav>
</template>
<script>
const headerItems = [
    {
        href: "services",
        label:"Services"
    },
    {
        href: "portfolio",
        label:"Video Home Tours"
    },
    {
        href: "featured",
        label:"Home Listings"
    }
]
export default {
    data() {
        return {
            showMenu: false,
            headerItems: headerItems
        }
    },
    methods: {
        toggleNavBar() {
            this.showMenu = !this.showMenu;
        },
        onTriggerCloseMenu(toLoc) {
            if (this.showMenu) {
                this.showMenu = false;
            }

            let diff, navEle, navHeight, targetEle, offSetTop, qouteEle, qouteHeight;

            navEle = document.getElementById('nav');
            navHeight = navEle.clientHeight;
            targetEle = document.getElementById(toLoc);
            offSetTop = targetEle.offsetTop;
            diff = offSetTop - navHeight;

            window.scrollTo(0, diff);
            return
        }
    }
}
</script>
<style scoped>
.navbar {
  @apply w-full flex flex-wrap items-center justify-between px-2 py-3 sticky top-0 bg-template-p-light z-30;
}
.--header-icon-anchor {
    @apply text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase font-template;
}

.--header-menu-button {
    @apply cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none;
}

.--header-menu-item {
    @apply px-3 py-4 lg:py-2 flex items-center text-lg font-bold cursor-pointer hover:text-template-a-blue;
}

.--header-cta-button {
    @apply lg:ml-8 bg-template-a-blue text-template-p-light active:bg-template-s-light active:text-template-p-dark text-base lg:text-lg font-bold px-5 py-3 shadow hover:bg-template-s-light hover:z-40 hover:opacity-100 outline-none hover:text-template-p-dark focus:outline-none mr-1 mb-1 rounded tracking-wide hover:border-2 hover:border-template-s-dark;
}
</style>