import { Link } from "react-router-dom";
import ButtonLoader from "../../components/buttons/ButtonLoader";
import InputIcons from "../../components/inputs/InputIcons";
import { APP_ASSETS } from "../../utils/assets";
import { PiPasswordBold } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useRef } from "react";
import { registerUser, signUser } from "../../apis/userApi";
import { logDatas } from "../../utils/functions";
import { useDispatch } from "react-redux";
import { login } from "../../setup/redux/slices/UserSlicer";
// cloud 9 - tubo
const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();

  const onLogin = (user) =>{
    signUser({
      email : user.email,
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
  
  const onRegisterUser = (e) =>{
    e.preventDefault();

    registerUser({
      name : nameRef.current.value,
      password : passwordRef.current.value,
      email : emailRef.current.value,
      confirmPassword : confirmPasswordRef.current.value
    }).then(res =>{
      logDatas(res,"Axios create user");
      if(res.status === 201){
        const user = res.data.user;
        onLogin(user);
      }else{
        throw new Error("User can not created");
      }
    }).catch(err =>{
      console.log(err);
    })
    
  }

  return (
    <form onSubmit={onRegisterUser} className="w-full min-h-[100vh] flex justify-center items-center p-4">
      <div className="p-3 rounded w-full max-w-[700px]">
        <div className="flex justify-between mb-6 mt-3 flex-col items-center">
          <div className="flex justify-center items-center mb-2">
          <img
            src={APP_ASSETS.logo}
            alt="logo blanc"
            className="h-[50px]"
          />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 shadow-lg px-3 py-5 rounded">
          <h3 className="font-bold uppercase text-2xl text-center my-4 w-full col-span-2">Sign Up</h3>
          <InputIcons required={true} ref={nameRef} placeholder="Your name" className="sm:col-span-2" />
          <InputIcons required={true} ref={emailRef} icon={<MdOutlineMarkEmailRead size={20}/>} placeholder="Your e-mail" className="sm:col-span-2" />
          <InputIcons required={true} ref={passwordRef} icon={<PiPasswordBold size={20}/>} type="password" placeholder="Your password" />
          <InputIcons required={true} ref={confirmPasswordRef} icon={<PiPasswordBold size={20}/>} type="password" placeholder="Confirm your password" />
          {/* <Link to="/home" className="sm:col-span-2 mt-3"> */}
          <ButtonLoader  className="bg-green-500 text-white rounded my-3 sm:col-span-2">
            Sign up now
          </ButtonLoader>
          {/* </Link> */}
          <Link to="/login" className="text-center col-span-2 block mt-4 text-blue-600">I have account...</Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
