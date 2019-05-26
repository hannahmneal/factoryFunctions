console.log("Exercise 1: Doctor")


/* Example of an object that is returned after the function is executed:

    const newDoc = {
        name: "Dr. Who",
        specialty: "Time Travel",
        address: "TARDIS"
    }
*/


// Factory function for object:

const createDoctorObject = (name, specialty, address) => {


    doctor = {
        "name": `${name}`,
        "specialty": `${specialty}`,
        "address": `${address}`
    }
    return doctor
}



const newDoc = function() {

    createDoctorObject("Dr. Who", "Time Travel", "TARDIS");
    console.log(doctor);
    // Write a for loop to log each new doctor object to the console.

    createDoctorObject("Dr. Steamy", "Heartbreaks", "Grey");    
    console.log(doctor);
}
newDoc()

const createDocList = [

]






