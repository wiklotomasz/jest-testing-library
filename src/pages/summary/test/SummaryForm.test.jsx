import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Checkbox is unchecked at init", () => {
  render(<SummaryForm />);
  const enableButtonCheckbox = screen.getByText(/I agree to/i);
  expect(enableButtonCheckbox).not.toBeChecked();
});

test("Checkbox enables button", () => {
  render(<SummaryForm />);
  const enableButtonCheckbox = screen.getByText(/I agree to/i);
  const summaryButton = screen.getByText(/Zamów/i);
  userEvent.click(enableButtonCheckbox);
  expect(summaryButton).toBeEnabled();
});

test("recheck Checkbox disables button again", () => {
  render(<SummaryForm />);
  const enableButtonCheckbox = screen.getByText(/I agree to/i);
  const summaryButton = screen.getByText(/Zamów/i);
  userEvent.click(enableButtonCheckbox);
  userEvent.click(enableButtonCheckbox);
  expect(summaryButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/Terms/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
