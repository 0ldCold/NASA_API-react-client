/* eslint-disable import/prefer-default-export */
/**
 * Функция позволяет получить случайное целое число в заданном интервале.
 * Возвращаемое значение не менее min (или следующее целое число, которое больше min, если min не целое) и не более (включительно) max.
 * @param min Минимальное возможное случайное целое число
 * @param max Максимально возможное случайное целое число
 * @returns Случайное целое число в заданном диапазоне
 */
export function getRandomInt(min: number, max: number): number {
  const RoundedMin = Math.ceil(min);
  const RoundedMax = Math.floor(max);
  return Math.floor(Math.random() * (RoundedMax - RoundedMin + 1)) + RoundedMin;
}

export function getArrayOfRandomUniqueInt(min: number, max: number, length: number): number[] {
  const arr: number[] = [];
  while (arr.length < length) {
    const randomInt = getRandomInt(min, max);
    if (arr.indexOf(randomInt) === -1) {
      arr.push(randomInt);
    }
  }
  return arr;
}
