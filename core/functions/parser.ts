interface IParser {
    value: string;
    parse: () => {}
    eval: () => {}
}

class Parser {
    value: string = ''

    private parse(expression: string){
        let expressionToParse = expression.trim()
            expressionToParse.replaceAll(' ', '')
    }
}

