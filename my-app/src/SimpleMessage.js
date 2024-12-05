import React ,{useState}from "react";

function SimpleMessage() {
                   
    const[inputValue,setInputValue] = useState('');

    //handel change event for the input box
            const handleInputChange =(event)=>{
                console.log(inputValue);
                setInputValue(event.target.value);
            };

    return(
        <div style={{padding:'20px',fontFamily:'Arial,sans-serif'}}>
            <h2>Welcome to Our App!</h2>
            <label htmlfor="nameInput" style={{display:'block',marginBottom:'1px'}}>
                Enter your fullname:
            </label>
            <input
                    type="text"
                    id="nameInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ padding:'5px',fontsize:'36px',width:'100%'}}
                    placeholder="type your name"
                    />
                    {inputValue &&(
                        <p style={{marginTop:'20px',fontSize:'28px'}}>
                            Welcome, <strong>{inputValue}</strong>
                        </p>
                    )}
                    </div>
    );
   
};

export default SimpleMessage;
