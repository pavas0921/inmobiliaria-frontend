const API_BASE_URI =  "http://127.0.0.10:4000";

//Get All Users
export const getAllTenantsApi = async (token) => {
  try {
    const req = await fetch(`${API_BASE_URI}/tenant/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await req.json();
    console.log(data)
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};

//Get user by _id
export const getTenantByIdApi = async ({cedula, token}) => {
  try {
    const req = await fetch(`${API_BASE_URI}/tenant/${cedula}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};



//Create Tenant
export const registerTenantAPI = async ({body, token}) => {
    try {
      const req = await fetch(`${API_BASE_URI}/tenant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await req.json();
      return Promise.resolve(data);
    } catch (error) {
      return Promise.resolve(error);
    }
  };

  //Update User
/*export const updateTenantAPI = async (id, body, token) => {
  try {
    console.log(token)
      const req = await fetch(`${API_BASE_URI}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (!req.ok) {
      // Lanza un error con la información de la respuesta
      throw new Error(`Error actualizando usuario: ${req.status} - ${req.statusText}`);
    }

    const data = await req.json();
    data.updatedData = body
    return data
  } catch (error) {
    console.log(error)
    return Promise.reject(error);
  }
};*/

 /* //Update User
  export const DeleteOwnerAPI = async ({user, token}) => {
    console.log("***", user)
    const {_id} = user
    const req = await fetch(`${API_BASE_URI}/users/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      },
      });
      const data = await req.json();
      data.user = user
      return data;
    
  };

*/