import dynamic from "next/dynamic";

import { MyStockInfo } from "../../types/index/MyStockInfo";
import { moneyComma } from "../../utils/format";
import { PlusMinus } from "../texts/Color";

interface Props {
  data: MyStockInfo;
  exchange: number;
}

const DynamicComponentWithNoSSR = dynamic(() => import("../charts/ThumbnailChart"), { ssr: false });

const MyStockCard = ({ data, exchange }: Props) => {
  const { ticker, name, current, upDown, avg, amount } = data;
  const currentRatio = Math.round(upDown * 100) / 100;
  const income = Math.round(exchange * (current - avg) * amount);
  const myRatio = (((current - avg) / avg) * 100).toFixed(2);

  return (
    <div className="my-2 pt-7 px-4 bg-white shadow-2xl rounded-lg cursor-pointer hover:-translate-x-1 hover:-translate-y-3 transition-all duration-300">
      <div className="flex justify-between px-2 text-base mb-1">
        <span>{name}</span>
        <span>
          {income > 0 && "+"}
          {moneyComma(`${income}`)}원
        </span>
      </div>

      <div className="flex justify-between text-sm px-2">
        <PlusMinus isPlus={currentRatio >= 0}>
          {moneyComma(current.toFixed(4))}
          <span className="ml-1 text-xs font-s-core5">({currentRatio}%)</span>
        </PlusMinus>

        <PlusMinus isPlus={parseFloat(myRatio) >= 0}>
          {moneyComma(avg.toFixed(4))}
          <span className="ml-1 text-xs font-s-core5">{`(${myRatio}%)`}</span>
        </PlusMinus>
      </div>

      <div>
        <DynamicComponentWithNoSSR ticker={ticker} isPlus={currentRatio >= 0} />
      </div>
    </div>
  );
};

export default MyStockCard;
