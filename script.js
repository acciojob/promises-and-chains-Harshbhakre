async function submitForm() {
    let nameValue = document.querySelector("#name").value.trim();
    let age = Number(document.querySelector("#age").value);

    if (!nameValue || !age) {
        alert("Please enter valid details");
        return;
    }

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${nameValue} You can vote.`);
            } else {
                reject(`Oh sorry ${nameValue} You aren't old enough.`);
            }
        },4000);
    })
    .then(msg => alert(msg))
    .catch(err => alert(err));
}