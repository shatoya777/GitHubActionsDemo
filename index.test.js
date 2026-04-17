const fs = require("fs");
const { JSDOM } = require("jsdom");

test("HTML has a title", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const dom = new JSDOM(html);

  const title = dom.window.document.querySelector("title");
  expect(title).not.toBeNull();
});

test("Page has a main heading", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const dom = new JSDOM(html);

  const h1 = dom.window.document.querySelector("h1");
  expect(h1).not.toBeNull();
});