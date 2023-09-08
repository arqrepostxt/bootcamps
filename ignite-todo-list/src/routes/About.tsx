import React from "react";
import styles from "./About.module.css";
import globalStyles from "../styles/painting.module.css";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const About = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <div className={`${styles.container} ${theme === "dark" ? globalStyles.darkDescription : ""}`}>
      <h2 className={styles.heading}>About</h2>
      <p className={`${styles.description} ${theme === "dark" ? globalStyles.darkDescription : ""}`}>
        This is an intuitive to-do list web application with added features and design modifications.
        It is a fork of the original{" "}
        <a href="https://github.com/SpruceGabriela/ignite-todo-list">Ignite-todo-list</a> repository
        by Gabriela Pinheiro.
      </p>

      <h2 className={styles.heading}>Features</h2>
      <ul className={styles.list}>
        <li>Dark Mode Switcher: Toggle between light and dark themes effortlessly.</li>
        <li>Edit and Save Tasks Temporarily: Easily edit and save tasks temporarily within the application.</li>
        <li>Priority Setting for Tasks: Assign priority levels to stay organized.</li>
      </ul>

      <h2 className={styles.heading}>Technologies Used</h2>
      <ul className={styles.list}>
        <li>
          <a href="https://react-redux.js.org/">Redux</a>: State management library.
        </li>
        <li>
          <a href="https://nodejs.org/en/">Node.js</a>: Runtime environment for executing JavaScript code.
        </li>
        <li>
          <a href="https://pt-br.reactjs.org/">React</a>: JavaScript library for building user interfaces.
        </li>
        <li>
          <a href="https://www.typescriptlang.org/">TypeScript</a>: Superset of JavaScript with optional types.
        </li>
        <li>
          <a href="https://www.npmjs.com/package/gh-pages">Package gh-pages</a>: A package that helps deploy projects
          over GitHub Pages system.
        </li>
        <li>
          <a href="https://git-scm.com">Git</a>: Version control system.
        </li>
      </ul>

      <h2 className={styles.heading}>Credits</h2>
      <p className={styles.description}>
        This project is a modification of the original work by Gabriela Pinheiro.
      </p>
    </div>
  );
};

export default About;
