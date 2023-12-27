const API_BASE_URI =  "http://127.0.0.10:4000";

//Create Owner
export const registerCosignerAPI = async ({body, token}) => {
      try {
        const req = await fetch(`${API_BASE_URI}/cosigner`, {
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