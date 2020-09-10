class View {
    constructor() { }

    /**
     * Permet d'afficher une situation
     */
    displaySituation(situation) {
        const progress = (situation.id - 1) * (100 / 12);
        console.log("progress is :" + progress)
        $("#mainBar").css({ width: progress + '%' });
        $("#enonce").html(situation.enonce);
        $("#situationIllu").attr("src", "img/situations/" + situation.id + ".png");
        $(".oneargumentList").empty();
        $(".twoargumentList").empty();
        for (const argumentId in situation.arguments) {
            $('<div/>', {
                'class': 'custom-control custom-checkbox',
                'id': 'onedivArgument' + argumentId
            }).appendTo('.oneargumentList');
            $('<input/>', {
                'type': 'checkbox',
                'class': 'custom-control-input',
                'id': 'oneargument' + argumentId,
            }).appendTo('#onedivArgument' + argumentId);
            $('<label/>', {
                'for': 'oneargument' + argumentId,
                'class': 'custom-control-label text-gray-900',
                'text': situation.arguments[argumentId].enonce,
            }).appendTo('#onedivArgument' + argumentId);
            $('<div/>', {
                'class': 'custom-control custom-checkbox',
                'id': 'twodivArgument' + argumentId
            }).appendTo('.twoargumentList');
            $('<input/>', {
                'type': 'checkbox',
                'class': 'custom-control-input',
                'id': 'twoargument' + argumentId,
            }).appendTo('#twodivArgument' + argumentId);
            $('<label/>', {
                'for': 'twoargument' + argumentId,
                'class': 'custom-control-label text-gray-900',
                'text': situation.arguments[argumentId].enonce,
            }).appendTo('#twodivArgument' + argumentId);
        };
    }

    /**
     * Permet d'afficher l'écran de fin
     */
    displayEndGame() {
        $("#profilModal").show();
        $("#backButton").addClass("disabled");
        $("#backButton").html("Félicitation, vous avez terminé le jeu !");
    }

    /**
     * Permet d'afficher un argument entre 2 situations
     */
    displaySelectedArgument(argument, impact) {

        let motivationValue;
        //display raw values
        if (impact.frustration <= 0) {
            motivationValue = impact.motivationPenality + 5;
            if (impact.frustration < 0) { //additional bonus if frustration is going down
                motivationValue += 5;
            }
        }
        else { //no bonus if frustration is going up
            motivationValue = impact.motivationPenality;
        }
        $("#argEnonce").html(argument.enonce);
        $("#impactText").html(impact.text);
        $("#frustrationValue").html(impact.frustration);
        $("#motivationValue").html(motivationValue);
        $("#santeValue").html(impact.sante);
        $("#equilibreAlimValue").html(impact.equilibreAlim);

        //reset colors
        let classes = ["border-left-danger", "border-left-success", "border-left-info", "text-danger", "text-success", "text-info"];
        $("#frustrationCard").removeClass(classes);
        $("#motivationCard").removeClass(classes);
        $("#santeCard").removeClass(classes);
        $("#equilibreAlimCard").removeClass(classes);
        $("#frustrationText").removeClass(classes);
        $("#motivationText").removeClass(classes);
        $("#santeText").removeClass(classes);
        $("#equilibreAlimText").removeClass(classes);

        //display color
        if (impact.frustration > 0) {
            $("#frustrationCard").addClass("border-left-danger");
            $("#frustrationText").addClass("text-danger");
        };
        if (impact.frustration < 0) {
            $("#frustrationCard").addClass("border-left-success");
            $("#frustrationText").addClass("text-success");
        };
        if (impact.frustration == 0) {
            $("#frustrationCard").addClass("border-left-info");
            $("#frustrationText").addClass("text-info");
        };
        if (motivationValue < 0) {
            $("#motivationCard").addClass("border-left-danger");
            $("#motivationText").addClass("text-danger");
        };
        if (motivationValue > 0) {
            $("#motivationCard").addClass("border-left-success");
            $("#motivationText").addClass("text-success");
        };
        if (motivationValue == 0) {
            $("#motivationCard").addClass("border-left-info");
            $("#motivationText").addClass("text-info");
        };
        if (impact.sante < 0) {
            $("#santeCard").addClass("border-left-danger");
            $("#santeText").addClass("text-danger");
        };
        if (impact.sante > 0) {
            $("#santeCard").addClass("border-left-success");
            $("#santeText").addClass("text-success");
        };
        if (impact.sante == 0) {
            $("#santeCard").addClass("border-left-info");
            $("#santeText").addClass("text-info");
        };
        if (impact.equilibreAlim < 0) {
            $("#equilibreAlimCard").addClass("border-left-danger");
            $("#equilibreAlimText").addClass("text-danger");
        };
        if (impact.equilibreAlim > 0) {
            $("#equilibreAlimCard").addClass("border-left-success");
            $("#equilibreAlimText").addClass("text-success");
        };
        if (impact.equilibreAlim == 0) {
            $("#equilibreAlimCard").addClass("border-left-info");
            $("#equilibreAlimText").addClass("text-info");
        };
    }

    /**
     * Display information about the player
     */
    updatePlayerInfo(player) {
        console.log(player)
        let classes = ["bg-success", "bg-warning", "bg-danger"];
        $("#frustrationBar").removeClass(classes);
        $("#motivationBar").removeClass(classes);
        $("#santeBar").removeClass(classes);
        $("#equilibreAlimBar").removeClass(classes);

        let bad = 0;
        let good = 0;
        if (player.frustration < 40) {
            good++;
            $("#frustrationBar").addClass("bg-success").css({ width: player.frustration + '%' });
        };
        if (player.frustration >= 40 && player.frustration <= 60) {
            $("#frustrationBar").addClass("bg-warning").css({ width: player.frustration + '%' });
        };
        if (player.frustration > 60) {
            bad++;
            $("#frustrationBar").addClass("bg-danger").css({ width: player.frustration + '%' });
        };
        if (player.motivation < 40) {
            bad++;
            $("#motivationBar").addClass("bg-danger").css({ width: player.motivation + '%' });
        };
        if (player.motivation >= 40 && player.motivation <= 60) {
            $("#motivationBar").addClass("bg-warning").css({ width: player.motivation + '%' });
        };
        if (player.motivation > 60) {
            good++;
            $("#motivationBar").addClass("bg-success").css({ width: player.motivation + '%' });
        };
        if (player.sante < 40) {
            bad++;
            $("#santeBar").addClass("bg-danger").css({ width: player.sante + '%' });
        };
        if (player.sante >= 40 && player.sante <= 60) {
            $("#santeBar").addClass("bg-warning").css({ width: player.sante + '%' });
        };
        if (player.sante > 60) {
            good++;
            $("#santeBar").addClass("bg-success").css({ width: player.sante + '%' });
        };
        if (player.equilibreAlim < 40) {
            bad++;
            $("#equilibreAlimBar").addClass("bg-danger").css({ width: player.equilibreAlim + '%' });
        };
        if (player.equilibreAlim >= 40 && player.equilibreAlim <= 60) {
            $("#equilibreAlimBar").addClass("bg-warning").css({ width: player.equilibreAlim + '%' });
        };
        if (player.equilibreAlim > 60) {
            good++;
            $("#equilibreAlimBar").addClass("bg-success").css({ width: player.equilibreAlim + '%' });
        };

        if (bad > 0) {
            $("#profilIllu").attr("src", "img/faces/Triste.png");
        } else {
            if (good >= 2) {
                $("#profilIllu").attr("src", "img/faces/Heureux.png");
            } else {
                $("#profilIllu").attr("src", "img/faces/Normal.png");
            }
        }

    }
}