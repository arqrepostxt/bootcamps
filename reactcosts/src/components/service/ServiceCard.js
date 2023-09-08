import styles from '../project/ProjectCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import { useState } from 'react';


function ServiceCard({id, name, cost, description, handleRemove, editService}) {

    const [editedName, setEditedName] = useState(name);
    const [editedDescription, setEditedDescription] = useState(description);

    
    const [editMode, setEditMode] = useState(false);


    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    };

  

    function handleEdit() {
        setEditMode(true);
      }
      
      function handleSave() {
        editService(id, editedName, editedDescription);
        setEditMode(false);
      }

      
  

      const handleChange = (e) => {
        setEditedName(e.target.value);
      };

      return (
        <div className={styles.project_card}>
          {editMode ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={handleChange}
              />
               <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              
              <button onClick={handleSave}>Salvar</button>
            </>
          ) : (
            <>
              <h4>{name}</h4>
              <p>
                <span>Custo total:</span> R$ {cost}
              </p>
              <p>{description}</p>
              <div className={styles.project_card_actions}>
                <button onClick={remove}>
                  <BsFillTrashFill /> Excluir
                </button>
                <button onClick={handleEdit}>
                  <BsPencil /> Editar
                </button>
              </div>
            </>
          )}
        </div>
      );
      
}

export default ServiceCard