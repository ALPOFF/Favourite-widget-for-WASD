let app = (() => {
	let start = function () {
		$.get("https://wasd.tv/api/channels/***", (data) => {
			let arrL = data.result.channel_followers.length
			console.log(arrL)
			setInterval(() => {
				$.get("https://wasd.tv/api/channels/***", (data) => {
					console.log('get')


					if (data.result.channel_followers.length <= arrL) {
						$("h1").text("")
						$("img").attr("src","");
						arrL = data.result.channel_followers.length;
					}
					else {
						let audio = new Audio(); 
						audio.src = './audio/follow.mp3';
						audio.autoplay = true;
						$("h1").text("Спасибо за подписку," + data.result.channel_followers[0].user_login + "!");
						arrL = data.result.channel_followers.length;
						$("img").attr("src","./gif/source.gif");
						console.log(arrL)
					}
				});
			}, 7000);
		})
	}
	return {
		start: start
	}
})();
app.start();


