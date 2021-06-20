document.getElementById("get_idea").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(resp => resp.json())
    .then(data => {
		  document.getElementById("idea").textContent = data.activity
	})
})