import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="container ">
      <h2 className=" text-center my-5 about">FAQ</h2>
      <Accordion className="w-75 mx-auto mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are opening hours?</Accordion.Header>
          <Accordion.Body>
            From 9:30 am to 6:00 pm, Monday to Friday
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            where are your furnitures made of?
          </Accordion.Header>
          <Accordion.Body>
            We use local products to make our furniture .Also export materials
            to build furntiure locallu
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            can I add quantity while stocks up?
          </Accordion.Header>
          <Accordion.Body>Yes you can if you can login.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
