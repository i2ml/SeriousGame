class View {
    constructor() { }

    /**
     * Permet d'afficher une situation
     */
    displaySituation(situation) {
        $("#enonce").html(situation.enonce);
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
                'class': 'custom-control-label',
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
                'class': 'custom-control-label',
                'text': situation.arguments[argumentId].enonce,
            }).appendTo('#twodivArgument' + argumentId);
        };
    }

    /**
     * Permet d'afficher un argument entre 2 situations
     */
    displaySelectedArgument(argument) {
        $("#argEnonce").html(argument.enonce);
        $("#frustrationValue").html(argument.enonce);
        return;
    }

}