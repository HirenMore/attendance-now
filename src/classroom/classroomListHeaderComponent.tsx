import Card from "@mui/material/Card";
import React, { ReactElement } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./classroom.scss";
const ClassroomListHeader = (props: any): ReactElement => {
  return (
    <>
      <div>
        <Card className={"classroom-header--container"}>
          <Grid
            container
            className="classroom-card"
            justifyContent="flex-end"
            spacing={2}
          >
            <Grid xs={3}>Id</Grid>
            <Grid xs={4}>Class Name</Grid>
            <Grid xs={5}> Option</Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
};

export default ClassroomListHeader;
