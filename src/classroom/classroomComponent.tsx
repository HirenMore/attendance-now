import Card from "@mui/material/Card";
import React, { ReactElement, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Button } from "@mui/material";
import "./classroom.scss";
const Classroom = (props: any): ReactElement => {
  const [cardShadowDepth, setCardShadowDepth] = useState(1);
  const onMouseOver = () => setCardShadowDepth(3);
  const onMouseOut = () => setCardShadowDepth(1);
  return (
    <>
      <div>
        <Card
          className={"classroom-container"}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          sx={{ boxShadow: cardShadowDepth }}
        >
          <Grid
            container
            className="classroom-card"
            justifyContent="flex-end"
            spacing={2}
          >
            <Grid xs={3}>{props.classroom.id}</Grid>
            <Grid xs={4}>{props.classroom.name}</Grid>
            <Grid xs={5}>
              <Button variant="outlined"> Select</Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
};
export default Classroom;
