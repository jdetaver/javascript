"use strict";

const keuzes = ["blad", "steen", "schaar"];

for (const hyperlink of document.querySelectorAll("#keuzes a")) {
    hyperlink.onclick = toonResultaat;
}

function toonResultaat() {

    const gebruikerGetal = this.dataset.value;
    const keuzeGebruiker = keuzes[gebruikerGetal];

    // console.log("gebruikerGetal:", gebruikerGetal);
    // console.log("keuzeGebruiker:", keuzeGebruiker);

    const computerGetal = (Math.floor((Math.random() * 3) + 1)) - 1;
    const keuzeComputer = keuzes[computerGetal];

    // console.log("computerGetal:", computerGetal);
    // console.log("keuzeComputer:", keuzeComputer);

    const img = document.getElementById("afbeelding");
    img.src = `${keuzeComputer}.png`;

    const resultaat = document.getElementById("winnaar");
    if (keuzeGebruiker === keuzeComputer) {
        resultaat.innerText = "Gelijkspel";
    } else {
        if (keuzeGebruiker === "blad" && keuzeComputer === "steen" || keuzeGebruiker === "steen" && keuzeComputer === "schaar" || keuzeGebruiker === "schaar" && keuzeComputer === "blad") {
            resultaat.innerText = "De gebruiker";
        } else {
            if (keuzeComputer === "schaar" && keuzeGebruiker === "blad" || keuzeComputer === "blad" && keuzeGebruiker === "steen" || keuzeComputer === "steen" && keuzeGebruiker === "schaar") {
                resultaat.innerText = "De computer"
            }
        }
    }
}