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
        this.equilibreAlim += impact.equilibreAlim;
        this.sante += impact.sante;
        if (this.sante < 40 || this.equilibreAlim < 40) {
            //malus si en mauvaise santé
            this.energie += impact.energiePenality;
            if (impact.frustration < 0) {
                this.frustration += impact.frustration;
            }
        } else {
            if (impact.frustration == 0)
                this.energie += 5;
            if (impact.frustration < 0)
                this.energie += 10;
            this.frustration += impact.frustration;
            this.energie += impact.energiePenality;
        }
    }

}