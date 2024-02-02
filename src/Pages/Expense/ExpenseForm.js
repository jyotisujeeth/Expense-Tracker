import React,{useContext, useRef} from 'react'
import {
  Card,
  Container,
  Form,
  Row,
  Col,
  Button,
  FloatingLabel,

} from "react-bootstrap";
import CreateExpenseCtx from '../../../Store/ExpenseContext/Create-ExpeseCtx';
import ExpenseList from './ExpenseList';

const ExpenseForm = () => {
    const ExpeseCtx = useContext(CreateExpenseCtx);
    const expenseRef = useRef();
    const desRef = useRef();
    const categoryRef = useRef();
const storeDataOnDataBase = async (expense, description, category) => {
    const putRequestOnFireBase = async (expense, description, category,Id) => {
    let email = localStorage.getItem("email");
    email = email.replace(/[^a-zA-Z0-9]/g, "");
    try {
      const response = await fetch(
        `https://expense-data-11e4b-default-rtdb.firebaseio.com/expense-${email}/${Id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            expense: expense,
            description: description,
            category: category,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("put request OK");
        ExpeseCtx.editExpense(null);
      } else {
        console.log("put request not OK");
      }
    } catch (err) {
      console.log(err);
    }
  };



  const editExpense = (expense, description, category, editId) => {
    document.querySelector(".expense").value = expense;
    document.querySelector(".description").value = description;
    document.querySelector(".category").value = category;
    ExpeseCtx.editExpense(editId);
  };

  const storeDataOnDataBase = async (expense, description, category) => {
    let email = localStorage.getItem("email");
    email = email.replace(/[^a-zA-Z0-9]/g, "");
  try {
    
    const result = await fetch(
      "https://expense-data-11e4b-default-rtdb.firebaseio.com/expense.json",
      {
        method: "POST",
        body: JSON.stringify({
          expense: expense,
          description: description,
          category: category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.ok) {
      console.log("data stored on database  OK");
    } else {
      console.log("data stored not  OK");
    }
  } catch (err) {
    console.log(err);
  }
};
const addExpenseHandler = (e) => {
    e.preventDefault();
    const obj = {
        expense: expenseRef.current.value,
        description: desRef.current.value,
        category: categoryRef.current.value
    }
    // console.log(obj);
    ExpeseCtx.addExpense(obj);
storeDataOnDataBase(expenseRef.current.value,desRef.current.value,categoryRef.current.value);
}

    return (
      <>
        <div>
          <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col md={8} lg={6} xs={12}>
                <div className="border border-2 border-primary"></div>
                <Card className="shadow px-4">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <h2 className="fw-bold mb-2 text-center text-uppercase ">
                        Expense-Tracker
                      </h2>
                      <div className="mb-3">
                        <Form>
                          <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">
                              Expense
                            </Form.Label>
                            <Form.Control
                              ref={expenseRef}
                              type="number"
                              placeholder=" Expense"
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="text-center">
                              Description
                            </Form.Label>
                            <FloatingLabel
                              controlId="floatingTextarea2"
                              //   label="Description"
                            >
                              <Form.Control
                                ref={desRef}
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "100px" }}
                              />
                            </FloatingLabel>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">
                              Category
                            </Form.Label>
                            <div>
                              <select
                                ref={categoryRef}
                                style={{
                                  width: "100%",
                                  padding: ".4rem",
                                  borderColor: "skyblue",
                                  fontWeight: "bold",
                                }}
                              >
                                <option>Category</option>
                                <option>Food</option>
                                <option>Petrol</option>
                                <option>Electricity Bill</option>
                              </select>
                            </div>
                          </Form.Group>

                          <div className="d-grid">
                            <Button
                              onClick={addExpenseHandler}
                              variant="outline-success"
                              type="submit"
                            >
                              Add Expense
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
            </div>
            <ExpenseList />
      </>
    );
}


export default ExpenseForm;