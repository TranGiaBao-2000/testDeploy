import { makeStyles } from "@material-ui/core";

const useStyele = makeStyles(() => ({
  //key:value
  chuaDat: {
    backgroundColor: "#00cec9",
    outline: "none !important",
    margin: "5px",
    "&:hover": {
      backgroundColor: "#81ecec",
    },
  },
  daDat: {
    backgroundColor: "#d63031",
    outline: "none !important",
    margin: "5px",
    "&:hover": {
      backgroundColor: "#ff7675",
    },
  },
  dangChon: {
    backgroundColor: "#e84393",
    outline: "none !important",
    margin: "5px",
    "&:hover": {
      backgroundColor: "#fd79a8",
    },
  },
}));
export default useStyele;
