import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import store from "./store/store";

const url = "http://127.0.0.1:8000";

// Common function to handle API errors
const handleApiError = (error) => {
  console.error('API Error:', error);
  toast.error("An error occurred. Please try again later.");
};

// Placeholder function for updating store with successful response
const updateStore = (storeName, action, payload) => {
  switch (action) {
    case 'set':
      store.dispatch({ type: `${storeName}/set${storeName.charAt(0).toUpperCase() + storeName.slice(1)}`, payload });
      break;
    case 'update':
      store.dispatch({ type: `${storeName}/update${storeName.charAt(0).toUpperCase() + storeName.slice(1)}`, payload });
      toast.success("Item Updated")
      break;
    case 'delete':
      store.dispatch({ type: `${storeName}/delete${storeName.charAt(0).toUpperCase() + storeName.slice(1)}` });
      toast.success("Item deleted")
      break;
    case 'add':
      store.dispatch({ type: `${storeName}/add${storeName.charAt(0).toUpperCase() + storeName.slice(1)}`,payload });
      toast.success("Item added")
      break
    default:
      console.error('Invalid action type');
  }
};

// API functions for complaints
export const getComplaints = async (employee_id) => {
  try {
    const response = await fetch(`${url}/complaints/${employee_id}`);
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    updateStore(data);
    return data.complaints;
  } catch (error) {
    handleApiError(error);
  }
};

export const createComplaint = async (user_id, data) => {
  try {
    const response = await fetch(`${url}/complaints/${user_id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    updateStore(response.content);
    return { status: true, msg: response.content };
  } catch (error) {
    handleApiError(error);
  }
};

// API functions for tasks
export const submitTask = async (task_id, report) => {
  try {
    const data = { report: report };
    const date = new Date();
    const response = await fetch(`${url}/tasks/${task_id}?submitted=${true}&submitted_date=${date.toISOString()}&status=${"pending"}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    updateStore(response.content);
    return true;
  } catch (error) {
    handleApiError(error);
  }
};
export const getTask = async (employee_id, department) => {
  const token = Cookies.get("accessToken");

  try {
    const response = await fetch(`${url}/tasks?employee_id=${employee_id}`, {
      method: "GET",
      // headers: {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json'
      // }
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    return data.tasks;
  } catch (error) {
    handleApiError(error);
  }
};

// API functions for goals
export const addSubGoal = async (goal_id, data) => {
  try {

    const response = await fetch(`${url}/goals/${goal_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    updateStore('goals','update',{id:goal_id,...data});
    return  true ;
  } catch (error) {
    handleApiError(error);
  }
};
export const getGoals = async (limit) => {
  const token = JSON.parse(Cookies.get("user")).token;

  try {
    const response = await fetch(`${url}/goals?limit=${limit}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    updateStore("goals","set",data);
    return data;
  } catch (error) {
    handleApiError(error);
  }
};
export const addGoals = async (goal) => {
  try {
    const token = JSON.parse(Cookies.get("user")).token;

    const response = await fetch(`${url}/goals`, {
      method: "POST",
      body: JSON.stringify(goal),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    updateStore("goals","add",data);
    return data;
  } catch (error) {
    handleApiError(error);
  }
};
export const sendToHr = async (goal_id) => {
  try {
    const date = new Date();
    const data = {
      sent_to_hr: true,
      date_sent_to_hr: date.toISOString(),
    };
    const response = await fetch(`${url}/goals/${goal_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    updateStore(response.content);
    return { status: true, date: data.date_sent_to_hr };
  } catch (error) {
    handleApiError(error);
  }
};
export const fetchGoals = async (userId) => {
  try {
    const response = await fetch(`${url}/notifications/${userId}`);
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    updateStore(data);
    return data.notifications;
  } catch (error) {
    handleApiError(error);
  }
};

// API functions for employee
export const uploadProfilePic = async (employee_id, file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${url}/employees/${employee_id}/upload`, {
      method: 'PATCH',
      body: formData
    });

    if (!response.ok) {
      handleApiError(response.statusText);
    }

    const data = await response.json();
    updateStore(data);
    return data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getEmployee = async (userId) => {
  try {
    const response = await fetch(`${url}/employees/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const employeeData = await response.json();

    updateStore("user","set",employeeData);
    return employeeData; // Return the parsed JSON response
  } catch (error) {
    handleApiError(error);
  }
};
export const getEmployees = async (department) => {
  const token = Cookies.get("accessToken");

  try {
    const response = await fetch(`${url}/employees?department=${department}`, {
      method: "GET",
      // headers: {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json'
      // }
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    handleApiError(error);
  }
};

// API functions for Department
export const getAllDepartments = async () => {
  const token = Cookies.get("accessToken");

  try {
    const response = await fetch(`${url}/departments/`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    updateStore(data);
    return data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getDepartment = async (department) => {
  const token = Cookies.get("accessToken");

  try {
    const response = await fetch(`${url}/departments/${department}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    // updateStore(data); I am not sure if this should be in store
    return data;
  } catch (error) {
    handleApiError(error);
  }
};


// API functions for Notifications
export const getNotifications = async (userId) => {
  try {
    const response = await fetch(`${url}/notifications/${userId}`);
    if (!response.ok) {
      handleApiError(response.statusText);
    }
    const data = await response.json();
    updateStore("notifications","set",data);
    return data
  } catch (error) {
    handleApiError(error);
  }
};


// API functions for Authentication
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
      handleApiError(response.statusText);
    }
    const userData = await response.json();

    Cookies.set('user', JSON.stringify(userData), { expires: 1, domain: 'local.test', secure: false });

    return userData;

  } catch (error) {
    handleApiError(error);
  }
};

























