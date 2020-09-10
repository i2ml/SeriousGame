class Argument {

    constructor(idSituation, id) {
        this.enonce = situations[idSituation].arguments[id].enonce;
        this.energieNeeded = situations[idSituation].arguments[id].energieNeeded;
        this.success = new Impact(idSituation, id, true);
        this.failure = new Impact(idSituation, id, false);
    }

}