
function nextWeek(){
    let marketing;
    if (focusArea === focusareas[2]){marketing = 2;}
    else {marketing = 0;}
    let eventChance = Math.floor(Math.random() * 7) + marketing;
    if (eventChance >= 4){
        startEvent();
    }
    












        coins();
        
    }
    
    
  //      silver += Math.floor(Math.random() * 2);
    
    
    
