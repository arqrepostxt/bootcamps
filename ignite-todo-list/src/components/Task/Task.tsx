import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Trash from "../../assets/Trash";
import styles from "../../styles/Task.module.css";
import globalStyles from "../../styles/painting.module.css";
import { deleteTask, updateTask } from "../../redux/taskSlice";
import { toggleCheck , setPriority } from "../../redux/taskSlice";


interface TaskProps {
  name: string;
  id: string;
  isChecked: boolean;
  priority: number;
}

const Task: React.FC<TaskProps> = ({ name, id, isChecked, priority }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedPriority, setEditedPriority] = useState(priority);

  

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  
  
  const handleDelete = () => {
    dispatch( deleteTask({ id: id}) );
  };

  const handleSave = () => {
    dispatch(
      updateTask({
        id: id,
        name: editedName,
      })
    );
    dispatch(
      setPriority({
        id: id,
        priority: editedPriority,
      })
    )
    setIsEditing(false);
  };
  
  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPriority = Number(event.target.value);
    setEditedPriority(newPriority);
  };

  const handleToggleCheck = () => {
    dispatch(
      toggleCheck({
        id: id
      })
    );
  };

  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={id.toString()}
          name={name}
          onChange={handleToggleCheck}
          checked={isChecked}
        />
        <label className={styles.checkboxLabel} htmlFor={id.toString()}></label>
        {isEditing ? (
        <input
          className={styles.editInput}
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      ) : (
        <p className={styles.name}>{name}</p>
      )}
       <select className={globalStyles.priority} value={editedPriority} onChange={handlePriorityChange}>
          <option className={globalStyles.option} value={1}>🔺</option>
          <option className={globalStyles.option} value={2}>🔸</option>
          <option className={globalStyles.option} value={3}>🔻  </option>
        </select>
      </div>
      <div>
      {isEditing ? (
        <button className={globalStyles.emojiButton} onClick={handleSave}>
          💾
        </button>
      ) : (
        <>
      <button className={globalStyles.emojiButton} onClick={handleEdit}>
      ✏️
          </button>
      <button className={`${styles.delete} ${globalStyles.darkTrashCan} `} onClick={handleDelete}>
        <Trash />
      </button>
      </>
      )}
    </div>
    </div>
  );
};

export default Task;
