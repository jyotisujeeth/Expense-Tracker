const ExpeseCtx = useContext(CreateExpenseCtx);
    const expenseRef = useRef();
    const desRef = useRef();
    const categoryRef = useRef();
  const categoryRef = useRef();

  const storeDataOnDataBase = async (expense,description,category) => {
    try {

      const result = await fetch(
        "https://expense-data-11e4b-default-rtdb.firebaseio.com/expense.json",
        {
          method: "POST",
          body: JSON.stringify({
            expense: expense,
            description: description,
            category:category
          }),
          headers: {
            "Content-Type":"application/json",
          }

        }
      );

      if (result.ok) {
        console.log('data stored on database  OK')
      } else {
        console.log('data stored not  OK')

      }

    } catch (err) {
      console.log(err);
    }

  }

const addExpenseHandler = (e) => {
    e.preventDefault();
@@ -26,15 +58,15 @@ const addExpenseHandler = (e) => {
        category: categoryRef.current.value
    }
    // console.log(obj);
    ExpeseCtx.addExpense(obj);

  ExpeseCtx.addExpense(obj);
  storeDataOnDataBase(expenseRef.current.value,desRef.current.value,categoryRef.current.value);
}

    return (
      <>
        <div>
          <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Row className="vh-100 d-flex justify-content-center mt-5">
              <Col md={8} lg={6} xs={12}>
                <div className="border border-2 border-primary"></div>
                <Card className="shadow px-4">
@@ -111,11 +143,11 @@ const addExpenseHandler = (e) => {
                    </div>
                  </Card.Body>
                </Card>
            <ExpenseList />
              </Col>
            </Row>
          </Container>
            </div>
            <ExpenseList />
      </>
    );
}
 33 changes: 22 additions & 11 deletions33  
src/Pages/HomePage/Expense/ExpenseList.js
@@ -1,17 +1,28 @@
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import CreateExpenseCtx from '../../../Store/ExpenseContext/Create-ExpeseCtx';
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import CreateExpenseCtx from "../../../Store/ExpenseContext/Create-ExpeseCtx";
import { useE