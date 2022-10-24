<template>
    <div class="font-template">
        <div class="flex items-center justify-center w-screen h-screen">
      <div class="px-40 py-20">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-template-p-dark text-9xl">404</h1>

          <h6 v-if="error.statusCode === 404" class="
              mb-2
              text-2xl
              font-bold
              text-center text-template-a-blue
              md:text-3xl
            ">
            <span class="text-template-a-orange">Oops!</span> Page not found
          </h6>
          <h6 v-else class="
              mb-2
              text-2xl
              font-bold
              text-center text-template-a-blue
              md:text-3xl
            ">
            <span class="text-template-a-orange">Oops!</span> An error occurred
          </h6>

          <p class="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>
          <NuxtLink class="--error-button" to="/">
            Go home
          </NuxtLink>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  head: {
    title: "404 Page 🥲 😅",
    meta: [
      {
        hid: "description",
        name: "description",
        content: `404: Page not found`,
      },
    ],
  },
  name: "ErrorPage",
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
<style scoped>
.--error-button {
    @apply lg:ml-8 bg-template-a-blue text-template-p-light active:bg-template-s-dark active:text-template-a-orange text-base lg:text-lg font-bold px-5 py-3 shadow hover:bg-template-s-dark hover:z-40 hover:opacity-100 outline-none hover:text-template-a-orange focus:outline-none mr-1 mb-1 rounded tracking-wide;
}
</style>