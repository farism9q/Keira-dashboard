import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";

import { DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import FormField from "../../ui/FormField";

const inputStyle =
  "bg-gray-200 dark:bg-gray-800 border-solid border-[2px] border-slate-50/10 shadow-lg hover:border-slate-50/30 hover:bg-gray-500/20 transition-all duration-300 rounded-md px-2 py-1 focus:outline";

const CreateAdminForm = () => {
  const [chosenRole, setChosenRole] = useState("assistant");
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { signUp, isCreating } = useSignUp();

  function onSubmit(data) {
    signUp(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
      },
      { onSettled: () => reset() }
    );
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center space-y-3 my-4">
        <FormField error={errors?.name?.message}>
          <label htmlFor="name" className="text-1xl">
            Name
          </label>
          <input
            {...register("name", {
              required: "This field is required",
            })}
            type="text"
            className={inputStyle}
          />
        </FormField>

        <FormField error={errors?.email?.message}>
          <label htmlFor="email" className="text-1xl">
            Email
          </label>
          <input
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@keira.world$/,
                message:
                  "Invalid email format. Please enter email in the right format. Make sure it ends with @keira.world",
              },
            })}
            type="text"
            className={inputStyle}
          />
        </FormField>
        <FormField error={errors?.password?.message}>
          <label htmlFor="password" className="text-1xl">
            Password
          </label>
          <input
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs to have minimum 8 characters",
              },
            })}
            type="text"
            className={inputStyle}
          />
        </FormField>
      </div>

      {/* RADIO BUTTONS */}
      <div className="flex flex-col gap-6 bg-gray-700/10 dark:bg-gray-700/30 p-2 rounded-md w-[50%]">
        <div className="flex gap-2">
          <input
            {...register("role")}
            type="radio"
            name="role"
            value="assistant"
            id="assistant"
            className="w-4 h-4 mt-2"
            checked={chosenRole === "assistant"}
            onClick={() => setChosenRole("assistant")}
          />
          <>
            <label htmlFor="assistant">
              <h1 className="font-bold text-lg">Assistant</h1>
              <p>This role is allow only email responses</p>
            </label>
          </>
        </div>
        <div className="flex gap-2">
          <input
            {...register("role")}
            type="radio"
            name="role"
            value="admin"
            id="admin"
            className="w-4 h-4 mt-2"
            checked={chosenRole === "admin"}
            onClick={() => setChosenRole("admin")}
          />
          <>
            <label htmlFor="admin">
              <h1 className="font-bold text-lg">Admin</h1>
              <p>Will allow all actions</p>
            </label>
          </>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <DialogClose asChild>
          <Button disabled={isCreating} type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
        <Button disabled={isCreating} type="submit" variant={""}>
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateAdminForm;
