class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    /**
     * Start the game
     */
    startGame() {
        console.log("Serious-game démarre");
        this.view.displaySituation(this.model.situation);
    }
}

let app = new Controller(new Model(), new View());
app.startGame();

$('#teamnameModal').modal('show');



/**
 * écoute le click sur le bouton voir le profil
 */
$("#voirProfil").click(function () {
    app.view.updatePlayerInfo(app.model.player);
});

/**
 * écoute le click sur le bouton de fermeture de l'écran du nom des équipes
 */
$("#nameSelected").click(function () {
    if ($('#moralName').val() == "" || $('#equilibreName').val() == "") {
        alert("Veuillez choisir un nom pour les équipes.")
    } else {
        $('#teamnameModal').modal('hide');
        $('#optionsModal').modal('show');
        $('#nameMoral').html($('#moralName').val())
        $('#nameEquilibre').html($('#equilibreName').val())
    }
});



/**
 * Désactive le bouton valider si les choix n'ont pas été fait
 */
$(document).on('click', 'input', function () {
    const inputList = $("input");
    let first = 0, second = 0;
    for (const key in inputList) {
        if (inputList.hasOwnProperty(key)) {
            const element = inputList[key];
            if ($(element).is(":checked")) {
                (parseInt(key) + 1) % 2 == 0 ? first++ : second++;
            }
        }
    }
    if (app.model.moralIsLocked()) {
        second = 1;
    }
    if (app.model.equilibreIsLocked()) {
        first = 1;
    }
    (first > 0 && second > 0) ? $("#valider").removeClass("disabled") : $("#valider").addClass("disabled");
});

$(document).on('click', '.border-primary', function () {
    const cadres = $(".border-primary");
    for (const key in cadres) {
        if (cadres.hasOwnProperty(key)) {
            const element = cadres[key];
            if ($(element).find("input").filter(":checked").length > 0) {
                $(element).addClass("border")
            } else {
                $(element).removeClass("border")
            }
        }
    }
});

/**
 * change player values if game is set to hard
 */
$("#hard").click(function () {
    app.model.setDifficulty('hard');
})

/**
 * change player value if game is set to easy
 */
$("#easy").click(function () {
    app.model.setDifficulty('easy');
})

/** 
 * écoute le click sur le bouton valider 
 */
$("#valider").click(function () {
    if ($("#valider").hasClass("disabled")) {
        return;
    }
    $('#resumeModal').modal('show');
    $("#valider").addClass("disabled");
    const selectedArgument = app.model.getSelectedArgument();
    const elementState = app.model.applyArgument(selectedArgument);
    app.view.displaySelectedArgument(selectedArgument, elementState);
    if (app.model.situation.id == 12) {
        app.view.displayEndGame();
    } else {
        app.model.loadNextSituation();
        app.view.displaySituation(app.model.situation);
    }
})

/** 
 * Faire danser arthur
 */
$("#impactIllu").click(function () {
    let backup = $("#impactIllu").attr('src');
    let test = 0
    // To start the loop
    let mainLoopId = setInterval(function () {
        let src = ($("#impactIllu").attr('src') === 'img/impacts/Marche2.png')
            ? 'img/impacts/Marche1.png'
            : 'img/impacts/Marche2.png';
        $("#impactIllu").attr('src', src);
        test++;
        if (test > 7) {
            clearInterval(mainLoopId);
            $("#impactIllu").attr('src', backup);
        }
    }, 200);

})




