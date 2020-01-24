let btnSendSMS = document.getElementById("sendSMS");
let url = 'https://api.comapi.com/apispaces/e2f1fb53-22ec-4ad7-914a-9150cf953d1f/messages';
let authInfo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMTdmMmJmYy03ZjcxLTQ2NmEtYmY3Ni03ZmI0MzE5NjUwNmMiLCJpc3MiOiJodHRwczovL2FwaS5jb21hcGkuY29tL2FjY2Vzc3Rva2VucyIsImF1ZCI6Imh0dHBzOi8vYXBpLmNvbWFwaS5jb20iLCJhY2NvdW50SWQiOjQ0MTI4LCJhcGlTcGFjZUlkIjoiZTJmMWZiNTMtMjJlYy00YWQ3LTkxNGEtOTE1MGNmOTUzZDFmIiwicGVybWlzc2lvbnMiOlsiY29udGVudDp3IiwiY2hhbjpyIiwibXNnOmFueTpzIiwibXNnOnIiLCJtc2c6YnJhbmNoIiwicHJvZjpyYSIsInRtcGw6ciIsImFwaXM6cm8iXSwic3ViIjoiMTE3ZjJiZmMtN2Y3MS00NjZhLWJmNzYtN2ZiNDMxOTY1MDZjIiwicHJvZmlsZUlkIjoibm9tYnJlIiwibmFtZSI6Im5vbWJyZSIsImlhdCI6MTU3OTcxNjExNH0.XganhI0CWFK9k_oX4nsmnoNWwMiqPYr00Y4r1dhI-u8';





btnSendSMS.addEventListener("click", ()=>{

    let numberPhone = document.getElementById("numberPhone").value;
    let textMessage = document.getElementById("textMessage").value;
    
    let bodyArr = {
        body: textMessage,
        to: { phoneNumber: numberPhone },
        rules: ['sms']
    };
    
    fetch(url,{
        method:'POST',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'accept': 'application/json',
            authorization: 'Bearer ' + authInfo
      },
      body: JSON.stringify(bodyArr),
      json: true
    }).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("error");
        }
    }).then((response)=>{
        console.log(response);
        document.getElementById("numberPhone").value="";
        document.getElementById("textMessage").value="";
    }).catch((err)=>{
        console.log(err);
    })
});