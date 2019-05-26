console.log("Exercise 1: Doctor")


/* Example of an object that is returned after the function is executed:

    const newDoc = {
        name: "Dr. Who",
        specialty: "Time Travel",
        address: "TARDIS"
    }
*/

// Declare a variable for the container the results of the factory will be displayed in on the main page:

const exerciseOneContainer = document.getElementById("exercise-one-container");


// Factory function:

const createDoctor = (name, specialty, address) => {

    return  {
        "name": `${name}`,
        "specialty": `${specialty}`,
        "address": `${address}`
    }
}

const newDoctor = createDoctor("Dr. Who", "Time Travel", "TARDIS")

exerciseOneContainer.newDoctor;
