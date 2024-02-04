import Heading from "../../ui/Heading";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="bg-gray-400 h-screen flex flex-col justify-center items-center">
      <div className="m-auto gap-3 text-center py-5 px-32 text-black bg-gray-700 rounded-md shadow-md">
        <Heading header={"Login"} />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
