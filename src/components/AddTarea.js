import React from 'react';
import { useForm } from '../hooks/useForm';

export const AddTarea = ({ handleAdd }) => {

    const [{ descripcion }, handleInputChange, reset] = useForm({
        descripcion: ''
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        if (descripcion.trim().length < 1) {
            return
        }

        let nuevaTarea = {
            id: new Date().getTime(),
            descripcion,
            terminada: false
        }

        handleAdd(nuevaTarea)

        reset()

    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="descripcion"
                placeholder='Aprender...'
                autoComplete='off'
                className='form-control'
                value={descripcion}
                onChange={handleInputChange}
            />
            <button
                type='submit'
                className='btn btn-primary w-100 mt-2'
            >Agregar</button>
        </form>

    )
};
