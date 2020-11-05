import axios from "axios";
import { startLoading, stopLoading } from "./common.action";
export const getBookingRequest = (maLichChieu) => {
  // async hàm chịu xử lý các tác vụ bất đồng bộ
  return async (dispatch) => {
    //   call api
    dispatch(startLoading());
    try {
      //request
      //   await là đợi các tác vụ bất đồng bộ thực hiện xg
      const res = await axios.get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
      );
      console.log(res);
      if (res.status === 200) {
        // dispatch lên reducer
        dispatch(getBookingSuccess(res.data.danhSachGhe));
        dispatch(stopLoading());
      }
      console.log(res);
      //success
    } catch (error) {
      //fail
      console.log(error);
      dispatch(getBookingFail());
    }
  };
};

const getBookingSuccess = (data) => {
  return {
    type: "GET_BOOKING_SUCCESS",
    payload: data,
  };
};

const getBookingFail = (err) => {
  return {
    type: "GET_BOOKING_FAIL",
    payload: err,
  };
};

export function postBookingRequest(maLichChieu, danhSachVe) {
  return async function (dispatch) {
    try {
      //get local store
      const user = JSON.parse(localStorage.getItem("user"));

      // call api
      axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((rs) => console.log(rs.data))
        .catch((err) => console.log(err));
    } catch (error) {}
  };
}
