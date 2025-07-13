import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';



function UserDetailspage() {
    const {id} = useParams();


    const [userlist, updateuserlist] = useState([]);
    const [userbank,updateuserbank]=useState({})

    const myapi = async () => {
        await axios.get(`https://dummyjson.com/users/${id}`).then((d) => {
            console.log(d.data);
            updateuserlist(d.data)
            updateuserbank(d.data.bank);
        })
    }

    useEffect(() => {
        myapi();
    }, [])




  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-4'>
                <img src={userlist.image} alt={userlist.id}/>
            </div>
            <div className='col-md-8'>
                <p className='m-0 h1'>UserName: {userlist.username}</p>
                <hr/>
                <p className='m-0 h2'>{userlist.gender}</p>
                <p className='m-0'>{userlist.email}</p>
                <p className='m-0'>{userlist.age}</p>
                <p className='m-0'>{userlist.birthDate}</p>
                <p className='m-0'>{userlist.phone}</p>
                <p className='m-0'>{userlist.role}</p>
                <p className='m-0'>{userlist.userAgent}</p>
                <p className='m-0'>{userlist.university}</p>
                <p className='m-0'>{userlist.height}</p>
                <fieldset className='border p-3'>
                    <legend className='border-bottom border-primary'>Bank Details</legend>
                    <p className='m-0'>{userbank.cardNumber}</p>
                    <p className='m-0'>{userbank.cardType}</p>
                    <p className='m-0'>{userbank.cardExpire}</p>
                    <p className='m-0'>{userbank.currency}</p>
                </fieldset>
                
            </div>
             

        </div>
    </div>
  )
}

export default UserDetailspage