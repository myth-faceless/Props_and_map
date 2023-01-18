import ContactsGallary from "./Components/ContactGallery";
import contacts from "../src/Components/Contacts_array";
import "./styles.css";
import Avatar from "./Components/Avatar";

function createCard(contact) {
  return (
    <ContactsGallary
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="heading"> My Contacts</h1>
      {contacts.map(createCard)}

      {/* <Avatar img="https://imgs.search.brave.com/NOKjrTEUttxC4LIJfmjEUcvIjlmUv-cUjeokG2lAfx4/rs:fit:339:356:1/g:ce/aHR0cHM6Ly9saXN0/bmVwYWwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzAy/L1JhamVzaC1IYW1h/bC1BY3Rvci05Lmpw/Zw" />
      <ContactsGallary
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      /> */}
    </div>
  );
}
