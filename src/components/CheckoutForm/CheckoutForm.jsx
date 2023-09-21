import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };
        onConfirm(userData);
    };

    return (
        <div id="ContainerForm-div">
            <form id="ContainerForm" onSubmit={handleConfirm}>
                <label className="Label">
                    Nombre
                    <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label className="Label">
                    Teléfono
                    <input type="number" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className="Label">
                    Email
                    <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <div className="Label">
                    <button type="submit" className="button">Crear Orden</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
