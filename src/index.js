 

 const key = "40294d271t694ab0b8549a4358o9f5f1";
 const prompt= "form.value";
const apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  function poems (event) {
    event.preventDefault();
   axios.get(apiUrl).then((response) => {
     console.log(response.data);
   });
  }

   let form  = document.querySelector("#form");
   form.addEventListener("submit", poems);