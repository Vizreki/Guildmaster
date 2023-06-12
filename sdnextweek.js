
function nextWeek(){
    let marketing;
    if (focusArea === focusareas[2]){marketing = 2;}
    else {marketing = 0;}
    let eventChance = Math.floor(Math.random() * 7) + marketing;
    if (eventChance >= 99){
        startEvent();
    } else endOfWeek();
}

//only update UI and play sound ONCE when it's finished↓↓↓

function endOfWeek() {
    if (store >= 1 && genGoods > 0) {
        randSaleAmount = Math.floor(Math.random() * 5) + 1;
        if (focusArea === focusareas[1]) {randSaleAmount *= 2;}
        silver+= randSaleAmount * 10 + (store * 2);      
        genGoods -= randSaleAmount + Math.floor(Math.random() * 6) + 1;
        if (genGoods < 0) {genGoods = 0;}        
    }   
    
    //  ↓ not working ↓
    if (tavern >= 1) {
        let lacking = tavern - barkeep;
        let sold = Math.floor(Math.random() + 1 * tavern - lacking)
        silver += sold * Math.floor(Math.random() * 10) * 20;      
    }

    if (armory >= 1 && swords >= 1) {
        let lacking = storefronts - shopkeep;
        let chance = Math.floor(Math.random() * 11) - lacking;
        if (chance >5){
        let sold = Math.floor(Math.random() * swords)
        gold += sold * 30;
        swords-= sold;        
        }        
    }

    if (armory >= 1 && armor >= 1) {
        let lacking = storefronts - shopkeep;
        let chance = Math.floor(Math.random() * 11) - lacking;
        if (chance >5){
        let sold = Math.floor(Math.random() * armor)
        gold += sold * 50;
        armor-= sold;        
        }        
    }

    if (bakery >= 1) {
        let lacking = bakery - baker;
        let sold = Math.floor(Math.random() + 1 * bakery - lacking)
        silver += sold * Math.floor(Math.random() * 10) * 20;      
    }

    if (curioshop >= 1) {
        let lacking = curioshop - merchant;
        let sold = Math.floor(Math.random() + 1 * curioshop - lacking)
        gold += sold * Math.floor(Math.random() * 10) * 20;      
    }

   



gold-= payRoll;
updateUI();
coins();
}
  




    
    
    
    
