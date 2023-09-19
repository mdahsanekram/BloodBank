import React, { useState } from 'react'

const SIgnUpDemo=() =>{
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

    return (
        <div>
            <h1>HHHh</h1>
        </div>
        // <>
        //     {(role === "admin" || role === "donar") && (
        //         <TextValidator
        //             labelText={"Name"}
        //             labelFor={"forName"}
        //             inputType={"text"}
        //             name={"name"}
        //             value={name}
        //             onChange={handleOnChange}
        //         />
        //     )}
        //     {role === "organisation" && (
        //         <TextValidator
        //             labelText={"Organisation Name"}
        //             labelFor={"fororganisationName"}
        //             inputType={"text"}
        //             name={"organisationName"}
        //             value={organisationName}
        //             onChange={handleOnChange}
        //         />
        //     )}
        //     {role === "hospital" && (
        //         <TextValidator
        //             labelText={"Hospital Name"}
        //             labelFor={"forHospitalName"}
        //             inputType={"text"}
        //             name={"hospitalName"}
        //             value={hospitalName}
        //             onChange={handleOnChange}
        //         />
        //     )}

        //     <TextValidator
        //         labelText={"email"}
        //         labelFor={"forEmail"}
        //         inputType={"email"}
        //         name={"email"}
        //         value={email}
        //         onChange={handleOnChange}
        //     />
        //     <TextValidator
        //         labelText={"Password"}
        //         labelFor={"forPassword"}
        //         inputType={"password"}
        //         name={"password"}
        //         value={password}
        //         onChange={handleOnChange}
        //     />
        //     <TextValidator
        //         labelText={"website"}
        //         labelFor={"forWebsite"}
        //         inputType={"text"}
        //         name={"website"}
        //         value={website}
        //         onChange={handleOnChange}
        //     />
        //     <TextValidator
        //         labelText={"Address"}
        //         labelFor={"forAddress"}
        //         inputType={"text"}
        //         name={"address"}
        //         value={address}
        //         onChange={handleOnChange}
        //     />
        //     <TextValidator
        //         labelText={"Phone"}
        //         labelFor={"forPhone"}
        //         inputType={"text"}
        //         name={"phone"}
        //         value={phone}
        //         onChange={handleOnChange}
        //     />
        // </>
    );
}

export default  SIgnUpDemo