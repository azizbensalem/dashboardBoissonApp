/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";

export default function dashboard() {
  return (
    <Card>
      <Title title="Welcome to BottleAR Admin" />
      <CardContent>Welcome to BottleAR Admin</CardContent>
    </Card>
  );
}
