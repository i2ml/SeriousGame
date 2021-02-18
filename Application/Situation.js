class Situation {

    constructor(id) {
        this.id = id;
        this.enonce = situations[id].enonce;
        this.arguments = [];
        for (const argumentId in situations[id].arguments) {
            this.arguments.push(new Argument(id, argumentId));
        }
    }

}