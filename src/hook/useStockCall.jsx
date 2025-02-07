import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, firmSuccess, stockSuccess } from "../features/stockSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const {axiosWithToken} = useAxios()

  //! useAxios Hook'u oluşturup axiosWithToken ile değiştirdim.
//   const { token } = useSelector((state) => state.auth);

//   const getFirms = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axios(`${BASE_URL}firms`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       console.log(data);
//       dispatch(firmSuccess(data));
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };

// const getFirms = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axiosWithToken.get("firms")
//       dispatch(firmSuccess(data));
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`)
      dispatch(stockSuccess({data, url}));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getStockData };
};

export default useStockCall;
