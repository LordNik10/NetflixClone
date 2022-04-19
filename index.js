var locandine1 = ['./img/reginadelsud.png','./img/snowpiercer.png','./img/friends.png','./img/casa.png','./img/hate.png','./img/regole.png','./img/trivia.png'];
var locandine2 = ['./img/good doctor.png','./img/brooklyn.png','./img/bigbangtheory.png','./img/superstore.png','./img/chicagomed.png','./img/willy.png','./img/newamsterdam.png'];
var loc1 = [];
var loc2 = [];
function dropmenu()
{
    var menu = document.getElementById('dropdown2');
    var arrow = document.getElementById('arrow');
    menu.style.display='block';
    arrow.style.transform='rotate(180deg)';
}
function hidemenu()
{
    var menu = document.getElementById('dropdown2');
    var arrow = document.getElementById('arrow');
    menu.style.display='none';
    arrow.style.transform='rotate(0deg)';
}

function dropmenusfoglia()
{
    var menu = document.getElementById('elencosfoglia');
    menu.style.display='block';
}
function hidemenusfoglia()
{
    var menu = document.getElementById('elencosfoglia');
    menu.style.display='none';
}

function creslider(numeroslider, arrlocandine)
{
    var slider = document.getElementById('slider'+numeroslider);
    var loc=[];
    for (i=0;i<6;i++)
    {
        loc[i] = document.createElement('div');
        loc[i].className='locandina';
        loc[i].id='loc'+i;

        var imglocandina = document.createElement('img');
        imglocandina.src=arrlocandine[i];
        imglocandina.className='imglocandina';

        loc[i].appendChild(imglocandina);
        
        slider.appendChild(loc[i]);
    }
    return loc;
}

function scorridestra(numero)
{
    if (numero==1)
    {
        loc1[5].style.display='block';
        loc1[0].style.display='none';
    }
    else
    {
        loc2[5].style.display='block';
        loc2[0].style.display='none';
    }
    
}

function scorrisinistra(numero)
{
    if (numero==1)
    {
        loc1[5].style.display='none';
        loc1[0].style.display='block';
    }
    else
    {
        loc2[5].style.display='none';
        loc2[0].style.display='block';
    }
}

let x1 = window.matchMedia("(max-width: 2000px)");
let x2 = window.matchMedia("(max-width: 1500px)");
let x3 = window.matchMedia("(max-width: 1000px)");
let x4 = window.matchMedia("(max-width: 870px)");
let x5 = window.matchMedia("(max-width: 650px)");

let vett2 = ['block','block','block','block','block','none'];
let vett3 = ['block','block','block','block','none','none'];
let vett4 = ['block','block','block','none','none','none'];
let vett5 = ['block','block','none','none','none','none'];

let vett22 = ['block','block','block','block','block','none'];
let vett32= ['block','block','block','block','none','none'];
let vett42= ['block','block','block','none','none','none'];
let vett52= ['block','block','none','none','none','none'];


let count=2;
let count2=2;
let countind=0;
let countind2=0;

