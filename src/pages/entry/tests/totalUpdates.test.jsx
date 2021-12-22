import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../context/OrderDetails";

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // make sure total starts at $0.00
  const scoopsSubotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla scoop",
  });
  userEvent.click(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopsSubotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate scoop",
  });
  userEvent.click(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopsSubotal).toHaveTextContent("6.00");
});
