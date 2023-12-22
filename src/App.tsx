import './App.css';
import {useState} from "react";
import LotteryRandomNumber from "./Lottery/LotteryRandomNumber.tsx";

function App() {

    const startNumbers = [5, 11, 16, 23, 32];
    const [numbers, setNumbers] = useState<number[]>(startNumbers);

    const random = () => {
        const newNumbers:number[] = [];
        while (newNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            newNumbers.push(randomNumber);
        }

        newNumbers.sort(function (a, b) {
            return a - b
        })
        setNumbers(newNumbers);
    };

  return (
   <div className='App'>
       <h2 className='main-title'>Welcome to the lottery</h2>
       <button className='btn-number' onClick={random}>New numbers</button>
       <div className='main-block'>
               {numbers.map((numberRand, key) => (

                   <LotteryRandomNumber key={key} randomNumber={numberRand}/>
               ))}
       </div>
   </div>
  );
}

export default App
