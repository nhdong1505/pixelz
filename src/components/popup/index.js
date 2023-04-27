import React, { useState } from "react";
// import các component còn lại
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import BillingInformation from "../billlingInformation";
import ContactInformation from "../contactInfomation";
import { LIST_MENU } from "../../common/constants";
import "./styles.scss";

function Popup() {
  const [selectedComponent, setSelectedComponent] = useState(0);
  const [activeMenu, setActiveMenu] = useState(0);
  const components = [<ContactInformation />, <BillingInformation />];

  const handleMenuClick = (index) => {
    setSelectedComponent(index);
    setActiveMenu(index);
  };

  return (
    <Grid container className="pop-up" spacing={1} columns={16}>
      <Grid item xs={6}>
        <Paper sx={{ maxWidth: "100%" }}>
          <MenuList className="menu">
            <div className="menu-title">Account</div>
            <Divider />
            {LIST_MENU.account.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  selected={activeMenu === index}
                  onClick={() => handleMenuClick(index)}
                >
                  <ListItemText>{item}</ListItemText>
                </MenuItem>
              );
            })}
          </MenuList>

          <MenuList className="menu">
            <div className="menu-title">Billing and Payment</div>
            <Divider />
            {LIST_MENU.billing.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  selected={activeMenu === index + LIST_MENU.account.length}
                  onClick={() =>
                    handleMenuClick(index + LIST_MENU.account.length)
                  }
                >
                  <ListItemText>{item}</ListItemText>
                </MenuItem>
              );
            })}
          </MenuList>
          <MenuList className="menu">
            <div className="menu-title">Setting</div>
            <Divider />
            {LIST_MENU.setting.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  selected={
                    activeMenu ===
                    index + LIST_MENU.account.length + LIST_MENU.billing.length
                  }
                  onClick={() =>
                    handleMenuClick(
                      index +
                        LIST_MENU.account.length +
                        LIST_MENU.billing.length
                    )
                  }
                >
                  <ListItemText>{item}</ListItemText>
                </MenuItem>
              );
            })}
          </MenuList>
        </Paper>
      </Grid>
      <Grid className="content" item xs={10}>
        {components[selectedComponent]}
        {components[selectedComponent]}
      </Grid>
    </Grid>
  );
}

export default Popup;
