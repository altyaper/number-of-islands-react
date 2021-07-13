import { expect } from 'chai';
import { render } from "@testing-library/react";
import MapDisplay from "./MapDisplay";

test('render <MapDisplay /> correctly', () => {
  const map = {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }

  const handleOnGridChange = () => {};
  render(<MapDisplay map={map} onGridChange={handleOnGridChange} />);
});

test('should display all squares on the screen', () => {
  const map = {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }

  const handleOnGridChange = () => {};
  const { container } = render(<MapDisplay map={map} onGridChange={handleOnGridChange} />);
  const squares = container.getElementsByClassName('square')
  expect(squares.length).to.be.equal(9);
});