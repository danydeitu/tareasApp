import React, { useEffect, useReducer } from 'react';

import './App.css';
import { AddTarea } from './components/AddTarea';
import { ListTareas } from './components/ListTareas';
import { tareasReducer } from './reducers/tareasReducer';


const init = () => {

  return JSON.parse(localStorage.getItem('tareas')) || []
}

function App() {

  const [tareas, dispatch] = useReducer(tareasReducer, [], init);



  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
   
  }, [tareas]);


  const handleAdd = (nuevaTarea) => {

    const agregarTarea = {
      type : 'agregar',
      payload : nuevaTarea
    }

    dispatch(agregarTarea)
  }


  const handleDelete = (id) => {

    /* accion de borrar */
    const borrarTarea = {
      type : 'borrar',
      payload : id
    }

    dispatch(borrarTarea)

  }

  const handleUpdate = (id) => {

    /* accion de actualizar */
    const actualizarTarea = {
      type : 'actualizar',
      payload : id
    }

    dispatch(actualizarTarea)

  }

  return (
    <div>
      <h1>Tareas App</h1>
      <hr />
      <h4>Total tareas: {tareas.length}</h4>
      <hr />
      <div className='row'>

        <div className='col-7'>
          <ListTareas
            tareas = {tareas}
            handleDelete = {handleDelete}
            handleUpdate = {handleUpdate}
          />
        </div>
        <div className='col-5'>
            <AddTarea 
              handleAdd = {handleAdd}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
