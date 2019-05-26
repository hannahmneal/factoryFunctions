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
    console.log(doctor);
    return doctor

}


// This allows the factory to be called repeatedly with different parameters each time:

const newDoc = function() {
    
    createDoctorObject("Dr. Who", "Time Travel", "TARDIS")
    createDoctorObject("Dr. Steamy", "Heartbreaks", "Grey")
    
}
newDoc()


const createDocList = [

]





