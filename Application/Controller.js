class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    startGame() {
        this.view.displaySituation();
    }
}