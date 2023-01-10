import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    })
    // const[title, setTitle] = useState('')
    // const[amount, setAmount] = useState('')
    // const[date, setDate] = useState('')

    // const titleChangeHandler = (event) => {
    //     //setTitle(event.target.value)
    //     console.log(event);
    // }
    // const amountChangeHandler = (event) => {
    //     setAmount(event.target.value)
    // }
    // const dateChangeHandler = (event) => {
    //     setDate(event.target.value)
    // }

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
    }
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
    })
};
    const dateChangeHandler = (event) => {
    //  setUserInput({
    //     ...userInput,
    //     date:event.target.value
    //  })
    setUserInput((prevState) => {
        return {
            ...prevState,
            date: event.target.value
        }
    })
}

    // const inputChangeHandler =(event) => {
    //     const currentInput = event.target.name;
    //     if (currentInput === 'text') {
    //         setTitle(event.target.value)
    //     } else if (currentInput === 'amount') {
    //         setAmount(event.target.value)
    //     }else if (currentInput === 'date') {
    //         setDate(event.target.value)
    //     }
    // };

    //  const inputChangeHandler =(event) => {
    //     const currentInput = event.target.name;
    //    setUserInput({
    //     ...userInput,
    //     [currentInput]: <event className="target value"></event>
    //    })
    // };

const submitHandler =(event) => {
    event.prenentDefault()
    console.log(userInput.title);
    console.log(userInput.amount);
    console.log(userInput.date);
}

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name='title'
                     type="text" 
                    onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                    <input name='amount'
                    type="number" 
                    min={'1'} step='1' 
                    onChange={amountChangeHandler} /> 
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                    <input name='date'
                    type="date"
                    min='2023-01-01'
                    max={'2026-01-01'}  
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'></button>
            </div>
        </form>
    )
};
export default ExpenseForm;