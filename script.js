let gold = 10000;
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

let genGoods = 20;
let tools = 0;
let ore = 0;
let artifacts = 0;
let arcanecomps = 0;


window.onload = function(){
    
    updateUI();
}

function updateUI(){
    countProps();
    countGMs();
    countAssets();
    document.getElementById("gold").innerHTML = "Gold: " + gold;
    document.getElementById("silver").innerHTML = "Silver: " + silver;
    document.getElementById("properties").innerHTML = "Properties: " + properties;
    document.getElementById("guildmembers").innerHTML = "Guild Members: " + guildMembers;
    document.getElementById("payroll").innerHTML = "Payroll: " + payRoll + "G per week";
    document.getElementById("focus").innerHTML = focusArea;
    document.getElementById("target").innerHTML = targetMarket;
    
    

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
function buyWorkshop(){if (gold >= 30){gold-= 30;workshop++;properties++;coins();updateUI();}}
function buySmithy(){if (gold >= 30){gold-= 30;smithy++;properties++;coins();updateUI();}}
function buyTavern(){if (gold >= 50){gold-= 50;tavern++;properties++;coins();updateUI();}}
function buyArmory(){if (gold >= 10){gold-= 10;armory++;properties++;coins();updateUI();}}
function buyBakery(){if (gold >= 30){gold-= 30;bakery++;properties++;coins();updateUI();}}
function buyScript(){if (gold >= 20){gold-= 20;scriptorium++;properties++;coins();updateUI();}}
function buyCShop(){if (gold >= 50){gold-= 50;curioshop++;properties++;coins();updateUI();}}
function buyArtstudio(){if (gold >= 40){gold-= 40;artstudio++;properties++;coins();updateUI();}}
function buyArcShop(){if (gold >= 65){gold-= 65;arcaneshop++;properties++;coins();updateUI();}}

function hireShopkeep(){shopkeep++;guildMembers++;payRoll+=5;coins();updateUI();}
function hireSmith(){smith++;guildMembers++;payRoll+=8;coins();updateUI();}
function hireCrafter(){crafter++;guildMembers++;payRoll+=8;coins();updateUI();}
function hireBaker(){baker++;guildMembers++;payRoll+=8;coins();updateUI();}
function hireMerc(){mercenary++;guildMembers++;payRoll+=10;coins();updateUI();}
function hireBarkeep(){barkeep++;guildMembers++;payRoll+=10;coins();updateUI();}
function hireMerchant(){merchant++;guildMembers++;payRoll+=10;coins();updateUI();}
function hireScribe(){scribe++;guildMembers++;payRoll+=12;coins();updateUI();}
function hireArtist(){artist++;guildMembers++;payRoll+=15;coins();updateUI();}
function hireMage(){mage++;guildMembers++;payRoll+=22;coins();updateUI();}

function buyGoods(){if (gold >= 10){genGoods+=100;gold-=10;coins();updateUI();}}
function buyTools(){if (gold >= 20){tools+=20;gold-=20;coins();updateUI();}}
function buyOre(){if (gold >= 50){ore+=10;gold-=50;coins();updateUI();}}
function buyArtifacts(){if (gold >= 125){artifacts++;gold-=125;coins();updateUI();}}
function buyArcComps(){if (gold >= 200){arcanecomps++;gold-=200;coins();updateUI();}}




function countProps(){
    let props = " General Stores: " + store;
if (workshop) props += ", Workshops: " + workshop;
if (smithy) props += ", Smithies: " + smithy;
if (tavern) props += ", Taverns: " + tavern;
if (armory) props += ", Armories: " + armory;
if (bakery) props += ", Bakeries: " + bakery;
if (scriptorium) props += ", Scriptoria: " + scriptorium;
if (curioshop) props += ", Curio Shops: " + curioshop;
if (artstudio) props += ", Art Studios: " + artstudio;
if (arcaneshop) props += ", Arcane Shops: " + arcaneshop;

document.getElementById("proplist").innerHTML = props;
}

function countGMs(){
    let members = "";
if (shopkeep) members += " Shopkeeps: " + shopkeep;    
if (smith) members += " Smiths: " + smith;
if (crafter) members += " Crafters: " + crafter;
if (baker) members += " Bakers: " + baker;
if (mercenary) members += " Mercenaries: " + mercenary;
if (barkeep) members += " Barkeeps: " + barkeep;
if (merchant) members += " Merchants: " + merchant;
if (scribe) members += " Scribes: " + scribe;
if (artist) members += " Artists: " + artist;
if (mage) members += " Mages: " + mage;

document.getElementById("gmlist").innerHTML = members;
}

function countAssets(){
    let assets = " General Goods: " + genGoods;
if (tools) assets += ", Tools: " + tools;
if (ore) assets += ", Ore: " + ore;
if (artifacts) assets += ", Artifacts: " + artifacts;
if (arcanecomps) assets += ", Arcane Components: " + arcanecomps;

document.getElementById("assetlist").innerHTML = assets;
}







function openGuide() {let dialog = document.getElementById('gameguide');dialog.showModal();}
    
function closeGuide() {let dialog = document.getElementById('gameguide');dialog.close();}















