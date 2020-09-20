<template>
  <nav class="topnav flex items-center justify-center flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-grow text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">TriviApp</span>
    </div>
    <div class="w-1/2 flex justify-center items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <div
          class="inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
        >Counter: {{ counter }}/{{ totalQuestions }}</div>
        <div
          class="inline-block lg:mt-0 text-green-300 hover:text-white mr-4"
          v-show="correctAnswersTotal"
        >Correct Answers {{ correctAnswersTotal }}</div>
        <div
          class="inline-block lg:mt-0 text-red-600 hover:text-white mr-4"
          v-show="incorrectAnswers > 0"
        >Incorrect Answers {{ incorrectAnswers }}</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    counter: Number,
    totalQuestions: Number,
    correctAnswersTotal: Number,
  },
  computed: {
    incorrectAnswers() {
      return this.counter - this.correctAnswersTotal;
    },
  },
};
</script>
<style>
/* @tailwind base;
@tailwind components;
@tailwind utilities; */
</style>
