console.log("Practice: Music Row");

// Arrays for record labels:

const JumpStop = []
// Funk/Wrap artists

const Chatten = []
// Country/BGrass artists

const Polar = []
// Pop artists


// Artist object:

// Genre objects (produced via factory):
// Step 1: Create individual factories for genres
// Step 2: Refactor factories so a single factory creates an object with methods/functions that are their own factories

const createFunkWrapGenre = (name, age) => {

    artist = {
        name: `${name}`,
        age: `${age}`
    }

    console.log(artist);
    JumpStop.push(artist);
    console.log("Jumpstop: " + JumpStop);


}

const createCountryBgrassGenre = (name, age) => {

    artist = {
        name: `${name}`,
        age: `${age}`
    }

    console.log(artist);
    Chatten.push(artist);
    console.log("Chatten: " + Chatten);

}

const createPopGenre = (name, age) => {

    artist = {
        name: `${name}`,
        age: `${age}`
    }

    console.log(artist);
    Polar.push(artist);
    console.log("Polar: " + Polar);

}


newArtist = () => {

    createFunkWrapGenre("Dre Funkz", "25"),
    createFunkWrapGenre("Dusta Grimes", "21"),
    createFunkWrapGenre("Leyonce Branis", "27"),
    createCountryBgrassGenre("Bruce Atikins", "23"),
    createCountryBgrassGenre("Bartholomew Danielson", "23"),
    createCountryBgrassGenre("Avilee Dallas", "19"),
    createPopGenre("Jensen Brown", "20"),
    createPopGenre("Austin Kinkaid", "22")
}

newArtist()
// console.log("Jumpstop: " + JumpStop);
// console.log("Chatten: " + Chatten);
// console.log("Polar: " + Polar);





//-------------------------------------------------------------------------------
//This is for Step 2: Refactoring:

const GenreFactory = () => {
    // This will contain the code needed to produce factories within this factory

}