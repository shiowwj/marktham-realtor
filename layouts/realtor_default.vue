<template>
<!-- min-h-screen -->
    <div class="flex min-h-screen flex-col justify-between font-template">
        <HeaderRealtor />
        <Nuxt />
        <FooterRealtor/>
    </div>
</template>
<script>
import HeaderRealtor from "../components/realtor/common/HeaderRealtor.vue";
import FooterRealtor from "../components/realtor/common/FooterRealtor.vue";
export default {
    components: { HeaderRealtor,FooterRealtor },
}
</script>