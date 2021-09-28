var translateBtn = document.querySelector("#translate-btn");
var input =document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverUrl ="https://api.funtranslations.com/translate/morse.json";

function getTranslationUrl(text){
    return serverUrl +"?" +"text="+text;
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler(){
    var inputText = input.value;

    fetch(getTranslationUrl(inputText)).then(response => response.json()).then(json=>{
        var translatedText =json.contents.translated;
        output.innerText =translatedText;
    })
    .catch(errorHandler)
}
translateBtn.addEventListener('click',clickHandler);