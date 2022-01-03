import { MyStockInfo } from "../types/index/MyStockInfo";

export const moneyComma = (str: string) => {
  const REGEX = /\B(?=(\d{3})+(?!\d))/g;
  const strArr = str.split(".");
  const result = strArr[0].replace(REGEX, ",") + (strArr.length > 1 ? `.${strArr[1]}` : "");
  return result;
};

export const sortByUpdown = (arr: MyStockInfo[]) => {
  return arr.sort((a: MyStockInfo, b: MyStockInfo) => Math.abs(b.upDown) - Math.abs(a.upDown));
};
