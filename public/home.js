//Функция при загрузки страницы
function onload() {
	curr_tim();
}
// Часы на странице
function curr_tim() {
	var date = new Date();
	var tim = document.getElementById('time');
	//Добавляем 0 для секунд
		if (date.getSeconds() < 10) {
			sec = '0' + date.getSeconds();
		}
		else {
			sec = date.getSeconds();
		}
		//Добавляем 0 для минут
		if (date.getMinutes() < 10) {
			min = '0' + date.getMinutes();
		}
		else {
			min = date.getMinutes();
		}
		//Добавляем 0 для часов
		if (date.getHours() < 10) {
			hour = '0' + date.getHours();
		}
		else {
			hour = date.getHours();
		}
		tim.innerHTML = hour + ' : ' + min + ' : ' + sec;
		setTimeout(curr_tim, 1000);
}

///////////

function curr_data() {

}

function onl(text){
	localStorage.setItem('test', 'testdata');
	alert(text);
}
function tes() {
	alert(localStorage.getItem('test'));
}

//Функция отображения текущей температуры
function curr_temp() {
	check_tim(function (tim) {
		console.log('come back');
		console.log(tim);
	});
}
//Функция счета времени
function check_tim(cb) {
	cb('kdjfdnfj');
	var period = 2;
	var date = new Date();
	var tim = {

	};
	if (date.getSeconds() == '00' && (date.getMinutes() % period) == '0') {
		setTimeout(check_tim, (period * 60000) - 5000);
		tim.sec = date.getSeconds();
		tim.min = date.getMinutes();
		tim.hour = date.getHours();
		tim.date = date.getDate();
		tim.day = date.getDay();
		tim.mont = date.getMonth();
	}
	else {
		console.log('Мониторим по 1000 милисекунд');
		setTimeout(check_tim, 1000);
	}
}
