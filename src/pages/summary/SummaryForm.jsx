import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function SummaryForm() {
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="right"
        overlay={popover}
      >
        <span style={{ color: "blue" }}>Terms</span>
      </OverlayTrigger>
      .
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          label={checkboxLabel}
          onChange={() => {
            setButtonEnabled(!buttonEnabled);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!buttonEnabled}>
        Zamów
      </Button>
    </Form>
  );
}
