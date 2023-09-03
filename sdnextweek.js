let week = 0;

function nextWeek(){
    let storefronts = store + armory + bakery;
    if (storefronts > shopkeep){missingStaff();return}
    if (workshop > crafter){missingStaff();return}
    if (bakery > baker){missingStaff();return}
    if (smithy > smith){missingStaff();return}
    let marketing;
    if (focusArea === focusareas[2]){marketing = 2;}
    else {marketing = 0;}
    let eventChance = Math.floor(Math.random() * 7) + marketing;
    if (eventChance >= 60){
        startEvent();
    } else incomeGen();production();
}

function missingStaff(){
    alert("One or more of your properties doesn't have enough staff.")
}



function incomeGen() {
if (genGoods > 0 & store === 0){silver+= Math.floor(Math.random() * 25)+10;
    genGoods-=Math.floor(Math.random() * 6)+2;coins();}
    if (genGoods < 0){genGoods = 0}

if (genGoods > 0 & store >= 1){silver+= store * (Math.floor(Math.random() * 40)+20);
    genGoods-= store * (Math.floor(Math.random() * 10)+5);coins();}
    if (genGoods < 0){genGoods = 0}

if (tools > 0 & store >= 1){silver+= store * (Math.floor(Math.random() * 75)+30);
    tools-= store * (Math.floor(Math.random() * 5)+1);coins();}
    if (tools < 0){tools = 0}

if (bakery){silver+= bakery * (Math.floor(Math.random() * 120)+20)}
if (tavern){silver+= tavern * (Math.floor(Math.random() * 140)+25)}
//if (tavern & mercenary){RANDOM ARTIFACT FROM MERC ADVENTURING}

if (smithy > 0 & ore >= 2){
    for (let i = 0; i < smithy; i++){
    let work = Math.floor(Math.random() * 8);
    if (work === 7){swords++;ore-=2;}
    if (work === 6){armor++;ore-=2;}
    }
}



payStaff();
updateUI();
}

function production(){
    if (workshop > 0){
        genGoods+=10;
        tools+=3;
    }
}




function payStaff(){
    if (guildMembers > 1){
        if (week === 4 & gold > payRoll){gold-=payRoll;coins();}
        else if (week === 4){silver-= payRoll * 10;coins();}}
        week++;
        if (week === 5){week = 0}
}





    
    
    
    









