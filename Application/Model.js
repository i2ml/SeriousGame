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
    }

    /**
     * Allow to add the current weight to the chart
     */
    updateChart() {
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
        this.chart.data.labels.push(months[this.situation.id - 1]);
        this.chart.update();
    }

    /**
     * Choisi aléatoirement un argument parmis ceux selectionnés.
     */
    choseFinalArgumentId() {
        const inputList = $("input")
        let argumentsList = new Array();
        for (const key in inputList) {
            if (inputList.hasOwnProperty(key)) {
                const element = inputList[key];
                if ($(element).is(":checked")) {
                    let argumentId = parseInt(element.id.substr(element.id.length - 1));
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
        if (this.player.energie >= argument.energieNeeded) {
            console.log("success of the argument");
            impact = argument.success;
        } else {
            console.log("failure of the argument");
            impact = argument.failure;
        }
        this.player.applyStats(impact);
        this.updateChart();
        return impact;
    }

}