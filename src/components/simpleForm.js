import { useState } from 'react';
import { Prueba } from './prueba';
import './effects.css'
export const SimpleForm = () => {

    const [formState, setFormmState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    const handleInputChange = ({target}) => {
        setFormmState({
            ...formState,
            [target.name]: target.value
        });
    }
    return(
        <>
            <h1>Use Effect</h1>
            <hr />
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder='Escribe Nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder='Escribe Email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === '123') && <Prueba/>}
        </>
    );
}