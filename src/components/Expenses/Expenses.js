import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import {generateUniqueID} from "web-vitals/dist/lib/generateUniqueID";
import Card from "../UI/Card";

const Expenses = (props) => {


    return (
        <Card className="expenses">
            {
                props.expenses.map(expense => <ExpenseItem key={generateUniqueID()} title={expense.title} amount={expense.amount} date={expense.date} />)
            }

        </Card>
    );
};

export default Expenses;
