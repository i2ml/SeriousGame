class Model {

    constructor() {
        this.player = new Player();
        this.situation = new Situation(1);
        this.chart = getChart();
    }

    /**
     * Return the argument that has been selected by the teams
     */
    getSelectedArgument() {
        const argumentToLoad = this.choseFinalArgumentId();
        console.log("The chosen argument is " + argumentToLoad)
        return new Argument(this.situation.id, argumentToLoad);
    }

    /**
     * Charge la situation suivante
     */
    loadNextSituation() {
        const idSituationToLoad = this.situation.id + 1;
        this.situation = new Situation(idSituationToLoad);
        console.log(this.chart)
        const months = new Array(
            'Janvier',
            'Février',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Août',
            'Septembre',
            'Octobre',
            'Novembre',
            'Décembre'
        );
        this.chart.data.labels.push(months[this.situation.id - 2]);
        this.chart.update();

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

    /**
     * apply the effects of an argument over the player.
     */
    applyArgument(argument) {
        let impact;
        console.log(argument)
        if (this.player.motivation >= argument.motivationNeeded) {
            console.log("success of the argument");
            impact = argument.success;
        } else {
            console.log("failure of the argument");
            impact = argument.failure;
        }
        console.log(this.player)
        this.player.applyStats(impact);
        console.log(this.player)
        console.log(impact)
        return impact;
    }

}