let input=document.querySelector('.input');
let output=document.querySelector('.output');
let btnEle= document.querySelector('button');
 
btnEle.onclick = execute;

function execute(){
    let code=input.value;
    //here we dumping into input values into output 
    output.contentWindow.document.body.innerHTML = code
    
    //output.contentWindow.document.write(code);

}