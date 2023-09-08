import { useState } from "react";
import Plus64 from "../../assets/Plus64";

import styles from "../../styles/NewTask.module.css";
import globalStyles from "../../styles/painting.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addTask, Task } from "../../redux/taskSlice";

import { v4 as uuid } from "uuid";


const NewTask = () => {
  const [value, setValue] = useState("");
  const theme = useSelector((state: RootState) => state.theme); // Retrieve theme from the store
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value.trim().length === 0) {
      alert("Error: write a task first!");
      return;
    }

    const newTask: Task = {
      id: uuid(),
      name: value,
      isChecked: false,
      priority: 1,
    };

    dispatch(addTask(newTask));
    setValue("");
  };

  const onEnterPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <section className={styles.container}>
      <input
        className={`${styles.newTask} ${
          theme === "dark" ? globalStyles.textBar : ""
        }`}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event?.target.value)
        }
        onKeyDown={onEnterPress}
      />
      <button
        className={`${globalStyles.lightNewTaskButton} ${
          theme === "dark" ? globalStyles.newTaskButtonDark : ""
        }`}
        onClick={onSubmit}
        disabled={value === ""}
      >
        {theme === "dark" ? <Plus64 appTheme="dark" /> : <Plus64 appTheme="light" />}
      </button>
    </section>
  );
};

export default NewTask;
