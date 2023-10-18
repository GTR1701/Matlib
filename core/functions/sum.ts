export default function multiply(...everyArgument: number[]):number {
    const argumentArrayLength = everyArgument.length
    let result = everyArgument[0]
    for(let iterator = 1; iterator < argumentArrayLength; iterator++){
        result += everyArgument[iterator]
    }
    return result
}