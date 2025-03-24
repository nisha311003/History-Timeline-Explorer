import React,{useState} from "react";
import { Button } from '@mui/material';

const Translate=()=>{
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleTranslate = async() => {
        setLoading(true);
        console.log(inputText)
        const requestData = {
            from: 'en',
            to: 'ur',
            text: inputText
          };
    
          try {
            const response = await fetch('https://google-translate113.p.rapidapi.com/api/v1/translator/text', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '04c69b2e29mshd19c9b1a486d7c2p1eeb8cjsnabf1c946ad3b',
                'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
              },
              body: JSON.stringify(requestData)
            });
      
            if (!response.ok) {
              throw new Error('Request failed with status: ' + response.status);
            }
      
            const data = await response.json();
            setTranslatedText(data.trans);
          } catch (error) {
            console.log(error)
          } finally {
            setLoading(false);
          }
        };
    return (
      <div>
        <div style={{ marginLeft: "-20px", marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <textarea
          rows="8"
          cols="80"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to translate"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        />
        <br />
        <textarea
          rows="8"
          cols="80"
          value={translatedText}
          readOnly
          placeholder={loading ? "Translating..." : "Translated text will appear here"}
          style={{ fontSize: "16px", fontWeight: "bold", marginLeft:"10px" }}
        />
        <br />
        <Button onClick={handleTranslate} disabled={loading} variant="contained" >
          {loading ? "Translating..." : "Translate"}
        </Button>
        </div>
      </div>
    )
}
export default Translate;