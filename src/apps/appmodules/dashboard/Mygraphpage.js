import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Mygraphpage() {

    const [userlist, updateuserlist] = useState([]);
    const [list, updatelist] = useState([]);
    const [ft,uft]=useState([]);
    

    const myapi = () => {
        axios.get("https://dummyjson.com/carts").then((d) => {
            console.log(d.data.carts);
            updateuserlist(d.data.carts);
            uft(d.data.carts);


            const a = d.data.carts.map((d) => {
                return d.id
            });
            updatelist(a);

        });

    }

    useEffect(() => {
        myapi();
    }, [])


const myopt = (e)=>{
    console.log(e.target.value);
    const b = ft.filter((d)=>{
        return d.id==e.target.value
    });

    updateuserlist(b);

}



    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <select className='form-select' onChange={myopt}>
                            <option hidden>select id</option>
                            {list.map((myid) => {
                                return <option key={myid}>{myid}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={userlist}>
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="discountedTotal" fill="#2bff00ff" />
                    <Bar dataKey="total" fill="#00eeffff" />
                     {/* <Bar dataKey="total" fill="#ff0000ff" /> */}
                </BarChart>
            </ResponsiveContainer>
        </Fragment>
    )
}

export default Mygraphpage