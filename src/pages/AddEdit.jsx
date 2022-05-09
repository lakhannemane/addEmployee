import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initilestate = {
    name:"",
   
}

const AddEdit = () => {

    const [state, setstate] = useState(initilestate)


    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getsingalUser(id);
        }
    }, [id])


    const getsingalUser = async (id) => {
        const response = await axios.get(`http://localhost:7000/user/${id}`)
        if (response.status = 200) {
            setstate({ ...response.data[0]})
        }
    }

    const navigate = useNavigate();


    const addContact = async (data) => {
        const response = await axios.post("http://localhost:7000/user", data)
        if (response.status === 200) {
            toast.success(response.data)
        }
    }

    const updateUser = async (data , id) => {
        const response = await axios.put(`http://localhost:7000/user/${id}`, data)
        if (response.status === 200) {
            toast.success(response.data)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state.name || !state.email || !state.number) {
            toast.error("please fill the each field")
        } else {
            if (!id) {
                addContact(state)
            } else {
                updateUser(state , id)
            }

            setTimeout(() => {
                navigate('/')
            }, 500);
        }

    }

    const handleInputChange = (e) => {
        // let {name , value} = e.target;
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    // console.log(state)

    return (
        <div style={{ marginTop: "100px" }}>
            <form action="" style={{ margin: "auto", padding: "15px", maxWidth: "40%", alignContent: "center" }} onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label> <br />
                <input type="text"
                    id="name"
                    name='name'
                    placeholder='Enter Name........'
                    onChange={handleInputChange}
                    value={state.name}
                />
                <br />

                <label htmlFor="">Email :</label> <br />
                <input type="text"
                    id="email"
                    name='email'
                    placeholder='Enter Email........'
                    onChange={handleInputChange}
                    value={state.email}
                />
                <br />


                <label htmlFor="">Number :</label><br />
                <input type="number"
                    id="number"
                    name='number'
                    placeholder='Enter Number........'
                    onChange={handleInputChange}
                    value={state.number}
                />
                <br /><br />
                <input type="submit" style={{width:"20%" , marginLeft:"150px"}} value={id ? "update " : "Add"} />
            </form>

        </div>
    )
}

export default AddEdit