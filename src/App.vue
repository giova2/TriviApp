<template>
  <Error v-if="errorBoundary" :callback="restart" />
  <Loading v-if="loading"/>
  <Header
    :counter="index+1"
    :totalQuestions="numberOfQuestions"
    :incorrectAnswers="numTotal"
    :correctAnswersTotal="numCorrect"
  />
  <div class="grid grid-cols-1 gap-4 p-4 bg-gray-200" v-if="questions?.length">
    <QuestionBox
      :question="questions[index]"
      :next="next"
      :lastQuestion="lastQuestion"
      :increment="increment"
      :restartFn="restart"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";
import Loading from "./components/Loading.vue";
import Error from "./components/Error.vue";
import "./assets/styles/main.css";
import {QUESTIONS_LIMIT} from './constants'
import { getQuestions } from './proxy'

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
    Loading,
    Error
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      loading: false
    };
  },
  computed: {
    numberOfQuestions() {
      return this.questions?.length;
    },
    lastQuestion(){
      return this.questions?.length <= this.index +1;
    },
    errorBoundary(){
      const errorB = this.questions === undefined
      return errorB
    },
  },
  methods: {
    next() {
      if(QUESTIONS_LIMIT > this.index + 1){
        this.index++;
      }
    },
    increment(isCorrect) {
      isCorrect ? this.numCorrect++ : this.numTotal++;
    },
    async restart() {
      this.questions = []
      this.loading = true
      try{
        this.questions = await getQuestions()
        this.index = 0
        this.numCorrect = 0
        this.numTotal = 0
      }catch(error) {
        this.questions = undefined
      }finally{
        this.loading = false
      }
    }
  },

  mounted() {
    this.restart()
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
}
.error-boundary-container{
  background: rgba(2, 132, 199, 0.6);;
}
</style>
