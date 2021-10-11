document.getElementById('myName').innerHTML = prompt("Adınız nedir?");

function showTime()
{
    var today= new Date;

    var weekday = new Array(7);
    weekday[1] = "Pazartesi";
    weekday[2] = "Salı";
    weekday[3] = "Çarşamba";
    weekday[4] = "Perşembe";
    weekday[5] = "Cuma";
    weekday[6] = "Cumartesi";
    weekday[0] = "Pazar";
    
    var time = checkTime(today.getHours()) + ":" + checkTime(today.getMinutes()) + ":" + checkTime(today.getSeconds()) + " " + weekday[Number(today.getDay())];

    document.getElementById("myClock").innerHTML = time;
    setTimeout(showTime, 1000);

}

function checkTime(i)
{
    if(i < 10) {i = "0" + i; }
    return i;
}
showTime();