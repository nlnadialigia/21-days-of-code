const next = (classValue, nextId) => {
  const card = document.querySelector(`.${classValue}`);
  const nextCard = document.getElementById(nextId);

  card.removeAttribute("id");
  card.setAttribute("id", classValue);
  nextCard.removeAttribute("id");
  nextCard.setAttribute("id", "card");
};
