var first_run = {
	tim : 'true'
};
//Функция при загрузки страницы
function onload() {
	curr_tim();
}
function onl(text){
	localStorage.setItem('test', 'testdata');
	alert(text);
}
function tes() {
	alert(localStorage.getItem('test'));
}
// Часы на странице
function curr_tim() {
	var date = new Date();
	var tim = document.getElementById('time');
		if (date.getSeconds() < 10) {
			sec = '0' + date.getSeconds();
		}
		else {
			sec = date.getSeconds();
		}
		tim.innerHTML = date.getHours() + ' : ' + date.getMinutes() + ' : ' + sec;
		setTimeout(curr_tim, 1000);
}
//Функция отображения текущей температуры
function curr_temp() {
	var count = 1;
	var curr_temper = document.getElementById('curr_temp');
	curr_temper.innerHTML = count;
	check_tim();
}
//Функция счета времени
function check_tim() {
	var period = 2;
	var date = new Date();
	if (date.getSeconds() == '00' && (date.getMinutes() % period) == '0') {
		var curr_temper = document.getElementById('curr_temp');
		curr_temper.innerHTML = date.getMinutes() + ' : ' + date.getSeconds();
		setTimeout(check_tim, (period * 60000) - 2000);
	}
	else {
		console.log('Мониторим по 200 милисекунд');
		setTimeout(check_tim, 200);
	}
}
