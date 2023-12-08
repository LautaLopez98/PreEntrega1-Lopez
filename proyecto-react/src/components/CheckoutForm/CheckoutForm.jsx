import { useState } from "react";
import estilos from "../CheckoutForm/CheckoutForm.module.css"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
            <div className={estilos.formContainer}>
                <form className= {estilos.form} onSubmit={handleConfirm}>
                    <label className={estilos.formLabel}>
                        Nombre
                        <input
                            type="text" required className={estilos.formInput}
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </label>
                    <label className={estilos.formLabel}>
                        Telefono
                        <input
                            type="text" required className={estilos.formInput}
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                    </label>
                    <label className={estilos.formLabel}>
                        Correo Electrónico
                        <input
                            type="text" required className={estilos.formInput}
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                    <div>
                        <button type="submit" className={estilos.formButton}>Crear Orden</button>
                    </div>
                </form>
            </div>
    )
}

export default CheckoutForm