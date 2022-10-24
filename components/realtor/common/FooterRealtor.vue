<template>
  <footer class="relative bg-template-p-dark pt-8 pb-6">
    <div class="
        bottom-auto
        top-0
        left-0
        right-0
        w-full
        absolute
        pointer-events-none
        overflow-hidden
        -mt-20
      " style="height: 80px">
    </div>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <!-- site links -->
        <div class="w-full lg:w-6/12 px-4 mt-3">
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-template-a-orange text-sm font-semibold mb-2">Site Links</span>
            <ul class="list-unstyled">
              <li v-for="(sitelink, index) in siteLinks" :key="index">
                <div class="
                      text-template-p-light
                      hover:text-template-a-gold
                      hover:cursor-pointer
                      font-semibold
                      block
                      pb-2
                      text-sm
                    " v-on:click="onTriggerCloseMenu(sitelink.href)">{{sitelink.label}}</div>
              </li>
            </ul>
          </div>
        </div>
        <!-- contact Info -->
        <div class="w-full lg:w-6/12 px-4 mt-3 lg:text-right">
          <div class="flex flex-wrap items-top mb-6 justify-end">
            <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase text-template-a-orange text-sm font-semibold mb-2">Contact</span>
              <ul class="list-unstyled">
                <li>
                  <!-- hover:text-template-a-gold
                  hover:cursor-pointer -->
                  <div class="
                      text-template-p-light
                      font-semibold
                      block
                      pb-2
                      text-sm
                    ">(+65) 9669 4200</div>
                </li>
                <li>
                  <a class="
                      text-template-p-light
                      hover:text-template-a-gold
                      hover:cursor-pointer
                      font-semibold
                      block
                      pb-2
                      text-sm
                    " href="mailto:jamesshiow@gmail.com?subject=Let's get in touch!">jamesshiow@gmail.com</a>
                </li>
                <li>
                  <a class="
                      text-template-p-light
                      hover:text-template-a-gold
                      hover:cursor-pointer
                      font-semibold
                      block
                      pb-2
                      text-sm
                    " href="https://wa.me/6596694200" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </li>
                <li>
                  <a class="
                      text-template-p-light
                      hover:text-template-a-gold
                      hover:cursor-pointer
                      font-semibold
                      block
                      pb-2
                      text-sm
                    " href="https://t.me/shioww" target="_blank" rel="noopener noreferrer">Telegram Us</a>
                </li>
                <li>
                  <a class="
                      text-template-p-light
                      hover:text-template-a-gold
                      hover:cursor-pointer
                      font-semibold
                      block
                      pb-2
                      text-sm
                    " href="https://goo.gl/maps/fPyeUrNsaD94GGXo6" target="_blank" rel="noopener noreferrer"><i class=" text-template-a-orange fa-solid fa-location-pin pr-3"></i>Located in Singapore </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <!-- socials -->
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="mt-6">
            <button v-for="(social,index) in socials" :key="index" class="
                bg-white
                text-template-p-dark
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                p-3
                hover:bg-template-a-gold
                hover:cursor-pointer
              " type="button" v-on:click="onOpenExternalTab(social.url)">
              <i :class="`flex fab ${social.iconCss}`"></i>
            </button>
          </div>
          <!-- copyright -->
          <div class="text-sm text-template-a-orange font-semibold py-4">
            Copyright © {{ date }} by
            <a href="https://www.jamesshiow.com" target="_blank" rel="noopener noreferrer" class="hover:text-template-a-gold
            hover:cursor-pointer">James Shiow</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
const sitelinks = [
  {
    href: "services",
    label: "Services"
  },
  {
    href: "portfolio",
    label: "Home Tours"
  },
  {
    href: "featured",
    label: "Listings"
  },
  {
    href: "contact",
    label: "Get in touch with Us"
  }
]
const socials = [
        {
          url: "https://www.linkedin.com/in/shiow-wei-jun/",
          iconCss: "fa-linkedin-in",
        },
        {
          url: "https://github.com/shiowwj",
          iconCss: "fa-github",
        },
        {
          url: "https://t.me/shioww",
          iconCss: "fa-telegram",
        },
        {
          url: "https://wa.me/6596694200",
          iconCss: "fa-whatsapp",
        },
      ]
export default {
  data() {
    return {
      siteLinks: sitelinks,
      socials: socials,
      date: new Date().getFullYear(),
    };
  },
  methods: {
    onTriggerCloseMenu(toLocation) {
      if (this.showMenu) {
        this.showMenu = false;
      }

      console.log(toLocation);
      let diff,
        navElement,
        navHeight,
        targetElement,
        offsettop,
        qouteElement,
        qouteHeight;
      if (toLocation == "about") {
        navElement = document.getElementById("nav");
        navHeight = navElement.clientHeight;
        targetElement = document.getElementById(toLocation);
        offsettop = targetElement.offsetTop;
        qouteElement = document.getElementById("qoute");
        qouteHeight = qouteElement.clientHeight;
        diff = offsettop - navHeight + qouteHeight / 2;
        window.scrollTo(0, diff);
        return;
      }
      navElement = document.getElementById("nav");
      navHeight = navElement.clientHeight;
      targetElement = document.getElementById(toLocation);
      offsettop = targetElement.offsetTop;
      diff = offsettop - navHeight;

      window.scrollTo(0, diff);
      return;
    },
    onOpenExternalTab(to) {
      window.open(to);
    },
  },
};
</script>
