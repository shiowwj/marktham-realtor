<template>
    <div class="carousel" @keydown="checkSlide($event)" tabindex="0">
        <slot></slot>
        <button @click.prevent="next" class="btn btn-next"><i class="fa fa-angle-right"></i></button>
        <button @click.prevent="prev" class="btn btn-prev"><i class="fa fa-angle-left"></i></button>
    </div>
</template>
<script>


export default {
    props:['type'],
    data() {
        return {
            index: 0,
            slides: [],
            slideDirection: '',
        }
    },
    computed: {
        slidesLength() {
            return this.slides.length;
        }
    },
    mounted() {
        this.slides = this.$children;
        this.slides.map((slide, index) => {
            slide.index = index;
        });
    },
    methods: {
        pauseCurrentVideo(id) {
            let iframe = document.getElementById('carousel_' + id)
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc
        },
        onPlayerStateChange(event){
            event.target.stopVideo()
        },
        next() {
            console.log('next!', this.index)
            if (this.type === "video"){
                this.pauseCurrentVideo(this.index)
            }
            this.index++;
            if (this.index >= this.slidesLength) {
                this.index = 0;
            }
            this.slideDirection = 'slide-right'
            
        },
        prev() {
            console.log('previous!', this.index)
            if (this.type === "video"){
                this.pauseCurrentVideo(this.index)
            }
            this.index--;
            if (this.index < 0) {
                this.index = this.slidesLength - 1;
            }
            this.slideDirection = 'slide-left'
        },
        checkSlide(event) {
            if (event.keyCode === 39) {
                this.next();
            } else if (event.keyCode === 37) {
                this.prev();
            } else {
                return;
            }
        },
    }

}
</script>
<style scoped>
.carousel {
    @apply rounded-md lg:rounded-xl relative overflow-hidden h-full w-95vw lg:w-[800px] z-10 pb-56.25%;
}

.btn {
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    margin: 5px 10px;
    color: #FFF;
    height: 50px;
    width: 50px;
    position: absolute;
    margin-top: -25px;
    z-index: 2;
}

.btn:hover {
    cursor: pointer;
}

.btn:focus {
    outline: none;
}

.btn-next {
    top: 50%;
    right: 0;
}

.btn-prev {
    top: 50%;
    left: 0;
}
</style>
