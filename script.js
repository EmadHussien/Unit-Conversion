
let mettToFeet = document.getElementById("meetFeet");
let literToGallon = document.getElementById("literGallon");
let kgToPound = document.getElementById("kgPounds")
let number;
function getVal()
{
    number = document.getElementById("num").value;
    console.log(number);

}
function feetAndMeter()
{
    
    let feet =  (number * 3.2808399).toFixed(3) ; 
    let meter = (number * 0.3048).toFixed(3) ; 
    result = number+" meters = "+feet+" feet | "+number+" feet = "+meter+" meters";
    mettToFeet.textContent = result;
}

function literAndGallon()
{
    let gallon =  (number * 0.264172052  ).toFixed(3) ; 
    let leter = (number * 3.78541178 ).toFixed(3) ; 
    result = number+" liters = "+gallon+" gallons | "+number+" gallons = "+leter+" liters";
    literToGallon.textContent = result;
}


function kgAndpound()
{
    let kg =  (number / 2.20462262 ).toFixed(3) ; 
    let pound = (number *2.20462262 ).toFixed(3) ; 
    result = number+" kilos = "+pound+" pounds | "+number+" pounds = "+kg+" kilos";
    kgToPound.textContent = result;
}

