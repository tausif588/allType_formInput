import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Home() {
    const [value, setValue] = useState()
    const loadUser = async () => {
        const result = await axios.get("http://localhost:3004/formdata");
        setValue(result.data)
    }
    const dlt=async(id)=>{
   await axios.delete(`http://localhost:3004/formdata/${id}`);
   loadUser()
    }

    useEffect(() => {
        loadUser()
    }, [])
console.log(value)
    return (
        <div className="container">
            <div className="row">
                <div className="m-auto col-md-10 col-lg-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Checked</th>
                                <th scope="col">Car Brand</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                value && value.map((e, i) => {
                                    return <>
                                        <tr>
                                            <th scope="row">{e.id}</th>
                                            <td>{e.fname}</td>
                                            <td>{e.lname}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.isChecked ? 'Its Checked' : 'Its not Checked'}</td>
                                            <td>{e.carBrand}</td>
                                            <td>
                                                <button onClick={()=>dlt(e.id)} className="btn btn-danger">Delete</button>
                                                <Link to={`edit/${e.id}`} className="btn btn-success ms-3">Editt</Link>
                                            </td>
                                        </tr>
                                    </>
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Home