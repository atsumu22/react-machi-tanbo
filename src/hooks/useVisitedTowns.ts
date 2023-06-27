import tarumi from "../data/Tarumi.json";
import records from "../data/Record.json";

export const useVisitedTowns = () => {
  const visitedTowns: Array<Array<string>> = records.map(({area}) => area);
  const newTarumi = tarumi.map((town) => {
    if (visitedTowns.flat().includes(town.townName)) {
      return {...town, isVisited: true};
    } else {
      return {...town, isVisited: false};
    };
  });
  return { newTarumi };
};


// レコードのJSONファイルを受け取る
// レコードの各オブジェクトから、”area"プロパティの配列を抜き出し、一つの配列にまとめる。
// たるみのJSONファイルを受け取る
// たるみのTWONを一つづつチェック
// 上記の配列に、同じ名前が含まれているかチェック。
// 含まれていれば新たにisVisited: tureを追加し、それを新しい配列としてsetTarumiTowns関数で定義し、
// それをreturn値として設定する。
// ー＞TarumiコンポーネントではこのTarumiWardsを用いて、Map展開する。
