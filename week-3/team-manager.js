const teams = [Georgia, Auburn, Alabama, GT, KSU];

function getTeams (teams); {
    return "Georgia, Auburn, Alabama, GT, KSU";
   
}
module.exports = getTeams;

function displayTeams (); {
    const name = ["Georgia", "Auburn", "Alabama", "GT", "KSU"];
    const mascot = ["Bulldog", "Tiger", "Elephant", "Yellow Jacket", "Owl"];
    const playerCount = ["54", "52", "50", "55", "57"];
   
    // Listed teams individually 
    const name1 = "Georgia";
    const mascot1 = "Bulldog";
    const playerCount1 = "54";

    const georgiaBulldogs = name1 + " " + mascot1 + " " + playerCount1;
    console.log(georgiaBulldogs); // Output: "Georgia, Bulldog, 54"

    const name2 = "Auburn";
    const mascot2 = "Tiger";
    const playerCount2 = "52";

    const auburnTigers = name2 + " " + mascot2 + " " + playerCount2;
    console.log(auburnTigers); // Output: "Auburn, Tiger, 52"

    const name3 = "Alabama";
    const mascot3 = "Elephant";
    const playerCount3 = "50";

    const alabamaElephant = name3 + " " + mascot3 + " " + playerCount3;
    console.log(alabamaElephant); // Output: "Alabama, Elephant, 50"

    const name4 = "GT";
    const mascot4 = "Yellow Jacket";
    const playerCount4 = "55";

    const gtYellowJackets = name4 + " " + mascot4 + " " + playerCount4;
    console.log(gtYellowJackets); // Output: "GT, Yellow Jackets, 55"

    const name5 = "KSU";
    const mascot5 = "Owl";
    const playerCount5 = "57";

    const ksuOwls = name5 + " " + mascot5 + " " + playerCount5;
    console.log(ksuOwls); // Output: "KSU, Owls, 57"
}