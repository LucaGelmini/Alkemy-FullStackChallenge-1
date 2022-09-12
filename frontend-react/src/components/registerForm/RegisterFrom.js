import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './registerForm.css'
import formValidation from "./utils/formValidation";

export default function RegisterForm() {
    const [inputs, setInputs] = useState([])
    const navigate = useNavigate();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const error = formValidation(name, value);

        if (error) {
            event.target.className = 'form-input-error'
            return
        }
        event.target.className = 'form-input-success'

        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = [...event.target]
            .map(e => formValidation(e.name, e.value))
            .filter(e => (e !== null && e !== undefined));
        if (event.target.password.value !== event.target.confirmPassword.value) {
            validationErrors.push("'confirmPassword' doesn't match with passowrd")
        }
        if (validationErrors.length > 0) {
            console.log([...event.target].map(e => formValidation(e.name, e.value)).filter(e => (e !== null && e !== undefined)))
            alert(
                validationErrors.reduce((prev, curr) => {
                    // Printable errors in alert.
                    if (!curr) return String(prev)
                    return String(prev) + '\n' + String(curr)
                })
            );
            return
        }
        const res = await fetch('http://localhost:3000/users/register',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(inputs)
            }
        );
        if (res.status >= 200 && res.status < 300) {
            const data = await res.json();

            console.log(data.data)
            navigate('/');
            return;
        }
        //user input error
        if ((res.status >= 400) && (res.status < 500)) {
            const data = await res.json();
            alert(data.errors);
            return;
        }

        //default error
        console.error(`Error status: ${res.status}`);
    }


    return (
        <div className="register-form-container">

            <form
                className="register-form"
                name="register-form"
                onSubmit={handleSubmit}>
                <h2>Sign in</h2>

                <input className="form-input" type="text" name="name" placeholder="Name" onChange={handleChange} />

                <input className="form-input" type="text" name="family-name" placeholder="Family name" onChange={handleChange} />

                <input className="form-input" type="text" name="username" placeholder="Username" onChange={handleChange} />

                <input className="form-input" type="email" name="email" placeholder="Email" onChange={handleChange} />



                {/* <div className="input-control image-preview-containter" id="input-control">
                <img alt="Foto de perfil" id="preview-usr-image"
                 className="preview-image-register" src="/img/users/default-user-image.png" />
                <label className="label-header image-upload-button">
                    Elija su imagen de perfil
                    <input className="input-usr-image" type="file" name="userfile" id="userfile" accept="'.jpg', '.jpeg' , '.png', '.gif'"/>      
                </label>
            </div> */}

                <input className="form-input" type="password" name="password" placeholder="password" onChange={handleChange} />

                <input className="form-input" type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} />


                <div className="botones-register">
                    <button type="submit"><p>Enviar</p></button>
                    <button type="reset">Borrar</button>
                </div>
            </form>
        </div>
    )
} 