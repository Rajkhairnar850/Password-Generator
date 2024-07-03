let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
    let numbers=document.getElementById("numbers");
    let symbols=document.getElementById("symbols")
    let genbtn=document.getElementById("genbtn");
    let copyIcon=document.getElementById("copyicon");




sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>
{
sliderValue.textContent=inputSlider.value;
});

genbtn.addEventListener('click',()=>
{
    passbox.value=generatePassword();
})
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUWXYZ";
let Allnumbers="01234567890";
let AllSymbols="!@#$%^&*()_+{}|:\"<>?";

function generatePassword()
{
    let genPassword="";
    let allChars="";

    allChars+=lowercase.checked?lowerChars:"";
    allChars+=uppercase.checked?upperChars:"";
    allChars+=numbers.checked?Allnumbers:"";
    allChars+=symbols.checked?AllSymbols:"";
    if(allChars=="" || allChars.length==0)
        {
            return genPassword;
        }
 let i=1;
 while(i<=inputSlider.value)
    {

    
    genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click',()=>
{
    if(passbox.value!="" || passbox.value.length>=1)
        {
    navigator.clipboard.writeText(passbox.value);
    copyIcon.innerText="check";
    copyIcon.title="Password Copied";
    setTimeout(() => {
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";
    }, 4000);
        }
})
