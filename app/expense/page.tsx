import Recharts from "@/app/(recharts)/recharts"
import ExpenseList from "../components/expenselist/expenselist"
import SimpleBarChart from "@/app/(recharts)/recharts"
import App from "@/app/(recharts)/recharts"
import Chart from "@/app/(recharts)/recharts"
//import expenseList from "../components/expenselist/expenselist"
export default function Expense() {

  return (
    <div>
          
        <h1 className="text-5xl text-center m-5"style={{color:"red",fontWeight:"bolder",textShadow:"8px 8px 20px red"}}>Expense Tracker App</h1>   
        <ExpenseList/>
        <Recharts/>
        <Chart/>
        
        
  
  </div>
  )
}