console.log('Hello console!');
'use strict';


let language = true;
let text = "";
let textfi = "";
const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];
             
              for(let i = 0; i < coursesEn.length; i++){
                  text += coursesEn[i] + "<br>";
              }
              console.log(text);
              for(let j = 0; j < coursesFi.length; j++){
                textfi += coursesFi[j] + "<br>";
            }
            console.log(textfi);
           
            

document.getElementById("lang").addEventListener("click", changeLang);

                function changeLang(){
                    language = !language;
                    if(language){
                      document.getElementById("listfi").innerHTML = textfi;
                      document.getElementById("list").innerHTML = "";
                    } else {
                      document.getElementById("list").innerHTML = text;
                      document.getElementById("listfi").innerHTML = "";
                    }
                }