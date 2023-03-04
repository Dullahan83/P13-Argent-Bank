import axios from "axios";
import { store } from "../Redux/Store";
// import { login, retrieveUserInfos } from "../Redux/Slices/UserSlice";
//login

// export async function Login(url: string, data: object) {
//    await axios
//       .post(`${url}/login`, data)
//       .then((res) => {
//          const { token } = res.data.body;
//          store.dispatch(login(token));
//          getProfile(url, token);
//       })
//       .catch((err) => {
//          console.log(err);
//       });
// }
// //CreateUser

// //getProfile
// export function getProfile(url: string, token: string) {
//    axios
//       .post(
//          `${url}/profile`,
//          {},
//          { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((res) => {
//          const { body } = res.data;
//          store.dispatch(retrieveUserInfos(body));
//       })
//       .catch((err) => {
//          console.log(err);
//       });
// }
//UpdateProfile
