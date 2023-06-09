// import axios from "axios";

axios.defaults.baseURL = "https://62d459315112e98e484e5213.mockapi.io";
const BASE_URL = "https://62d459315112e98e484e5213.mockapi.io";

// GET -> /contacts

export const getContacts = async () => {
  //variant 1
  const response = await axios.get("/contacts");
  return response;
  // variant 2
  // const response = await fetch(`${BASE_URL}/contacts`);
  // const reslt = await response.json();
  // return reslt;

  // variant 3
  return fetch(`${BASE_URL}/contacts`).then((response) => response.json());
};

// GET -> /contacts/:id
export const getContactById = async (id) => {
  // variant 1

  // variant 2

  // variant 3
  return fetch(`${BASE_URL}/contacts/${id}`).then((response) =>
    response.json()
  );
};

// POST -> /contacts
export const createContact = async (contact) => {
  // variant 1
  const { data } = await axios.post("/contacts", contact);
  return data;
  // variant 2

  // variant 3
  const options = {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch(`${BASE_URL}/contacts`, options).then((response) =>
    response.json()
  );
};

// PUT -> /contacts/:id
export const updateContact = async (newContact) => {
  // variant 1

  // variant 2

  // variant 3
  const options = {
    method: "PUT",
    body: JSON.stringify(newContact),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
    (response) => response.json()
  );
};

// DELETE -> /contacts/:id
export const deleteContact = async (id) => {
  // variant 1

  // variant 2

  // variant 3
  const options = {
    method: "DELETE",
  };
  return fetch(`${BASE_URL}/contacts/${id}`, options).then((response) =>
    response.json()
  );
};
