import React from 'react'

function Contact() {
const name = "ravi singh";
let age=80;

return(
    <div>
        <h1>this is contact page</h1>
        <h1>{name}</h1>
        <h1>{"this is text"}</h1>
        <h1>{8800}</h1>
        <h1>{50+90}</h1>
        <h1>{<h4>this is element</h4>}</h1>
        <h1>{age>=50? "more age" : "less age"}</h1>
        <h1>{age>=50? <h5>this is pass element inside condtion</h5> : "less age"}</h1>
        <h1 style={{color:'red',backgroundColor:'orange',fontSize:80}}>this is inline css link</h1>
        <h3 className='first'>this is external css link</h3>
        <div className='container border'>
            <div className='row'>
                <div className='col-12 bg-warning p-5'>
                    <h1>use of bootstrap</h1>
                </div>
            </div>
        </div>

    </div>
)
}

export default Contact