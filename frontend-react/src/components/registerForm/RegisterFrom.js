import { useState } from "react";

export default function RegisterForm() {
    const [inputs, setInputs] = useState([])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:3000/users/register',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(inputs)
            }
        )
        const data = await res.json();
        console.log(data.data)
    }


    return (
        <form
            className="formulario-register"
            action="/users/register"
            method="POST"
            name="formulario-registro"
            encType="multipart/form-data"
            onSubmit={handleSubmit}>
            <h2>Sign in</h2>

            <div className="input-control" id="input-control">
                <label className="label-header" htmlFor="name">Name</label>
                <input className="input-texto" type="text" id="name" name="name" placeholder="Name" onChange={handleChange} />
            </div>

            <div className="input-control" id="input-control">
                <label className="label-header" htmlFor="family-name">Family name</label>
                <input className="input-texto" type="text" id="family-name" name="family-name" placeholder="Family name" onChange={handleChange} />
            </div>

            <div className="input-control" id="input-control">
                <label className="label-header" htmlFor="username">Username</label>
                <input className="input-texto" type="text" id="username" name="username" placeholder="Username" onChange={handleChange} />
            </div>

            <div className="input-control" id="input-control">
                <label className="label-header" htmlFor="email">E-mail</label>
                <input className="input-texto" type="email" id="email" name="email" placeholder="Email" onChange={handleChange} />
            </div>



            {/* <div className="input-control image-preview-containter" id="input-control">
                <img alt="Foto de perfil" id="preview-usr-image"
                 className="preview-image-register" src="/img/users/default-user-image.png" />
                <label className="label-header image-upload-button">
                    Elija su imagen de perfil
                    <input className="input-usr-image" type="file" name="userfile" id="userfile" accept="'.jpg', '.jpeg' , '.png', '.gif'"/>      
                </label>
            </div> */}

            <div className="input-control" id="input-control">
                <label className="label-header" htmlFor="password">Password</label>
                <input className="input-texto" type="password" id="password" name="password" placeholder="password" onChange={handleChange} />
            </div>

            <div className="input-control" id="input-control">
                <label className="label-header" htmlFor="confirmPassword">Confirm password</label>
                <input className="input-texto" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} />
            </div>


            <div className="botones-register">
                <button type="submit"><p>Enviar</p></button>
                <button type="reset">Borrar</button>
            </div>
        </form>
    )
} 