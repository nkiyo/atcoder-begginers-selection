function Main(input: string) {
  const lines = input.split("\n");
  const s = lines[0].substring(0, 3);
  const r = s.split('').filter(e => e === '1')
  console.log(r.length)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
