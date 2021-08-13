/*
Name: Manmehakpreet Singh
StudentID: 139748206
email: manmehakpreet-singh@myseneca.ca
websiteLink: https://manmehakpreet.github.io/
reflectionLink: https://youtu.be/OqLivHjj7fE
*/
function addCard(card) {
    var body = document.querySelector("#skill");
    body.appendChild(card);
  }

function cardImg(url) {
    var div = document.createElement("div");
    div.setAttribute("class", "card-img");
    div.style.backgroundImage = "url(" + url + ")";
    return div;
}

function createText(text) {
    var txt = document.createTextNode(text);
    return txt;
}

function cardBody(name, expertise) {
    var div = document.createElement("div");
    div.setAttribute("class", "card-body");
    var h3 = document.createElement("h3");
    var txt = createText(name);
    h3.appendChild(txt);
    div.appendChild(h3);
  
    var h4 = document.createElement("h4");
    var txt2 = createText(expertise);
    h4.appendChild(txt2);
    div.appendChild(h4);
    return div;
}
 
function buildCardForObservation(observation) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    //Add image
    const img = cardImg(observation.photoUrl);
  
    //Add card body
    const body = cardBody(
      observation.name,
      observation.expertise
    );

    div.appendChild(img);
    div.appendChild(body);

    //Return the card div
  return div;
}

function dynamicreveal()
{
if(document.getElementById('hiring').checked)
{
document.getElementById('rate').style.display = "block";
}
else
{
document.getElementById('rate').style.display = "none";
}
return;
}