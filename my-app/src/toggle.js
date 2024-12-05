import React, { useState } from "react";

function ToggleBtn () {
                   
    const [status ,setStatus]=useState(true);
    return (
        <div>
           {status? <h1>Hello World!</h1>:null } 
           {/* { <button onClick ={()=>setStatus(false)}>Hide</button>
           <button onClick ={()=>setStatus(true)}>Show</button>} */}
          <button onClick ={()=>setStatus(! status)} style={{fontSize:'20px'}}>Toggle</button>
        </div>
    )
};

export default ToggleBtn;
