// Import stylesheets
//import './style.css';

const form: HTMLFormElement = document.querySelector('#defineform');
const dictionaryURL :String="https://api.dictionaryapi.dev/api/v2/entries/en/";
 const DEFINITIONS_DIV = document.getElementById('definitions');
// if(form){
form.onsubmit = () => {
  const formData = new FormData(form);
  console.log(formData);
  const word = formData.get('defineword') as string;
  console.log(word);
  alert(word);

  DEFINITIONS_DIV!.innerHTML = '';

  getDefinition(word).then(result =>{
    result.forEach((text: { meanings: string | any[]; }) => {
      for (let i = 0; i < text.meanings.length; i++) {
        DEFINITIONS_DIV!.innerHTML += `<li>${text.meanings[i].definitions[0].definition}</li>`;
      }
    })

  })

return false; 
};

async function getDefinition(text: string) {

    const response = await fetch(dictionaryURL + text, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    return await response.json();
   
}
