import multiply from "./core/functions/multiply";
import power from "./core/functions/power";
import round from "./core/functions/round";
import sum from "./core/functions/sum";

console.log("multiply:", multiply(2, [2,3,4,5]))
console.log("sum:", sum([2,3,4,5]))
console.log("round", round(3.141521345, "down", 3))
console.log("power", power(2, 5))
