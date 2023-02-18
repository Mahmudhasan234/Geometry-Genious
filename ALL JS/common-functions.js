function areaOfTRP (inputelement1 , inputelement2){
    const inputElementofValue2 = parseFloat(document.getElementById(inputelement2).value);
    const inputElementofValue1 = parseFloat(document.getElementById(inputelement1).value);
    
    const totalArea = 0.5*inputElementofValue1*inputElementofValue2;
    document.getElementById(inputelement1).value = '';
    document.getElementById(inputelement2).value = '';
    return totalArea;
}

function areaOfRP (inputelement1 , inputelement2){
    const inputElementofValue2 = parseFloat(document.getElementById(inputelement2).value);
    const inputElementofValue1 = parseFloat(document.getElementById(inputelement1).value);
    
    const totalArea = inputElementofValue1*inputElementofValue2;
    document.getElementById(inputelement1).value = '';
    document.getElementById(inputelement2).value = '';
    return totalArea;
}

let cunter = 0;


