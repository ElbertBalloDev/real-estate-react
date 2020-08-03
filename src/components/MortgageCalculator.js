import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

const Main = styled.div`
  height: 1000px;
  padding: 5%;
  margin-bottom: 70px;
  background: white;
`;

const FormUI = styled(Form)`
  background: white;
`;

const MortgageCalculator = () => {
  const [loan, setLoan] = useState({
    propertyValue: '',
    downPayment: '',
    percentage: '',
    principal: '',
    interest: '',
    months: 360,
  });
  // const [formFilled, setFormFilled] = useState(false);
  const [mortgage, setMortgage] = useState('');

  const inputLoanDetails = (e) => {
    let value = +e.target.value;
    if (value === 0) value = '';
    setLoan({ ...loan, [e.target.name]: value });
  };

  const setPercentageAndPrincipal = () => {
    if (
      loan.propertyValue > loan.downPayment &&
      loan.propertyValue !== '' &&
      loan.downPayment !== ''
    )
      setLoan({
        ...loan,
        percentage: +((loan.downPayment / loan.propertyValue) * 100).toFixed(2),
        principal: loan.propertyValue - loan.downPayment,
      });
    else setLoan({ ...loan, percentage: '' });
  };

  const toFixInterestRate = () => {
    const interest = loan.interest !== '' && loan.interest.toFixed(4);
    setLoan({ ...loan, interest: +interest });
  };

  const mortgageFormula = () => {
    const apr = loan.interest / 1200;
    const result =
      (loan.principal * (apr * Math.pow(1 + apr, loan.months))) /
      (Math.pow(1 + apr, loan.months) - 1);
    return result.toFixed(2);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const result = !Object.values(loan).some((x) => x === '');
    if (result) setMortgage(mortgageFormula());
    else alert('not filled out');
  };

  return (
    <Main id="Mortgage-Calculator">
      <h1>Mortgage Calculator</h1>
      <FormUI
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <Form.Group controlId="mortgageCalculatorForm.PropertyValue">
          <Form.Label>Property Value</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              name="propertyValue"
              value={loan.propertyValue}
              onChange={(e) => inputLoanDetails(e)}
              onBlur={() => setPercentageAndPrincipal()}
              placeholder="Enter Property Value"
            />
          </InputGroup>
          <Form.Text className="text-muted">
            Total Purchase Price of the Property
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="mortgageCalculatorForm.DownPayment">
          <Form.Label>Down Payment</Form.Label>
          <Row>
            <Col sm={8}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  name="downPayment"
                  value={loan.downPayment}
                  onChange={(e) => inputLoanDetails(e)}
                  onBlur={() => setPercentageAndPrincipal()}
                  placeholder="Enter the Down Payment"
                />
              </InputGroup>
            </Col>
            <Col sm={4}>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  readOnly
                  name="percentage"
                  value={loan.percentage}
                  onChange={(e) => inputLoanDetails(e)}
                  placeholder="Percentage"
                />
                <InputGroup.Append>
                  <InputGroup.Text>%</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
          <Form.Text className="text-muted">
            The Amount you want to put as a Down Payment
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="mortgageCalculatorForm.Principal">
          <Form.Label>Principal</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              readOnly
              name="principal"
              value={loan.principal}
              onChange={(e) => inputLoanDetails(e)}
              placeholder="Principal Value"
            />
          </InputGroup>
          <Form.Text className="text-muted">
            The Amount left on your principal
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="mortgageCalculatorForm.Interest">
          <Form.Label>Interest</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="interest"
              value={loan.interest}
              onChange={(e) => inputLoanDetails(e)}
              onBlur={() => toFixInterestRate()}
              placeholder="Enter Interest Amount"
            />
            <InputGroup.Append>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text className="text-muted">Mortgage APR Rate</Form.Text>
        </Form.Group>
        <Form.Group controlId="mortgageCalculatorForm.Months">
          <Form.Label>Months</Form.Label>
          <InputGroup>
            <Form.Control
              as="select"
              value={loan.months}
              name="months"
              onChange={(e) => inputLoanDetails(e)}
            >
              <option value="120">10 Years - 120 Months</option>
              <option value="180">15 Years - 180 Months</option>
              <option value="240">20 Years - 240 Months</option>
              <option value="300">25 Years - 300 Months</option>
              <option value="360">30 Years - 360 Months</option>
            </Form.Control>
            <InputGroup.Append>
              <InputGroup.Text>Year / Months</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text className="text-muted">
            15 years = 180 months. 30 years = 360 months
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div style={{ marginTop: '40px' }}>
          <h2>Total</h2>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Monthly Payment"
              readOnly
              value={mortgage}
            />
            <InputGroup.Append>
              <InputGroup.Text>Monthly Payment</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text className="text-muted">
            Monthly Interest and Principal Payments
          </Form.Text>
        </div>
      </FormUI>
    </Main>
  );
};

export default MortgageCalculator;
