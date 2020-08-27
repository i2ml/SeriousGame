class Argument {

    constructor(idSituation, id) {
        this.enonce = "";
        this.motivationNeeded = 0;
        this.success = new Impact(idSituation, idArgument);
        this.failure = new Impact(idSituation, idArgument);
    }

}