import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlinePreview } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Employeepage() {

    const [userlist, updateuserlist] = useState([]);

    const myapi = () => {
        axios.get("https://dummyjson.com/users").then((d) => {
            console.log(d.data.users);
            updateuserlist(d.data.users)
        })
    }

    // const updatestatedata = ()=>{
    //     updateuserlist("kumar");
    // }

    useEffect(() => {
        myapi();
    }, [])


    return (
        // <div>Employeepage {userlist}
        //     <input type='button' value="update" onClick={updatestatedata}/>
        // </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <table class="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Age</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">BirthDate</th>
                                <th scope="col">Phone</th>
                                 <th scope="col">Profile P</th>
                                <th scope="col">Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {userlist.map((u)=>{
                                return(
                                     <tr>
                                <th scope="row">{u.id}</th>
                                <td>{u.username}</td>
                                <td>{u.age}</td>
                                <td>{u.email}</td>
                                 <td>{u.birthDate}</td>
                                  <td>{u.phone}</td>
                                  <td><img src={u.image} width={30} alt={u.id}/></td>
                                   <td>
                                    <Link to={`userdetails/`+u.id} className='btn btn-primary btn-sm'> <MdOutlinePreview/></Link>
                                      <Link to="" className='btn btn-warning btn-sm ms-2'> <FaUserEdit/></Link>
                                        <Link to="" className='btn btn-danger btn-sm ms-2'> <AiFillDelete/></Link>
                                   </td>
                            </tr>
                                )
                            })}

                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Employeepage