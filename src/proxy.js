import { QUESTIONS_LIMIT } from "./constants";

const decodeString = (text) => {
  const parser = new DOMParser();
  return parser.parseFromString(text, 'text/html').body.textContent; 
}

const fixText = (parsedResponse) => {
  return parsedResponse.results.map(({
    category,
    difficulty,
    correct_answer,
    incorrect_answers,
    question
  }) => {
    return {
      category: decodeString(category),
      difficulty: decodeString(difficulty),
      correct_answer: decodeString(correct_answer),
      incorrect_answers: incorrect_answers.map((answer)=> decodeString(answer)),
      question: decodeString(question)
    }
  })
}

export const getQuestions = async () =>{
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${QUESTIONS_LIMIT}&category=17&type=multiple`)
    const parsedResponse = await response.json()
    
    const results = fixText(parsedResponse)
    
    return results
  } catch(error) {
    console.error(error)
  }
  
}