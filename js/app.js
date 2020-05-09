let app = (() => {

	let temp = ''

	let start = function() {
	 
		
		setInterval(getPrice, 5000);
		//$("h1").text("");
	}
 
	
	let getPrice = () => {
		$.get("https://wasd.tv/api/channels/211491", (data) => {
			console.log(data.result.channel_followers[0].user_login)
			
			console.log(temp)
			if (data.result.channel_followers[0].user_login === temp) {
				$("h1").text("")
			}
			else {
				$("h1").text("Спасибо за подписку! " + data.result.channel_followers[0].user_login);
				temp = data.result.channel_followers[0].user_login;
			}
		});

		
	}

	

	return {
		start: start
	}		
})();

app.start();

 


