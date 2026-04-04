/**
 * modifierClassObjectを受け取り、クラス名を生成する
 * @param datum { [key: string]: boolean }
 * @returns string
 */
const generateClassName = (datum: { [key: string]: boolean }) => {
  return Object.entries(datum)
    .filter(([_key, value]) => value)
    .map(([key]) => key)
    .join(" ")
}

export default generateClassName