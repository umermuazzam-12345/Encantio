export const style = {
  services: {
    textAlign: "center",
    margin: { lg: "0 154px", md: "0 90px", sm: "0 40px", xs: "0 18px" },
  },
  head: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.31",
    letterSpacing: "0.96px",
    color: "#81808b",
    marginTop: "60px",
  },
  title: {
    fontSize: { lg: "48px", md: "40px", sm: "36px", xs: "34px" },
    fontWeight: "500",
    padding: "0 20px",
    lineHeight: "1",
    letterSpacing: "-0.5px",
    color: "#090a18",
    marginTop: "28px",
  },
  buttons: {
    display: "flex",
    flexDirection: { sm: "row", xs: "column" },
    alignItems: { sm: "center", xs: "normal" },
    justifyContent: "center",
    gap: { lg: "24px", md: "20px", sm: "18px", xs: "15px" },
    marginTop: { lg: "64px", md: "44px", sm: "30px", xs: "64px" },
    padding: { sm: "0", xs: "0 6rem" },
  },
  btn: {
    borderRadius: "10px",
    border: "solid 1px #090a18",
    backgroundColor: " rgba(255, 255, 255, 0)",
    fontSize: { lg: "17px", md: "15px", sm: "14px", xs: "17px" },
    fontWeight: "500",
    lineHeight: "1.06",
    letterSpacing: "normal",
    color: "#090a18",
    // width: { lg: "9rem", md: "8rem", sm: "7rem", xs: "9rem" },
    // height: { lg: "3.5rem", sm: "3rem", xs: "3.5rem" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: {
      lg: "16px 28px",
      md: "14px 24px",
      sm: "12px 20px",
      xs: "16px 0",
    },
    "&:nth-child(1)": {
      backgroundColor: "#090a18",
      color: "#fff",
      "&:hover": {
        color: "#090a18",
        backgroundColor: "transparent",
        cursor: "pointer",
      },
    },
  },

  card: {
    marginTop: { lg: "60px", md: "44px", sm: "30px", xs: "60px" },
    display: "flex",
    flexDirection: { sm: "row", xs: "column-reverse" },
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    border: "3px solid #f2f2f2",
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: { lg: "40px", md: "20px", sm: "10px", xs: "30px" },
    gap: { lg: "30px", md: "20px", sm: "10px" },
  },
  left: {
    padding: { lg: "20px", sm: "10px" },
    textAlign: "left",
    flex: "1",
    title: {
      fontSize: { lg: "36px", md: "28px", sm: "24px", xs: "30px" },
      fontWeight: "500",
      lineHeight: "1.2",
      letterSpacing: "normal",
      color: "#090a18",
    },
    desc: {
      fontSize: { lg: "19px", md: "17px", sm: "16px", sm: "15px" },
      fontWeight: "normal",
      lineHeight: "1.46",
      letterSpacing: "normal",
      color: "rgba(9, 10, 24, 0.7)",
      marginTop: { lg: "15px", md: "13px", sm: "11px", xs: "13px" },
      marginBottom: { lg: "34px", md: "24px", sm: "18px", xs: "32px" },
      paddingRight: { sm: "0 ", xs: "20px" },
    },
    btn: {
      borderRadius: "8px",
      border: "solid 1px #ccccd1",
      backgroundColor: "rgba(9, 10, 24, 0.04)",
      padding: "9px 15px",
      fontSize: { lg: "14px", md: "12px", sm: "11px", xs: "14px" },
      fontWeight: "500",
      lineHeight: "1.06",
      letterSpacing: "normal",
      color: "rgba(9, 10, 24, 0.4)",
      display: "inline-block",
      marginRight: "16px",
      marginBottom: { lg: "16px", md: "12px", sm: "10px", xs: "16px" },
    },
    figma: {
      borderRadius: "8px",
      border: "solid 1px #ccccd1",
      backgroundColor: "rgba(9, 10, 24, 0.04)",
      padding: { lg: "8px 15px", md: "7px 13px", xs: "7px 11px" },
      fontSize: { lg: "14px", md: "12px", sm: "11px", xs: "14px" },
      fontWeight: "500",
      lineHeight: "1.06",
      letterSpacing: "normal",
      color: "rgba(9, 10, 24, 0.4)",
      marginRight: "16px",
      marginBottom: "16px",
      display: "inline-flex",
      gap: "4px",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      top: "4px",
    },
    webFlow: {
      borderRadius: "8px",
      border: "solid 1px #ccccd1",
      backgroundColor: "rgba(9, 10, 24, 0.04)",
      padding: { lg: "6px 15px", md: "5px 13px", xs: "4px 11px" },
      fontSize: { lg: "14px", md: "12px", sm: "11px", xs: "14px" },
      fontWeight: "500",
      lineHeight: "1.06",
      letterSpacing: "normal",
      color: "rgba(9, 10, 24, 0.4)",
      marginRight: "16px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: "fit-content",
    },
  },
  right: {
    flex: "1",
    marginBottom: { sm: "0", xs: "50px" },
  },
};
