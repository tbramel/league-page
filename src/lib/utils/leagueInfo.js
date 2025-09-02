/*   STEP 1   */
export const leagueID = "1182306749301358592"; // your league ID
export const leagueName = "The 12-GOATS"; // your league name
export const dues = null; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>The 12 GOATS Fantasy Football League.</p>
  <p>Established 2017.</p>
  
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "729030627474624512",
      "name": "Christopher Robinson",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "2 Time League Champion",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Chad", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "865100573152772096",
      "name": "Brandon Bruner",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Robert", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "858113286460276736",
      "name": "Stuart Wiser",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kyle", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
     {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "861098102709444608",
      "name": "Tony Fields",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Robert", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1136721974778003456",
      "name": "Joe Pardi",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Josh", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "465216211731345408",
      "name": "Taylor Bramel",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jamey", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "726495741652049920",
      "name": "Chad Robinson",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Christopher, // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4892, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
     {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "726496502368800768",
      "name": "Billy Jordan",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Josh", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "727628077319917568",
      "name": "Jamey Bailey",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Taylor", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 1, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "726818747087704064",
      "name": "Robert Daniels",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tony", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "726520131634675712",
      "name": "Josh Moore",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Chad", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
     {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "726872138534965248",
      "name": "Kyle Lucas",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "", // (optional)
      "bio": "Enter Stats Here",
      "photo": null, // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Stuart", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
