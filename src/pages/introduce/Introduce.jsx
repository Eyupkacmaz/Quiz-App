import React, { useState } from 'react'
import "./Introduce.css"
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
    const difficulty = ["easy","medium","hard"]
    const [difficultyChange , setDifficultyChange]=useState('')
    const navigate=useNavigate()
    const TOTAL_QUESTIONS=10

   const startQuiz = () => {
     if(difficulty){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
     }
   }

  return (
    <div className='introduce'>
      <div className="introduce-container">
         <img src="https://media.istockphoto.com/id/1186386668/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=mBQMqQ6kZuC9ZyuV5_uCm80QspqSJ7vRm0MfwL3KLZY=" alt="" />
         <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
         <div onClick={startQuiz} className='introduce-btn'>QUİZ'E BAŞLA</div>
      </div>
    </div>
  )
}

export default Introduce
