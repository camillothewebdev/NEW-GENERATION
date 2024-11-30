let currentNews = 0;
listNews = [
  {
    id: 1,
    image: "img/contacts.jpg",
    title: "Bonjour à tous les staticiens qui veulent faire des recherches",
    contenu:
      "ceci et cela, iss est t un bon université mais eux ne prennent pas les etudes au serieux. Mais l'argent eux prennent ça tres tres tres au serieux, donc ceci, cela voila ceci cela nous vous souhaitons le bienvenu dans cette attablissement rempli des staticiens et ml kqjsdmflkj sqdmlfkjqsd mlfkjqsdm lfkj qsmdlfkj qmsdlkfj mqsldkjf mqlskdjfmlqksdjfpzijefôzije fmlqskdjf mlkzje foizqje fmlkjqzoefijzmeofijzmoeifjzoeifjoziefjzoeifjzoiefjm qlsdjfozijef zkljefmo iqsjdf izqje fmoizqjef oizqjemfoijzefijzm eofijzeofij moziefjqzomdfjoqsidjfqsodjfmqosidjflqskdjfmlqskjdfmlkqsjdflmkqsjdmlf qsjdmlfkj qsodifj qsmdklfjqzoijfmlsqkjdf moqisjefoizjefm liqzjofijqzd f e prennent pas les etudes au serieux. Mais l'argent eux prennent ça tres tres tres au serieux, donc ceci, cela voila ceci cela nous vous souhaitons le bienvenu dans cette attablissement rempli des staticiens et ml kqjsdmflkj sqdmlfkjqsd mlfkjqsdm lfkj qsmdlfkj qmsdlkfj mqsldkjf mqlskdjfmlqksdjfpzijefôzije fmlqskdjf mlkzje foizqje fmlkjqzoefijzmeofijzmoeifjzoeifjoziefjzoeifjzoiefjm qlsdjfozijef zkljefmo iqsjdf izqje fmoizqjef oizqjemfoijzefijzm eofijzeofij moziefjqzomdfjoqsidjfqsodjfmqosidjflqskdjfmlqskjdfmlkqsjdflmkqsjdmlf qsjdmlfkj qsodifj qsmdklfjqzoijfmlsqkjdf moqisjefoizjefm liqzjofijqzd f un bon université mais eux ne prennent pas les etudes au serieux. Mais l'argent eux prennent ça tres tres tres au serieux, donc ceci, cela voila ceci cela nous vous souhaitons le bienvenu dans cette attablissement rempli des staticiens et ml kqjsdmflkj sqdmlfkjqsd mlfkjqsdm lfkj qsmdlfkj qmsdlkfj mqsldkjf mqlskdjfmlqksdjfpzijefôzije fmlqskdjf mlkzje foizqje fmlkjqzoefijzmeofijzmoeifjzoeifjoziefjzoeifjzoiefjm qlsdjfozijef zkljefmo iqsjdf izqje fmoizqjef oizqjemfoijzefijzm eofijzeofij moziefjqzomdfjoqsidjfqsodjfmqosidjflqskdjfmlqskjdfmlkqsjdflmkqsjdmlf qsjdmlfkj qsodifj qsmdklfjqzoijfmlsqkjdf moqisjefoizjefm liqzjofijqzd f e prennent pas les etudes au serieux. Mais l'argent eux prennent ça tres tres tres au serieux, donc ceci, cela voila ceci cela nous vous souhaitons le bienvenu dans cette attablissement rempli des staticiens et ml kqjsdmflkj sqdmlfkjqsd mlfkjqsdm lfkj qsmdlfkj qmsdlkfj mqsldkjf mqlskdjfmlqksdjfpzijefôzije fmlqskdjf mlkzje foizqje fmlkjqzoefijzmeofijzmoeifjzoeifjoziefjzoeifjzoiefjm qlsdjfozijef zkljefmo iqsjdf izqje fmoizqjef oizqjemfoijzefijzm eofijzeofij moziefjqzomdfjoqsidjfqsodjfmqosidjflqskdjfmlqskjdfmlkqsjdflmkqsjdmlf qsjdmlfkj qsodifj qsmdklfjqzoijfmlsqkjdf moqisjefoizjefm liqzjofijqzd f",
    date: "23 nov 2023",
  },
  {
    id: 2,
    image: "img/experience.jpeg",
    title: "Bonsoir à tous",
    contenu: "Ble ble ble ble ble ble",
    date: "23 nov 2023",
  },
  {
    id: 3,
    image: "img/team.jpg",
    title: "Salut à tous",
    contenu: "Blo blo blo blo blo blo",
    date: "23 nov 2023",
  },
  {
    id: 4,
    image: "img/news-image.jpg",
    title: "Gaga à tous",
    contenu: "Bli bli bli bli bli bli",
    date: "23 nov 2023",
  },
];

