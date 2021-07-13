import { useState } from 'react';
import { FormControl, InputGroup, Row, Col, Form, Button } from 'react-bootstrap';
import { createGrid } from '../utils/world_utils';

const HeaderForm = ({ initialDimentions, onSubmit }) => {

  const [formValues, setFormValues] = useState(initialDimentions);

  const handleOnSubmit = event => {
    event.preventDefault();
    const grid = createGrid(formValues);
    formValues.grid = grid;
    onSubmit(formValues);
  }

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value || 0
    setFormValues({
      ...formValues,
      [name]: isNaN(value) ? 0 : parseInt(value)
    });
  }

  return (
    <Form onSubmit={handleOnSubmit} className='mb-3'>
      <Row className='align-items-center justify-content-center'>
        <Col xs="auto">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Width</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={handleOnChange} name='width' value={formValues.width} />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Height</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={handleOnChange} name='height' value={formValues.height} />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">Submit</Button>
        </Col>
        <Col xs="auto">
          <span><strong>Number of islands:</strong> {initialDimentions.islands}</span>
        </Col>
      </Row>
    </Form>
  )  
}

export default HeaderForm;