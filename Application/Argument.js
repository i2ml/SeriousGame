class Argument {

    constructor(idSituation, id) {
        this.enonce = "";
        this.motivationNeeded = 0;
        this.success = new Impact(idSituation, id);
        this.failure = new Impact(idSituation, id);
    }

}