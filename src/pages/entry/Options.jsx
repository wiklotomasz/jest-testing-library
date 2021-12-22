import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

function Options(props) {
  const { optionType } = props;
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const namePrefix = optionType === "scoops" ? "scoop" : "topping";

  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={`${item.name} ${namePrefix}`}
        imagePath={item.imagePath}
      />
    );
  });

  return <Row>{optionItems}</Row>;
}

export default Options;
