class Model {

    constructor() {
        this.player = new Player();
        this.situation = new Situation(1);
    }

    loadNextSituation() {
        console.log("loading the situation : " + this.situation.id++)
        this.situation = new Situation(this.situation.id++);
    }
}