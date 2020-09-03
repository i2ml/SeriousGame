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
    if ($("#valider").hasClass("disabled")) {
        return;
    }
    app.model.loadNextSituation()
    app.view.displaySituation(app.model.situation);
})

$("input").click(function () {
    const inputList = $("input")
    let first = 0, second = 0;
    const numberOfArguments = inputList.length / 2;
    for (const key in inputList) {
        if (inputList.hasOwnProperty(key)) {
            const element = inputList[key];
            if ($(element).is(":checked")) {
                key >= numberOfArguments ? first++ : second++;
            }
        }
    }
    (first > 0 && second > 0) ? $("#valider").removeClass("disabled") : $("#valider").addClass("disabled");
})

