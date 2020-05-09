let app = (() => {
	let start = function () {
		$.get("https://wasd.tv/api/channels/211491", (data) => {
			let arrL = data.result.channel_followers.length
			console.log(data)
			setInterval(() => {
				$.get("https://wasd.tv/api/channels/211491", (data) => {

					if (data.result.channel_followers.length <= arrL) {
						$("h1").text("")
						arrL = data.result.channel_followers.length;
					}
					else {
						$("h1").text("Спасибо за подписку! " + data.result.channel_followers[0].user_login);
						arrL = data.result.channel_followers.length;
						console.log(arrL)
					}
				});
			}, 5000);
		})
	}
	return {
		start: start
	}
})();
app.start();


