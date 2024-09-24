import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tareas')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.titulo} - {task.estado}
            {/* Botones para editar y eliminar */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
