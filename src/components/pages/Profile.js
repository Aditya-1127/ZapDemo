import React, { Component , useState, useEffect} from 'react'
import '../../App.css'
import Example from "../DropDown";
import DatePicker from 'react-date-picker';
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function Profile()  {
    
   
   
    const [value, onChange] = useState(new Date());
        
        return (
            
            <div>
            <form class="ui form">
                <h3>Complete Your Profile</h3>
            
                <div className="form-group" class="contains">
                <img class="ui centered small circular image" src='https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg'/>
                <div class="overlay">Click To Edit</div>
                </div>  
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control"  />
                </div>

                <div className="form-group">
                    <label>City:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input type="number" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control"  />
                </div>
                
                <div class="container">
                 <div class="center">
                <button type="submit" class="ui inverted red button" >Send OTP</button>
                </div>
                </div>
                
            </form>
           
            <br></br>
            <br></br>

            <h5>Important Dates</h5>

                <div id="add_to_me">
                <Example />

                <DatePicker
                    onChange={onChange}
                    value={value}
                />
                
                </div>
               
                <div>
                <button  onClick={addNew}>Add a New Row</button>
                </div>
                </div>
                

        );

       
    
}
function addNew(){
    
   var e =document.getElementById("add_to_me").innerHTML+=<h3>jdnfjdnfdj</h3>;
   alert(e);
   
    


}