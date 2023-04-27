import React, { useState } from "react";
// import các component còn lại
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from '@mui/material/Stack';
import './styles.scss'

function BillingInformation() {
  const [selectedComponent, setSelectedComponent] = useState(0);

  const components = [];

  const handleMenuClick = (index) => {
    setSelectedComponent(index);
  };

  return (
    <Stack>
        BillingInformation
    </Stack>
  );
}

export default BillingInformation;
