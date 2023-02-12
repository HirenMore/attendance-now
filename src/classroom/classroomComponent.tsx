import React, { ReactElement } from "react";
import { Badge, Card } from "react-bootstrap";
const Classroom = (props: any): ReactElement => {
  console.log(props);
  return (
    <>
      <Card>
        <h2>{props.classroom.name} </h2>
      </Card>
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
    </>
  );
};
export default Classroom;
