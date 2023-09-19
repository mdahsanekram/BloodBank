import React, { useRef, useState } from 'react'
import TextValidator from '../../components/partial/TextValidator';
import { ValidatorForm } from 'react-form-validator-core';

export default function SignUp() {
    const formRef = useRef();
    const [formData, setFOrmData] = useState({
        name: "",
        role: "",
        email: "",
        password: "",
        phone: "",
        organisationName: "",
        address: "",
        hospitalName: "",
        website:""
    })

    const { name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website } = formData

    const handleOnChange = (e) => {
        setFOrmData({ ...formData, ...{ [e.target.name]: e.target.value } })
    }
const handleSubmit=()=>{
    
}
    return (
        <ValidatorForm
        ref={formRef}
        onSubmit={handleSubmit}
    >
            {(role === "admin" || role === "donar") && 
            <label>Admin
                <TextValidator
                    type="text"
                    name={"name"}
                    value={name}
                    onChange={handleOnChange}
                /></label>
            }
            {role === "organisation" && (
                <TextValidator
                    type={"text"}
                    name={"organisationName"}
                    value={organisationName}
                    onChange={handleOnChange}
                />
            )}
            {role === "hospital" && (
                <TextValidator
                    type={"text"}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={handleOnChange}
                />
            )}

            <TextValidator
                type={"text"}
                name={"email"}
                value={email}
                onChange={handleOnChange}
            />
            <TextValidator
                type={"password"}
                name={"password"}
                value={password}
                onChange={handleOnChange}
            />
            <TextValidator
                type={"text"}
                name={"website"}
                value={website}
                onChange={handleOnChange}
            />
            <TextValidator
                type={"text"}
                name={"address"}
                value={address}
                onChange={handleOnChange}
            />
            <TextValidator
                type={"text"}
                name={"phone"}
                value={phone}
                onChange={handleOnChange}
            />
        </ValidatorForm>
    );
}
