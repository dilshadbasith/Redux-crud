import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'

function Update() {
    const {id}=useParams()
    const users=useSelector((state)=>state.users)
    const filtered=users.filter((item)=>item.id==id)
    const{name,email}=filtered[0]
    const [uname,setUname]=useState(name)
    const [uemail,setUemail]=useState(email)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate('/')

    }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Upadate User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={uname}
              placeholder="enter your name"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={uemail}
              placeholder="enter your email"
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update