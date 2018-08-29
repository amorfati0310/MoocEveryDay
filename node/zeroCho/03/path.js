const path = require("path");

// console.log(path.parse(__filename));

console.log(
  path.format({
    root: "/",
    dir: "/Users/chany/coding/MoocEveryDay/node/zeroCho/03",
    base: "path.js",
    ext: ".js",
    name: "path",
  })
);

//경로 제대로 만들어줌 :D
path.normalize();
path.relative(a, b); // a->b로 가는 상대경로 알려줌
path.join(__dirname, "", "", c, d); // 경로 다 합쳐줌 절대 경로 무시
path.resolve(__dirname, "", "", c, d); // 절대 경로 고려 합침
