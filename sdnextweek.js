
function nextWeek(){
    let marketing;
    if (focusArea === focusareas[2]){marketing = 2;}
    else {marketing = 0;}
    let eventChance = Math.floor(Math.random() * 7) + marketing;
    if (eventChance >= 99){
        startEvent();
    } else endOfWeek();
}

//only update UI once ↓↓↓

function endOfWeek() {
    if (store >= 1 && genGoods > 0) {
        randSaleAmount = Math.floor(Math.random() * 5) + 1;
        if (focusArea === focusareas[1]) {randSaleAmount *= 2;}
        silver+= randSaleAmount * 10 + (store * 2 + shopkeep * 2);      
        genGoods -= randSaleAmount + Math.floor(Math.random() * 6) + 1;
        if (genGoods < 0) {genGoods = 0;}
        updateUI();
    }    
    if (tavern >= 1) {
        randSaleAmount = Math.floor(Math.random() * 5) + 1;
        silver += randSaleAmount * 20 + (tavern * 2 + barkeep * 2);
        updateUI();      
    }
    if (armory >= 1 && swords >= 1) {
        randSaleAmount = Math.floor(Math.random() * 5) + 1;
        gold += randSaleAmount * 20 + (tavern * 2 + barkeep * 2);
        updateUI();        
    }









}
  




    
    
    
    
