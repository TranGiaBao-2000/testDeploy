import { Button, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookingRequest } from "../../Redux/actions/booking.action";
import style from "./style";
import { postBookingRequest } from "../../Redux/actions/booking.action";
export default function Booking() {
  let danhSachGhe = useSelector((state) => state.booking.danhSachGhe);
  const { maLichChieu } = useParams();
  console.log(danhSachGhe);
  const classes = style();
  const handelBooking = () => {
    let danhSachVe = danhSachGhe.filter((ghe) => ghe.dangChon);
    danhSachGhe = danhSachGhe.map((ghe) => ({
      maGhe: ghe.maGhe,
      giaVe: ghe.giaVe,
    }));
    dispatch(postBookingRequest(maLichChieu, danhSachGhe));
  };
  const renderGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      return (
        <>
          <Button
            className={trangThaiGhe(ghe.daDat, ghe.dangChon)}
            onClick={() => {
              dispatch({
                type: "CHON_GHE",
                payload: ghe,
              });
            }}
          >
            {ghe.stt}
          </Button>
        </>
      );
    });
  };

  const trangThaiGhe = (daDat, dangChon) => {
    if (daDat) {
      return classes.daDat;
    } else {
      if (dangChon) return classes.dangChon;
      return classes.chuaDat;
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookingRequest(maLichChieu));
  }, []);
  return (
    <div>
      <Container>
        {renderGhe()}
        <div className="" style={{ width: "100%" }}>
          <Button
            color="secondary"
            style={{ margin: "20px auto" }}
            variant="contained"
            onClick={handelBooking}
          >
            Đặt vé
          </Button>
        </div>
      </Container>
    </div>
  );
}
