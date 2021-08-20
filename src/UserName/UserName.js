import { useForm } from "react-hook-form";
import { store } from "../store";
import { changeName } from "./state/actions";
import { useDispatch } from "react-redux";

const UserName = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.name);
    /* store.dispatch(changeName(data.name)) */
    dispatch(changeName(data.name));
  };

  return (
    <>
      <h2>Set new name</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} type="text" />
        <button>Set</button>
      </form>
    </>
  );
};

export default UserName;
