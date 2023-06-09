let gold = 0;
let silver = 100;
let properties = 1;
let guildMembers = 1;

let payRoll = 0;

const focusareas = ["Production", "Sales", "Marketing"]
const targetmarkets = ["The Commons", "Knight's Quarter", "Silver Enclave", "Mage's District"]

let focusArea = focusareas[1];
let targetMarket = targetmarkets[0];

let store = 1;
let workshop = 0;
let smithy = 0;
let tavern = 0;
let armory = 0;
let bakery = 0;
let scriptorium = 0;
let curioshop = 0;
let artstudio = 0;
let arcaneshop = 0;

let shopkeep = 0;
let smith = 0;
let crafter = 0;
let baker = 0;
let mercenary = 0;
let barkeep = 0;
let merchant = 0;
let scribe = 0;
let artist = 0;
let mage = 0;

let genGoods = 40;


window.onload = function(){
    
    updateUI();
}

function changePD(){focusArea = focusareas[0];write();}
function changeSL(){focusArea = focusareas[1];write();}
function changeMK(){focusArea = focusareas[2];write();}

function changeCS(){targetMarket = targetmarkets[0];write();}
function changeKQ(){targetMarket = targetmarkets[1];write();}
function changeSE(){targetMarket = targetmarkets[2];write();}
function changeMD(){targetMarket = targetmarkets[3];write();}

function exchangeSilver(){if (silver >= 100){silver-=100;gold+=10;updateUI();coins();}}
function exchangeGold(){if (gold >= 10){silver+=100;gold-=10;updateUI();coins();}}


function buyStore(){if (gold >= 20){gold-= 20;store++;properties++;coins();updateUI();}}




function hireShopkeep(){shopkeep++;guildMembers++;payRoll+=5;coins();updateUI();}

function buyGoods(){genGoods+=100;coins();updateUI();}


function updateUI(){
    countProps();
    document.getElementById("gold").innerHTML = "Gold: " + gold;
    document.getElementById("silver").innerHTML = "Silver: " + silver;
    document.getElementById("properties").innerHTML = "Properties: " + properties;
    document.getElementById("guildmembers").innerHTML = "Guild Members: " + guildMembers;
    document.getElementById("payroll").innerHTML = "Payroll: " + payRoll + "G per week";
    document.getElementById("focus").innerHTML = focusArea;
    document.getElementById("target").innerHTML = targetMarket;

    document.getElementById("proplist").innerHTML = props;

    /*document.getElementById("proplist").innerHTML = "General Stores: " + store + ", Workshops: " + workshop + ", Smithies: " + smith + ", Taverns: " + tavern + ", Armories: " + armory + ", Bakeries: " + bakery + ", Scriptoria: " + scriptorium + ", Curio Shops: " + curioshop + ", Art Studios: " + artstudio + ", Arcane Shops: " + arcaneshop;
    */
    
}

function countProps(){
    let props = " General Stores: " + store;
if (workshop) props += ", Workshops: " + workshop;
if (smith) props += ", Smithies: " + smith;
if (tavern) props += ", Taverns: " + tavern;
if (armory) props += ", Armories: " + armory;
if (bakery) props += ", Bakeries: " + bakery;
if (scriptorium) props += ", Scriptoria: " + scriptorium;
if (curioshop) props += ", Curio Shops: " + curioshop;
if (artstudio) props += ", Art Studios: " + artstudio;
if (arcaneshop) props += ", Arcane Shops: " + arcaneshop;

document.getElementById("proplist").innerHTML = props;
}







function openGuide() {
    var dialog = document.getElementById('gameguide');
    dialog.showModal(); // Opens the dialog box
    }
    
    function closeGuide() {
    var dialog = document.getElementById('gameguide');
    dialog.close(); // Closes the dialog box
    }















