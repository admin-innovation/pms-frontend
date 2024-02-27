/* eslint-disable no-unused-vars */
import * as React from "react";
const Form=()=>{
    return(
        <div>
           <h1 className="text-4xl font-semibold">Sign In To Your Account</h1>
           <p className="font-medium text-lg text-gray-500 mt-4">Enter Your Credentials used in Anomis</p>
           <div className="mt-8 ">
                <div>
                    <label className="text-lg font-medium">Staff ID</label>
                    <input 
                        className="w-full border-[2px] border-gray-100"
                        placeholder="Staff ID"
                        
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        className=""
                        placeholder="Password"
                        type="password"
                    />
                
                </div>
                <div>
                    <div>
                        <input 
                            type="checkbox"
                            id="remeber"
                        />
                        <label itemID="remeber">Remember Me</label>
                    </div>
                    <button>Forgot Password</button>
                </div>
           </div>
        </div>
    )
}
export default Form;