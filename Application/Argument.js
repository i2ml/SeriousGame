class Argument {

    constructor(idSituation, id) {
        this.enonce = situations[idSituation].arguments[id].enonce;
        this.énergieNeeded = situations[idSituation].arguments[id].énergieNeeded;
        this.success = new Impact(idSituation, id, true);
        this.failure = new Impact(idSituation, id, false);
    }

}