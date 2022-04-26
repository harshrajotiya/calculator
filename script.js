document.getElementById("opr1").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="+";
})

document.getElementById("opr2").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="-";
})

document.getElementById("opr3").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="*";
})

document.getElementById("opr4").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="/";
})

document.getElementById("key7").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="7";
})

document.getElementById("key8").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="8";
})

document.getElementById("key9").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="9";
})

document.getElementById("key4").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="4";
})

document.getElementById("key5").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="6";
})

document.getElementById("key1").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="1";
})

document.getElementById("key2").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="2";
})

document.getElementById("key3").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="3";
})

document.getElementById("key0").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+="0";
})

document.getElementById("keyp").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML+=".";
})

document.getElementById("keyc").addEventListener("click",function()
{
    document.getElementById("inp").innerHTML="";
})

function isitValid(str)
{

    let n=str.length;

    if(n==1)return false;

    let last=false;

    for(let i=0;i<n;i++)
    {

        if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/' || str[i]=='.')
        {
            if(last==true)return false;
        }

        if(str[i]=='+')last=true;
        else if(str[i]=='-')last=true;
        else if(str[i]=='*')last=true;
        else if(str[i]=='/')last=true;
        else if(str[i]=='.')last=true;
        else last=false;
        
    }

    return true;

}

document.getElementById("eq").addEventListener("click",function()
{
    let cal= document.getElementById("inp").innerHTML;

    if(isitValid(cal))
    {
        document.getElementById("inp").innerHTML=eval(cal);
    }
    else
    {
        alert("Sorry Wrong Expression ! ");
        document.getElementById("inp").innerHTML="";
    }

})
