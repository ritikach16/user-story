import React, { useState, useEffect, ChangeEvent } from "react";
import MaleIcon from "@mui/icons-material/Male";
import WcIcon from "@mui/icons-material/Wc";
import FemaleIcon from "@mui/icons-material/Female";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ElderlyIcon from "@mui/icons-material/Elderly";
import Filter1Icon from "@mui/icons-material/Filter1";
import { SvgIconComponent } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "../atoms/Image";
import { Box } from "@mui/system";
import Form from "../molecules/Form";

const Register = () => {
  const [type, setType] = useState<boolean>(true);
  const [gen, setGen] = useState("");
  const [genImage, setGenImage] = useState<SvgIconComponent>(FemaleIcon);
  const [age, setAge] = useState<SvgIconComponent>(Filter1Icon);

  useEffect(() => {}, [genImage, age, gen]);

  const handleGender = (e: SelectChangeEvent) => {
    if (e.target.value === "female") {
      setGen("female");
      setGenImage(FemaleIcon);
    } else {
      setGen("male");
      setGenImage(MaleIcon);
    }
  };

  const handleHidden = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setType(false);
  };

  const handleAge = (e: SelectChangeEvent) => {
    if (parseInt(e.target.value) >= 50) {
      setAge(ElderlyIcon);
    } else if (parseInt(e.target.value) >= 18) {
      setAge(WcIcon);
    } else {
      setAge(ChildCareIcon);
    }
  };

  return (
    <Box sx={{ margin: "90px" }}>
      <Form
        Img={WcIcon}
        type={"text"}
        label={"Name"}
        hidden={false}
        onChange={(e) => handleHidden(e)}
        children={"Name"}
      />

      {type ? null : (
        <Box sx={{ margin: "20px" }}>
          <Form
            Img={age}
            type={"number"}
            label={"Age"}
            hidden={type}
            onChange={handleAge}
            children={"Age"}
          />
          <Box style={{ display: "flex", margin: "20px", padding: "10px" }}>
            <FormControl>
              <InputLabel id="select">Gender</InputLabel>
              <Select
                labelId="select"
                id="demo-simple-select"
                value={gen}
                label={"select your gender"}
                onChange={handleGender}
                sx={{width: "150px"}}
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{marginTop: "10px"}}>
              <Image Img={genImage} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Register;
