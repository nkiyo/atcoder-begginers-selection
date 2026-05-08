import assert from "assert";

function Main(input: string) {
  const lines = input.split("\n");
  const len = parseInt(lines[0], 10);
  let nums = lines[1].split(" ").map(e => parseInt(e, 10))
  assert(len === nums.length);
  console.log(nums)
  nums = nums.map(e => e/2)
  console.log(nums)
  nums = nums.map(e => e/2)
  console.log(nums)

  // TODO 2で割り切れる回数をstdoutすること
  // const s = lines[1].substring(0, 3);
  // const r = s.split('').filter(e => e === '1')
  // console.log(r.length)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
