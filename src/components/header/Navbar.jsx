import { Avatar, Box, Typography } from "@mui/material";
import { style } from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.png";
import rIcon from "../../assets/images/resouceArr.png";
import { useState } from "react";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const handleNavBar = () => {
    setNavBar((pre) => !pre);
  };
  return (
    <Box sx={style.wrapper}>
      <Box sx={style}>
        <Box sx={style.logo}>
          <Avatar src={logo} />
        </Box>
        {/* desktop navbar  */}
        <Box sx={style.navbar}>
          <Typography>Services</Typography>
          <Typography>Benifits</Typography>
          <Typography>Packages</Typography>
          <Typography>
            Resources{" "}
            <img src={rIcon} alt="" style={{ margin: "0 0 5px 5px" }} />
          </Typography>
        </Box>
        {/* mobile navbar  */}
        <MenuIcon className="hamburger" onClick={handleNavBar} />
        <Box sx={style.navbar} className={navBar ? "mobile_nav" : "hide_nav"}>
          <Typography>Services</Typography>
          <Typography>Benifits</Typography>
          <Typography>Packages</Typography>
          <Typography>
            Resources{" "}
            <img src={rIcon} alt="" style={{ margin: "0 0 5px 5px" }} />
          </Typography>
        </Box>
        <Box sx={style.bookBtn}>Book a free call</Box>
      </Box>
    </Box>
  );
};

export default Navbar;
