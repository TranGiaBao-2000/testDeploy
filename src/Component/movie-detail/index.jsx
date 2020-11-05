import React, { useEffect, useState } from "react";
import { getMovieDetailRequest } from "../../Redux/actions/movie.actions";
import { useDispatch, useSelector } from "react-redux";
import ShowTimes from "../../Component/Showtime";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
export default function MovieDetail() {
  const load = useSelector((state) => state.common.isLoading);
  let [start, setStart] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params.movieCode);
  const movieCode = params.movieCode;
  //chạy khi render chạy lại
  useEffect(function () {
    //dispatch action , call api, tương tác dom
    console.log("useEffect");
    return function () {
      //dọn dẹp các tác vụ như clear Interval,clear time out
    };
  });

  //chỉ chạy 1 lần khi component đc gọi
  useEffect(function () {
    // console.log("chạy 1 lần duy nhất");
    // //dispatch action , call api, tương tác dom
    // console.log("useEffect");
    dispatch(getMovieDetailRequest(movieCode));
    return function () {
      //dọn dẹp các tác vụ như clear Interval,clear time out
    };
  }, []);

  useEffect(
    function () {
      //dispatch action , call api, tương tác dom
      console.log("Chạy khi start thay đổi");
      return function () {
        //dọn dẹp các tác vụ như clear Interval,clear time out
      };
    },
    [
      //khi giá trị thay đổi
      start,
    ]
  );

  return (
    <div>
      {/* <p>{start}</p>
      <button
        onClick={() => {
          setStart(start++);
        }}
      >
        tăng sao
      </button> */}
      {load ? <CircularProgress /> : <ShowTimes />}
    </div>
  );
}
