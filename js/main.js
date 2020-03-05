let btnSendSMS = document.getElementById("sendSMS");
let url = 'https://api.comapi.com/apispaces/73a85e33-8fbd-4780-83e8-c1024e40a4c0/messages';
let authInfo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyOTFkY2M0Zi0yZWMyLTQ0NGQtODgxMC04ZjM1Yzg2NTcxN2UiLCJpc3MiOiJodHRwczovL2FwaS5jb21hcGkuY29tL2FjY2Vzc3Rva2VucyIsImF1ZCI6Imh0dHBzOi8vYXBpLmNvbWFwaS5jb20iLCJhY2NvdW50SWQiOjQ0OTYyLCJhcGlTcGFjZUlkIjoiNzNhODVlMzMtOGZiZC00NzgwLTgzZTgtYzEwMjRlNDBhNGMwIiwicGVybWlzc2lvbnMiOlsiY29udGVudDp3IiwiY2hhbjpyIiwibXNnOmFueTpzIiwibXNnOnIiLCJwcm9mOnJhIiwidG1wbDpyIiwiYXBpczpybyJdLCJzdWIiOiIyOTFkY2M0Zi0yZWMyLTQ0NGQtODgxMC04ZjM1Yzg2NTcxN2UiLCJwcm9maWxlSWQiOiJub2VuIiwibmFtZSI6Im5vbmUiLCJpYXQiOjE1ODM0NDIyMTd9.BXuP8yRROfsbkl71P-MwY1bBNHRbpXAq70sCVwGw0ko';





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
