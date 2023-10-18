export default function multiply(...everyArgument: number[]): number {
    const argumentArrayLength = everyArgument.length
    console.log("argumentArrayLength", argumentArrayLength)
    let result: number = Array.isArray(everyArgument[0]) ? everyArgument[0][0] : everyArgument[0]
    const firstArgumentOfTypeArray = Array.isArray(everyArgument[0]) ? true : false
    console.log("result", result)
    console.log("firstArgumentOfTypeArray", firstArgumentOfTypeArray)
    for(let iterator = 0; iterator < argumentArrayLength; iterator++){
        if(!firstArgumentOfTypeArray && iterator === 0) continue
        if(Array.isArray(everyArgument[iterator])){
            const currentArray: number[] = everyArgument[iterator]
            console.log("currentArray", currentArray)
            const internalArrayLength = currentArray.length
            console.log("internalArrayLength", internalArrayLength)
            for(let internalArrayIterator = 0; internalArrayIterator < internalArrayLength; internalArrayIterator++){
                if(iterator === 0 && internalArrayIterator === 0) continue
                result *= currentArray[internalArrayIterator]
                console.log(result)
            }
        } else {
            if(iterator === 0) continue
            console.log(everyArgument[iterator])
            result *= everyArgument[iterator]
            console.log(result)
        }
    }
    return result
}