window.onload = () => {
  location.href = "#news";
  document.getElementById("loading").style.display = "none";
  if (listNews.length <= 0) {
    document.getElementById("news").style.display = "none";
  }
  generateCarouselItems(listNews);
  updateNumberOfNews();
  updateControls();
  document.getElementById(
    "years-experience"
  ).textContent = `Research Experience: ${
    new Date().getFullYear() - 2005
  } years`;
  //document.body.style.overflow = "hidden";
  //document.getElementById("news-add").showModal();
  // just to design the dialog
  // currentIndex = 1;
  // showNewsRead();
};

window.onscroll = () => {
  if (document.body.clientWidth > 1024) return;
  document.getElementById("nav").style.height = "0";
  document.getElementById("nav").style.overflowY = "hidden";
  document.getElementById("menu").src = "icon/menu.png";
  showing = !showing;
};
window.onresize = () => {
  if (document.body.clientWidth > 1024) {
    document.getElementById("nav").style.height = "fit-content";
    document.getElementById("nav").style.overflowY = "visible";
    document.getElementById("nav").style.flexDirection = "row";
    document.getElementById("nav").style.justifyContent = "space-evenly";
    document.getElementById("nav").style.padding = "0em 0em 1em 0em";
  } else {
    document.getElementById("nav").style.height = "0";
    document.getElementById("nav").style.overflowY = "hidden";
    document.getElementById("menu").src = "icon/menu.png";
    document.getElementById("nav").style.flexDirection = "column";
    document.getElementById("nav").style.justifyContent = "flex-start";
    document.getElementById("nav").style.padding = "0em";
    document.getElementById("nav").style.paddingLeft = "1em";
    showing = !showing;
  }
};
let showing = false;
function toggleMenu() {
  document.getElementById("nav").style.height = showing ? "0" : "100vh";
  //document.getElementById("nav").style.paddingBottom = showing ? "0em" : "1em";
  document.getElementById("nav").style.overflowY = showing
    ? "hidden"
    : "visible";
  document.getElementById("menu").src = showing
    ? "icon/menu.png"
    : "icon/close.png";
  showing = !showing;
}

function previews() {
  slideIsBeingUsed = true;
  if (currentIndex == 0) {
    return;
  }
  moveSlide(-1);
  updateNumberOfNews();
  updateControls();
}
let slideIsBeingUsed = false;
function next() {
  slideIsBeingUsed = true;
  if (currentIndex == listNews.length - 1) {
    return;
  }
  moveSlide(1);
  updateNumberOfNews();
  updateControls();
}

function topSecret() {
  location.href = "https://camillopande.onrender.com";
}

function clearForm() {
  document.getElementById("news-image").src = "img/news-image.jpg";
  document.getElementById("news-title").value = "";
  document.getElementById("news-content").value = "";
  document.getElementById("news-edit-image").src = "img/news-image.jpg";
  document.getElementById("news-edit-title").value = "";
  document.getElementById("news-edit-content").value = "";
}
function showNewsAdd() {
  clearForm();
  document.getElementById("news-add").showModal();
  document.body.style.overflow = "hidden";
  document.getElementsById("news-add").scrollTop = 0;
  updateNumberOfNews();
}
function showNewsEdit() {
  clearForm();
  document.getElementById("news-edit-image").src = listNews[currentIndex].image;
  document.getElementById("news-edit-title").value =
    listNews[currentIndex].title;
  document.getElementById("news-edit-content").value =
    listNews[currentIndex].contenu;
  document.getElementById("news-edit").showModal();
  document.body.style.overflow = "hidden";
  document.getElementsById("news-edit").scrollTop = 0;
  updateNumberOfNews();
}
function closeNewsEdit() {
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  document.getElementById("news-edit").close();
  document.body.style.overflow = "";
  updateNumberOfNews();
}
function closeNewsRead() {
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  document.getElementById("news-read").close();
  document.body.style.overflow = "";
  updateNumberOfNews();
}
function closeNewsEdit() {
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  document.getElementById("news-edit").close();
  document.body.style.overflow = "";
  updateNumberOfNews();
}
function closeNewsAdd() {
  document.getElementById("news-add").close();
  document.body.style.overflow = "";
  updateNumberOfNews();
}
function showNewsRead() {
  currentNews = currentIndex;
  document.getElementById("read-image").src = listNews[currentIndex].image;
  document.getElementById("read-title").textContent =
    listNews[currentIndex].title;
  document.getElementById("read-content").textContent =
    listNews[currentIndex].contenu;
  document.getElementById("news-read").showModal();
  document.body.style.overflow = "hidden";
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  generateOtherNewsItems(listNews);
  updateNumberOfNews();
}
function readOtherNews(index) {
  currentIndex = index - 1;
  document.getElementById("read-image").src = listNews[index - 1].image;
  document.getElementById("read-title").textContent = listNews[index - 1].title;
  document.getElementById("read-content").textContent =
    listNews[index - 1].contenu;
  document.getElementById("news-read").showModal();
  document.body.style.overflow = "hidden";
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  generateOtherNewsItems(listNews);
  updateNumberOfNews();
}
function updateNumberOfNews() {
  document.getElementById("number-of-news").textContent = `${
    currentIndex + 1
  }/${listNews.length}`;
}
function updateControls() {
  if (currentIndex == 0) {
    document.getElementById("controls-left").style.display = "none";
  }
  if (currentIndex == listNews.length - 1) {
    document.getElementById("controls-right").style.display = "none";
  }
  if (currentIndex > 0 && currentIndex < listNews.length - 1) {
    document.getElementById("controls-left").style.display = "block";
    document.getElementById("controls-right").style.display = "block";
  }
}
let currentIndex = 0;

