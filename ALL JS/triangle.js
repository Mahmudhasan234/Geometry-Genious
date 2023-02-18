let cunter = 0;
document.getElementById('triangle-calculate').addEventListener('click', function(){
  cunter+=1;
    const resultArea = document.getElementById('Calculate-result')
    const tr = document.createElement('tr');
    tr.innerHTML= `<tr>
    <td>${cunter}</td>
    <td> ${areaOfTRP('triangle-base-input', 'triangle-height-input' )} </td>
    <td><button class="btn btn-primary ml-2 position-relative bottom-50"> Convert </button></td> 
    </tr>`
    resultArea.appendChild (tr);
})