import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'

const Home = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        getUser();
    }, []);




    const getUser = async () => {
        const response = await axios.get("http://localhost:7000/users");
        if (response.status === 200) {
            setdata(response.data);
        }
    };


    const onDelete = async (id) => {
        if (window.confirm("Are you sure that tou wanted to delete that user record ")) {
            const response = await axios.delete(`http://localhost:7000/user/${id}`)
            if (response.status = 200) {
                toast.success(response.data);
                getUser();
            }
        }
    }


    console.log(data);
    return (
        <div className='table'>
            <h2 style={{ textAlign: "center" }}>Employee List</h2>
            <Link to="/add">
            <button style={{ marginLeft: "14%" }}>ADD ENTRY</button>
            </Link>
           
            <table className="styled-table">
                <thead className='table1'>
                    <tr style={{ border: "1px solid black" }}>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Email</th>
                        <th style={{ textAlign: "center" }}>contact</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className='btn btn-edit'>
                                            Edit
                                        </button>
                                    </Link>
                                    <button className='btn btn-delete' onClick={() => onDelete(item.id)}>Delete</button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className='btn btn-view'>
                                            view
                                        </button>
                                    </Link>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home