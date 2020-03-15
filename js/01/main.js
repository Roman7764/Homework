//1)
var month = 30;//В месяце 30 дней
var result;//Вывод результата
var time;
do{
    var run = prompt("Сколько километров в день ты бежишь?","");
    var fullRun = prompt("Сколько километров ты хочешь пробежать за месяц?","");
    result = fullRun/month-run;
    if(result == 1){
        time = " час";
    }else if(result > 4){
        time = " часов";
    }else if(result == 0){
        alert("Ты уже добился своего результата");
        break;
    }
    else{
        time = " часа";
    }
	alert("Тебе нужно бежать больше на " + result + time +" в день чтобы добиться своего результата");
}while(condition);
//2)
var block = document.getElementById('block');
var credentials = {
    login: 'admin',
    password: 'qwerty',
}
function Input(){
    login_ok = false;
    user_name = "";
    password = "";
    user_name = prompt("Логин","");
    user_name = user_name.toLowerCase();
    password = prompt("Пароль","");
    password = password.toLowerCase();
    if (user_name == credentials.login && password==credentials.password) {
        login_ok = true;
    }
    if (login_ok==false){
        block.style.background = 'red';
        var  change = document.getElementById('block');
        change.innerHTML = 'Логин или пароль введён неправильно';
    }else{
        block.style.background = 'green';
        var  change = document.getElementById('block');
        change.innerHTML = 'Поздравляю Вы успешно зашли на сайт';
    }
}