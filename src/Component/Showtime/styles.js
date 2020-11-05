import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme) => {
  return {
    btnBooking: {
      backgroundColor: theme.palette.newColor,
      outline: "none",
      "&:hover": {
        backgroundColor: theme.palette.newColor,
        outline: "none",
      },
    },
  };
});

export default useStyle;
