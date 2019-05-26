console.log("Exercise 2: Pets");

/* Example of finished product:

        Pets = [

            {
                name: "Sage",
                breed: "tortie shorthair"
            },

            {
                name: "Clove",
                breed: "calico shorthair"
            },

            {
                name: "Moses",
                breed: "black shorthair"
            }

        ]
*/


const Pets = []

createPetObject = (name, breed) => {


    pet = {
        name: `${name}`,
        breed: `${breed}`
    }
    console.log(pet);
    // return pet

        Pets.push(pet);
        // console.log(Pets);

}


function newPet() {

    createPetObject("Clove", "calico shorthair"),
    createPetObject("Sage", "tortie shorthair"),
    createPetObject("Moses", "black shorthair")

}

    newPet();
    console.log(Pets);