function scorrivettore1(numero)
{

    let width = window.innerWidth;
   if (width<=1500 && width>=1001)
   {
       console.log('matcho x2');
        if (numero==1)
        {
            loc1[5].style.display='block';
            loc1[0].style.display='none';
            vett2[5]='block';
            vett2[0]='none';
        }
        else
        {
            loc2[5].style.display='block';
            loc2[0].style.display='none';
            vett22[5]='block';
            vett22[0]='none';
        }
   }
   

   if (width<=1000 && width>=871)
   {

       
       if (numero==1)
       {
            if (vett3[4]=='none')
            {
                vett3[4]='block';
                vett3[0]='none';
                loc1[4].style.display='block';
                loc1[0].style.display='none';
            }
            else
            {   
                loc1[5].style.display='block';
                loc1[1].style.display='none';
                vett3[5]='block';
                vett3[1]='none';
            }
       }
       else
       {
            if (vett32[4]=='none')
            {
                vett32[4]='block';
                vett32[0]='none';
                loc2[4].style.display='block';
                loc2[0].style.display='none';
            }
            else
            {   
                loc2[5].style.display='block';
                loc2[1].style.display='none';
                vett32[5]='block';
                vett32[1]='none';
            }
       }  
   }

   if (width<=870 && width>=651)
   {
    console.log(vett4,vett42);
       if (numero==1)
       {
            if (vett4[3]=='none')
            {
                vett4[3]='block';
                vett4[0]='none';
                loc1[3].style.display='block';
                loc1[0].style.display='none';
            }
            else
            {   
                if (vett4[4]=='none')
                {
                    vett4[4]='block';
                    vett4[1]='none';
                    loc1[4].style.display='block';
                    loc1[1].style.display='none';
                }
                else
                {
                    vett4[5]='block';
                    vett4[2]='none';
                    loc1[5].style.display='block';
                    loc1[2].style.display='none';
                }
            }
       }
       else
       {
           if (vett42[3] == 'none') {
               vett42[3] = 'block';
               vett42[0] = 'none';
               loc2[3].style.display = 'block';
               loc2[0].style.display = 'none';
           }
           else {
               if (vett42[4] == 'none') {
                   vett42[4] = 'block';
                   vett42[1] = 'none';
                   loc2[4].style.display = 'block';
                   loc2[1].style.display = 'none';
               }
               else {
                   vett42[5] = 'block';
                   vett42[2] = 'none';
                   loc2[5].style.display = 'block';
                   loc2[2].style.display = 'none';
               }
           }
       }  
   }

   
   if (width<=650)
   {
       if (numero==1)
       {
           console.log(count);
            if (/*vett5[2]=='none' &&*/ count==2)
            {
                vett5[2]='block';
                vett5[0]='none';
                loc1[2].style.display='block';
                loc1[0].style.display='none';
                count=3;
                countind=0;
            }
            else
            {   
                if (/*vett5[3]=='none'&&*/ count==3)
                {
                    vett5[3]='block';
                    vett5[1]='none';
                    loc1[3].style.display='block';
                    loc1[1].style.display='none';
                    count=4;
                    countind=1;
                }
                else
                {
                    if (/*vett5[4]=='none' &&*/ count==4)
                    {
                        vett5[4]='block';
                        vett5[2]='none';
                        loc1[4].style.display='block';
                        loc1[2].style.display='none';
                        count=5;
                        countind=2;
                    }
                    else
                    {
                        vett5[5]='block';
                        vett5[3]='none';
                        loc1[5].style.display='block';
                        loc1[3].style.display='none'; 
                        count=5;
                        countind=3;
                    }
                    
                }
            }
            console.log('count= '+count+' countind= '+countind);
       } 
       else
       {
            if (/*vett52[2]=='none' &&*/ count2==2)
            {
                vett52[2]='block';
                vett52[0]='none';
                loc2[2].style.display='block';
                loc2[0].style.display='none';
                count2=3;
                countind2=0;
            }
            else
            {   
                if (/*vett52[3]=='none'&&*/ count2==3)
                {
                    vett52[3]='block';
                    vett52[1]='none';
                    loc2[3].style.display='block';
                    loc2[1].style.display='none';
                    count2=4;
                    countind2=1;
                }
                else
                {
                    if (/*vett52[4]=='none' &&*/ count2==4)
                    {
                        vett52[4]='block';
                        vett52[2]='none';
                        loc2[4].style.display='block';
                        loc2[2].style.display='none';
                        count2=5;
                        countind2=2;
                    }
                    else
                    {
                        vett52[5]='block';
                        vett52[3]='none';
                        loc2[5].style.display='block';
                        loc2[3].style.display='none'; 
                        count2=5;
                        countind2=3;
                    }
                    
                }
            }
            console.log('count2= '+count2+' countind2= '+countind2);
       } 
   }

}

