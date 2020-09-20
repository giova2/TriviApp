<template>
  <div class="questions flex flex-wrap flex-column">
    <div class="w-full bg-gray-500">
      <div class="flex flex-wrap flex-column justify-center p-2">
        <div class="w-full text-lg">
          <span>Topic: {{ question.category }}</span>
        </div>
        <div :class="difficultyClass(question.difficulty)">
          <b>Difficulty</b>
          <span class="ml-1">{{ question.difficulty }}</span>
        </div>
        <div class="w-full mt-3">
          <b>Question: {{ question.question }}</b>
        </div>
        <div class="w-full m-3">
          <ul class="list-none">
            <li
              :class="answerClass(index)"
              v-for="(answer, index) in shuffledAnswers"
              :key="index"
              @click.prevent="selectAnswer(index)"
            >{{ answer }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full mb-4 bg-gray-400">
      <button
        @click="submitAnswer"
        class="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-2 px-4 rounded"
        v-show="selectedAnswerIndex !== null"
        :disabled="answered"
      >Submit</button>
      <button
        @click="next"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
      >Next</button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    question: Object,
    next: Function,
    increment: Function,
  },
  data() {
    return {
      shuffledAnswers: [],
      selectedAnswerIndex: null,
      correctIndexAnswer: null,
      answered: false,
    };
  },
  mounted() {
    this.shuffleAnswers([
      ...this.question.incorrect_answers,
      this.question.correct_answer,
    ]);
  },
  watch: {
    question: {
      immediate: true,
      handler() {
        this.selectedAnswerIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
    // what we do in the watch section is create some methods to react to some changes on variables
    // question() {
    //   this.selectedAnswerIndex = null;
    //   this.shuffleAnswers();
    // },
  },
  computed: {
    // answers() {
    //   let answers = [...this.question.incorrect_answers];
    //   answers.push(this.question.correct_answer);
    //   return answers;
    // },
  },
  methods: {
    difficultyClass(difficulty) {
      const normalizedDifficulty = difficulty.toLowerCase()[0];
      let className = "p-2 my-2 text-white ";
      switch (normalizedDifficulty) {
        case "e": //from easy
          className += "bg-green-500";
          break;
        case "m": // from medium
          className += "bg-yellow-500";
          break;
        default:
          className += "bg-red-500";
      }
      return className;
    },
    answerClass(index) {
      let answerClass = "";
      if (!this.answered && index === this.selectedAnswerIndex) {
        answerClass = "selected";
      } else if (this.answered && index === this.correctIndexAnswer) {
        answerClass = "correct";
      } else if (
        this.answered &&
        index === this.selectedAnswerIndex &&
        index !== this.correctIndexAnswer
      ) {
        answerClass = "incorrect";
      }
      answerClass +=
        " w-full mt-1 py-2 bg-gray-200 hover:bg-blue-300 cursor-pointer";
      return answerClass;
    },
    selectAnswer(index) {
      console.log({ index });
      this.selectedAnswerIndex = index;
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedAnswerIndex === this.correctIndexAnswer) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    shuffleAnswers() {
      let answers = [
        ...this.question.incorrect_answers,
        this.question.correct_answer,
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndexAnswer = this.shuffledAnswers.indexOf(
        this.question.correct_answer
      );
    },
  },
};
</script>

<style>
.correct {
  @apply bg-green-500 !important;
}
.incorrect {
  @apply bg-red-500 !important;
}
.selected {
  @apply bg-blue-500 !important;
}
</style>
