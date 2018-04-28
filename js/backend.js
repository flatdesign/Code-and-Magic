/*"use strict";
 ================ Для работы с сетью ===============
(function() {
	window.backend = {
		load: function(onLoad, onError) {
			var URl = "https://1510.dump.academy/code-and-magick/data";
			var xhr = new XMLHttpRequest();
			xhr.responseType = "json";

			xhr.addEventListener("load", function() {
				if (xhr.status === 200) {
					onLoad(xhr.response);
				} else {
					onError("Неизвестный статус: " + xhr.status + " " + xhr.statusText);
				}
			});
			xhr.addEventListener("error", function() {
				onError("произошла ошибка соединения");
			});
			xhr.addEventListener("timeout", function() {
				onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
			});

			xhr.open("GET", URL));
			xhr.send();
		},
		save: function(data, onLoad, onError) {
			var URL = "https://1510.dump.academy/code-and-magick";
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.responseURL = 'https://1510.dump.academy/code-and-magick';

			xhr.addEventListener('load', function() {
				if (xhr.response === 200) {
					onLoad(xhr.response);
				} else {
					onError("Неизвестный статус: " + xhr.status + " " + xhr.statusText);
				}
			});

			xhr.addEventListener("error", function() {
				onError("произошла ошибка соединения");
			});
			xhr.addEventListener("timeout", function() {
				onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
			});

			xhr.open('POST', URL);
			xhr.send(data);
		}
	};
})();*/