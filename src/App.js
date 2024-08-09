import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

const[amount, setAmount]=useState('')
const[rate, setRate]=useState('')
const[year, setYear]=useState('')
const[interest, setInterest]=useState('')


const calculate = (e) =>{
console.log(amount,rate,year);
let output = amount* rate * year/100
console.log(output);
setInterest(output)


}

const reset = (e) =>{
setAmount('')
setRate('')
setYear('')
setInterest('')
  

}


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="head">
            <h1>Simple Interest Calculator</h1>
            <p>The rate at which you borrow or lend money is called the simple interest. If a borrower takes money from a lender, an extra amount of money is paid back to the lender. The borrowed money which is given for a specific period is called the principal. The extra amount which is paid back to the lender for using the money is called the interest.</p>
          </div>
        

            <div className="card">
            <h2 className='symbol'>&#8377;</h2>
            <p>Total Simple Interest:{interest}</p>
            </div>



          <div className="input">
            
            <TextField onChange={e=>setAmount(e.target.value)} value={amount} id="standard-basic" label="Amount" variant="standard" />
            <TextField onChange={e=>setRate(e.target.value)} value={rate}  id="standard-basic" label="Rate" variant="standard" />
            <TextField onChange={e=>setYear(e.target.value)} value={year}  id="standard-basic" label="Year" variant="standard" />
          
          </div>

          <div className='button'>
          <Button onClick={calculate} variant="contained" color='success'>Calculate</Button>
          <Button onClick={reset} variant="contained" color='warning'>Reset</Button>
          </div>



          </div>
      </header>
    </div>
  );
}

export default App;
