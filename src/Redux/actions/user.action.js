import Axios from "axios";
import { startLoading, stopLoading } from "../actions/common.action";
export function loginRequest(user, history) {
  return (dispatch) => {
    dispatch(startLoading());
    //call api
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    )
      .then((res) => {
        //chuyển về trg trc
        // history.goBack();
        // về 1 đường dẫn cho trc
        history.push("/");
        // lưu store
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res);
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
}
