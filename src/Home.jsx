import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from './UserReducer'

function Home() {

    const users=useSelector((state)=>state.users)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleDelete=(id)=>{
        dispatch(deleteUser({
            id:id
        }))
    }
    
  return (
    <div className='container'>
        <h2>Crud App using Redux</h2>
        <button className='btn btn-success my-3' onClick={()=>navigate('/create')}>Create +</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((item)=>(
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>
                            <button onClick={()=>navigate(`/update/${item.id}`)} className='btn btn-sm btn-primary'>Edit</button>
                            <button onClick={()=>handleDelete(item.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home