require('dotenv').config();

async function ai(question){
  const apiKey = process.env.GEMINI_KEY;
  
  if(!apiKey){
    console.error('ERROR: GEMINI_KEY not found');
    return "no_api_key";
  }
  
  try{
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `ONE word answer only: ${question}`
          }]
        }]
      })
    });

    if(!response.ok){
      const errorText = await response.text();
      console.error('API Error:', errorText);
      
      if (response.status === 429) {
        return "quota_exceeded";
      }
      
      return "error";
    }

    const data = await response.json();
    
    if(data.candidates && data.candidates[0] && data.candidates[0].content){
      const text = data.candidates[0].content.parts[0].text.trim();
      console.log('✓ Success! Response:', text);
      return text.split(" ")[0];
    }
    
    return "error";
    
  } catch (e) {
    console.error('Gemini API Error:', e.message);
    return "error";
  }
}

module.exports={ai};