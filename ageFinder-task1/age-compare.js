function age_cha(){
    let age;
    let ans =Number(document.getElementById("age").value);
    
    if(isNaN(ans)){
       age = "plece input number";
    }
    else{
        age = (ans <= 18) ? "to young":"you are old enough"
    }
    document.getElementById("return").innerHTML = age;
    }