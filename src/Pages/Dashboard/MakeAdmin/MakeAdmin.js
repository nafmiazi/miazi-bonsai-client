import React, { useState } from 'react';
import {Alert, Form} from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://enigmatic-falls-65790.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <h4>Make An Admin</h4>
            <form onSubmit={handleAdminSubmit}>
                <div className="w-50 mx-auto text-start">
                    <Form.Floating>
                        <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder="Email"
                            className="border-0 border-bottom border-dark rounded-0"
                        />
                        <label htmlFor="floatingInputCustom">Email</label>
                    </Form.Floating>
                    <button type="submit" className="btn btn-primary mt-3">Make Admin</button>
                </div>
            </form>
            {success && <Alert variant="success" className="mt-3 w-50 mx-auto">Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;