let gold = 0;
let silver = 20;
let properties = 0;
let guildMembers = 1;
let guildName = "";
let wealth = 0;
let monies = gold + (silver * .01)



let payRoll = 0;
let reputation = 0;
let loan = false;

const focusareas = ["Production", "Sales", "Marketing"]
const targetmarkets = ["The Commons", "Knight's Quarter", "Silver Enclave", "Mage's District"]

let focusArea = focusareas[1];
let targetMarket = targetmarkets[0];

let store = 0;
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


let hestorefronts = curioshop + scriptorium + artstudio + arcaneshop;

let genGoods = 50;
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
    let netWorth = gold + (silver * .1) + wealth;
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
    document.getElementById("payroll").innerHTML = "Payroll: " + payRoll + "G / Month";
    document.getElementById("focus").innerHTML = focusArea;
    document.getElementById("target").innerHTML = targetMarket;

    propCheck();
    
    
}

function propCheck(){
    if (store > 2){document.getElementById("store").style.textDecoration = "line-through";
    document.getElementById("store").onclick = null;
    document.getElementById("store").setAttribute("data-tooltip", "Increase rep for more building permits");
}}


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
function getLoan(){gold+=20;reputation-= 5; updateUI();coins();}
function payLoan(){gold-=25;reputation+= 5; updateUI();coins();}

function buyStore(){if (gold >= 40){gold-= 40;wealth+=40;store++;properties++;coins();updateUI();}}
function buyWorkshop(){if (gold >= 60){gold-= 60;wealth+=60;workshop++;properties++;coins();updateUI();}}
function buySmithy(){if (gold >= 80){gold-= 80;wealth+=80;smithy++;properties++;coins();updateUI();}}
function buyTavern(){if (gold >= 120){gold-= 120;wealth+=120;tavern++;properties++;coins();updateUI();}}
function buyArmory(){if (gold >= 60){gold-= 60;wealth+=60;armory++;properties++;coins();updateUI();}}
function buyBakery(){if (gold >= 80){gold-= 80;wealth+=80;bakery++;properties++;coins();updateUI();}}
function buyScript(){if (gold >= 200){gold-= 200;wealth+=200;scriptorium++;properties++;coins();updateUI();}}
function buyCShop(){if (gold >= 300){gold-= 300;wealth+=300;curioshop++;properties++;coins();updateUI();}}
function buyArtstudio(){if (gold >= 300){gold-= 300;wealth+=300;artstudio++;properties++;coins();updateUI();}}
function buyArcShop(){if (gold >= 475){gold-= 475;wealth+=475;arcaneshop++;properties++;coins();updateUI();}}

function sellStore(){if (store >= 1){gold+= 30;wealth-=30;store--;properties--;coins();updateUI();}}
function sellWorkshop(){if (workshop >= 1){gold+= 50;wealth-=50;workshop--;properties--;coins();updateUI();}}
function sellSmithy(){if (smithy >= 1){gold+= 70;wealth-=70;smithy--;properties--;coins();updateUI();}}
function sellTavern(){if (tavern >= 1){gold+= 100;wealth-=100;tavern--;properties--;coins();updateUI();}}
function sellArmory(){if (armory >= 1){gold+= 50;wealth-=50;armory--;properties--;coins();updateUI();}}
function sellBakery(){if (bakery >= 1){gold+= 70;wealth-=70;bakery--;properties--;coins();updateUI();}}
function sellScript(){if (scriptorium >= 1){gold+= 175;wealth-=175;scriptorium--;properties--;coins();updateUI();}}
function sellCShop(){if (curioshop >= 1){gold+= 250;wealth-=250;curioshop--;properties--;coins();updateUI();}}
function sellArtstudio(){if (artstudio >= 1){gold+= 250;wealth-=250;artstudio--;properties--;coins();updateUI();}}
function sellArcShop(){if (arcaneshop >= 1){gold+= 400;wealth-=400;arcaneshop--;properties;coins();updateUI();}}

function hireShopkeep(){shopkeep++;guildMembers++;payRoll+=1;coins();updateUI();}
function hireSmith(){smith++;guildMembers++;payRoll+=3;coins();updateUI();}
function hireCrafter(){crafter++;guildMembers++;payRoll+=3;coins();updateUI();}
function hireBaker(){baker++;guildMembers++;payRoll+=3;coins();updateUI();}
function hireMerc(){mercenary++;guildMembers++;payRoll+=4;coins();updateUI();}
function hireBarkeep(){barkeep++;guildMembers++;payRoll+=4;coins();updateUI();}
function hireMerchant(){merchant++;guildMembers++;payRoll+=4;coins();updateUI();}
function hireScribe(){scribe++;guildMembers++;payRoll+=6;coins();updateUI();}
function hireArtist(){artist++;guildMembers++;payRoll+=8;coins();updateUI();}
function hireMage(){mage++;guildMembers++;payRoll+=12;coins();updateUI();}

function buyGoods(){if (gold >= 4){genGoods+=25;gold-=4;wealth+=4;coins();updateUI();}}
function buyMGoods(){if (gold >= 75){genGoods+=500;gold-=75;wealth+=75;coins();updateUI();}}
function buyTools(){if (gold >= 20){tools+=20;gold-=20;wealth+=20;coins();updateUI();}}
function buyMTools(){if (gold >= 92){tools+=100;gold-=92;wealth+=92;coins();updateUI();}}
function buyOre(){if (gold >= 50){ore+=10;gold-=50;wealth+=50;coins();updateUI();}}
function buyArtifacts(){if (gold >= 125){artifacts++;gold-=125;wealth+=125;coins();updateUI();}}
function buyArcComps(){if (gold >= 200){arcanecomps++;gold-=200;wealth+=200;coins();updateUI();}}

function countProps(){
    let props = "";
if (store) props += "General Stores: " + store;
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
 let assets = "";
if (genGoods) assets += "General Goods: " + genGoods;
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













