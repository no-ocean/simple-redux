import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const name = useSelector((state) => state.name);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setTasks((tasks) => [...tasks, data.task]);
  };

  const items = tasks.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  return (
    <>
      <h1>{name}'s tasks:</h1>
      <form className="mb-30" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("task")} type="text" />
        <button>Add</button>
      </form>
      <ul>{items}</ul>
    </>
  );
};

export default TaskList;
