class Player {

    constructor() {
        this.energie = 50;
        this.mental = 50;
        this.equilibreAlim = 50;
        this.physique = 50;
    }

    /**
     * Allow to apply the effects of an impact on the player
     */
    applyStats(impact) {
        this.equilibreAlim += impact.equilibreAlim;
        this.physique += impact.physique;
        if (this.physique < 40 || this.equilibreAlim < 40) {
            //malus si en mauvaise santé
            this.energie += impact.energiePenality;
            if (impact.mental < 0) {
                this.mental += impact.mental;
            }
        } else {
            if (impact.mental == 0)
                this.energie += 5;
            if (impact.mental < 0)
                this.energie += 10;
            this.mental += impact.mental;
            this.energie += impact.energiePenality;
        }
    }

}