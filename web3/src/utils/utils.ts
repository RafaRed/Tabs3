export function getBase64(file:any) {
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result) 
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    });
   
 }
 