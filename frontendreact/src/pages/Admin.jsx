import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Clients from './Clients';

export default function Admin() {
    
    const [toggle,setToggle ]=useState(true)
    const Toggle =()=>{
        setToggle(!toggle)
    }
    return (
        <div className='contaner-fluid' style={{backgroundColor:'#fcf8f8'}}>
             <div className="row">
             {toggle && <div className="col-2 bg-white" style={{height:'860px' }}>
                  <Sidebar/>  
                </div>}
                <div className="col-10 ">
                    <Clients Toggle={Toggle} />
                </div>
             </div>
        </div>
       
    )
}
