let List = [];
const nums = () => {

    for (let i = 0; i < 16; i++) {
        if (i % 2 === 0) {
            List.push(i);
            console.log(`${i} is Even`);
        } else {
            List.push(i)
            console.log(`${i} is Odd`);
        }
    }
}
nums();