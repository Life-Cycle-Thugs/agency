import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import Node from "../../../../public/assets/images/webdesign/node.png";
import Net from "../../../../public/assets/images/webdesign/net.png";
import React from "../../../../public/assets/images/webdesign/react.png";
import TypeScript from "../../../../public/assets/images/webdesign/typescript.png";
import ReactNative from "../../../../public/assets/images/webdesign/reactnative.png";
import AWS from "../../../../public/assets/images/webdesign/aws.png";
import Nest from "../../../../public/assets/images/webdesign/nest.png";
import Redux from "../../../../public/assets/images/webdesign/redux.png";

const WebDesignTechnology = () => {
  return (
    <div>
      <Typography
        variant="h2"
        style={{
          fontSize: "48px",
          lineHeight: "60px",
          fontWeight: 500,
          textAlign: "center",
          marginTop: 100,
          marginBottom: 50,
        }}
      >
        Technology that’s we use
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "80px", width: "290px" }}>
            <Image src={Node} alt="Node" width={290} height={80} />
          </div>
        </Grid>
        <Grid item xs={6} sm={2}></Grid>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "83px", width: "83px" }}>
            <Image src={Net} alt="Net" />
          </div>
        </Grid>
        <Grid item xs={6} sm={1}></Grid>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "83px", width: "245px" }}>
            <Image src={React} alt="React" />
          </div>
        </Grid>
        <Grid item xs={6} sm={1}></Grid>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "83px", width: "328px" }}>
            <Image src={TypeScript} alt="TypeScript" />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{marginTop:10}}>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "60px", width: "360px" }}>
            <Image src={ReactNative} alt="ReactNative" />
          </div>
        </Grid>
        <Grid item xs={6} sm={2}></Grid>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "95px", width: "155px" }}>
            <Image src={AWS} alt="AWS" />
          </div>
        </Grid>
        <Grid item xs={6} sm={1}></Grid>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "95px", width: "190px" }}>
            <Image src={Nest} alt="Nest" />
          </div>
        </Grid>
        <Grid item xs={6} sm={1}></Grid>
        <Grid item xs={6} sm={2}>
          <div style={{ height: "95px", width: "355px" }}>
            <Image src={Redux} alt="Redux" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WebDesignTechnology;