function scorrivettore2(numero)
{

   let width = window.innerWidth;
   if (width<=1500 && width>=1001)
   {
        if (numero==1)
        {
            loc1[5].style.display='none';
            loc1[0].style.display='block';
            vett2[5]='none';
            vett2[0]='block';
        }
        else
        {
            loc2[5].style.display='none';
            loc2[0].style.display='block';
            vett22[5]='none';
            vett22[0]='block';
        }
   }
   

   if (width<=1000 && width>=871)
   {
       if (numero==1)
       {
            if (vett3[5]=='block')
            {
                
                vett3[5]='none';
                vett3[1]='block';
                loc1[5].style.display='none';
                loc1[1].style.display='block';
            }
            else
            {   
                loc1[4].style.display='none';
                loc1[0].style.display='block';
                vett3[4]='none';
                vett3[0]='block';
            }
       }
       else
       {
            if (vett32[5]=='block')
            {
                vett32[5]='none';
                vett32[1]='block';
                loc2[5].style.display='none';
                loc2[1].style.display='block';
            }
            else
            {   
                loc2[4].style.display='none';
                loc2[0].style.display='block';
                vett32[4]='none';
                vett32[0]='block';
            }
       }  
   }

   if (width<=870 && width>=651)
   {
       console.log(vett4,vett42);
       if (numero==1)
       {
            if (vett4[5]=='block')
            {
                vett4[5]='none';
                vett4[2]='block';
                loc1[5].style.display='none';
                loc1[2].style.display='block';
            }
            else
            {   
                if (vett4[4]=='block')
                {
                    vett4[4]='none';
                    vett4[1]='block';
                    loc1[4].style.display='none';
                    loc1[1].style.display='block';
                }
                else
                {
                    vett4[3]='none';
                    vett4[0]='block';
                    loc1[3].style.display='none';
                    loc1[0].style.display='block';
                }
            }
       }
       else
       {
           if (vett42[5] == 'block') {
               vett42[5] = 'none';
               vett42[2] = 'block';
               loc2[5].style.display = 'none';
               loc2[2].style.display = 'block';
           }
           else {
               if (vett42[4] == 'block') {
                   vett42[4] = 'none';
                   vett42[1] = 'block';
                   loc2[4].style.display = 'none';
                   loc2[1].style.display = 'block';
               }
               else {
                   vett42[3] = 'none';
                   vett42[0] = 'block';
                   loc2[3].style.display = 'none';
                   loc2[0].style.display = 'block';
               }

           }
       }  
   }

   
   if (width<=650)
   {
       if (numero==1)
       {
            if (/*vett5[5]=='block' &&*/ countind==3)
            {
                vett5[5]='none';
                vett5[3]='block';
                loc1[5].style.display='none';
                loc1[3].style.display='block';
                countind=2;
                count=5;
            }
            else
            {   
                if (/*vett5[4]=='block' &&*/ countind==2)
                {
                    vett5[4]='none';
                    vett5[2]='block';
                    loc1[4].style.display='none';
                    loc1[2].style.display='block';
                    countind=1;
                    count=4;
                }
                else
                {
                    if (/*vett5[3]=='block' &&*/ countind==1)
                    {
                        vett5[3]='none';
                        vett5[1]='block';
                        loc1[3].style.display='none';
                        loc1[1].style.display='block';
                        countind=0;
                        count=3;
                    }
                    else
                    {
                        vett5[2]='none';
                        vett5[0]='block';
                        loc1[2].style.display='none';
                        loc1[0].style.display='block'; 
                        countind=0;
                        count=2;
                    }
                    
                }
            }
            console.log('count= '+count+' countind= '+countind);  
       } 
       else
       {
            if (/*vett52[5]=='block' &&*/ countind2==3)
            {
                vett52[5]='none';
                vett52[3]='block';
                loc2[5].style.display='none';
                loc2[3].style.display='block';
                countind2=2;
                count2=5;
            }
            else
            {   
                if (/*vett52[4]=='block' &&*/ countind2==2)
                {
                    vett52[4]='none';
                    vett52[2]='block';
                    loc2[4].style.display='none';
                    loc2[2].style.display='block';
                    countind2=1;
                    count2=4;
                }
                else
                {
                    if (/*vett52[3]=='block' &&*/ countind2==1)
                    {
                        vett52[3]='none';
                        vett52[1]='block';
                        loc2[3].style.display='none';
                        loc2[1].style.display='block';
                        countind2=0;
                        count2=3;
                    }
                    else
                    {
                        vett52[2]='none';
                        vett52[0]='block';
                        loc2[2].style.display='none';
                        loc2[0].style.display='block'; 
                        countind2=0;
                        count2=2;
                    }
                    
                }
            }
            console.log('count2= '+count2+' countind2= '+countind2);
       } 
   }

}

function displaylocandine()
{
    let width = window.innerWidth;

    if (width<=2000 && width>=1501)
    {
        for (let i=0;i<loc1.length;i++)
        {
            loc1[i].style.display='block';
            loc2[i].style.display='block';
        }
    }

    if (width<=1500 && width>=1001)
    {
        for (let i=0;i<loc1.length-1;i++)
        {
            loc1[i].style.display='block';
            loc2[i].style.display='block';
            vett2[i]='block';
            vett22[i]='block'
        }
        
        for (let i=loc1.length-1;i<loc1.length;i++)
        {
            loc1[i].style.display='none';
            loc2[i].style.display='none';
            vett2[i]='none';
            vett22[i]='none';
        }
    }

    if (width<=1000 && width>=871)
    {
        for (let i=0;i<loc1.length-2;i++)
        {
            loc1[i].style.display='block';
            loc2[i].style.display='block';
            vett3[i]='block';
            vett32[i]='block';
        }

        for (let i=loc1.length-2;i<loc1.length;i++)
        {
            loc1[i].style.display='none';
            loc2[i].style.display='none';
            vett3[i]='none';
            vett32[i]='none';
        }
    }

    if (width<=870 && width>=651)
    {
        for (let i=0;i<loc1.length-3;i++)
        {
            loc1[i].style.display='block';
            loc2[i].style.display='block';
            vett4[i]='block'
            vett42[i]='block';
        }

        for (let i=loc1.length-3;i<loc1.length;i++)
        {
            loc1[i].style.display='none';
            loc2[i].style.display='none';
            vett4[i]='none';
            vett42[i]='none';
        }
    }

    if (width<=650)
    {
        for (let i=0;i<loc1.length-4;i++)
        {
            loc1[i].style.display='block';
            loc2[i].style.display='block';
            vett5[i]='block';
            vett52[i]='block'
            count=2;
            count2=2;
            countind=0;
            countind2=0;
            console.log(count, count2, countind,countind2);
        }

        for (let i=loc1.length-4;i<loc1.length;i++)
        {
            loc1[i].style.display='none';
            loc2[i].style.display='none';
            vett5[i]='none';
            vett52[i]='none';
        }
    }
}


document.addEventListener('DOMContentLoaded',function(){
    
    loc1 = creslider(1,locandine1);
    loc2 = creslider(2,locandine2);


    
});
