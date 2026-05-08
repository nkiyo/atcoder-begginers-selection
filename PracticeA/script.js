function Main(input) {
  const lines = input.split("\n");
  const a = parseInt(lines[0], 10)
  const [b, c] = lines[1].split(" ").map(e => parseInt(e, 10));
  const s = lines[2]
  console.log(`${a+b+c} ${s}`);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
