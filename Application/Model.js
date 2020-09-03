class Model {

    constructor() {
        this.player = new Player();
        this.situation = new Situation(1);
    }

    /**
     * Charge la situation suivante
     */
    loadNextSituation() {
        const argumentToLoad = this.choseFinalArgumentId();
        console.log("The chosen argument is " + argumentToLoad)
        console.log("loading the situation : " + this.situation.id++)
        this.situation = new Situation(this.situation.id++);
    }

    /**
     * Choisi aléatoirement un argument parmis ceux selectionnés.
     */
    choseFinalArgumentId() {
        const inputList = $("input")
        let argumentsList = new Array();
        const numberOfArguments = inputList.length / 2;
        for (const key in inputList) {
            if (inputList.hasOwnProperty(key)) {
                const element = inputList[key];
                if ($(element).is(":checked")) {
                    let argumentId = key >= numberOfArguments ? parseInt(key) - numberOfArguments : parseInt(key);
                    argumentId++;
                    argumentsList.push(argumentId);
                }
            }
        }
        return argumentsList[Math.floor(Math.random() * argumentsList.length)];
    }

}