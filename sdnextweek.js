
function nextWeek(){
    let marketing;
    if (focusArea === focusareas[2]){marketing = 2;}
    else {marketing = 0;}
    let eventChance = Math.floor(Math.random() * 7) + marketing;
    if (eventChance >= 99){
        startEvent();
    } else endOfWeekMoney();
}

//only update UI and play sound ONCE when it's finished↓↓↓

function endOfWeekMoney() {
    if (store >= 1 && genGoods > 0) {
        randSaleAmount = Math.floor(Math.random() * 5) + 1;
        if (focusArea === focusareas[1]) {randSaleAmount *= 2;}
        silver+= randSaleAmount * 10 + (store * 2);      
        genGoods -= randSaleAmount + Math.floor(Math.random() * 6) + 1;
        if (genGoods < 0) {genGoods = 0;}        
    }   

    if (store >= 1 && tools > 0) {
        randSaleAmount = Math.floor(Math.random() * 5) + 1;
        if (focusArea === focusareas[1]) {randSaleAmount *= 2;}
        silver+= randSaleAmount * 10 + (store * 2);      
        tools -= randSaleAmount + Math.floor(Math.random() * 6) + 1;
        if (tools < 0) {tools = 0;}        
    }   
    

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
        lacking+= storefronts - shopkeep;
        let sold = bakery - lacking;
        silver += sold * Math.floor(Math.random() * 70) + 20;     
    }

    if (curioshop >= 1 && artifacts >= 1) {
        let lacking = 2 + hestorefronts - merchant;
        let chance = Math.floor(Math.random() * 20) - lacking;
        if (chance >15){
        let sold = Math.floor(Math.random() * 3)
        gold += sold * 40;
        artifacts-= sold;              
        }        
    }

    if (curioshop >= 1) {
        let lacking = 2 + hestorefronts - merchant;
        let chance = Math.floor(Math.random() * 20) - lacking;
        if (chance >7){
        let sold = Math.floor(Math.random() * 3)
        gold += sold * 10;                      
        }        
    }

    if (scriptorium >= 1 && scrolls >= 1) {
        let lacking = 2 + hestorefronts - merchant;
        let chance = Math.floor(Math.random() * 20) - lacking;
        if (chance >12){
        let sold = Math.floor(Math.random() * 3)
        gold += sold * 40;
        scrolls-= sold;              
        }        
    }

    if (artstudio >= 1 && paintings >= 1) {
        let lacking = 2 + hestorefronts - merchant;
        let chance = Math.floor(Math.random() * 20) - lacking;
        if (chance >15){
        let sold = Math.floor(Math.random() * 3)
        gold += sold * 40;
        paintings-= sold;              
        }        
    }

    if (artstudio >= 1 && sculptures >= 1) {
        let lacking = 2 + hestorefronts - merchant;
        let chance = Math.floor(Math.random() * 20) - lacking;
        if (chance >15){
        let sold = Math.floor(Math.random() * 3)
        gold += sold * 60;
        sculptures-= sold;              
        }        
    }

   



payStaff();
updateUI();
coins();
//endOfWeekProduction();
}


function payStaff(){
if (gold > payRoll){gold-=payRoll}
else silver-= payRoll * 10;
}





    
    
    
    
