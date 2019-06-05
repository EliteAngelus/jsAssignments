var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}

const remove = () => {
    delete student.rollno;
    console.log(student);

    const object = Object.keys(student);

    console.log(object);


}


remove();