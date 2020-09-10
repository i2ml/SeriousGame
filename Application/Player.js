class Player {

    constructor() {
        this.energie = 50;
        this.frustration = 50;
        this.equilibreAlim = 50;
        this.sante = 50;
    }

    /**
     * Allow to apply the effects of an impact on the player
     */
    applyStats(impact) {
        if (impact.frustration == 0)
            this.energie += 5;
        if (impact.frustration < 0)
            this.energie += 10;
        this.energie += impact.energiePenality;
        this.frustration += impact.frustration;
        this.equilibreAlim += impact.equilibreAlim;
        this.sante += impact.sante;
    }

}