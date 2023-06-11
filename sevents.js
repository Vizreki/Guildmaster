const type1_1 = {
    1: "The King ",
    2: "A knight ",
    3: "Some guy ",
    4: "The Mage's Guild ",
    5: "A beggar "
}


const type1_2 = {
    1: "a dire rat infestation just outside town. Can you assist?",
    2: "a group of refugees that have set up outside the castle. Will you help?",
    3: "a thing that happened. Help?",
    4: "an embarassing problem and can't explain. Can you help? ",
    5: "some bandits that are prowling the streets at night. Will you contribute?"
}





function startEvent(){
    let dialog = document.getElementById('testevent');dialog.showModal();
    
    let randomEventType;
    let event;
    let randomGold;
    let randomRep;

    const index1 = Math.floor(Math.random() * 5) + 1;
    const index2 = Math.floor(Math.random() * 5) + 1;
    
    const sentence = type1_1[index1] + "needs your help with " + type1_2[index2];


    document.getElementById("eventtext").innerHTML = sentence;
    
}
















