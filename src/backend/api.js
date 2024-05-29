import { json } from "react-router";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";


const url = "http://127.0.0.1:8000"



/// Write refreshTOken function into all api's check if the user is still making api calls refresh if expired,
/// Write script to logout user once token is expired
// export const getTasks = async(id)=>{
//   try{
//     const response = await fetch(`${url}/tasks?employee_id=${id}`,
//     {method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },

//     })

//   }
//   catch(error){
//     return error
//   }
// }

export const getComplaints = async(employee_id)=> {
  const token = Cookies.get("accessToken")
  console.log(employee_id)
  try{
    const response =await fetch(`${url}/complaints/${employee_id}`,{
      method:"GET",
      // headers: {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json'
      // }
    })
    const data = await response.json()

    return data.complaints
  }
  catch(error){
    return error
  }

}

export const createComplaint = async(user_id, data)=>{
  console.log(data)
  const response = await fetch(`${url}/complaints/${user_id}`,
  {
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
  if (response.ok){
    return {status:true, msg:response.content}
  }
  else{
    return {status:false, msg:response.content}
  }

}

export const submitTask = async(task_id, report) =>{
 const  data={report:report}
 const date = new Date();
  try{
    const response = await fetch(`${url}/tasks/${task_id}?submitted=${true}&submitted_date=${date.toISOString()}&status=${"pending"}`,{
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data),
    })
    if (response.ok){
      return true
    }
    else{
      return false
    }
  }catch{
    console.error('Error Sending to Hr:', error);
  }
}

export const sendToHr = async (goal_id) => {
  const date = new Date();

  const data = {
    sent_to_hr: true, // Use boolean value instead of string
    date_sent_to_hr: date.toISOString(),
  };

  try {
    const response = await fetch(`${url}/goals/${goal_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return {status:true, date:data.date_sent_to_hr};
    } else {
      console.error('Error Sending to Hr:', response.statusText);
    }
  } catch (error) {
    console.error('Error Sending to Hr:', error);
  }

  return false; // Return false if the request fails
};

// export const sendToHr = async(goal_id)=>{
//   const date = new Date();

//   const data = {
//     sent_to_hr:"True",
//     date_sent_to_hr:date.toISOString()
//   }
//   try{
//     const response = await fetch(`${url}/goals/${goal_id}`, {
//       method: 'PATCH',
//       body:  JSON.stringify(data)
//     });
//     if(response.ok){
//       return true
//     }

//   }
//   catch{
//     console.error('Error Sending to Hr:', error);
//   }
// }


export const uploadProfilePic = async (employee_id,file)=>{
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${url}/employees/${employee_id}/upload`, {
      method: 'PATCH',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};


export const getTask = async(employee_id, department)=>{
  const token = Cookies.get("accessToken")
  console.log(employee_id)
  try{
    const response =await fetch(`${url}/tasks?employee_id=${employee_id}`,{
      method:"GET",
      // headers: {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json'
      // }
    })
    const data = await response.json()
    return data.tasks
  }
  catch(error){
    return error
  }

  }



export const getEmployees = async(department)=>{
  const token = Cookies.get("accessToken")
  console.log(`${url}/employees?department=${department}`)
  const response =await fetch(`${url}/employees?department=${department}`,{
    method:"GET",
    // headers: {
    //   'Authorization': `Bearer ${token}`,
    //   'Content-Type': 'application/json'
    // }
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


export const getGoals = async(limit)=>{
  const token = JSON.parse(Cookies.get("user")).token

    const response = await fetch(`${url}/goals?limit=${limit}`,{
      method:"GET",

      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
      )
    const data = await response.json()
    console.log(data)
    return data


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
    return data
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

      Cookies.set('user', JSON.stringify(userData), { expires: 1, domain: '.test.me', secure: false });
;
      // Cookies.set('refreshToken', userData.refreshToken, { expires: 1, domain: '.test.me', secure: false }); // Expires in 7 days
      // Cookies.set("userId",userData.id,{ expires: 1, domain: '.test.me', secure: false })
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


