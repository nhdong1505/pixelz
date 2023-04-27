import React from "react";
import Stack from "@mui/material/Stack";
import "./styles.scss";
import GIcon from "../../image/g-icon.png";
import moment from "moment-timezone";
import Button from "@mui/material/Button";
import ImageUploader from "../upload";

function ContactInformation() {
  const timeZones = moment.tz.names();

  return (
    <Stack className="contact-information" spacing={3}>
      <h2 className="title">Contact Information</h2>
      <Stack direction={"row"}>
        <label className="label"></label>
        <Stack>
          <ImageUploader />
        </Stack>
      </Stack>
      <Stack
        className="stack-custome"
        direction={"row"}
        alignItems={"center"}
        textAlign={"left"}
      >
        <label className="label">
          <strong>Name</strong>
        </label>
        <input className="input-name" placeholder="Editorial Showcase" />
      </Stack>
      <Stack
        className="stack-custome"
        direction={"row"}
        alignItems={"center"}
        textAlign={"left"}
      >
        <label className="label">
          <strong>E-mail</strong>
        </label>
        <input placeholder="Mick+demo@pixel.com" disabled />
        <span className="edit">Change Email</span>
      </Stack>
      <Stack
        className="stack-custome"
        direction={"row"}
        alignItems={"center"}
        textAlign={"left"}
      >
        <label className="label">
          <strong>Password</strong>
        </label>
        <input type="password" value="Editorial Showcase" disabled />
        <span className="edit">Change Password</span>
      </Stack>
      <Stack
        className="stack-custome"
        direction={"row"}
        alignItems={"center"}
        textAlign={"left"}
      >
        <label className="label">
          <strong>Social</strong>
        </label>
        <Stack
          className="connect-google-btn"
          direction={"row"}
          alignItems={"center"}
          spacing={2}
        >
          <img src={GIcon} alt="g-icon" width={15} height={15} />
          <strong>Connect with Google</strong>
        </Stack>
      </Stack>
      <Stack
        className="stack-custome"
        direction={"row"}
        alignItems={"center"}
        textAlign={"left"}
      >
        <label className="label">
          <strong>Time zone</strong>
        </label>
        <select className="select-zone">
          {timeZones.map((tz) => (
            <option key={tz} value={tz}>
              {`(GMT${moment.tz(tz).format("Z")}) ${tz}`}
            </option>
          ))}
        </select>
      </Stack>
      <Stack
        className="stack-custome"
        direction={"row"}
        alignItems={"center"}
        textAlign={"left"}
      >
        <label className="label">
          <strong>Newsletter</strong>
        </label>
        <input type="checkbox" />
      </Stack>
      <Stack
        className="stack-custome"
        direction={"row"}
        alignItems={"center"}
        textAlign={"left"}
      >
        <label className="label"></label>
        <Button className="save-btn">
          <strong>Save Changes</strong>
        </Button>
      </Stack>
    </Stack>
  );
}

export default ContactInformation;
