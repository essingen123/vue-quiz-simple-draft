const app = Vue.createApp({
    data() {
        return {
            idx: 0,
            selectedAnswer: '',
            correctAnswers: 0,
            wrongAnswers: 0,
            count: 3,
            questions: [
                {
                    question: `Fill in the missing part marked with [_]

<template>
  <div>
    <p> I love [_] </p>
  </div>
</template>`, //, in order of apperance:
                    answers: { 
                        a: `{ value.toUpperCase()}`, 
                        b: `[[ value.toUpperCase() ]]`, 
                        c: `(( value.toUpperCase() ))`, 
                        d: `{{ value.toUpperCase ()}}` 
                    },
                    correctAnswer: 'd'
                },
                {
                    question: `Fill in the missing part marked with [_]

                    <template>
  <div>
    <p> I love {{ value }} </p>
  </div>
</template>
<script>
[_]
      value(){
        return this.value.toUpperCase()
      }
    }
  }
</script>`,




                answers: { 
                    a: `expose define {
computed:{`, 
                    b: `  export default {
computed:{`, 
                    c: `  export define {
computed:{`
                   
                    },
                    correctAnswer: 'b'
                
                },
                {
                    question: 'Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.',
                    answers: { 
                        a: `True`, 
                        b: `False`, 
                        c: `Neiter`, 
                        d: `Maybe` 
                    },
                    correctAnswer: 'a'
                },
            ]
        }
    },
    methods: {
       animate() { 
 
element = document.getElementById("animate");

// reset the transition by...
 
  // -> removing the class
  element.classList.remove("animate");
  
  // -> triggering reflow  The actual magic 
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
 element.offsetWidth = element.offsetWidth;
  // Do this instead:
//  void element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("animate");
 



     },
        answered(e) {
     // this.animate()
            this.selectedAnswer = e.target.value
            if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
                this.correctAnswers++
            } else {
                this.wrongAnswers++
            }

            e.target.checked = false;
        },
        nextQuestion() {
        this.idx++
        this.selectedAnswer = ''
        this.animate()

  this.$refs.answers.focus();



          
          
       

        },
        showResults() {
            this.animate()
            this.idx++
        },
        resetQuiz() {
            this.animate()
            this.idx = 0
            this.selectedAnswer = ''
            this.correctAnswers = 0
            this.wrongAnswers = 0
        }
    }
})

app.mount('#app')