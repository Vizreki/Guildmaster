let gold = 0;
let silver = 100;
let properties = 1;
let guildMembers = 2;
let guildName = "";
let wealth = 22;



let payRoll = 0;
let reputation = 0;

const focusareas = ["Production", "Sales", "Marketing"]
const targetmarkets = ["The Commons", "Knight's Quarter", "Silver Enclave", "Mage's District"]

let focusArea = focusareas[1];
let targetMarket = targetmarkets[0];

let store = 1;
let workshop = 0;
let smithy = 0;
let tavern = 0;
let armory = 0;
let bakery = 1;
let scriptorium = 0;
let curioshop = 0;
let artstudio = 0;
let arcaneshop = 0;

let shopkeep = 0;
let smith = 0;
let crafter = 0;
let baker = 1;
let mercenary = 0;
let barkeep = 0;
let merchant = 0;
let scribe = 0;
let artist = 0;
let mage = 0;

let storefronts = store + armory + bakery;
let hestorefronts = curioshop + scriptorium + artstudio + arcaneshop;

let genGoods = 0;
let tools = 0;
let ore = 0;
let swords = 0;
let armor = 0;
let scrolls = 0;
let paintings = 0;
let sculptures = 0;
let wands = 0;
let runes = 0;
let elixirs = 0;
let artifacts = 0;
let arcanecomps = 0;


window.onload = function(){
        updateUI();
}

