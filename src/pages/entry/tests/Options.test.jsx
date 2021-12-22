import { render, screen } from "../../../test-utils/testing-library-utilsw";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop/i });

  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images

  const altText = scoopImages.map((elem) => {
    return elem.alt;
  });

  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", { name: /topping/i });

  expect(toppingImages).toHaveLength(3);

  const altTexts = toppingImages.map((elem) => elem.alt);

  expect(altTexts).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
