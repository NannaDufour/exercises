const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      {
        text: "Das Boot fährt ruhig durch das blaue Wasser, während die Sonne von einem fast wolkenlosen Himmel scheint. An Bord ist genügend Zeit, die Aussicht zu genießen, den Wind zu spüren und die ruhigen Bewegungen der Wellen zu beobachten. Es ist ein perfekter Tag auf dem Wasser.",
        location: ".content",
      },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      {
        text: "Båden sejler roligt gennem det blå vand, mens solen skinner fra en næsten skyfri himmel. Ombord er der god tid til at nyde udsigten, mærke vinden og følge bølgernes rolige bevægelser. Det er en perfekt dag på vandet.",
        location: ".content",
      },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

document.getElementById("dropdown").addEventListener("change", pickLanguage);

console.log(texts[locale].texts[0].text);

function pickLanguage() {
  const dropdown = document.getElementById("dropdown");

  texts[dropdown.value].texts.forEach((translation) => {
    const placement = document.querySelector(translation.location);

    placement.textContent = translation.text;
  });
}

pickLanguage();
