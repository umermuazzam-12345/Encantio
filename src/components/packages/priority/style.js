export const style = {
  padding: {
    lg: "0 130px 30px 130px",
    md: "0 70px 30px 70px",
    sm: "0 30px 30px 30px",
    xs: "0 18px 30px 18px",
  },

  "& .gradient": {
    position: "relative",
    zIndex: "1",
    "&::before": {
      content: '""',
      borderRadius: "11px",
      position: "absolute",
      top: "0px",
      left: "0",
      right: "0",
      bottom: "0px",
      zIndex: "-1",
      backgroundImage:
        "linear-gradient(338deg, rgba(255, 255, 255, 0.1) 60%, rgb(255 255 255) 100%)",
      margin: "-2px",
    },
  },

  priority: {
    // opacity: { sm: "0.3", xs: "none" },
    borderRadius: "11px",
    backgroundColor: "#171826",
    padding: "100px 32px 80px 32px",
    textAlign: "center",
  },
  title: {
    fontSize: { lg: "48px", xs: "38px" },
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "-0.5px",
    color: "#fff",
    marginBottom: "24px",
  },
  txtColor: {
    backgroundImage:
      "linear-gradient(to right, #38b7ff, #d782ff), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
    color: "rgba(0, 0, 0, 0)",
    "-webkit-background-clip": "text",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
  },
  desc: {
    fontSize: "18px",
    fontStyle: "normal",
    lineHeight: "1.48",
    letterSpacing: "normal",
    color: "#b5b5ba",
    marginBottom: "48px",
    padding: "0 32px",
  },
  btn: {
    borderRadius: "10px",
    boxShadow: "inset 0 -4px 0 0 #e8e6e9",
    backgroundColor: " #fff",
    fontSize: "17px",
    fontWeight: "500",
    lineHeight: "1.09",
    letterSpacing: "normal",
    color: "#090a18",
    padding: { sm: "10px 44px 28px", xs: "20px 46px" },
    display: "inline-block",
  },
};
