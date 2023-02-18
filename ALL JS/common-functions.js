
function areaOfTRP (inputelement1 , inputelement2){
    const inputElementofValue1 = parseFloat(document.getElementById(inputelement1).value);
    
    
    const inputElementofValue2 = parseFloat(document.getElementById(inputelement2).value);
  
    
    const totalArearesult = inputElementofValue1*inputElementofValue2;
    const totalArea = totalArearesult.toFixed(2);
    document.getElementById(inputelement1).value = '';
    document.getElementById(inputelement2).value = '';
    return totalArea;
}

function areaOfRP (inputelement1 , inputelement2){
    const inputElementofValue1 = parseFloat(document.getElementById(inputelement1).value);
    const inputElementofValue2 = parseFloat(document.getElementById(inputelement2).value);
    
    const totalArearesult = inputElementofValue1*inputElementofValue2;
    const totalArea = totalArearesult.toFixed(2);
    document.getElementById(inputelement1).value = '';
    document.getElementById(inputelement2).value = '';
    return totalArea;
}
function areaOfEllipse (inputelement1 , inputelement2){
    const inputElementofValue1 = parseFloat(document.getElementById(inputelement1).value);
    const inputElementofValue2 = parseFloat(document.getElementById(inputelement2).value);
    
    const totalArearesult = 3.1416*inputElementofValue1*inputElementofValue2;
    const totalArea = totalArearesult.toFixed(2);
    document.getElementById(inputelement1).value = '';
    document.getElementById(inputelement2).value = '';
    return totalArea;
}

let cunter = 0;


