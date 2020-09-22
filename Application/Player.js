class Player {

    constructor() {
        this.energie = 50;
        this.moral = 50;
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
            if (impact.moral < 0) {
                this.moral += impact.moral;
            }
        } else {
            if (impact.moral == 0)
                this.energie += 5;
            if (impact.moral < 0)
                this.energie += 10;
            this.moral += impact.moral;
            this.energie += impact.energiePenality;
        }
    }

    /**
     * get the points of a player if close to 0 , the player is balanced
     */
    getPoints() {
        let points = 0;
        if (this.energie >= 40)
            points++;
        if (this.energie >= 60)
            points++;
        if (this.moral >= 40)
            points++;
        if (this.moral >= 60)
            points++;
        if (this.equilibreAlim >= 40)
            points--;
        if (this.equilibreAlim >= 60)
            points--;
        if (this.physique >= 40)
            points--;
        if (this.physique >= 60)
            points--;
        return points;
    }

}