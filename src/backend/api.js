import { json } from "react-router";
import Cookies from 'js-cookie';

const url = "http://127.0.0.1:8000"



export const getEmployees = async(department)=>{
  const token = Cookies.get("accessToken")
  const response =await fetch(`${url}/employees?department=${department}`,{
    method:"GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log(data)
  return data

}

export const getAllDepartments = async()=>{
  const token = Cookies.get("accessToken")

    const response = await fetch(`${url}/departments/`,{
      method:"GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'}
      }
        )
    const data = await response.json()
    return data
}


export const getDepartment = async(department)=>{
  const token = Cookies.get("accessToken")

    const response = await fetch(`${url}/departments/${department}`,{
      method:"GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
      )


    const data = await response.json()

    return data
}


export const getGoals = async(id,limit)=>{
  const token = Cookies.get("accessToken")
  if(!id){
    const response = await fetch(`${url}/goals?limit=${limit}`,{
      method:"GET",

      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
      )
    const data = await response.json()

    return data

  }
}
export const addGoals = async (goal) => {
  try {
    const token = Cookies.get("accessToken")

    const response = await fetch(`${url}/goals`,{
      method:"POST",
      body:JSON.stringify(goal),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data.json
  } catch (error) {
    console.error("Error Adding Goal:", error);
  }
};
export const fetchGoals = async (userId) => {
  try {
    const response = await fetch(`${url}/notifications/${userId}`); // Replace recipient123 with actual recipient ID
    const data = await response.json();

    return data.notifications
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
};

export const fetchNotifications = async (userId) => {
  try {
    const response = await fetch(`${url}/notifications/${userId}`); // Replace recipient123 with actual recipient ID
    const data = await response.json();

    return data.notifications
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
};


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

      Cookies.set('accessToken', userData.token, { expires: 1, domain: '.test.me', secure: false });
; // Expires in 1 day
      Cookies.set('refreshToken', userData.refreshToken, { expires: 1, domain: '.test.me', secure: false }); // Expires in 7 days
      Cookies.set("userId",userData.id,{ expires: 1, domain: '.test.me', secure: false })
      return userData;

    } catch (error) {
      throw new Error('Failed to fetch user data: ' + error.message);
    }
  };



  export const getEmployee = async(userId)=>{

    try{
      const response = await fetch(`${url}/employees/${userId}`,{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Failed to sign in');
      }
      const employeeData = await response.json();

      return employeeData; // Return the parsed JSON response
    } catch (error) {
      throw new Error('Failed to fetch employee data: ' + error.message);
    }

  }
// async function fetchDepartments(){
//     fetch(baseurl,{
//         method:"GET"
//     })
// }

async function login(){
    fetch(baseurl,{
        method:"POST",

    })
}


