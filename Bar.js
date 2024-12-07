const btn = document.getElementById('btn');
const list = document.querySelector('.list');
const output = document.querySelector('h2');
let lebel1 = document.querySelector('.label1')
let lebel2 = document.querySelector('.label2')
let lebel3 = document.querySelector('.label3')
let lebel4 = document.querySelector('.label4')
let lebel5 = document.querySelector('.label5')
let lebel6 = document.querySelector('.label6')
let buttons = document.querySelectorAll('options');
let container = document.getElementById('first__container');

btn.addEventListener('click', ()=>{
   list.classList.toggle("list__add");
})

 container.addEventListener('click', ()=>{
    list.classList.toggle("list__add");
})

lebel1.addEventListener('click', ()=>{
  output.innerHTML = lebel1.textContent
})
lebel2.addEventListener('click', ()=>{
  output.innerHTML = lebel2.textContent
})
lebel3.addEventListener('click', ()=>{
  output.innerHTML = lebel3.textContent
})
lebel4.addEventListener('click', ()=>{
  output.innerHTML = lebel4.textContent
})
lebel5.addEventListener('click', ()=>{
  output.innerHTML = lebel5.textContent
})
lebel6.addEventListener('click', ()=>{
  output.innerHTML = lebel6.textContent
})


// lebel.addEventListener('click', ()=> {
//    output.innerHTML= lebel.textContent
// })

// buttons.forEach((button)=>{
//    button.addEventListener('click', (e)=>{
//       e.target
//       // console.log(e.target.innerHTML == 2)
//    })
// })








//output.innerHTML = buttons.textContent;

// const buttonArray = Array.from(buttons);
// console.log(buttonArray)
// console.log(buttonArray.length)

// function displayQuestionB() {

//    buttons.addEventListener('click', ()=>{
//       buttons.forEach((data, index)=>{
//           buttons[index].innerHTML = data

//       })
//    })

   // quizqustion.innerHTML = questionB.question
   // questionB.answer.forEach((data, index)=>{
   //    //  const buttons = [btn1, btn2, btn3, btn4]
   //     buttons[index].innerHTML = data.text
   //     buttons.forEach((button)=>{
   //         button.style.pointerEvents = 'auto';
   //     })
   // })
//} 






// for (let option of options) {
//    option.onclick(()=>{
//       output.innerHTML = this.textContent;
//    })
// }
 
