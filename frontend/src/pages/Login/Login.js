import { Link } from "react-router-dom";
import ButtonLoader from "../../components/buttons/ButtonLoader";
import InputIcons from "../../components/inputs/InputIcons";
import { APP_ASSETS } from "../../utils/assets";
import { PiPasswordBold } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useRef } from "react";
import { logDatas } from "../../utils/functions";
import { signUser } from "../../apis/userApi";
import { useDispatch } from "react-redux";
import { login } from "../../setup/redux/slices/UserSlicer";

// cloud 9 - tubo
const Login = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();

  const onSignUser = (e) =>{
    e.preventDefault();
      signUser({
        email : emailRef.current.value,
        password : passwordRef.current.value
      }).then(res =>{
        if(res.status === 200){
        logDatas(res.data.data, "Sign function");
        dispatch(login(res.data.data));
        }else{
          throw new Error("User not connected create a counte");
        }
      }).then( () =>{
      window.location.href = "/";
    }).catch(err =>{
      console.log(err);
    })
    }
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center p-4">
      <form onSubmit={onSignUser} className="p-3 rounded w-full max-w-[700px]">
        <div className="flex justify-between mb-6 mt-3 flex-col items-center">
          <div className="flex justify-center items-center mb-2">
          <img
            src={APP_ASSETS.logo}
            alt="logo blanc"
            className="h-[50px]"
          />
          </div>
        </div>
        <div className="shadow-xl px-2 py-4">
          <h3 className="font-bold uppercase text-2xl py-3 text-center">Login</h3>
          <InputIcons ref={emailRef} icon={<MdOutlineMarkEmailRead size={20}/>} placeholder="Your e-mail" className="my-4" />
          <InputIcons ref={passwordRef} icon={<PiPasswordBold size={20}/>} placeholder="Your password" className="my-4"/>
          {/* <Link to="/home" className="mt-3"> */}
          <ButtonLoader className="bg-green-500 mt-3 text-white rounded">
          Sign up now
          </ButtonLoader>
          {/* </Link> */}
          <Link to="/signup" className="text-center block mt-4 text-blue-600">I want create account...</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
