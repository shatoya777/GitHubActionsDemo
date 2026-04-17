const fs = require("fs");

test("HTML file exists", () => {
  const html = fs.readFileSync("index.html", "utf8");
  expect(html).toBeDefined();
});

test("HTML contains title tag", () => {
  const html = fs.readFileSync("index.html", "utf8");
  expect(html.includes("<title>")).toBe(true);
});

test("HTML contains h1 heading", () => {
  const html = fs.readFileSync("index.html", "utf8");
  expect(html.includes("<h1>")).toBe(true);
});