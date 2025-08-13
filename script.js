function submitForm() {
	let nameValue = document.querySelector("#name").value
	let age = document.querySelector("#age").value
	if(nameValue=="" || age==""){
		alert('Please enter valid details.')
	}else{
		let result = new Promise((res, rej) => {
        if (Number(age) >= 18) {
            setTimeout(() => {
                res(`Welcome, ${nameValue}. You can vote.`);
            }, 4000);
        } else {
            setTimeout(() => {
                rej(`Oh sorry ${nameValue}. You aren't old enough.`);
            }, 4000);
        }
    });

    result
        .then(data => alert(data))
        .catch(err => alert(err));
}
}
}