export const style = {
  partner: {
    padding: {
      lg: "120px 130px",
      xs: "150px 20px",
      md: "120px 90px",
      sm: "120px 70px",
    },
    textAlign: "center",
  },
  title: {
    fontSize: { lg: "48px", xs: "34px" },
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "-0.5px",
    color: "#090a18",
    marginBottom: { lg: "58px", xs: "80px" },
  },
  tags: {
    display: "flex",
    gap: { lg: "30px", xs: "20px" },
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: { md: "0 84px", xs: "0" },

    "& .MuiChip-root": {
      borderRadius: "12px",
      border: "solid 1px rgba(9, 10, 24, 0.2)",
      backgroundColor: "rgba(9, 10, 24, 0.04)",
      padding: { lg: "20px", xs: "16px" },
      "& .MuiChip-label": {
        color: "rgba(9, 10, 24, 0.4)",
        fontSize: { lg: "19px", xs: "15px" },
        fontWeight: "500",
        lineHeight: "1.08",
        letterSpacing: "normal",
        p: "0",
      },
    },
  },
};
