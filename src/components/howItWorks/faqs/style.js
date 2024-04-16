export const style = {
  faqs: { position: "relative" },
  head: {
    fontSize: { lg: "15px", xs: "13px" },
    fontWeight: "500",
    lineHeight: "1.31",
    letterSpacing: "0.96px",
    textAlign: "center",
    color: "#81808b",
    marginBottom: "28px",
  },
  title: {
    fontSize: { lg: "48px", xs: "32px" },
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "-0.5px",
    textAlign: "center",
    color: "#090a18",
    marginBottom: { lg: "100px", xs: "116px" },
    padding: "0 24px",
  },
  accor: {
    padding: { md: "0 240px", xs: "0 20px" },

    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      marginBottom: "36px",
      boxShadow: "none",
      "&::before": {
        opacity: "0.7",
        height: "2px",
        top: "-20px",
        backgroundImage: "linear-gradient(to right, #38b7ff, #d782ff)",
      },
    },
    "& .MuiAccordionSummary-content": {
      opacity: { lg: "0.57", xs: "1" },
      fontSize: { lg: "26px", xs: "20px" },
      fontWeight: "500",
      lineHeight: "1.2",
      letterSpacing: "normal",
      color: "#160221",
    },
    "& .MuiButtonBase-root": {
      gap: { lg: "100px", xs: "50px" },
      p: "0",
    },
  },
  border: {
    opacity: "0.7",
    height: "2px",
    backgroundImage: "linear-gradient(to right, #38b7ff, #d782ff)",
  },
};
