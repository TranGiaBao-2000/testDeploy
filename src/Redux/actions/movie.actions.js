import Axios from "axios";
import { startLoading, stopLoading } from "./common.action";
export function getMovieListRequest() {
  return (dispatch) => {
    //call api
    //start loading
    dispatch(startLoading());
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
      .then((res) => {
        dispatch(getMovieListSuccess(res.data));
        //stop loading
        setTimeout(() => {
          dispatch(stopLoading());
        }, 500);
      })
      .catch((err) => {
        dispatch(getMovieListFail(err));
        //stop loading
        dispatch(stopLoading());
      });
  };
}

function getMovieListSuccess(movieList) {
  return {
    type: "GET_MOVIE_LIST_SUCCESS",
    payload: movieList,
  };
}

function getMovieListFail(err) {
  return {
    type: "GET_MOVIE_LIST_FAIL",
    payload: err,
  };
}

export function getMovieDetailRequest(movieCode) {
  return function (dispatch) {
    dispatch(startLoading());
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`
    )
      .then((res) => {
        dispatch(getMovieDetailSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getMovieDetailFail(err));
        dispatch(stopLoading());
      });
  };
}

function getMovieDetailSuccess(movieDetail) {
  return {
    type: "GET_MOVIE_DETAIL_SUCCESS",
    payload: movieDetail,
  };
}

function getMovieDetailFail(err) {
  return {
    type: "GET_MOVIE_DETAIL_FAIL",
    payload: err,
  };
}
