class Impact {

    constructor(idSituation, idArgument, isSuccess) {
        if (isSuccess) {
            this.motivationPenality = situations[idSituation].arguments[idArgument].success.motivationPenality;
            this.frustration = situations[idSituation].arguments[idArgument].success.frustration;
            this.equilibreAlim = situations[idSituation].arguments[idArgument].success.equilibreAlim;
            this.sante = situations[idSituation].arguments[idArgument].success.sante;
        } else {
            this.motivationPenality = situations[idSituation].arguments[idArgument].failure.motivationPenality;
            this.frustration = situations[idSituation].arguments[idArgument].failure.frustration;
            this.equilibreAlim = situations[idSituation].arguments[idArgument].failure.equilibreAlim;
            this.sante = situations[idSituation].arguments[idArgument].failure.sante;
        }
    }
}