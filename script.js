function toggleMenu() {
	document.querySelector("#dropdownMenu").classList.toggle("show");
}

async function loadData() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Error: ", error);
	}
}
loadData();
