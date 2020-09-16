class View {
    constructor() { }

    /**
     * Permet d'afficher une situation
     */
    displaySituation(situation) {
        const progress = (situation.id) * (100 / 12);
        console.log("progress is :" + progress)
        $("#mainBar").css({ width: progress + '%' });
        $("#enonce").html(situation.enonce);
        $("#situationIllu").attr("src", "img/situations/" + situation.id + ".png");
        $("input").prop("checked", false);
        for (const argumentId in situation.arguments) {
            $(".argumentList" + argumentId).empty();
            $('<h5/>', {
                'class': 'argumentText text-gray-900 m-0',
                'text': situation.arguments[argumentId].enonce,
            }).appendTo('.argumentList' + argumentId);
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

        let energieValue;
        //display raw values
        if (impact.mental >= 0) {
            energieValue = impact.energiePenality + 5;
            if (impact.mental > 0) { //additional bonus if mental is going up
                energieValue += 5;
            }
        }
        else { //no bonus if mental is going up
            energieValue = impact.energiePenality;
        }
        $("#argEnonce").html(argument.enonce);
        $("#impactText").html(impact.text);
        $("#mentalValue").html(impact.mental);
        $("#energieValue").html(energieValue);
        $("#santeValue").html(impact.physique);
        $("#equilibreAlimValue").html(impact.equilibreAlim);

        //reset colors
        let classes = ["border-left-danger", "border-left-success", "border-left-info", "text-danger", "text-success", "text-info"];
        $("#mentalCard").removeClass(classes);
        $("#energieCard").removeClass(classes);
        $("#santeCard").removeClass(classes);
        $("#equilibreAlimCard").removeClass(classes);
        $("#mentalText").removeClass(classes);
        $("#energieText").removeClass(classes);
        $("#santeText").removeClass(classes);
        $("#equilibreAlimText").removeClass(classes);

        let bad = 0;
        //display color
        if (impact.mental < 0) {
            bad++;
            $("#mentalCard").addClass("border-left-danger");
            $("#mentalText").addClass("text-danger");
        };
        if (impact.mental > 0) {
            $("#mentalCard").addClass("border-left-success");
            $("#mentalText").addClass("text-success");
        };
        if (impact.mental == 0) {
            $("#mentalCard").addClass("border-left-info");
            $("#mentalText").addClass("text-info");
        };
        if (energieValue < 0) {
            $("#energieCard").addClass("border-left-danger");
            $("#energieText").addClass("text-danger");
        };
        if (energieValue > 0) {
            $("#energieCard").addClass("border-left-success");
            $("#energieText").addClass("text-success");
        };
        if (energieValue == 0) {
            $("#energieCard").addClass("border-left-info");
            $("#energieText").addClass("text-info");
        };
        if (impact.physique < 0) {
            bad++;
            $("#santeCard").addClass("border-left-danger");
            $("#santeText").addClass("text-danger");
        };
        if (impact.physique > 0) {
            $("#santeCard").addClass("border-left-success");
            $("#santeText").addClass("text-success");
        };
        if (impact.physique == 0) {
            $("#santeCard").addClass("border-left-info");
            $("#santeText").addClass("text-info");
        };
        if (impact.equilibreAlim < 0) {
            bad++;
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

        //basic arthur success/failure
        if (bad >= 2) {
            $("#impactIllu").attr('src', 'img/impacts/échouer.png');
        } else {
            $("#impactIllu").attr('src', 'img/impacts/ArthurCostard.png');
        }
        if (bad == 0) {
            $("#impactIllu").attr('src', 'img/impacts/success.png');
        }

        //impact specific illustration
        if (argument.motherSituation == 10) {
            $("#impactIllu").attr('src', 'img/impacts/miam.png');
        }
        if (argument.motherSituation == 11 && bad <= 1) {
            $("#impactIllu").attr('src', 'img/impacts/muscu.png');
        }
        if (argument.motherSituation == 11 && bad > 1) {
            $("#impactIllu").attr('src', 'img/impacts/faceslip.png');
        }
        if (argument.enonce.includes("surfait")) {
            $("#impactIllu").attr('src', 'img/impacts/voiture.png');
        }


    }

    /**
     * Display information about the player
     */
    updatePlayerInfo(player) {
        let classes = ["bg-success", "bg-warning", "bg-danger"];
        $("#mentalBar").removeClass(classes);
        $("#energieBar").removeClass(classes);
        $("#santeBar").removeClass(classes);
        $("#equilibreAlimBar").removeClass(classes);
        if ($("#mentalValue").text() < 0) {
            $("#mentalSpan").html(`<i class="fas fa-chevron-down"></i> En diminution.`);
        };
        if ($("#mentalValue").text() == 0) {
            $("#mentalSpan").html(`<i class="fas fa-grip-lines"></i> Stable.`);
        };
        if ($("#mentalValue").text() > 0) {
            $("#mentalSpan").html(`<i class="fas fa-chevron-up"></i> En augmentation.`);
        };
        if ($("#energieValue").text() < 0) {
            $("#energieSpan").html(`<i class="fas fa-chevron-down"></i> En diminution.`);
        };
        if ($("#energieValue").text() == 0) {
            $("#energieSpan").html(`<i class="fas fa-grip-lines"></i> Stable.`);
        };
        if ($("#energieValue").text() > 0) {
            $("#energieSpan").html(`<i class="fas fa-chevron-up"></i> En augmentation.`);
        };
        if ($("#santeValue").text() < 0) {
            $("#santeSpan").html(`<i class="fas fa-chevron-down"></i> En diminution.`);
        };
        if ($("#santeValue").text() == 0) {
            $("#santeSpan").html(`<i class="fas fa-grip-lines"></i> Stable.`);
        };
        if ($("#santeValue").text() > 0) {
            $("#santeSpan").html(`<i class="fas fa-chevron-up"></i> En augmentation.`);
        };
        if ($("#equilibreAlimValue").text() < 0) {
            $("#equilibreAlimSpan").html(`<i class="fas fa-chevron-down"></i> En diminution.`);
        };
        if ($("#equilibreAlimValue").text() == 0) {
            $("#equilibreAlimSpan").html(`<i class="fas fa-grip-lines"></i> Stable.`);
        };
        if ($("#equilibreAlimValue").text() > 0) {
            $("#equilibreAlimSpan").html(`<i class="fas fa-chevron-up"></i> En augmentation.`);
        };

        let bad = 0;
        let good = 0;
        if (player.mental < 40) {
            good++;
            $("#mentalBar").addClass("bg-success").css({ width: player.mental + '%' });
        };
        if (player.mental >= 40 && player.mental <= 60) {
            $("#mentalBar").addClass("bg-warning").css({ width: player.mental + '%' });
        };
        if (player.mental > 60) {
            bad++;
            $("#mentalBar").addClass("bg-danger").css({ width: player.mental + '%' });
        };
        if (player.energie < 40) {
            bad++;
            $("#energieBar").addClass("bg-danger").css({ width: player.energie + '%' });
        };
        if (player.energie >= 40 && player.energie <= 60) {
            $("#energieBar").addClass("bg-warning").css({ width: player.energie + '%' });
        };
        if (player.energie > 60) {
            good++;
            $("#energieBar").addClass("bg-success").css({ width: player.energie + '%' });
        };
        if (player.physique < 40) {
            bad++;
            $("#santeBar").addClass("bg-danger").css({ width: player.physique + '%' });
        };
        if (player.physique >= 40 && player.physique <= 60) {
            $("#santeBar").addClass("bg-warning").css({ width: player.physique + '%' });
        };
        if (player.physique > 60) {
            good++;
            $("#santeBar").addClass("bg-success").css({ width: player.physique + '%' });
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