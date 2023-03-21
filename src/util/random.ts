export function getRandomNumbers(min: number, max: number): number
{
 return min + Math.trunc(Math.random()*(max-min));
}
export function getRandomElement(array: any[]): any
{
return array [getRandomNumbers(0, array.length)]
}