const faq = [
  {
    question: "Må jeg være medlem for å komme på trening?",
    answer:
      "Nei. Kom å prøv et par ganger før du bestemmer deg. Vil du bli medlem, ordner vi det i lokalet",
  },
  {
    question: "Trenger jeg egne piler?",
    answer:
      "Nei. Du kan låne piler når du spiller helt gratis. De fleste kjøper egne piler etter en stund",
  },
  {
    question: "Er det aldersgrense?",
    answer:
      "Det er ingen fastsatt aldersgrense, men barn under 12 år må være i følge med foresatt",
  },
  {
    question: "Hvor god må jeg være for å bli med i serien?",
    answer: "Alle kan mede seg på den interne serien uansett nivå",
  },
  {
    question: "Koster det noe å delta i turneringer?",
    answer:
      "Nei, ikke turneringer som spilles på klubbkvelder. Voksenturneringer vil ha en liten sum, hvor 80% går til vinnere, og 20% går til klubben",
  },
];

export function renderFaq() {
  const container = document.getElementById("faq-container");
  if (!container) return;
  container.innerHTML = faq
    .map(
      (qa) =>
        `<li><details name="qa"><summary>${qa.question}</summary>${qa.answer}</details></li>`,
    )
    .join("");
}
