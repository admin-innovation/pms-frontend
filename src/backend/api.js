import { json } from "react-router";

const url = "http://127.0.0.1:8000"


export const signinFetch = async (userLogin) => {
    try {
      const response = await fetch(`${url}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userLogin),
      });
      if (!response.ok) {
        throw new Error('Failed to sign in');
      }
      const userData = await response.json();
      return userData; // Return the parsed JSON response
    } catch (error) {
      throw new Error('Failed to fetch user data: ' + error.message);
    }
  };

async function fetchDepartments(){
    fetch(baseurl,{
        method:"GET"
    })
}

async function login(){
    fetch(baseurl,{
        method:"POST",

    })
}


