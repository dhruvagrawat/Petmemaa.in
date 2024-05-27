import React, { useState } from "react";
import vector from "../../../../Assets/Feedback/Vector.webp";
import vector2 from "../../../../Assets/Feedback/Vector2.webp";

import {
  Container,
  Vector,
  LeftPane,
  MiddlePane,
  RightPane,
  Heading,
  SubText,
  TextBox,
  FeedbackBox,
  FeedbackBtn,
} from "./FeedbackElements";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submit = () => {
    let user = {
      name: name,
      message: message,
    };

    console.log(user);

    fetch(`http://216.48.185.242:8200/api/petServices`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user)
    })
    window.location.reload(true)

  };

  return (
    <>
      <Container>
        <LeftPane>
          <Vector src={vector2} />
        </LeftPane>
        <MiddlePane>
          <Heading>We're All Ears!</Heading>
          <SubText>Tell Us About Your Pet Experience</SubText>
          <TextBox
            type="text"
            id="name"
            placeholder="Pet parent’s name"
            value={name}
            onChange={nameHandler}
          />
          <FeedbackBox
            type="text"
            id="message"
            placeholder="Write your experience here..."
            value={message}
            onChange={messageHandler}
          />
          <br />
          <FeedbackBtn type="button" onClick={submit}>
            <h3>Share your feedback!</h3>
          </FeedbackBtn>
        </MiddlePane>
        <RightPane>
          <Vector src={vector} />
        </RightPane>
      </Container>
    </>
  );
};

export default Feedback;
