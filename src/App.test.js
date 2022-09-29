import { render, screen, fireEvent } from "@testing-library/react";

import { Default, Clicked } from "./App.stories";

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

it("Render App with Default Button.", () => {
  render(<Default />);
  expect(screen.getByText(/click me/i)).not.toBeNull();
});

it("Click Default Button to Clicked Button state.", () => {
  render(<Default />);
  expect(screen.getByText(/click me/i)).not.toBeNull();
  fireEvent.click(screen.getByText(/click me/i));
  expect(screen.getByText(/thanks/i)).not.toBeNull();
});
