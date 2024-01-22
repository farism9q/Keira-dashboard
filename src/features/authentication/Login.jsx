import Heading from "../../ui/Heading";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <div className="m-auto gap-3 text-center py-5 px-32 text-black bg-slate-200 rounded-md shadow-md">
        <Heading header={"Login"} />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
