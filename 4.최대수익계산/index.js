//최대 수익 계산
// - n 기간 동아느이 주식가격 변화를 기준으로 낼 수 있는 가장 큰 수익 계산하기

// 문제 설명
// - 주어진 기간동안 주식 매매를 하여 얻는 이익을 계산
// - 예) 기간중 가장 쌀 때 주식을 구입, 가장 비쌀 때 주식을 판매
// - 예) 3일 동안의 주식가격이 [100. 50. 250] 이라면, 최대이익은 200

function maxProfit(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let price of prices) {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice);
    } else {
      minBuyPrice = price;
    }
  }
  return maxProfit;
}

const test1 = [10, 20, 50, 100, 80, 250]; // 240

console.log(maxProfit(test1));
