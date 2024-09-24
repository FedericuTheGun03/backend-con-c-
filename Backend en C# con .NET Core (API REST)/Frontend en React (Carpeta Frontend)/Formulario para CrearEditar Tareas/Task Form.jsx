const TaskForm = ({ onSave }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { titulo, descripcion, estado: 'Pendiente' };
    axios.post('/api/tareas', task)
      .then(response => onSave())
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Título" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
      />
      <textarea 
        placeholder="Descripción" 
        value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} 
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
