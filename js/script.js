const lizardFacts = [
  "トカゲは しっぽを きっても、また生えてくる しゅるいが いるよ！",
  "トカゲは まわりの おんどで 体の あたたかさが かわるんだ。",
  "トカゲの したは、においを かぎわけるのに つかわれているよ。",
  "トカゲは 目を あけたままねむる しゅるいも いるよ！",
  "トカゲの ひふは、大きくなると 皮を ぬぐことが あるよ。"
];

const btn = document.getElementById("fun-btn");
const text = document.getElementById("fun-text");

btn.addEventListener("click", () => {
  const fact = lizardFacts[Math.floor(Math.random() * lizardFacts.length)];
  text.textContent = fact;
});
