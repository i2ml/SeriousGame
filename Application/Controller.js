class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    startGame() {
        this.view.displaySituation(this.model.situation);
    }
}

let app = new Controller(new Model(), new View());
app.startGame();

$("#valider").click(function () {
    app.model.loadNextSituation()
    app.view.displaySituation(app.model.situation);
})
