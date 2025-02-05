import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, logoutSuccess, registerSuccess, loginSuccess } from '../features/authSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useSelector((state)=>state.auth)
    const BASE_URL=import.meta.env.VITE_BASE_URL;
    //! REGISTER
    const register=async(userInfo)=>{
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(`${BASE_URL}users/`, userInfo)
            console.log(data)
            dispatch(registerSuccess(data))
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
        }
    };
    //! LOGOUT
    const logout=async()=>{
        dispatch(fetchStart())
        try {
            const {data} = await axios(`${BASE_URL}auth/logout`, {headers: {
                Authorization:`Token ${token}`
            }})
            dispatch(logoutSuccess())
            navigate("/")
        } catch (error) {
            dispatch(fetchFail())
        }
    };
    //! LOGİN
    const login = async (userInfo) => {
        dispatch(fetchStart())
        console.log(userInfo)
        try {
          const { data } = await axios.post(
            `${BASE_URL}auth/login`,
            userInfo
          );
          console.log("Loginde data",data)
          dispatch(loginSuccess(data))
          navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            
        }
      };
  return {register, logout, login}
};

export default useAuthCall