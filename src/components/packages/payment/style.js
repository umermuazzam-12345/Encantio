export const style = {
  padding: {
    lg: "0 110px 110px 110px",
    md: "0 60px 60px 60px",
    sm: "0 30px 60px 30px",
    xs: "0 18px 110px 18px",
  },
  wrapper: {
    position: "relative",
    zIndex: "1",
    "&::before": {
      content: '""',
      borderRadius: "11px",
      position: "absolute",
      top: "0px",
      left: "0",
      right: "-0",
      bottom: "0px",
      zIndex: "-1",
      backgroundImage:
        "linear-gradient(357deg, rgba(215, 130, 255, 0) 76%, #d782ff 103%)",
      margin: "-2px",
    },
  },

  payment: {
    borderRadius: "10px",
    padding: { lg: "50px", xs: "44px" },
    textAlign: "center",
    backgroundColor: "#1e1630",
    "& .img": {
      marginBottom: "18px",
    },
    marginBottom: "80px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "normal",
    color: "#fff",
    marginBottom: "24px",
  },
  colorText: {
    fontWeight: "500",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "background-image":
      "linear-gradient(306deg, rgb(180 10 255 / 0%) 0%, #d782ff 0%)",
  },
  desc: {
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "1.59",
    letterSpacing: "normal",
    color: "#fff",
  },
  textBtm: {
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "1.11",
    letterSpacing: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    color: "#b5b5ba",
  },
};
