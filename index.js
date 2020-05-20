import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final */

const homeTeam = fifaData.filter(function(game){
    return (game["Year"] === 2014 && game["Stage"] === "Final");
});

console.log(homeTeam[0]["Home Team Name"]);

// (b) Away Team name for 2014 world cup final

const awayTeam = fifaData.filter(function(game){
    return (game["Year"] === 2014 && game["Stage"] === "Final");
});

console.log(awayTeam[0]["Away Team Name"]);

// (c) Home Team goals for 2014 world cup final

const homeTeamGoals = fifaData.filter(function(game){
    return (game["Year"] === 2014 && game["Stage"] === "Final");
});

console.log(homeTeamGoals[0]["Home Team Goals"]);

// (d) Away Team goals for 2014 world cup final

const awayTeamGoals = fifaData.filter(function(game){
    return (game["Year"] === 2014 && game["Stage"] === "Final");
});

console.log(awayTeamGoals[0]["Away Team Goals"]);

// (e) Winner of 2014 world cup final */

const final = fifaData.filter(game => (game["Year"] === 2014 && game["Stage"] === "Final"));

function whoWon(games) {
    const winners = [];
    let winCondition = [];
    games.forEach(function(game) { 
        // console.log(game);
        if (game["Home Team Goals"] > game["Away Team Goals"]) {
            winners.push(game["Home Team Name"]); // did home team win on points

        } else if (game["Home Team Goals"] < game["Away Team Goals"]){
            winners.push(game["Away Team Name"]); // did away team win on points

        } else if (game["Home Team Goals"] === game["Away Team Goals"]) { // in case of tie in regulation
            winCondition = game["Win conditions"].split(" "); // parse the Win Conditions

            if (winCondition.includes(game["Home Team Name"])) {
                winners.push(game["Home Team Name"]); // home team won in over time

            } else if (winCondition.includes(game["Away Team Name"])) {
                winners.push(game["Away Team Name"]); // away team won in over time
            } 
        } else {
            winners.push("Tie");
        }; // game ended in a tie
    });
    return winners;
};

console.log("Task 1 part E")
// console.log(final);
console.log(whoWon(final));


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

console.log("Task 2");

function getFinals(data) {
    const gameList = data.filter(game => game["Stage"] === "Final");
    return gameList;
};


const fifaFinals = getFinals(fifaData);

console.log(fifaFinals);
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

console.log("Task 3");

function getYears(cb, data) {
    const games = cb(data);
    let years = [];
    games.forEach(game => years.push(game["Year"]));
    return years;
};

console.log(getYears(getFinals, fifaData))


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

console.log("Task 5");

function getWinners(cb, data) {
    const finals = cb(data); //gets array of finals matches
    const winners = whoWon(finals); //gets array of winners from finals
    return winners;
};

console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

//  console.log("Task 6");

// function getWinnersByYear(cbWin, cbYear) {
//     const winners = cbWin;
//     const years = cbYear;
//     const yearlyWinners = winners.map(winners, years => {
//         yearlyWinners.winners = winners[winners];
//         });
//     console.log(yearlyWinners);
//     }


// console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

console.log("Task 7");

function getAverageGoals(data) {
    const home = (data.reduce((acc, cur) => cur["Home Team Goals"] + acc, 0) / data.length);
    const away = (data.reduce((acc, cur) => cur["Away Team Goals"] + acc, 0) / data.length);

    return `Average number of Home Team Goals per game is ${home} and average number of Away Team Goals per game is ${away}.`;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
