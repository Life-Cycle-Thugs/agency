import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import WebDesign from "../../../public/assets/images/web-design.png";
import WebDevelopment from "../../../public/assets/images/web-development.png";
import UIUx from "../../../public/assets/images/ui-ux.png";

export default function ServiceCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image src={WebDesign} alt="WebDesign" width={300} height={194} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
