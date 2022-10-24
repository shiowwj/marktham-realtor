<template>
  <main id="main">


    <!-- start hero / intro section -->
    <section class="relative pt-16 pb-28 lg:pt-36 bg-tempalate-p-light opacity-100" id="intro">
      <div class="w-full mx-auto md:max-w-4xl lg:max-w-7xl px-4">
        <div class="flex-wrap flex items-center">
          <div class="w-full lg:w-5/12 px-4">
            <!-- absolute top-0 w-full h-full bg-center bg-cover -->
            <div class="intro-content">

              <div class="text-center intro-title">
                <h1 class="text-template-p-dark text-2xl lg:text-4xl ">YOUR DEDICATED AND TRUSTED MILLENIAL REALTOR</h1>
              </div>
              <div class="text-center intro-description mt-6">
                <p class="text-template-p-dark text-base leading-relaxed">Understanding my clients’ needs and
                  delivering reliable service are my top priorities as a Trusted Real Estate Advisor. I believe in
                  working hand-in-hand with my clients to provide real solutions to their best interests.
                </p>
              </div>

            </div>

          </div>
          <div class="hidden lg:visible lg:px-4 lg:block w-0 lg:w-1/12">
          </div>
          <div class="intro-image w-full px-4 lg:w-1/2">
            <div class="lg:text-right ml-auto flex justify-center">
              <div class="pt-11 inline-block relative z-10 lg:pt-0">
                <nuxt-img alt="James Shiow" src="/pp-nobg.png"
                  class="img-filter block bg-agency-p-light lg:ml-auto md:max-w-lg rounded-tl-[4rem] rounded-br-[4rem] lg:rounded-tl-[10rem] lg:rounded-br-[10rem]"
                  preload :placeholder="1500" sizes="sm:100vw md:50vw lg:500px" format="webp" />
                <!-- style="width: 515px; height: auto" -->
                <!-- <span class="-z-10 -bottom-8 -left-1 absolute">
                </span> -->
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- end hero / intro section -->


    <!--start services section -->
    <section class="py-8 px-6" id="services">

      <div class="--container-block">
        <div class="flex flex-wrap justify-center text-left mb-4 lg:mb-12">
          <div class="--section-block">
            <h2 class="--section-header">
              Services
            </h2>
          </div>
        </div>

        <div class="flex flex-wrap">

          <!-- <div > -->
          <div v-for="(service, i ) in services" v-bind:key="i" class="w-full lg:w-1/3 px-4 py-4">
            <div class="w-100 flex flex-col items-center justify-center">
              <nuxt-img class="rounded-xl mb-2" width="85" :alt="service.title" :src="service.icon" loading="lazy"
                placeholder />
              <p class="text-xl text-center mb-2">{{ service.title }}</p>
              <p class="text-base text-center">{{ service.description }}</p>
            </div>
          </div>
          <!-- </div> -->

        </div>
      </div>

    </section>
    <!--end services section -->


    <!-- start home tour /portfolio section -->
    <section class="py-8 px-6" id="portfolio">

      <div class="--container-block-alt">
        <div class="flex flex-wrap justify-center text-left mb-4 lg:mb-12">
          <div class="--section-block">
            <h2 class="--section-header">
              Home Tours
            </h2>
            <!-- <p class="--section-description">
              Build stronger foundations
              for your business
            </p> -->
          </div>
        </div>

        <!-- <img :src="slide" :alt="slide"> -->
        <div class="flex flex-wrap justify-center">
          <div class="px-4 py-4">
            <carousel type="video">
              <carousel-slide v-for="(video, index) in videoUrls" :key="index" class="--carousel-slider">
                <VideoPlayer :id="`carousel_`+index" :videoId="video.id" :videoTitle="video.title"/>

              </carousel-slide>
            </carousel>
          </div>
        </div>

      </div>
    </section>
    <!-- end home tour /portfolio section -->


    <!-- start feature / blog section -->
    <section class="py-8 px-6" id="featured">

      <div class="--container-block">
        <div class="flex flex-wrap justify-center text-left mb-8 lg:mb-24">
          <div class="--section-block">
            <h2 class="--section-header">
              Current Listings
            </h2>
            <!-- <p class="--section-description">
              Build stronger foundations
              for your business
            </p> -->
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          <div v-for="(listItem, i ) in listings" v-bind:key="i" class="w-full lg:w-1/3 px-4 py-4">
            <div v-if="i <= 2" class="w-100 flex flex-col justify-center --listing">
              <img class="rounded-xl mb-2" width="100%" :alt="listItem.name" :src="listItem.imageSrc" placeholder>
              <p class="text-xl mb-2 font-extrabold">{{ listItem.name }}</p>
              <p class="text-xs">{{ listItem.price }} | {{ listItem.beds }} | {{ listItem.baths }} | {{ listItem.size }} |
                {{ listItem.lease }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-start">

          <button class="--viewmore-button" type="button" style="transition: all 0.15s ease 0s;">
            View More
          </button>
        </div>
      </div>

    </section>
    <!-- end feature / blog section -->


    <!-- start call to action / reminder  section -->
    <!-- <section id="cta">cta</section> -->
    <!-- end call to action / reminder  section -->


    <!-- start contact form section -->
    <section class="py-8 px-6 lg:flex lg:justify-center" id="contact">
      <div class="lg:w-1/3">
        <ContactForm />
      </div>
    </section>
    <!-- end contact form section -->


  </main>
</template>

<script>
import Carousel from '../components/globalcommon/carousel/Carousel.vue'
import CarouselSlide from '../components/globalcommon/carousel/CarouselSlide.vue'
import ContactForm from '../components/realtor/ContactForm.vue'
import VideoPlayer from '../components/globalcommon/iframeplayer/Videoplayer.vue'
const hometours = [
  {
    id: "eoaSxLXQ5VI",
    title: "DONT BUY YOUR HOME WITHOUT WATCHING THIS! 5 tips before buying your home (Part 1)",
  },
  {
    id: "r7Hpv3lrSew",
    title: "Suites @ sims $580K!",
  },
  {
    id: "kpp0vKCToQQ",
    title: "TIPS BEFORE BUYING FOR RESALE HDB",
  },
  {
    id: "UGDnJsgpOU4",
    title: "Why is it important to know your valuation?",
  },
  {
    id: "RaoBEhkeT44",
    title: "The Florence Residence",
  }
];

const listings = [
  {
    name: "Bellewoods 1",
    price: "S$1.85Mil",
    beds: "5 Beds",
    baths: "3 Baths",
    size: "1528sqft",
    lease: "99-Years",
    type: "Condo",
    imageSrc: "https://picsum.photos/id/230/1600/800"
  },
  {
    name: "Bellewoods 2",
    price: "S$1.85Mil",
    beds: "5 Beds",
    baths: "3 Baths",
    size: "1528sqft",
    lease: "99-Years",
    type: "Condo",
    imageSrc: "https://picsum.photos/id/231/1600/800"
  },
  {
    name: "Bellewoods 3",
    price: "S$1.85Mil",
    beds: "5 Beds",
    baths: "3 Baths",
    size: "1528sqft",
    lease: "99-Years",
    type: "Condo",
    imageSrc: "https://picsum.photos/id/232/1600/800"
  },
  {
    name: "Bellewoods 4",
    price: "S$1.85Mil",
    beds: "5 Beds",
    baths: "3 Baths",
    size: "1528sqft",
    lease: "99-Years",
    type: "Condo",
    imageSrc: "https://picsum.photos/id/233/1600/800"
  },
]
export default {
  components: {
    Carousel: Carousel,
    CarouselSlide: CarouselSlide,
    ContactForm,
    VideoPlayer
  },
  name: 'IndexPage',
  layout: "realtor_default",
  transition: 'home',
  data() {
    return {
      services: [],
      videoUrls: hometours,
      listings: listings,
    }
  },
  async asyncData({ $content }) {
    const indexPageContent = await $content("").fetch()
    let services;
    indexPageContent.forEach(ele => {
      if (ele.slug === 'index') {
        services = ele.services
      }
    });
    return { services }
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}

main {
  overflow-x: hidden;
}

.--viewmore-button {
  @apply lg:ml-8 bg-template-s-light text-template-p-dark active:bg-template-a-blue active:text-template-p-light text-base lg:text-lg font-bold px-5 py-5 lg:py-3 hover:bg-template-a-blue hover:z-40 hover:opacity-100 outline-none hover:text-template-p-light focus:outline-none mr-2 mb-2 lg:mr-1 lg:mb-1 rounded tracking-wide w-full md:w-1/3 lg:w-1/6 border-2 border-template-s-dark;
}

.home-enter-active {
  opacity: 1;
  transform: translate(-50px);
  -webkit-transition: transform 20ms, opacity 20ms;
  -moz-transition: transform 20ms, opacity 20ms;
  -o-transition: transform 20ms, opacity 20ms;
  -ms-transition: transform 20ms, opacity 20ms;
  transition: transform 20ms, opacity 20ms;
}

.home-leave-active {
  opacity: 0;
  transform: translate(0px, 150px);
  transition: transform 0.5s, opacity 0.3s;
}

.home-enter {
  opacity: 0;
}

.--container-block {
  @apply px-6 py-8 lg:px-20 lg:py-10 bg-template-s-light rounded-2xl;
}

.--container-block-alt {
  @apply px-6 py-8 lg:px-20 lg:py-10 rounded-2xl;
}

.--section-block {
  @apply w-full px-4;
}

.--section-header {
  @apply text-2xl lg:text-4xl font-semibold border-t-4 border-b-2 border-template-p-dark py-4;
}

.--section-description {
  @apply text-base leading-relaxed m-4 text-template-p-dark;
}

.--carousel-slider {
  @apply absolute top-0 left-0 bottom-0 right-0;
}

.--carousel-slider img {
  width: 100%;
  height: 100%;
}

.--listing img {
  /* opacity: .5; */
  transition: opacity .5s ease-out;
  -moz-transition: opacity .5s ease-out;
  -webkit-transition: opacity .5s ease-out;
  -o-transition: opacity .5s ease-out;
}

.--listing:hover {
  cursor: pointer;
}

.--listing img:hover {
  opacity: 0.7;
}

.img-filter{
  filter: contrast(95%) drop-shadow(2px 4px 6px #232329);
}
</style>
