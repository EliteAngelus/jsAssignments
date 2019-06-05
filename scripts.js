const name = () => {
    alert('Welcome To the Page! ');

    const userName = prompt("What is your name?");

    confirm(`Hello ${userName}!, Do you like Soccer?`);

    document.getElementById('greeting').innerHTML = `Welcome, ${userName}.`

}



name();