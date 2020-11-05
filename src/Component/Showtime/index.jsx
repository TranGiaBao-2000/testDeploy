import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import format from "date-format";
import useStyle from "./styles";
import { useHistory } from "react-router-dom";
export default function ShowTimes() {
  const classes = useStyle();
  const showTimes = useSelector((state) => {
    return state.movie.movieInfo?.lichChieu;
  });

  const history = useHistory();
  console.log(showTimes);
  const renderShowTimes = () => {
    return showTimes?.map((showtime, index) => {
      return (
        <TableRow>
          <TableCell align="center">
            {showtime.thongTinRap.tenHeThongRap}
          </TableCell>
          <TableCell align="center">{showtime.thongTinRap.tenCumRap}</TableCell>
          <TableCell align="center">
            {format("dd/MM/yyyy", new Date(showtime.ngayChieuGioChieu))}
          </TableCell>
          <TableCell align="center">
            {format("hh:mm", new Date(showtime.ngayChieuGioChieu))}
          </TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.btnBooking}
              style={{ outline: "none" }}
              onClick={() => {
                //chuyển sg trang booking
                history.push(`/booking/${showtime.maLichChieu}`);
              }}
            >
              Dat ve
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Ten He Thong Rap</TableCell>
              <TableCell align="center">Ten Cum Rap</TableCell>
              <TableCell align="center">Ngay Chieu</TableCell>
              <TableCell align="center">Gio Chieu</TableCell>
              <TableCell align="center">Dat Ve</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderShowTimes()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
