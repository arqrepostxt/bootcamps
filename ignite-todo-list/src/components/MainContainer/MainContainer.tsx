import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "../../styles/MainContainer.module.css";
import globalStyles from "../../styles/painting.module.css";
import { useEffect } from "react";

import { addTask, Task } from "../../redux/taskSlice";
import TaskComponent from "../Task";

const MainContainer = () => {
  const todos = useSelector((state: RootState) => state.task.items);
  const counter = todos.filter((task) => task.isChecked === true).length;

  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = sessionStorage.getItem("tasks");
    if (savedTasks) {
      const parsedTasks: Task[] = JSON.parse(savedTasks);
      parsedTasks.forEach((task) => {
        // dispatch(addTask(task));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className={`${styles.main} `}>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.info}>
            <h3 className={`${styles.created} ${theme === "dark" ? globalStyles.mainCreatedText : ""}`}>
              Tarefas Criadas
            </h3>
            <span className={styles.counter}>{todos.length}</span>
          </div>
          <div className={`${styles.info} ${theme === "dark" ? globalStyles.vazio : ""}`}>
            <h3 className={`${styles.done} ${theme === "dark" ? globalStyles.done : ""}`}>Concluídas</h3>
            <span className={styles.counter}>{counter}</span>
          </div>
        </header>
        {todos.length > 0 ? (
          todos.map(({ id, name, isChecked, priority }) => (
            <TaskComponent key={id} name={name} id={id} isChecked={isChecked} priority={priority} />
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </section>
    </main>
  );
};

export default MainContainer;