function moveSlide(direction) {
  currentIndex += direction;

  // Ensure the index stays within bounds
  if (currentIndex < 0) {
    currentIndex = listNews.length - 1;
  }
  if (currentIndex >= listNews.length) {
    currentIndex = 0;
  }
  // Move the carousel by changing its transform property
  document.getElementById("carousel").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}

function generateCarouselItems(newsList) {
  if (newsList.length == 0) {
    document.getElementById(
      "news-controls"
    ).innerHTML = `<div style="height:40vh; width:100%; max-width:600px; display:flex; flex-direction:column; justify-content: center; margin:3em 0em; padding:0em 2em; background-color:#112e42; border-radius:20px"><h2 style="text-align : center">There is no news</h2></div>`;
    location.href = "#home";
    return;
  }
  document.getElementById("carousel").innerHTML = newsList
    .map((news) => {
      return `
          <div class="carousel-item" style= "background-image : url('${news.image}')">
            <h2>${news.title}</h2>
            <button onclick="showNewsRead()">Read more</button>
          </div>
        `;
    })
    .join("");
}

function generateOtherNewsItems(newsList) {
  if (newsList.length <= 1) {
    document.getElementById("other-news-list").innerHTML =
      "<p style='margin:auto'> No other news </p>";
    return;
  }
  document.getElementById(
    "other-news-list"
  ).innerHTML = `<div class="other-news-header"><h1> Other news </h1></div>`;
  document.getElementById("other-news-list").innerHTML += newsList
    .map((news) => {
      if (news.id != currentIndex + 1) {
        return `
            <div class="other-news" style= "background-image : url('${news.image}')">
              <h2>${news.title}</h2>
              <button onclick="readOtherNews(${news.id})">Read more</button>
            </div>
          `;
      }
    })
    .join("");
}

let direction = "forward";
function autoSlideMove() {
  setTimeout(() => {
    if (currentIndex == 0) {
      direction = "forward";
    }
    if (currentIndex == listNews.length - 1) {
      direction = "backward";
    }
    if (!slideIsBeingUsed && direction == "forward") {
      moveSlide(1);
    }
    if (!slideIsBeingUsed && direction == "backward") {
      moveSlide(-1);
    }
    slideIsBeingUsed = false;
    autoSlideMove();
    updateNumberOfNews();
    updateControls();
  }, 4000);
}
autoSlideMove();

function getImageFromDevice() {
  if (document.getElementById("fileInput").files[0]) {
    const reader = new FileReader();
    reader.onload = () =>
      (document.getElementById("news-image").src = reader.result);
    reader.readAsDataURL(document.getElementById("fileInput").files[0]);
  }
}

function addNews() {
  if (
    document.getElementById("news-title").value == "" ||
    document.getElementById("news-content").value == ""
  ) {
    showMessageDialog("Please enter all the informations !");
    document.getElementById("btn-ok").name == "";
    return;
  }
  showMessageDialog("The news has been added !");
  document.getElementById("btn-ok").name = "refresh";
}

function deleteNews() {
  showMessageDialog("The news has been deleted !");
  document.getElementById("btn-ok").name = "refresh";
}

function editNews() {
  showMessageDialog("The news has been edited !");
  document.getElementById("btn-ok").name = "refresh";
}

function sendMessage() {
  if (
    document.getElementById("contact-message").value == "" ||
    document.getElementById("contact-email").value == ""
  ) {
    showMessageDialog("Please enter your email and message !");
    document.getElementById("btn-ok").name == "";
    return;
  }
  alert("Your message has been sent successfully !");
  location.href = "#news";
  document.getElementById("contact-message").value = "";
  document.getElementById("contact-email").value = "";
}

function showMessageDialog(message) {
  document.getElementById("dialog-message-content").textContent = message;
  document.body.style.overflow = "hidden";
  document.getElementById("dialog-message").showModal();
}

function closeMessageDialog(refresh) {
  document.getElementById("dialog-message-content").textContent = "";
  document.getElementById("dialog-message").close();
  document.body.style.overflow = "";
  if (document.getElementById("btn-ok").name == "refresh") location.reload();
}
