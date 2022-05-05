import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import {generateUniqueID} from "web-vitals/dist/lib/generateUniqueID";

const Expenses = (props) => {


    return (
        <div className="expenses">
            {
                props.expenses.map(expense => <ExpenseItem key={generateUniqueID()} title={expense.title} amount={expense.amount} date={expense.date} />)
            }

        </div>
    );
};

export default Expenses;
