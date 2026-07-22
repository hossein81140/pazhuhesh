function updateClock() {
	const now = new Date();
	const iranTime = now.toLocaleTimeString("fa-IR", {
		timeZone: "Asia/Tehran",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	});
	const iranDate = now.toLocaleDateString("fa-IR", {
		timeZone: "Asia/Tehran",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	});

	document.querySelector("#clock").textContent = iranTime;
	document.querySelector("#date").textContent = iranDate;
}

updateClock();
setInterval(updateClock, 1000);