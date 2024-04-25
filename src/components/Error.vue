<template>
  <div class="error-boundary-container w-screen h-screen fixed top-0 left-0 z-10 flex flex-col justify-center items-center">
    <h2 class="font-bold mb-2">Error occurred</h2>
    <button
        @click="callback"
        class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold my-2 py-2 px-4 rounded"
      >
      Try Again!
    </button>
  </div>
</template>

<script>
export default {
  props: {
    callback: Function
  }
}
</script>