import * as contactsApi from "./contacts-api";

const contact = {
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg",
  createdAt: new Date(),
  email: "sofiaBC46@goit.ua",
  name: "SofiaBC46",
  phone: "+380675844154",
};

const contactToUpdate = {
  id: "32",
  email: "bc46@goit.ua",
  name: "BC46",
  phone: "",
};

contactsApi.getContacts().then((res) => console.log(res));

// contactsApi.getContactById("11").then(res => console.log(res))

contactsApi.createContact(contact).then((res) => console.log(res));

// contactsApi.updateContact(contactToUpdate).then(res => console.log(res))

// contactsApi.deleteContact("33").then(res => console.log(res)).catch(error => console.log(error.message))

contactsApi.getContacts().then((res) => console.log(res));
