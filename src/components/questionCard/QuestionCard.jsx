import React, { useState } from 'react'
import './QuestionCard.css'
import { useEffect } from 'react'

const QuestionCard = ({questionsData , score , setScore , count, setCount , modal, setModal }) => {
  
    const [timer,setTimer] = useState(30)

    const approvedChoise = (e) => {
        console.log(e.currentTarget.value);
        // eslint-disable-next-line eqeqeq
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer
        console.log(checkAnswer);
        if(checkAnswer){
            setScore(score + 100)
        }
        setCount(count + 1)
        // eslint-disable-next-line eqeqeq
        if(count == 9) setModal(true)
        setTimer(30)
    }
  useEffect( () => {
    const interval = setInterval( () => {
        if(timer > 0 ){
            setTimer(timer-1)
        }
        // eslint-disable-next-line eqeqeq
        if(timer == 0 && count < 10){
            setCount(count+1)
            setTimer(30)
        }else if(count >=10){
            setModal(true)
        }
        
    },1000)
    
    return () => {
        clearInterval(interval)
    }

  },[count, setCount, setModal, timer])
  
    return (
    <div className='questionCard'>
        <div className='questionCard-timer'>{timer}</div>
        <div className='questionCard-title'>{count + 1}/10 - {questionsData[count]?.question} </div>
        {
            questionsData[count]?.answers?.map((answer,i) =>(
                <button onClick={approvedChoise} key={i} value={answer}>{answer}</button>
            ))
        }

    </div>
  )
}

export default QuestionCard