const lijstVoornamen = [];

document.getElementById("toevoegen").onclick = function () {
    const voornaamInput = document.getElementById("voornaam");
    const voornaam = voornaamInput.value.toLowerCase();;
    const li = document.createElement("li");

    if (voornaam !== "") {
        lijstVoornamen.push(voornaam);
        aantal = lijstVoornamen.filter(x => x === voornaam).length;

        li.innerText = `${voornaam}: ${aantal}`;
        document.getElementById("voornamen").appendChild(li);
        voornaamInput.value = "";
        voornaamInput.focus();
    }

};  

//test

document.getElementById("toevoegen").onclick = function(){
    console.log("dfmqsdklfqjsmlfjldf");
};


document.getElementById("toevoegen").addEventListener('click',function(){
    console.log("1111");
});
document.getElementById("toevoegen").addEventListener('click',function(){
    console.log("2222");
});

// count = myArray.filter(x => x == searchValue).length;

// var str = "Hello World!";
// var res = str.toLowerCase();