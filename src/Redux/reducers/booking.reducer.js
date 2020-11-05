const innitialState = {
  danhSachGhe: [],
};

const bookingReducer = (state = innitialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "CHON_GHE": {
      const index = state.danhSachGhe.findIndex(
        (ghe) => ghe.maGhe === payload.maGhe
      );
      const gheMoi = {
        ...state.danhSachGhe[index],
        dangChon: !payload.dangChon,
      };
      state.danhSachGhe[index] = gheMoi;
      const danhSachGhe = [...state.danhSachGhe];
      return { ...state, danhSachGhe };
    }
    case "GET_BOOKING_SUCCESS":
      return { ...state, danhSachGhe: payload };
    default:
      return { ...state };
  }
};

export default bookingReducer;
