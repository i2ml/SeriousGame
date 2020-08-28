class Situation {

    constructor(id) {
        this.enonce = situations[id].enonce;
        this.arguments = new Array();
        for (const argumentId in situations[id].arguments) {
            this.arguments.push(new Argument(id, argumentId));
        };
    }

}