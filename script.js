let safeneighborhoodspeed = prompt("insert your average speed")
let teksVehicleSpeed;

if(safeneighborhoodspeed >=200 && safeneighborhoodspeed <=250){
    teksVehicleSpeed = confirm("You are wanted")
}else if(safeneighborhoodspeed >=150 && safeneighborhoodspeed <=200){
    teksVehicleSpeed = confirm("You are injuring people")
}else if(safeneighborhoodspeed >=100 && safeneighborhoodspeed <=150){
    teksVehicleSpeed = confirm("slowdown")
}else if(safeneighborhoodspeed >=80 && safeneighborhoodspeed <=100){
    teksVehicleSpeed = confirm("lower")
}else if(safeneighborhoodspeed >=60 && safeneighborhoodspeed <=80){
    teksVehicleSpeed = confirm("warned")
}else if(safeneighborhoodspeed >=20 && safeneighborhoodspeed <=60){
    teksVehicleSpeed = confirm("safe")
}else{
    teksVehicleSpeed = confirm("stopped")
}