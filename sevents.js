const type1_1 = {
    1: "The King ",
    2: "A knight ",
    3: "The court Wizard ",
    4: "The Mage's Guild ",
    5: "A beggar ",
    6: "The Queen ",
    7: "A squire ",
    8: "The Royal Adviser ",
    9: "The Alchemist's Guild ",
    10: "A nobleman ",
    11: "A Blacksmith ",
    12: "A druid ",
    13: "The Royal Librarian ",
    14: "The Temple Priest ",
    15: "A town crier ",
    16: "The Royal Guard ",
    17: "A spy ",
    18: "The Royal Chef ",
    19: "The Captain of the Guard ",
    20: "A stable boy ",
    21: "The Royal Herald ",
    22: "The Royal Physician ",
    23: "A jester ",
    24: "The Court Musician ",
    25: "A diplomat ",
    26: "The Royal Seamstress ",
    27: "A court painter ",
    28: "The Royal Falconer ",
    29: "The Royal Astronomer ",
    30: "A juggler ",
    31: "The Royal Historian ",
    32: "A Temple Acolyte",
};

const type1_2 = {
    1: "a dire-rat infestation just outside town. ",
    2: "a group of refugees that have set up outside the castle. ",
    3: "some trolls that keep harassing villagers. ",
    4: "an embarrassing problem and can't explain. ",
    5: "some bandits that are prowling the streets at night. ",
    6: "a mysterious illness spreading among the townsfolk. ",
    7: "a suspicious noble practicing dark magic. ",
    8: "a haunted mansion on the outskirts of town. ",
    9: "a series of disappearances in the nearby forest. ",
    10: "a curse that plaguing the town's crops. ",
    11: "a cleric's relics have gone missing. ",
    12: "a pack of ghouls terrorizing a village. ",
    13: "some artifacts that are being studied. ",
    14: "a corrupt mayor investigation. ",
    15: "a new type of cheese for the tavern. ",
    16: "a pack of goblins that have taken up residence in an abandoned mine. ",
    17: "a corrupt guard. ",
    18: "an investigation into a portal device. ",
    19: "a strange cult that is recruiting members in the area. ",
    20: "a cursed item that has gone missing. ",
    21: "their apprentice who needs extra help. ",
    22: "some damaged buildings in the poor part of town. ",
    23: "a noble's missing heir, who is rumored to have been kidnapped. ",
    24: "a local blacksmith who is selling counterfeit goods. ",
    25: "a pack of wild animals that have become unusually aggressive near the town. ",
    26: 'a "good cause"... ',
    27: "a widow needing to feed her children. ",
    28: "a shipment that has gone missing. ",
    29: "an injured castle servant. ",
    30: "a pet rabbit that is missing. "
  };
  
const type2_1 = {
    1: "feast ",
    2: "tournament ",
    3: "festival ",
    4: "cheese festival ",
    5: "archery competition ",
    6: "jousting tournament ",
    7: "fencing competition " ,
    8: "falconry display ",
    9: "banquet ",
    10: "ale festival ",
    11: "harvest festival ",
    12: "market fair ",
    13: "dance ",
    14: "minstrel performance ",
    15: "sourdough festival ",
    16: "knight's ceremony ",
    17: "crafter convention ",
    18: "great hunt ",
    19: "masquerade ball ",
    20: "summer solstice party ",
    21: "wedding ",
    22: "magical seminar ",
    23: "grand parade ",
    24: "mock battle ",
    25: "knighting ceremony ",
    26: "battle of the Bards ",
    27: "tournament of champions ",
    28: "execution ",
    29: "axe-throwing competition ",
    30: "sword exhibition ",
    31: "royal coronation ",
    32: "play ",
};

let randomGold = Math.floor(Math.random() * 5) + 1;

function makeRandom(){
    randomGold = Math.floor(Math.random() * 5) + 1;
    console.log(randomGold)
}



function startEvent(){
    let randomEventType = Math.floor(Math.random() * 2) + 1;
    
    if (randomEventType === 1){
        const index1 = Math.floor(Math.random() * 31) + 1;
        const index2 = Math.floor(Math.random() * 30) + 1;
        const sentence = type1_1[index1] + "needs your help with " + type1_2[index2] + "Can you spare " + randomGold + " Gold?";
        document.getElementById("eventtext").innerHTML = sentence;
    } else if (randomEventType === 2){
        const index1 = Math.floor(Math.random() * 32) + 1;
        const index2 = Math.floor(Math.random() * 31) + 1;
        const sentence = "There is a " + type2_1[index1] + "happening in a few days. " + type1_1[index2] 
        + "is asking if you'll contribute " + randomGold + " Gold?";
        document.getElementById("eventtext").innerHTML = sentence;
    }
    let dialog = document.getElementById('testevent');dialog.showModal();   

}


function decline() {let dialog = document.getElementById('testevent');dialog.close();incomeGen();makeRandom();}

function agree() {let dialog = document.getElementById('testevent');
    if (monies >= randomGold){gold-= randomGold;dialog.close();makeRandom();}
    updateUI();
    
    
}


















