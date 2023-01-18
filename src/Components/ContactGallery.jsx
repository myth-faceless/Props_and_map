import React from "react";
// import contacts from "./Contacts_array";
import Avatar from "./Avatar";
import Detail from "./Detail";

function ContactsGallary(props) {
  return (
    <div className="contactGallery">
      {/* <h1 className="heading"> My Contacts</h1> */}
      <div className="card">
        <div className="top">
          <p>{props.key}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>

        <div className="bottom">
          <Detail detailInfo={props.tel} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default ContactsGallary;
