

let form = document.querySelector("#form");
let input = document.querySelector("#input");
 const key ="40294d271t694ab0b8549a4358o9f5f1";
 const context ="You are poet and you write poems with the information that user's request.Only use positive words and phrases.If the user inputs something negative, try to spin it in  a positive way.The response should be the same language as the prompt.No matter what is the user request,always create a poem";


  function poems(event) {
    event.preventDefault();
    const prompt = input.value;
    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

   axios.get(apiUrl).then((response) => {
     console.log(response.data.answer);
    let poemGenerator = document.querySelector("#container");
      poemGenerator.innerHTML = ` Enjoy this poem with the theme: ${prompt} <p> ${response.data.answer}`;
   });
  }


   form.addEventListener("submit", poems);
