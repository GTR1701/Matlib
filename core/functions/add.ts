/*
The MIT License (MIT)

Copyright (c) 2023-2023 Dawid Kowal

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
export function add(...everyArgument: any): number {
    const argumentArrayLength = everyArgument.length
    let result = Array.isArray(everyArgument[0]) ? everyArgument[0][0] : everyArgument[0]
    const firstArgumentOfTypeArray = Array.isArray(everyArgument[0]) ? true : false
    for (let iterator = 0; iterator < argumentArrayLength; iterator++) {
        if (!firstArgumentOfTypeArray && iterator === 0) continue
        if (!Array.isArray(everyArgument[iterator]) && typeof everyArgument[iterator] !== "number") {
            console.error("Variable type not assignable to argument of type number or number[]")
            return 0
        }
        if (Array.isArray(everyArgument[iterator])) {
            const currentArray: any = everyArgument[iterator]
            const internalArrayLength = currentArray.length
            for (let internalArrayIterator = 0; internalArrayIterator < internalArrayLength; internalArrayIterator++) {
                if (iterator === 0 && internalArrayIterator === 0) continue
                if (typeof currentArray[internalArrayIterator] !== "number") {
                    console.error("Variable type not assignable to argument of type number or number[]")
                    return 0
                }
                result += currentArray[internalArrayIterator]
            }
        } else {
            if (iterator === 0) continue
            result += everyArgument[iterator]
        }
    }
    return result
}