class Player {

    constructor() {
        this.energie = 50;
        this.moral = 50;
        this.equilibreAlim = 50;
        this.physique = 50;
    }

    addMoral(value){
        console.log("unzefjhouizehfouizehjoiuf")
        this.moral = Math.max(Math.min(this.moral + value, 100), 0);
    }

    addPhysique(value){
        this.physique = Math.max(Math.min(this.physique + value, 100), 0);
    }

    addEquilibreAlim(value){
        this.equilibreAlim = Math.max(Math.min(this.equilibreAlim + value, 100), 0);
    }

    addEnergie(value){
        this.energie = Math.max(Math.min(this.energie + value, 100), 0);
    }


    /**
     * Allow to apply the effects of an impact on the player
     */
    applyStats(impact) {
        this.addEquilibreAlim(impact.equilibreAlim);
        this.addPhysique(impact.physique)
        if (this.physique < 40 || this.equilibreAlim < 40) {
            //malus si en mauvaise santé
            this.addEnergie(impact.energiePenality); //energie is given as raw
            if (impact.moral < 0) { //moral can only lower until health is good
               this.addMoral(impact.moral);
            }
        } else {
            if (impact.moral === 0)
                this.addEnergie(5)
            if (impact.moral > 0)
                this.addEnergie(10)
            this.addMoral(impact.moral);
            this.addEnergie(impact.energiePenality);
        }
    }

    /**
     * get the points of a player if close to 0 , the player is balanced
     */
    getPoints() {
        let points = 0;
        if (this.energie >= 40)
            points++;
        if (this.energie > 60)
            points++;
        if (this.moral >= 40)
            points++;
        if (this.moral > 60)
            points++;
        if (this.equilibreAlim >= 40)
            points--;
        if (this.equilibreAlim > 60)
            points--;
        if (this.physique >= 40)
            points--;
        if (this.physique > 60)
            points--;
        console.log(this, points)
        return points;

    }

}