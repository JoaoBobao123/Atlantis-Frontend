const BASE_URL = 'http://localhost:5013/api/Library'; // Certifique-se de que esse URL é correto


export const getRequest = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`GET request failed with status ${response.status}`);
    }

    const textData = await response.text();
    const data = JSON.parse(textData);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const postRequest = async (id) => {
  try {

    const response = await fetch(`${BASE_URL}/${id}/rent`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    const textData = await response.text(); 
    return JSON.parse(textData);

  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const getRequestById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });

    if (!response.ok) {
      throw new Error("Delete request failed!");
    }
    const textData = await response.text();
    const data = JSON.parse(textData);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
