let btnSendSMS = document.getElementById("sendSMS");
let url = 'https://api.comapi.com/apispaces/0768ac4f-01ac-4bf2-af54-2bbc54fc4b0a/messages';
let authInfo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlOGM3ZWUzOS0zZTNkLTRkZWQtYWMxNy02M2M3YzE1NDU1NWUiLCJpc3MiOiJodHRwczovL2FwaS5jb21hcGkuY29tL2FjY2Vzc3Rva2VucyIsImF1ZCI6Imh0dHBzOi8vYXBpLmNvbWFwaS5jb20iLCJhY2NvdW50SWQiOjQ0OTYyLCJhcGlTcGFjZUlkIjoiMDc2OGFjNGYtMDFhYy00YmYyLWFmNTQtMmJiYzU0ZmM0YjBhIiwicGVybWlzc2lvbnMiOlsiY29udGVudDp3IiwiY2hhbjpyIiwibXNnOmFueTpzIiwibXNnOnIiLCJwcm9mOnJhIiwidG1wbDpyIiwiYXBpczpybyJdLCJzdWIiOiJlOGM3ZWUzOS0zZTNkLTRkZWQtYWMxNy02M2M3YzE1NDU1NWUiLCJwcm9maWxlSWQiOiJ0ZXh0aXQiLCJuYW1lIjoibmFtZVRlc3QiLCJpYXQiOjE1ODM0NDExOTV9.ttz0HZXgvXJcNdZx5zG_-02FmypA7bty5ZyNmvdDs5c';





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
