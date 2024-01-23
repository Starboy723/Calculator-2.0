let text=document.getElementById("text");
let total=0;
function func(string){
    if(string=="ac"){
        text.value='';
    }
    else if(string=="del")
    {
        text.value=text.value.slice(0,text.value.length-1);
    }
    else if(string=="%" || string=="/" ||  string=="*"|| string=="-"||string=='+')
    {
        let newstring=text.value.charAt(text.value.length-1);
        if(text.value=="0")
        {
            text.value='';
        }
        if(text.value.length>=1 && newstring!="%" && newstring!="+" && newstring!="/" && newstring!="-" &&newstring!="*")
        {
            text.value+=string;
        }
    }
    else if(string=="="){
        text.value=eval(text.value);
    
    }
    else{
        if(text.value=="0")
        {
            text.value='';
        }
        text.value+=string;
    }
    if(text.value.length>=22)
    {
      text.style.fontSize="15px"; 
    }
    else if(text.value.length>=15)
    {
      text.style.fontSize="20px";
    }
    else
    {
      text.style.fontSize="30px";
    }

}
