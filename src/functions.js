function hello(name){
    return(`hello ${name}`);
}

function feet2acre(squarefeet){
    let acre = squarefeet / 43560;
    return acre;
}

function calculatemowtime(length,width,cutpermin){
    let mowtime = (length * width) / cutpermin;
    return `${mowtime} minutes`;
}

function airquality(aqi) {
    let quality = ``
    if (aqi <= 50) {
      quality = 'Good';
    } else if (aqi <= 100) {
      quality = 'Moderate';
    } else if (aqi <= 150) {
      quality = 'Unhealthy for Sensitive Groups';
    } else if (aqi <= 200) {
      quality = 'Unhealthy';
    } else if (aqi <= 300) {
      quality = 'Very Unhealthy';
    } else if (aqi > 300) {
      quality = 'Hazardous';
    }
    return quality;
}

function yeeha(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        return "Yee Ha";
    } else if (number % 3 === 0) {
        return "Yee";
    } else if (number % 7 === 0) {
        return "Ha";
    } else {
        return "Nada";
    }
}

function slope(x1,y1,x2,y2){
    let rise = y2 - y1;
    let run = x2 - x1;
    let slp = rise / run;
    return slp;
}

export {hello, feet2acre, calculatemowtime, airquality, yeeha, slope}