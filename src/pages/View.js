import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';



const View = () => {
    const[user , setUser] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getsingalUser(id);
        }
    }, [id])


    const getsingalUser = async (id) => {
        const response = await axios.get(`http://localhost:7000/user/${id}`)
        if (response.status = 200) {
            setUser({ ...response.data[0] })
        }
    }
  return (
    <div >
        <div className="card">
            <div className="card-header">
                <h2>user Contact Detail</h2>
                <img src="https://image.shutterstock.com/image-illustration/business-man-icon-male-face-260nw-1118005304.jpg" width={150} height={150} alt="" />
            </div>
            <div className="container">
                <strong>Id : </strong>
                <span>{user && user.id}</span><br /><br />
                <strong>Name : </strong>
                <span>{user && user.name}</span><br /><br />
                <strong>Email : </strong>
                <span>{user && user.email}</span><br /><br />
                <strong>Contact : </strong>
                <span>{user && user.number}</span><br /><br />
            </div>
            <Link to="/"><button>Back Home Page</button></Link>
        </div>


    </div>
  )
}

export default View;