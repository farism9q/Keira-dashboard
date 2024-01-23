import { useState } from "react";
import { useLogin } from "./useLogin";

import { Button } from "../../components/ui/button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogging } = useLogin();

  function handleLogin(e) {
    e.preventDefault();

    login({
      email,
      password,
    });
  }

  return (
    <div className="flex justify-center items-center gap-3">
      <form className="flex flex-col gap-2 py-4 items-center rounded-md">
        <div className="flex justify-between gap-2">
          <label htmlFor="email" className="font-semibold text-[20px]">
            Email
          </label>
          <div className="flex justify-between gap-2 items-center">
            <input
              className="bg-white px-2 py-1 shadow-sm rounded-sm transition-all duration-150 focus:outline-none focus:ring focus:ring-zinc-400"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {false && (
              <span className="text-red-600 text-start mt-1">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between gap-2 items-center">
          <label htmlFor="password" className="font-semibold text-[20px]">
            Password
          </label>
          <div className="flex gap-2">
            <input
              className="bg-white px-2 py-1 shadow-sm rounded-sm transition-all duration-150 focus:outline-none focus:ring focus:ring-zinc-400"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {false && (
              <span className="text-red-600 text-start mt-1">
                This field is required
              </span>
            )}
          </div>
        </div>

        <Button className="bg-gray-500" onClick={handleLogin}>
          {!isLogging ? "LOGIN" : "..."}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
