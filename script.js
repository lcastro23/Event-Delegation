
		let nameForm = document.getElementById("nameForm");
		nameForm.addEventListener("submit", onSubmit);

		let buttonsDiv = document.createElement("div");
		buttonsDiv.id = "buttons";
		buttonsDiv.addEventListener("click", onClick);
		document.body.appendChild(buttonsDiv);

		function onSubmit(event)
		{
			let newButton = document.createElement("button");
			newButton.textContent = document.getElementById("name").value;
			buttonsDiv.appendChild(newButton);

			event.preventDefault();
		}

		function onClick(event)
		{
			if(event.target.matches("button") == true)
			{
				console.log(event.target.textContent);
			}
		}
