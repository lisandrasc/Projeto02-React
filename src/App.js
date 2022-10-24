import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function(err,url){
      setQrcodeLink (url);
    })
  }

  function handleQrcode(event) {
    setLink(event.target.value);
    handleGenerate(event.target.value)
  }

  return (
    <div className="container">

      <QRCode
        value={link}
      />

      <input
        className="input"
        placeholder="Digite seu link..."
        value={link}
        onChange={(event) => handleQrcode(event)}
      />

      <a href={qrcodeLink} download={'qrcode.png'} >Baixar QrCode</a>

    </div>
  );
}

export default App;
