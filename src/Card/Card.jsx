import React, { useEffect, useState } from 'react'
import QRCode from "qrcode";
import { Details, Header, InputElement, QrCodeScannerCard, Scanner } from './Card.styled';

const Card = () => {
    const[textByUser,updatedTextByUser]=useState("");
const[Qrcode,setQrCode]=useState("");

useEffect(()=>{
  const generatedQrcode =async()=>{
      try {
        const dataURL = await QRCode.toDataURL(textByUser);
       setQrCode(dataURL);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
  }
  
generatedQrcode();
},[textByUser]);
  return (
   
      
  <QrCodeScannerCard>
    <Header>
QR SCANNER
    </Header>
    <InputElement >
    <input 
    style={{background:"#FFFFFF",width:"100%",height:"100%" ,  outline:" none",
    border: "none"}}
        type="search"
        placeholder="Enter your text here..."
        value={textByUser}
        onChange={(event) => updatedTextByUser(event.target.value)}
        autoFocus 
        
      />
    </InputElement>
   
    <Details>
please scan the below scanner to see the text given by user
    </Details>
     <Scanner>
 {Qrcode && textByUser && <img src={Qrcode} alt="qr-code" 
        size={350} // Slightly smaller than container
        style={{ maxWidth: '100%', height: 'auto' }} />}
    </Scanner>
  </QrCodeScannerCard>
   
  )
}

export default Card
