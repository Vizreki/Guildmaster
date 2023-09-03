let week = 0;

function nextWeek(){
    let storefronts = store + armory + bakery;
    if (storefronts > shopkeep){missingStaff();return}
    let marketing;
    if (focusArea === focusareas[2]){marketing = 2;}
    else {marketing = 0;}
    let eventChance = Math.floor(Math.random() * 7) + marketing;
    if (eventChance >= 60){
        startEvent();
    } else incomeGen();
}

function missingStaff(){
    alert("One or more of your properties doesn't have enough staff.")
}



function incomeGen() {
if (genGoods > 0 & store === 0){silver+= Math.floor(Math.random() * 15)+8;
    genGoods-=Math.floor(Math.random() * 6)+2;coins();}
    if (genGoods < 0){genGoods = 0}

if (genGoods > 0 & store >= 1){silver+= store * (Math.floor(Math.random() * 25)+12);
    genGoods-= store * (Math.floor(Math.random() * 10)+5);coins();}
    if (genGoods < 0){genGoods = 0}
   




payStaff();
updateUI();
}


function payStaff(){
week+= 1;
if (week === 4 & gold > payRoll){gold-=payRoll; week = 0}
else if (week === 4){silver-= payRoll * 10; week = 0};
}





    
    
    
    









