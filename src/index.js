import LunchMenu from '/sodexo.json';
// Test
console.log('lunch menu object', LunchMenu);

let texten = "";
let textfi = "";
document.getElementById("lang").addEventListener("click", changeLang);



for(let i = 1; i < Object.keys(LunchMenu.courses).length; i++){
    let obj = Object(LunchMenu.courses[i]);
    console.log(obj);
    texten += obj.title_en + '<br> price: ' + obj.price + '<br>';
    textfi += obj.title_fi + '<br> price: ' + obj.price + '<br>';
    document.getElementById("listfi").innerHTML = texten;
}
let language = textfi;

function changeLang(){
    language = !language;
                    if(language){
                      document.getElementById("listfi").innerHTML = texten;
                      document.getElementById("list").innerHTML = "";
                    } else {
                      document.getElementById("listfi").innerHTML = textfi;
                      document.getElementById("list").innerHTML = "";
                    }
}
