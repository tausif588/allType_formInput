import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddUser() {
    const nevigate=useNavigate()
    const [state, setState] = useState({
        fname: "",
        lname: "",
        gender: "",
        isChecked: false,
        carBrand: "",
    })
    const brands = ["Maruti", "BMW", "Audi", "Kwid", "SUV"];
    const handleChange = (e) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    const loadUser = async () => {
        await axios.post("http://localhost:3004/formdata",state);
        
    }
    const handleSubmit=(e)=>{
     e.preventDefault();
     loadUser();
     setTimeout(() => {
        nevigate("/")
     }, 1000);
    }
    const carBrandOptions = brands.map((brand, key) => (
        <>
            <option value={brand} key={key}>
                {brand}
            </option>
        </>
    )

    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="m-auto col-md-12 col-lg-6">
                        <h3 className="text-center">Add User Details</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fname" className="mb-2">First Name:</label>
                                <input name="fname" onChange={handleChange} type="text" className="form-control" id="fname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lname" className="mb-2">Last Name:</label>
                                <input name="lname" onChange={handleChange} type="text" className="form-control" id="lname" />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={state.gender === "male"}
                                        onChange={handleChange}
                                    />
                                    Male
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={state.gender === "female"}
                                        onChange={handleChange}
                                    />
                                    Female
                                </label>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="isChecked"
                                        checked={state.isChecked}
                                        onChange={handleChange}
                                    />
                                    Is Checked?
                                </label>
                            </div>
                            <div className="mb-3">
                                <label>
                                    Car brand:<br />
                                    <select
                                        name="carBrand"
                                        value={state.carBrand}
                                        onChange={handleChange}
                                    >
                                        <option  disabled>
                                            --Pick a car brand--
                                        </option>
                                        {carBrandOptions}
                                    </select>
                                </label>
                            </div>
                            <button className="btn btn-outline-primary w-100 mt-3">Add Data</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser