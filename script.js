const form=document.querySelector("form");
form.addEventListener('submit',function(e) {
    e.preventDefault()         //ye like jab 23 likh rhe tb vo gayab nhi ho rha haii
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');

    if(height===''|| height < 0 || isNaN(height)){
        result.innerHTML="Please give a valid height";
    }
    else if(weight===''|| weight < 0 || isNaN(weight)){
        result.innerHTML="Please give a valid weight";
    }
    else{
       const cal= (weight/((height*height)/10000)).toFixed(2);
       // show the result
       result.innerHTML=`<span>${cal}</span>`;
    }
});