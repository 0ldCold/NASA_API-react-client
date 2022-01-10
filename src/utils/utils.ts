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

/**
 * Генерация массива случайных уникальных элементов заданной длинны.
 * Элементы задаются в заданном диапазоне
 * @param min Нижний предел диапазона
 * @param max Верхний предел диапазона
 * @param length Длинна выходного массива
 * @returns Массив уникальных случайных элементов
 */
export function getArrayOfRandomUniqueInt(min: number, max: number, length: number): number[] {
  if (max - min + 1 < length) {
    throw new Error(
      `Unable to generate an array of unique random numbers ` +
        `of the given length (${length}) for the given range (${min}-${max}).`
    );
  }
  const arr: number[] = [];
  while (arr.length < length) {
    const randomInt = getRandomInt(min, max);
    if (arr.indexOf(randomInt) === -1) {
      arr.push(randomInt);
    }
  }
  return arr;
}

/**
 * СКРЫВАЕТ элемент DOM
 * @param id ID элемента DOM
 */
export function hideElementById(id: string): void {
  const elemClassList = document.getElementById(id)?.classList;
  if (!elemClassList?.contains("hide")) {
    elemClassList?.add("hide");
  }
}

/**
 * ПОКАЗЫВАЕТ элемент DOM
 * @param id ID элемента DOM
 */
export function showElementById(id: string): void {
  const elemClassList = document.getElementById(id)?.classList;
  if (elemClassList?.contains("hide")) {
    elemClassList.remove("hide");
  }
}
