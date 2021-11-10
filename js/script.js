function fetchWeather(){
    let loc_name = document.querySelector("#location").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc_name}&appid=5f2767e08e8db60931b3eb44d7afc197&units=metric`)
    .then((res)=>res.json())
    .then((data)=>displayValues(data))
    .catch((err)=>swal("Data not found","sorry for the inconvience","error"))
}


function displayValues(data){
    let html_content = ``;
    let am_or_pm ='';
    let loca_name = data.name;
    let climate = data["weather"][0].main;
    let humdity = data["main"].humidity;
    let temp = data["main"].temp;
    let wind = data["wind"].speed;
    let date = new Date().toDateString();
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if(hours>=13){
        am_or_pm="pm"
        hours=hours-12
    }else{
        am_or_pm="am"
    }
    if(climate=="Clouds"||climate=="Haze"){
        html_content=`
    <div class="row mt-5 d-flex justify-content-center align-items-center" >
    <div class="col-md-1 text-center">
        <h1 style="font-size: 80px;">${temp}<sup>o</sup></h1>
        <p class="fs-3">${climate}</p>
        <p class="fs-5">${loca_name}</p>
    </div>
    <div class="col-md-9  d-flex align-items-center justify-content-center">
        <img src="./images/sunny-walk.gif" class="img-fluid "  alt="">
    </div>
    <div class="col-md-2">
        <p><i class="far fa-snowflake"></i> ${humdity}%</p>
        <p> <i class="fas fa-wind"></i> ${wind}km/h</p>
        <p><i class="far fa-clock"></i> ${hours}: ${minutes} ${am_or_pm}</p>
    </div>
    
</div>
<div class="row  d-flex justify-content-center align-items-center"">
    <div class="col-md-4 col-12">
        <p class="h4"><img src="./images/logo.gif" class="img-fluid " style="height: 50px; width: 50px;" alt=""> Just Go Somewhere...  </p>
    </div>
    <div class="col-md-4 col-12 t">
        <h6> <img src="./images/sunny-walk.gif" class="img-fluid " style="height: 50px; width: 50px;" alt=""> Perfect time for a Perfect walk.</h6>
    </div>
    <div class="col-md-4 col-12 ">
       <h5> <img src="./images/date.gif" class="img-fluid " style="height: 50px; width: 50px;" alt=""> ${date}</h5> 
    </div>
</div>
    `
    document.querySelector('#weather').innerHTML=html_content;
    document.querySelector('#home').style.display="none"
    }else if(climate=="Mist"||climate=="Rain"){
        html_content=`
    <div class="row mt-5 d-flex justify-content-center align-items-center" >
    <div class="col-md-1 text-center">
        <h1 style="font-size: 80px;">${temp}<sup>o</sup></h1>
        <p class="fs-3">${climate}</p>
        <p class="fs-5">${loca_name}</p>
    </div>
    <div class="col-md-9  d-flex align-items-center justify-content-center">
        <img src="./images/stay.gif" class="img-fluid "  alt="">
    </div>
    <div class="col-md-2">
        <p><i class="far fa-snowflake"></i> ${humdity}%</p>
        <p> <i class="fas fa-wind"></i> ${wind}km/h</p>
        <p><i class="far fa-clock"></i> ${hours}: ${minutes} ${am_or_pm}</p>
    </div>
    
</div>
<div class="row  d-flex justify-content-center align-items-center"">
    <div class="col-md-4 col-12">
        <p class="h4"><img src="./images/logo.gif" class="img-fluid " style="height: 50px; width: 50px;" alt=""> Stay home chill.. </p>
    </div>
    <div class="col-md-4 col-12 t">
        <h6> <img src="./images/stay.gif" class="img-fluid " style="height: 50px; width: 50px;" alt="">Have a cup of tea and stay safe.</h6>
    </div>
    <div class="col-md-4 col-12 ">
       <h5> <img src="./images/date.gif" class="img-fluid " style="height: 50px; width: 50px;" alt=""> ${date}</h5> 
    </div>
</div>
    `
    document.querySelector('#weather').innerHTML=html_content;
    document.querySelector('#home').style.display="none"
    }
    
}
let header=document.querySelector('#header')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
        header.classList.add('shadow');
        header.style.backgroundColor="#FFF";
    }else{
        header.classList.remove('shadow')
        header.style.backgroundColor="";
    }
})