import getAllUser from "team-manager.js";

const team1 = {
    Name: "Georgia",
    Mascot: "Bulldog",
    PlayerCount: "54",

};

const team2 = {
    Name: "Auburn",
    Mascot: "Tiger",
    PlayerCount: "52",

};

const team3 = {
    Name: "Alabama",
    Mascot: "Elephant",
    PlayerCount: "50",

};

const team4 = {
    Name: "GT",
    Mascot: "Yellow Jackets",
    PlayerCount: "55",

};

const team5 = {
    Name: "KSU",
    Mascot: "Owls",
    PlayerCount: "57",

};

function getTeams (singleTeam1, singleTeam2) {
    this.name = name;
    this.mascot = mascot;
    this.playerCount = playerCount;
    this.getDetails = function () {
        return this.name + " " + this.mascot + " " + this.playerCount;
    }
}

const singleTeam1 = {
    Name: "KSU",
    Mascot: "Owls",
    PlayerCount: "57",
};
console.log(singleTeam1.getDetails());

const singleTeam2 = {
    Name: "Georgia",
    Mascot: "Bulldogs",
    PlayerCount: "54",
};

console.log(singleTeam2.getDetails());


const teams = [team1, team2, team3, team4, team5];
console.log(teams);