function updateUI(){
    let netWorth = gold + (silver / 10) + wealth;
    let commagold = gold.toLocaleString();
    let commasilver = silver.toLocaleString();
    let commanet = netWorth.toLocaleString();
    countProps();
    countGMs();
    countAssets();
    repCheck();
    document.getElementById("gold").innerHTML = "Gold: " + commagold;
    document.getElementById("silver").innerHTML = "Silver: " + commasilver;
    document.getElementById("networth").innerHTML = "Net Worth: " + commanet + " Gold";
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
function largeExchange(){if (silver >= 1000){silver-=1000;gold+=100;updateUI();coins();}}
function hugeExchange(){if (silver >= 10000){silver-=10000;gold+=1000;updateUI();coins();}}

function buyStore(){if (gold >= 100){gold-= 100;wealth+=100;store++;properties++;coins();updateUI();}}
function buyWorkshop(){if (gold >= 150){gold-= 150;wealth+=150;workshop++;properties++;coins();updateUI();}}
function buySmithy(){if (gold >= 180){gold-= 180;wealth+=180;smithy++;properties++;coins();updateUI();}}
function buyTavern(){if (gold >= 250){gold-= 250;wealth+=250;tavern++;properties++;coins();updateUI();}}
function buyArmory(){if (gold >= 200){gold-= 200;wealth+=200;armory++;properties++;coins();updateUI();}}
function buyBakery(){if (gold >= 135){gold-= 135;wealth+=135;bakery++;properties++;coins();updateUI();}}
function buyScript(){if (gold >= 175){gold-= 175;wealth+=175;scriptorium++;properties++;coins();updateUI();}}
function buyCShop(){if (gold >= 200){gold-= 200;wealth+=200;curioshop++;properties++;coins();updateUI();}}
function buyArtstudio(){if (gold >= 300){gold-= 300;wealth+=300;artstudio++;properties++;coins();updateUI();}}
function buyArcShop(){if (gold >= 475){gold-= 475;wealth+=475;arcaneshop++;properties++;coins();updateUI();}}

function hireShopkeep(){shopkeep++;guildMembers++;payRoll+=2;coins();updateUI();}
function hireSmith(){smith++;guildMembers++;payRoll+=4;coins();updateUI();}
function hireCrafter(){crafter++;guildMembers++;payRoll+=4;coins();updateUI();}
function hireBaker(){baker++;guildMembers++;payRoll+=4;coins();updateUI();}
function hireMerc(){mercenary++;guildMembers++;payRoll+=6;coins();updateUI();}
function hireBarkeep(){barkeep++;guildMembers++;payRoll+=6;coins();updateUI();}
function hireMerchant(){merchant++;guildMembers++;payRoll+=8;coins();updateUI();}
function hireScribe(){scribe++;guildMembers++;payRoll+=10;coins();updateUI();}
function hireArtist(){artist++;guildMembers++;payRoll+=15;coins();updateUI();}
function hireMage(){mage++;guildMembers++;payRoll+=22;coins();updateUI();}

function buyGoods(){if (gold >= 10){genGoods+=100;gold-=10;wealth+=10;coins();updateUI();}}
function buyTools(){if (gold >= 20){tools+=20;gold-=20;wealth+=20;coins();updateUI();}}
function buyOre(){if (gold >= 50){ore+=10;gold-=50;wealth+=50;coins();updateUI();}}
function buyArtifacts(){if (gold >= 125){artifacts++;gold-=125;wealth+=125;coins();updateUI();}}
function buyArcComps(){if (gold >= 200){arcanecomps++;gold-=200;wealth+=200;coins();updateUI();}}

function countProps(){
    let props = " General Stores: " + store;
if (workshop) props += " Workshops: " + workshop;
if (smithy) props += " Smithies: " + smithy;
if (tavern) props += " Taverns: " + tavern;
if (armory) props += " Armories: " + armory;
if (bakery) props += " Bakeries: " + bakery;
if (scriptorium) props += " Scriptoria: " + scriptorium;
if (curioshop) props += " Curio Shops: " + curioshop;
if (artstudio) props += " Art Studios: " + artstudio;
if (arcaneshop) props += " Arcane Shops: " + arcaneshop;

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
if (tools) assets += " Tools: " + tools;
if (ore) assets += " Ore: " + ore;
if (swords) assets += " Swords: " + swords;
if (armor) assets += " Armor: " + armor;
if (paintings) {assets += '<span style="color: gold;"> Paintings: ' + paintings + '</span>';}
if (sculptures) {assets += '<span style="color: gold;"> Sculptures: ' + sculptures + '</span>';}
if (artifacts) assets += " Artifacts: " + artifacts;
if (scrolls) assets += " Scroll: " + scrolls;
if (arcanecomps) {assets += '<span style="color: gold;"> Arcane Components: ' + arcanecomps + '</span>';}
if (elixirs) {assets += '<span style="color: gold;"> Elixirs: ' + elixirs + '</span>';}
if (runes) {assets += '<span style="color: gold;"> Runes: ' + runes + '</span>';}
if (wands) {assets += '<span style="color: gold;"> Wands: ' + wands + '</span>';}

document.getElementById("assetlist").innerHTML = assets;
}


function openGuide() {let dialog = document.getElementById('gameguide');dialog.showModal();}
    
function closeGuide() {let dialog = document.getElementById('gameguide');dialog.close();}



function repCheck(){
    if (reputation < 5){document.getElementById("reptext").innerHTML = '<span style="color: grey;"> "Unheard of" </span>';}
    else if (reputation >= 5 && reputation < 10){document.getElementById("reptext").innerHTML = '<span style="color: white;"> "New trader" </span>';}
    else if (reputation >= 10 && reputation < 15){document.getElementById("reptext").innerHTML =
    '<span style="color: lightblue;"> "Good merchant" </span>';;}
    else if (reputation >= 15 && reputation < 20){document.getElementById("reptext").innerHTML = '<span style="color: orange;"> "Rising star" </span>';;}
    else if (reputation >= 20 && reputation < 30){document.getElementById("reptext").innerHTML = '<span style="color: lightgreen;"> "Local hero" </span>';}
    else if (reputation >= 30 && reputation < 50){document.getElementById("reptext").innerHTML = '<span style="color: gold;"> "Guildmaster" </span>';}
    else if (reputation >= 50){document.getElementById("reptext").innerHTML = '<span style="color: yellow;"> "Living Legend" </span>';}
}













