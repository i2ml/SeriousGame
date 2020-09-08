class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    /**
     * Start the game
     */
    startGame() {
        this.view.displaySituation(this.model.situation);
    }
}

let app = new Controller(new Model(), new View());
app.startGame();
$('#resumeModal').modal('show');

/**
 * Désactive le bouton valider si les choix n'ont pas été fait
 */
$(document).on('click', 'input', function () {
    console.log("banane")
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
});

/** 
 * écoute le click sur le bouton valider 
 */
$("#valider").click(function () {
    if ($("#valider").hasClass("disabled")) {
        return;
    }
    $('#resumeModal').modal('show');
    $("#valider").addClass("disabled");
    $("input").click(function () {
        app.checkConfirmOppening()
    });
    const selectedArgument = app.model.getSelectedArgument();
    const elementState = app.model.applyArgument(selectedArgument);
    app.model.loadNextSituation();
    app.view.displaySelectedArgument(selectedArgument, elementState);
    app.view.displaySituation(app.model.situation);
})




