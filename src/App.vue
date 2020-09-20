<template>
  <Header
    :counter="index"
    :totalQuestions="numberOfQuestions"
    :correctAnswersTotal="numCorrect"
  />
  <div class="grid grid-cols-1 gap-4 p-4 bg-gray-200" v-if="questions.length">
    <QuestionBox
      :question="questions[index]"
      :next="next"
      :increment="increment"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";
import "./assets/styles/main.css";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },
  computed: {
    numberOfQuestions() {
      return this.questions.length;
    },
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      isCorrect ? this.numCorrect++ : this.numTotal++;
    },
  },

  mounted() {
    fetch("https://opentdb.com/api.php?amount=10&category=17&type=multiple", {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.questions = data.results));
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
