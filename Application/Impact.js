class Impact {

    constructor(idSituation, idArgument, isSuccess) {
        if (isSuccess) {
            this.text = situations[idSituation].arguments[idArgument].success.text
            this.imageUrl = situations[idSituation].arguments[idArgument].success.imageLink
            this.energiePenality = situations[idSituation].arguments[idArgument].success.energiePenality;
            this.mental = situations[idSituation].arguments[idArgument].success.mental;
            this.equilibreAlim = situations[idSituation].arguments[idArgument].success.equilibreAlim;
            this.physique = situations[idSituation].arguments[idArgument].success.physique;
        } else {
            this.text = situations[idSituation].arguments[idArgument].failure.text
            this.imageUrl = situations[idSituation].arguments[idArgument].failure.imageLink
            this.energiePenality = situations[idSituation].arguments[idArgument].failure.energiePenality;
            this.mental = situations[idSituation].arguments[idArgument].failure.mental;
            this.equilibreAlim = situations[idSituation].arguments[idArgument].failure.equilibreAlim;
            this.physique = situations[idSituation].arguments[idArgument].failure.physique;
        }
    }
}