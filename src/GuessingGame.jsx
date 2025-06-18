import { useState, useRef } from "react";

function GuessingGame(){

    const [guesses, setGuesses] = useState(0);
    const [message, setMessage] = useState("Take a guess");
    const [inputValue, setInputValue] = useState(0);
    // const [minNum, setMinNum] = useState(0);
    // const [maxNum, setMaxNum] = useState(100);
    
    //useRef is used because it doesn't update the comChoice unnecessarily.
    const comChoice = useRef(Math.floor(Math.random() * 101))
    // console.log(`default choice: ${comChoice.current}`);

    function inputValueHandler(event){
        setInputValue(event.target.value)
    }

    function messageHandler(){

        if(Number(inputValue) > comChoice.current){
            setMessage("Your guess is high");
            setGuesses((prev) => prev + 1)
        }
        else if(Number(inputValue) < comChoice.current){
            setMessage("Your guess is low");
            setGuesses((prev) => prev + 1)
        }
        else if(Number(inputValue) === comChoice.current){
            setMessage("That's correct, You won!");
        }
    }

    function restartHandler(){
        setInputValue(0);
        setGuesses(0);
        setMessage("Take a guess");
        comChoice.current = (Math.floor(Math.random() * 101));
        // console.log(`restart choice: ${comChoice.current}`);
    }

    return (<>

        <div className="container">

            <input type="number" min={0} max={100} value={inputValue} onChange={inputValueHandler}/> 
            <button onClick={messageHandler} className="enterBtn">Enter</button>

            <p id="guesses">guesses: <span>{guesses}</span> </p>

            <p id="message">{message}</p>

            <button onClick={restartHandler} className="restartBtn">Restart</button>

        </div>

    </>)
}

export default GuessingGame;