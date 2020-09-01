class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    startGame() {
        let situation = new Situation(1);
        this.view.displaySituation(situation);
    }
}

let app = new Controller(new Model(), new View());
app.startGame();
