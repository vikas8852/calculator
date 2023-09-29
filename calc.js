var pro=document.querySelector('#pro');
var total=document.querySelector('#total')
var result=document.querySelector('#result');

// console.log(pro+"  "+total+"  "+result+"  ");


pro.addEventListener('keyup',DoCalculation);
total.addEventListener('keyup',DoCalculation);

function DoCalculation(){
    var p= parseFloat(pro.value);
    var t= parseFloat(total.value);
    if(isNaN(p))
     p=0;
     if(isNaN(t))
     t=0;
    var per=t*(p/100);
    result.value=per;
}
