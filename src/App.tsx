import "./App.css";
import { useState } from "react";

import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;

import Form from "./components/Form";

// function App() {
//   return(
//     <>
//     <Form/>
//   </>
//   ) ;
// }
// export default App;

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import categories from "./expense-tracker/categories";

// function App() {
//   let items = ["Dhaka", "Sylhet", "Rajshahi"];

//   const [visible, setVisible] = useState(false);

//   const handleClick = () => setVisible(true);

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <>
//       { visible && <Alert onClick={() => setVisible(false)}>
//         <span>Alert</span>
//       </Alert>}

//       <Button color="primary" onClick={handleClick}>
//         Button
//       </Button>

//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </>
//   );
// }

// export default App;
