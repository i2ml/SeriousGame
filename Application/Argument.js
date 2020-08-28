class Argument {

    constructor(idSituation, id) {
        this.enonce = situations[idSituation].arguments[id].enonce;
        this.motivationNeeded = situations[idSituation].arguments[id].motivationNeeded;
        this.success = new Impact(idSituation, id, true);
        this.failure = new Impact(idSituation, id, false);
    }

}