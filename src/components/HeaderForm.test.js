import { render } from "@testing-library/react";
import HeaderForm from "./HeaderForm";

test('render <HeaderForm /> correctly', () => {
  const map = {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }

  const handleOnSubmit = () => {};
  render(<HeaderForm
    initialDimentions={map}
    onSubmit={handleOnSubmit} />);
});