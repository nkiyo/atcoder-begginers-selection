function Main(input: string) {
  const lines = input.split("\n");
  const [a, b] = lines[0].split(" ").map(e => parseInt(e, 10));
  console.log(`${(a * b) % 2 === 0 ? "Even" : "Odd"}`);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
