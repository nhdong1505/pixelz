import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import "./styles.scss";
import defaulImage from "../../image/default.png";

function ImageUploader() {
  // const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    // setFile(selectedFile);
    setImageUrl(imageUrl);
  };

  // const handleUpload = () => {};

  return (
    <Stack
      className="upload-image"
      direction={"row"}
      spacing={5}
      justifyContent={"start"}
    >
      {imageUrl ? (
        <div className="image">
          <img src={imageUrl} alt="Uploaded file" />
        </div>
      ) : (
        <div className="image">
          <img src={defaulImage} alt="Uploaded file" />
        </div>
      )}
      <Stack
        alignItems={"left"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <h4>User Photo</h4>
        <Stack spacing={1}>
          <p>The image must be at least 300X300 pixel</p>
          <Stack direction={"row"} spacing={2}>
            <label class="custom-file-upload">Adjust</label>
            <label class="custom-file-upload">
              <input type="file" onChange={handleImageChange} />
              Replace
            </label>
          </Stack>
        </Stack>
      </Stack>
      {/* <button onClick={handleUpload}>Upload</button> */}
    </Stack>
  );
}

export default ImageUploader;
