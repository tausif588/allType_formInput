import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditPage() {
    const {id}=useParams()
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
       const result= await axios.get(`http://localhost:3004/formData/${id}`);
        setState(result.data)
    }
   

    const handleSubmit=async(e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:3004/formData/${id}`,state);
     nevigate("/")
    }
    useEffect(()=>{
        loadUser();
    },[])
    const carBrandOptions = brands.map((brand, key) => (
        <>b
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
                                <input value={state.fname}  name="fname" onChange={handleChange} type="text" className="form-control" id="fname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lname" className="mb-2">Last Name:</label>
                                <input value={state.lname} name="lname" onChange={handleChange} type="text" className="form-control" id="lname" />
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
                                        <option disabled>
                                            --Pick a car brand--
                                        </option>
                                        {carBrandOptions}
                                    </select>
                                </label>
                            </div>
                            <button className="btn btn-outline-primary w-100 mt-3">Update Data</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPage