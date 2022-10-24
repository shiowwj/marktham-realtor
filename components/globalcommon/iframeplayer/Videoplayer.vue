<template>
    <!-- <div id="player"> -->
    <Youtube :video-id="videoId" :player-vars="playerVars" :title="videoTitle" width="100%" height="100%"></Youtube>
    <!-- </div> -->
</template>
<script>
import { Youtube, getIdFromUrl } from 'vue-youtube';
export default {
    components: {
        Youtube
    },
    props: {
        videoId: String,
        videoTitle: String
    },
    data() {
        return {
            playerVars: {
                rel: 0,
                controls: 0,
                modestbranding: 1,
                cc_load_policy: 1,
                cc_lang_pref: 'en'
            }
        }
    },
    mounted() {
        // this.getId()
    },
    methods: {
        // getId() {
        //     const youtubeId = getIdFromUrl('https://youtu.be/eoaSxLXQ5VI')
        //     console.log('youtube id', youtubeId)
        // }
    }
}
</script>
<style scoped>
iframe {
    width: 100%;
    height: 100%;
    /* max-width: 650px; Also helpful. Optional. */
}
</style>