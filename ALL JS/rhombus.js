
document.getElementById('rhombus-calculate').addEventListener('click', function(){

    const inputelement1String =document.getElementById('rhombus-d1');
    const inputelement2String =document.getElementById('rhombus-d2');
    
    const inputElementofValue1 = parseFloat(inputelement1String.value);
    const inputElementofValue2 = parseFloat(inputelement2String.value);
    if((isNaN(inputElementofValue1)|| isNaN(inputElementofValue2))){
        
        inputelement1String.value = '';
        inputelement2String.value = '';
        return alert("Plase Input a Number");
    }
    else if( inputElementofValue1 < 0 || inputElementofValue2 < 0) {
        inputelement1String.value = '';
        inputelement2String.value = '';
        return  alert("Plase Input a Positive Number");
    }


    cunter+=1;
      const resultArea = document.getElementById('Calculate-result')
      const tr = document.createElement('tr');
      tr.innerHTML= `<tr>
      <td>${cunter}</td>
      <td> ${areaOfTRP('rhombus-d1', 'rhombus-d2' )} </td>
      <td><button class="btn btn-primary ml-2 position-relative bottom-50"> Convert </button></td> 
      </tr>`
      resultArea.appendChild (tr);
  })