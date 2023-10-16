import React, {useContext} from 'react'
import "./QuizApp.css"
import { QuizContext } from './App/Context'
import "./QuizApp.css"


 const MainPage = () => {

    const {startGame,setStartGame} = useContext(QuizContext)
    console.log(startGame)
  return (
    <div className='main'>
    
         
        <button className='StartButton' onClick={() => setStartGame('quiz') }>Start Quiz</button>

    </div>
    
  )
}

export default MainPage
