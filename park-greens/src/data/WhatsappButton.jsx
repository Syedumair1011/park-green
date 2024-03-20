import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function WhatsappButton() {
  return (
    <div className="App">
    <ReactWhatsappButton
      countryCode="971"
      phoneNumber="557746715"
      animated
    />
  </div>
  )
}

export default WhatsappButton;