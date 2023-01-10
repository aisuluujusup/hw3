//import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

 export function ExpenseItem(props) {
    //const [title, setTitle] = useState(props.title)
    //console.log(useState('hello'));//массив кайтарат
   
    const expenseTitle = props.title
    const expenseAmout = props.amount

    // const updateTitleHandler = () => {
    //     setTitle('update text')
    //     console.log(title);
    // }
        // expenseTitle = 'updated text'
        // console.log(expenseTitle);
    
   
    return (
     <div className='expense-item'>
       <ExpenseDate date={props.date}/>

        <h2 className='expense-item__description'>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmout}</div>
        {/* <button onClick={updateTitleHandler}> Update Title</button> */}
    </div>
    );
}
export default ExpenseItem