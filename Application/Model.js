class Model {

    constructor() {
        this.player = new Player();
        this.situation = new Situation(1);
        this.chart = getChart();
        this.moralTeamName;
        this.equilibreTeamName;
    }

    /**
     * Return the argument that has been selected by the teams
     */
    getSelectedArgument() {
        const argumentToLoad = this.choseFinalArgumentId();
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
        const months = ['Janvier',
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
            'Décembre'];
        this.chart.data.labels.push(months[this.situation.id - 1]);
        this.chart.update();
    }

    /**
     * Rend le controle à l'équipe ene difficulté
     */
    disableInputs() {
        if (this.player.getPoints() > 1) {
            //la team équilibre alim est dans le mal
            $(".moralInput").attr("disabled", true)
        } else {
            $(".moralInput").attr("disabled", false)
        }
        if (this.player.getPoints() < -1) {
            //la team moral alim est dans le mal
            $(".equilibreInput").attr("disabled", true)
        } else {
            $(".equilibreInput").attr("disabled", false)
        }
    }

    /**
     * Renvoi vrai si l'équipe équilibre est bloquée
     */
    equilibreIsLocked() {
        return $(".equilibreInput").filter(":disabled").length > 2
    }

    /**
     * Revoi vrai si l'équipe moral est bloquée
     */
    moralIsLocked() {
        return $(".moralInput").filter(":disabled").length > 2
    }

    /**
     * Choisi aléatoirement un argument parmis ceux selectionnés.
     */
    choseFinalArgumentId() {
        const inputList = $("input")
        let argumentsList = [];
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
            impact = argument.success;
        } else {
            impact = argument.failure;
        }
        this.player.applyStats(impact);
        this.updateChart();
        this.disableInputs();
        return impact;
    }

    /**
     * Read and apply difficulty
     */
    setDifficulty(difficulty) {
        if (difficulty === 'hard') {
            this.player.energie = 25;
            this.player.moral = 30;
            this.player.equilibreAlim = 40;
            this.player.physique = 30;
        }
        if (difficulty === 'easy') {
            this.player.energie = 65;
            this.player.moral = 70;
            this.player.equilibreAlim = 75;
            this.player.physique = 70;
        }
    }

}