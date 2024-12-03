//let newsList = JSON.parse(document.getElementById("php-data-div").textContent)
let newsList = [
  {
    id: 1,
    image: "img/team.jpg",
    title: "The research team reunited",
    content:`After time spent individually conducting experiments, collecting data, or exploring different aspects of a project, the reunion allows the team to come back together, reassess their progress, and consolidate their findings. It’s a time for reflection, where members can review the challenges they’ve encountered and discuss any new insights gained in their respective areas of work.Such reunions are critical for the collaborative nature of research. The coming together of diverse minds often sparks creativity and deeper problem-solving. Each researcher brings a unique perspective, based on their background, experiences, and expertise. These varied viewpoints can help refine hypotheses, adjust methodologies, and sometimes even lead to new directions that might not have been considered if the team hadn’t reconnected. In essence, it’s the intersection of these ideas that often leads to breakthroughs—be it in a medical discovery, technological innovation, or environmental solution.
    Whether it’s discussing new data, refining ideas, or exploring new avenues, the reunion is an opportunity to reinforce the team’s strength and push forward toward new discoveries and innovations.` ,
    date: "Lundi 2 Janvier 2024",
  },
  {
    id: 2,
    image: "img/why.jpg",
    title: "We have made a new discovery",
    content: `This new discovery marks a significant milestone in our understanding, opening up exciting possibilities for future research and innovation. The findings could have far-reaching implications, shedding light on previously unexplored areas and potentially transforming our approach to the field. As we continue to explore its full potential, it is clear that this discovery holds promise for advancing knowledge and driving progress in unexpected ways. Moreover, when a research team reunites, it creates an opportunity for mentorship and peer learning. Experienced members may provide guidance to less experienced ones, helping to troubleshoot complex problems or offering advice based on past challenges. It’s also a chance for junior researchers to bring fresh ideas to the table, encouraging a more dynamic, open-minded approach to the work at hand. The group dynamic plays a vital role in fostering collaboration, as it creates an environment where knowledge is freely exchanged and built upon.`,
    date: "Jeudi 28 nov 2024",
  },
  {
    id: 3,
    image: "img/experience.jpeg",
    title: "The evolution of technology",
    content: "The evolution of technology has been a remarkable journey, transforming every aspect of human life. From the advent of the wheel to the rise of artificial intelligence, each leap has reshaped societies, economies, and cultures. The rapid advancements in computing, communication, and biotechnology are now driving the next era, where innovations like quantum computing, renewable energy solutions, and immersive virtual experiences hold the potential to address global challenges. As technology continues to evolve, it will increasingly blur the lines between the digital and physical worlds, offering new opportunities for growth, efficiency, and connection .Ultimately, the new technology symbolizes the power of collaboration in advancing knowledge. While individual effort is important, it is through collective action, shared expertise, and mutual support that research can make significant strides.  Whether it’s discussing new data, refining ideas, or exploring new avenues, the reunion is an opportunity to reinforce the team’s strength and push forward toward new discoveries and innovations",
    date: "Samedi 25 nov 2024",
  },
  {
    id: 4,
    image: "img/research.jpg",
    title: "The job market statistics",
    content: `
    The job market in recent years has shown dynamic shifts, influenced by technological advancements, economic fluctuations, and societal changes. While some sectors, like technology, healthcare, and renewable energy, are experiencing strong growth, others are facing challenges due to automation and changing consumer preferences. Remote work has become a permanent fixture, reshaping workplace culture and creating new opportunities across industries. However, inflation, rising interest rates, and economic uncertainty continue to impact hiring trends, with many companies focusing on efficiency and skills over traditional qualifications. As we move forward, adaptability and continuous learning will be crucial for navigating the evolving landscape of the job market.`,
    date: "20 nov 2024",
  },
];
let currentNews = 0;
let currentIndex = 0;
function updateNumberOfNews() {
  if(newsList.length == 0)return;
  document.getElementById("number-of-news").textContent = `${
    currentIndex + 1
  }/${newsList.length}`;
}

window.onload = () => {
  location.href = "#news";
  document.getElementById("loading").style.display = "none";
  generateCarouselItems(newsList);
  updateNumberOfNews();
  updateControls();
  document.getElementById(
    "years-experience"
  ).textContent = `Research Experience: ${
    new Date().getFullYear() - 2005
  } years`;
};

function showNewsEdit() {
  clearForm();
  currentNews = currentNews;
  document.getElementById("news-edit-image").src = newsList[currentNews].image;
  document.getElementById("news-edit-title").value =
    newsList[currentNews].title;
  document.getElementById("news-edit-content").value =
    newsList[currentNews].content;
  document.getElementById("news-edit").showModal();
  document.body.style.overflow = "hidden";
  document.getElementById("news-edit").scrollTo({
    top: 0,
  });
  updateNumberOfNews();
}

function updateControls() {
  if(newsList.length == 0)return;
  if (currentIndex == 0) {
    document.getElementById("controls-left").style.display = "none";
    document.getElementById("controls-right").style.display = "block";
  }
  if (currentIndex == newsList.length - 1) {
    document.getElementById("controls-right").style.display = "none";
    document.getElementById("controls-left").style.display = "block";
  }
  if (currentIndex > 0 && currentIndex < newsList.length - 1) {
    document.getElementById("controls-left").style.display = "block";
    document.getElementById("controls-right").style.display = "block";
  }
}

window.onscroll = () => {
  if (document.body.clientWidth > 1024) return;
  document.getElementById("nav").style.height = "0";
  document.getElementById("nav").style.overflowY = "hidden";
  document.getElementById("menu").src = "img/icon/menu.png";
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
    document.getElementById("menu").src = "img/icon/menu.png";
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
    ? "img/icon/menu.png"
    : "img/icon/close.png";
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
  if (currentIndex == newsList.length - 1) {
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
  document.getElementById("news-image").src = defaultNewsImage;
  document.getElementById("news-title").value = "";
  document.getElementById("news-content").value = "";
  document.getElementById("news-edit-image").src = defaultNewsImage;
  document.getElementById("news-edit-title").value = "";
  document.getElementById("news-edit-content").value = "";
}
function showNewsAdd() {
  clearForm();
  document.getElementById("news-add").showModal();
  document.body.style.overflow = "hidden";
  document.getElementById("news-add").scrollTo({
    top: 0,
  });
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
  document.getElementById("news-edit").close();
  document.getElementById("news-read").close();
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  document.body.style.overflow = "";
  updateNumberOfNews();
}
function closeNewsAdd() {
  document.getElementById("news-add").close();
  document.body.style.overflow = "";
  updateNumberOfNews();
}
function showNewsRead() {
  slideIsBeingUsed = true;
  currentNews = currentIndex;
  document.getElementById("read-image").src = newsList[currentNews].image;
  document.getElementById("read-title").textContent =
    newsList[currentNews].title;
    document.getElementById("read-date").textContent = newsList[currentNews].date;
  document.getElementById("read-content").innerHTML =
  newsList[currentNews].content.split('\n').map((line, index) => (
    line.trim() !== "" ? `<span>${line}<br /></span>` : ''
  )).join('');

  document.getElementById("news-read").showModal();
  document.body.style.overflow = "hidden";
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  generateOtherNewsItems(newsList);
  updateNumberOfNews();
}
function readOtherNews(index) {
  slideIsBeingUsed = true;
  currentNews = index;
  document.getElementById("read-image").src = newsList[currentNews].image;
  document.getElementById("read-title").textContent = newsList[currentNews].title;
  document.getElementById("read-date").textContent = newsList[currentNews].date;
  document.getElementById("read-content").innerHTML =
  newsList[currentNews].content.split('\n').map((line, index) => (
    line.trim() !== "" ? `<span>${line}<br /></span>` : ''
  )).join('');
  document.getElementById("news-read").close();
  document.getElementById("news-read").showModal();
  document.body.style.overflow = "hidden";
  document.getElementById("news-read").scrollTo({
    top: 0,
  });
  generateOtherNewsItems(newsList);
  updateNumberOfNews();
}

function moveSlide(direction) {
  if(newsList.length == 0)return;
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = newsList.length - 1;
  }
  if (currentIndex >= newsList.length) {
    currentIndex = 0;
  }
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
          <div class="carousel-item" style= "background-image : url('${news.image}')" onclick="showNewsRead()">
            <h2>${news.title}</h2>
            <button tabindex="-1" onclick="showNewsRead()">Read more</button>
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
    .map((news,index) => {
      if (news.id != newsList[currentIndex].id) {
        return `
            <div class="other-news" style= "background-image : url('${news.image}')"  onclick="readOtherNews(${index})">
              <h2>${news.title}</h2>
              <button onclick="readOtherNews(${index})">Read more</button>
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
    if (currentIndex == newsList.length - 1) {
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

async function addNews() {
  if (
    document.getElementById("news-title").value == "" ||
    document.getElementById("news-content").value == ""
  ) {
    showMessageDialog("Please enter all the informations !");
    document.getElementById("btn-ok").name = "";
    return;
  }
  const formData = new FormData();
  formData.append("title", document.getElementById("news-title").value);
  formData.append("content", document.getElementById("news-content").value);
  formData.append("image", document.getElementById("news-image").src);
  showWaitDialog();
  // await fetch("index.php", {
  //   method: "POST",
  //   body: formData,
  // });
  closeWaitDialog();
  showMessageDialog("News added !");
  document.getElementById("btn-ok").name = "refresh";
}

async function deleteNews() {
  const formData = new FormData();
  formData.append("id", newsList[currentNews].id);
  showWaitDialog();
  // await fetch("index.php", {
  //   method: "POST",
  //   body: formData,
  // });
  closeWaitDialog();
  showMessageDialog("News deleted !");
  document.getElementById("btn-ok").name = "refresh";
}

async function editNews() {
  if (
    document.getElementById("news-edit-title").value == "" ||
    document.getElementById("news-edit-content").value == ""
  ) {
    showMessageDialog("Please enter all the informations !");
    document.getElementById("btn-ok").name = "";
    return;
  }
  const formData = new FormData();
  formData.append("id", newsList[currentNews].id);
  formData.append("title", document.getElementById("news-edit-title").value);
  formData.append("content", document.getElementById("news-edit-content").value);
  formData.append("image", document.getElementById("news-edit-image").src);
  showWaitDialog();
  // await fetch("index.php", {
  //   method: "POST",
  //   body: formData,
  // });
  closeWaitDialog();
  showMessageDialog("News edited !");
  document.getElementById("btn-ok").name = "refresh";
}

function sendMessage() {
  if (
    document.getElementById("contact-message").value == "" ||
    document.getElementById("contact-name").value == ""
  ) {
    showMessageDialog("Please enter your email and message !");
    document.getElementById("btn-ok").name = "";
    return;
  }
  let name = document.getElementById("contact-name").value;
  let message = document.getElementById("contact-message").value;
  let subject = "Message from the website";
  let mailtoLink = "mailto:josephkalemba@n-generation.org" + "?subject=" + encodeURIComponent(subject) + 
  "&body=" + encodeURIComponent(message);
  location.href = mailtoLink;
}

function showMessageDialog(message) {
  document.getElementById("dialog-message-content").textContent = message;
  document.body.style.overflow = "hidden";
  document.getElementById("dialog-message").showModal();
}
function closeMessageDialog(refresh) {
  if(document.getElementById("btn-ok").name == "refresh"){
    location.reload();
  }else if(document.getElementById("btn-ok").name == "go-to-news"){
    location.href = "#news"
    document.getElementById("dialog-message").close();
  }else{
    document.getElementById("dialog-message-content").textContent = "";
    document.body.style.overflow = "";
    document.getElementById("dialog-message").close();
  }

}
function showWaitDialog() {
  document.body.style.overflow = "hidden";
  document.getElementById("dialog-wait").showModal();
}
function closeWaitDialog(refresh) {
  document.getElementById("dialog-wait").close();
  document.body.style.overflow = "";
}
function getImageFromDevice() {
  if (document.getElementById("fileInput").files[0]) {
    const file = document.getElementById("fileInput").files[0];
    const reader = new FileReader();  
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const compressedImage = canvas.toDataURL("image/jpeg", 0.5);
        document.getElementById("news-image").src = compressedImage;
        document.getElementById("news-edit-image").src = compressedImage;
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
function getBase64Size(base64String) {
  const base64Data = base64String.split(',')[1];
  return Math.round((base64Data.length * 3) / 4);
}
function goToPhone(){
  window.open("tel:+243816915107", "_blank")
}
function goToEmail1(){
  window.open("mailto:josephkalemba@n-generation.org", "_blank")
}
function goToEmail2(){
  window.open("mailto:jkalembam2@gmail.com", "_blank")
}
function goToSkype(){
  window.open("skype:joseph.kalemba2?chat", "_blank")
}
function goToLocation(){
  window.open("https://maps.google.com/?q=-4.335027140400627,15.315036905642959&t=k&z=21", "_blank")
}

let defaultNewsImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAHJAmQDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAECAwQGBQf/xABOEAACAQIBCAUJBAcGBgEEAwAAAQIDEQQFBhIhMUFRkRNSYYGhFBYiI1NicZLRFUJUsTJzgpPB0uEHVXKDovAzNDU2Y6OyJGSk8SVDdP/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAtEQEAAgEDBAEEAQQCAwAAAAAAARECAxIhFDFBURMEIlJhkQUygfBCoXGx8f/aAAwDAQACEQMRAD8A8OkNIEhpH0HOQkNIENIMmkNIEhpFZCQ0CGkGQkNIENIMhILDGkVCsFigsEtNgsVYLAtNgsVYLAtLQrF2FYLabBYdgsCysFh2CwLKwWHYLAsrBYdgsCysFh2CwLKwWHYLAsrBYdgsCysFh2CwLKwWHYLAsrBYdgsCysFh2CwLKwWHYLAsrBYdgsCysFh2CwLKwWHYLAsrBYdgsCysFh2CwLKwWHYLAsrBYdhpAsrBYqwWCWmwWKsFgWmwWKsNRuwWlRbZdrIdgaCXabCaKE0BImU0IKliZQmgqWhMpiaI0loTRQmg0mwDsAVmkNCQ0RqTSGkCQ0ismkNAgQZNIaBDSCBIYikVkJDAYQDAaQZFgsCKsVLTYLFWCwLTYTRdgsC2TVmBq0Q4tBqJSA7BYhZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAOwWBZAVYajxBZKI7FWCxWbTYLFWCwLTYLFWGogtCiVbcOwBLS0JooTQCaENoGg0kRQiKloRQmgqWhDBoNJaEymSyKVgGAaZIaQkUkGjSGkCQ0GQhpAhoMyEhghorMhDQDSCBFCSGEA0CGisgYDQQ1ZjsJIa1FQWCxW0dgzaLBYuwWBbFwa1omx0WJlC+tCmoyYWCxbi07MViNWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsFgWmwWKsOwLTYaTb2Fxpt7dhaikrJCknJCil8R2LsFi0zaLBYuwWCWiwWLsFgWlIBiAViWi2JoKmwhtAwqWhNFCIpNCGxBpLBjaEyKliKEGktAxsTIqQGAacyk12mkZp6nqZjsAjvMW6UNHPGTjsfcaxqrZJW7SuU4y1Q0hJp607jQc5MaEhorJjQIYQAgRSKgSGJFIMhIEA0ioaQIEhoIEWnxJQ0iorUwsJDTa2hkWCxaaY7FS2binqaIlS4G9gsKIypytNamhWOtxT1Gbo8PEzTcZsLBY06OV7KLfwH0NTqPkKW2QWNehqdR8iZQlF2krPt1Ci0WCxVgsFtNgsVYLAtNgsVYLAtNgsVYLAtNgsVYLAtNgsVYLAtNgsVYLAtNgsVYEm9gLTYLGqpSe3YaKkkKZnKIYKm5GkaaRrYLFpmc7Z2CxpYVrFpm0WCxYmFtNgHYCCRWKaEFKwhhYKkTKERSaJaKYNBUtCGDQVLEyhMjSRMpoQVLQhTqRjqb7kYzqyezUiOkYzLWUlHazGdVv8ARVu1kNt7REdccIDcm9rAei3uYEaqAkntBwT2OwIaCocWtqEbIHBPdZ9gLZJtO6bTNY12tUlftRDptbNZNmtTCTES64zjJan3Fo4kaQrSjtd12ltynT9OpDM4Voy1N2faaqz2FcpiYCGgQysgYIaKyENISKQQ0AGlOHpXlF2LCTNIsaU6bm9tjbRp9R8gUae6D5GtrnOSfJ31h+TvrIu0OoxWh1ZFqGN0p8nfWGqD6yKtDqsdodVioTdLF+i7ME0za1PqMNGHUYpdxRpaSvcfQ9o0obotD9HqsvDNyI03F6mP0uKF6PVY1o9Vhkmp31SXejOpQnV/Sku5Gto8B2jwFLGUw46uHdOOlpX7DGx9Fxg9seYuip9QzOLpGr7fPsFjsqUIPYrfAjydbpPkTa3GpEuYDo8nfWQvJ3xFSb4YWCxv5PLig8nfWFSu+GFgsdPk/vB0Ed7FSm+HNYLHX0MOHMpQitiG1PkhxqDexMpUZPgddhWLtT5JYqit7LUUtiReriJ2FM7plNgsVfsJuygEMViBMVihWCpsAxBSaBoYNEVImhtAFSJlNCIpNCGwaCpYmihMipaAbRE5xjtfcGoAnZbTKde+qK5mMpOWttszbrGE+W060Vs1sxnUlLa+5EsFCUti7yOsYxCQs27JXNVSS2u/Yi0klZJINWyVJvbqGoRWxa+LLYgoAQAYIpEpplIjSkNCQ0VFIGk1rVxIaCJdJPY7djIcJR2rVxN0NAtzbyoTlF6mzZ04y2qz4oh0Wtadwd2kMRuku9G8JxlsfdvOFpp2aaBbRblOnEvooaOKFecd91wZvDEReqSaZq3LLCYboYoyUldNdxVna9mVykjppVZyeirfFmAIsTTMxbs9ZxXiO0+MfE5E3fW2b6VI3blONNPT4x8TN1ZqVrLgTUcfuMhdotYh1WnxXiFp8UQnTexNlWh1WVhVp9gen2E2h1WO0Oqwh+lxXiO0+wm0ODC0ODCK9P3R+n2E2jwYWjwZRXp9gelxXIm0ODC0ODCCTlFX1E9LLgOejbUrEWJbUQp1G9otLsFYCHCtPsDS7CRlD0lwDSECQD0g0uwNF8GFmtqYBdiu+IAFJt8QACBWCw7CsArBYYWCpAdgsAhWGBFSKxXwKUVo64u4W2bQimrOwmgpNEtFA0RUiaGwYUiWKdWEd/IxniJP9HUZmW4xmWzaWtvV2mU68VqWswlJyd22SS3aMI8qnWlLVey4Ize00VOT3W+JSoxW13I6RFMEm9STb7C1Sk9rsbpJKySQmKaQqcY7rvixsbEwpMllMlkUmJjZLaW1pAAEOpHiwDVMnFramhJtbGdKE6cZbu9ETf7ZKdtqLUk9jB0H9137GZShKO1NdoWJiW6GjBSa2MtVeK5FJhshoiMovYy0GTQ9wkNFRVk1Zq6IdGL2an2Fo3oQjp3qwk49iYiLZyy2xbidGS2Wa7C6eHnOjOomlobU9p9LQw/UlyZNSnRdOSjCTb3WZrY5fNfaHBhqUq1VRjLRe27Z9GNCuqag5wa23OahQgql5wml2J7TKVKum9HTauI4hM/uniW85xpVHCb1rei4tS2NHLTVNRqKupdJ925EYVLXjGXIlpsh3IaOOOIqR26/ibQxMX+krfAtw5zpzDdDJhUhLZJfAs05zwqE3B3Vu8vppcEZjLbMxEtOmlwRqtLijmRpTs36Vy2xMNvS7PEPT4on0ODHaHBmmTtLigtLiheh2h6PBhFelxQWl2C9HtC0eDCFU0tHXsMwYyNwQWCwwFYLDsOwDjDSVyoxcXdMhF+jbayszZyco2bsQ5t6gVr69gnbdsBRCsVYLEaTYLDsACEOwWAVgsOzCz4EVIrFWsAEiKEFCbTujWMpS16jKwWaEE8rnTlJ3ujOdNxSb1hGcVL0tLuRNed42pRlf4CaaiJuiZnKrCO18jGSqy2xmZyTT1p34M5zLtGENZ4h7IrvZjOcpbWxqEnut8SlSW98icy6xjEMWNQk9i5m6jFbEgFNslRW937EWoqOxJFuEuq+RLTWppr4oUsTBMTGJhSYmNktpbWl8SNBiIlWitibMpVZPZqXYRabNpK7aRnKrFbLsys5PVdvmXGhOW5L4heI7olUk99vgRrfFs644eK2tvwLUVHUlyFJ8kR2cipTf3QOsC0z8kskNAhojIKWwSKSbepcisodKEt2vijOWGf3ZdzOlxktqAUsZzHZxypTjti7cVrFGUlsbO5CdOEtsV8RTcavtzRrPeuRpGpF7Hb4jlhVtjLuesylh6kd112EWMsZbrad1XEVaLUZKDe25yYJUdGXTKelw12Ot+St64zfczpjHDhqTE5VMFDF1JyUVGGt21lTxVSnNxcYNrgY1+hsuhjPSvr1Mz0ZPXoyd99mJmUjDCeadCxs+rEaxs+rEqMMPoq8ZbN9wXknb4l59sfZ+LnqSdWTlJK73HTQr1JtU4qGzb8BuOGSu4u3amC8lurbd1riIMsomKpjPJ9SU3LTjr1kyyfUjFy046tdjq9T7/iE1ScWkpt7tpZxhiNTJ8ouFWcdkjd0m9sG+4l0ElfWvijnUvRxJwxMl+kr/A2jiIPbqOZ0nuaZOjJbUy3MMThEu+M4y2SRtSvpaj5SOnBziqnpylbguJqMnLPT4fR9Ls8R+l2GXS0ve5MfS0ve5M3bzbZ9NLS7A9PsI6Sn73Jh0lPfLmW0qWnpdgel2EXhbU7vsJu+0FE9ruAWGRRYAGAgsOwFQrBYYAArDHYCbBYqwgEA7AFKw4x0tjBWvrHKcIq+sgbbiTpvgYust2sSqyb/AEdXYLajCWrbbuyW0tr5luVJ7b91yHChvi+TIQh1YLfyCnJ1W1DxK0KHVfJjUaC1pS7rk5a49EqVVSupQL9b7hNqPveIkqPveJTuv13uB67jAn1Xv+IvVe/4lP8AC7VeMPE5sQpaa07X3WNfVe94iao3u1J/G5Ji28J2zdORiZ16FDqvkxaNDqvxM7Xb5Y9OQqF9ONrXurXNK0Y3XRxla2vaYu6+7LkZnh0iYyh3+t9zxMqtGpVtdwVjGhNNy6VTXDaRi5X0egdTt2mpnhxjGYyqFVqDpU9OUla5ySrJbE2Po69TU4za7dg1hZX9KVjE89noiYx/uljKrJ77fAhRlJ6k2ztjQpx3XfaXa2pavgSidWPDjjhpva9FczSOHgtutm7AtMTqTKFFR1JLuQmWk3s8BNNOz8QloYmNgFSAwIrJFIlFwtpLSvbsI3JI7KGHqQcZxce8fR4bg/EtdCla8vhrOkY04ZZ32XUhVqQ0W4Jdhj5HPrI19T1p+IXpcZ+JqYiXOMpjszWDl1l4inh5Qi5XVkbeq4y8Qaova5d9ybYN8uM6IYeUo6V1Zl6FDg/EpdEtSv3XEYk5+lU6dSmrJxs9esVStOm7NLjqD1fGXiDjRet3b7bmv/DF83JxlXlHSiqdu24//qf/ABeJFTRUfVt9xmnU4si92/8A9R/4ubMYYWqpqTlC6d9TNrU5Rs3LxJ6Kjxn8zFEZ1/8AGko1pRcXoa/icujPC1FJ2badjfoqPGfzMmVLDJ+mp346xMLjnEceGlKpVqR0koW7TT1vCHic8Xhoqyc0uzSOavXUarVOUtH4sXXcjDdPD6Prvc8SakKtSGi3BJ8LnHOvBwhoTnpW9K99prh5QlBucpN94uJJwnGNzOrTdKWi2r7dRJ1Sjh2m7Scvg7nK01tTXxMzDthlugNJ7UmXQn0MnKK12trIANTETxLvhKtOCklBLcivXf8Aj8TCjKiqaUpSUuF3/A0bopXcpLmbh48oqeya2Iq0pWcYvfdHPWxE6sdGSS36iq7g53pttW1tt/xMzMu2GnFWhNreWqklskwsnuQWXAjU4qVaa+9zKVefZyM9FDt2l5ZnBqsRLekUq76qMLdoy3LPxt+n90fTe6c9hi5Z+Nv03u+JdOTqOyWw5km3sdt9jqSorX6XiWGMsaX0cvdGlUWzRIvS4y8QvS4y8SudSmtOcZa7dxj0suJu1Rb138RaNDg+TJy3FR4YOpJ/eY4RlVlZPXtNtGhwfJgo0NqT7rimrj0zhXlTjo2WoU8TKUbWSvqNNGhwfJho0OD5MVJ9vemaw02r3XE2pwqQjopwt2itRSsnPxC9LjLxLSTMyv1vueIvWe54kXpcZeIXpcZ+ISl+t9zxF633PEm9LjPxF6rjPxCr9b7niHrfc8SL0uMvE+hhMi4jG4eNehG9OTaTc2r2dthjPUxwi8pprHCcpqIcPrfc8Q9b7nifU82sb1F+8F5t43qL94cuq0fyj+W/hz/Gf4fL9b7niHrfc8T6bzZxj2wX7wXm1i+p/wC0dVo/lH8r8Of4z/D5nrd2hzYvX/8Aj8T6bzaxnU/9o1m3jI7IL94TqtH8o/lfhz/H/p8r1/8A4+bD1/8A4/E+t5vY3qR/eC83sb1I/vB1Wh+cfyfDqfj/ANPlrpN+jcPT7D6bzfxvUj+8B5v43qR/eDq9D84/lPg1fxl8z0/d8TKdKc5Xuj6/m/jepH94DzfxvUXzk6vQ/OP5ajQ1Y/4y+N5PLihPDy4o6sTh/Ja8qNW6nG10m2ldXMX0fF+J3jblFw5zOUTUsvJpcULyaXWRr6vi/EH0fGXiWoXdLBVJUW42Wozq1HUld2XwOlxovc+TMKsI6Xq07GZiabxmLYsTKaaJZl0ggACKzRdO/SRttuQhoNy+mul4QGul9w5cPOLv0k5dms3To9efNnWJt5coqaap1fcC9X3DNOl15+I06XXn4lZaes9wd6vuGSdLrS8R3pdeXiEaet9zmHreEDO9LrS8R3p9aXiEaes90PWe6Ren1peI70+tLxKi/WcID9ZwiRen1n4hen1n4hF+s90frOCIvT6z5sL0+swi/T93xD0+wm9NfeZFSSVtCT7RZEW39PsOPE0I1Kl5fpdhak98nYc7Od4vVxZmeW8bxlz/AGdJq8ZrvOnD0a9CnoLo32mkNDR2si7vtdhUQTqZZcStvEJN6NPja5w1sXKrZOKVuB9BuDT9J7DBwi9sUJiTDKIm5hxKrxRSnHjY6Hhqb+7bvJeEjuk+8zUu/wAuKKdRRkpJq6d7M3nipTg46KSeq5i8JLdJd4nh6i2LkXmEmcMpuQAujqrbGX5i9JbU+8je6F3GQpMal2A3QoBJhcpcGO4rgC4MuEXUkopq74mZ10oUNCLd9K2u1ywxnnGMNKVOrSi4rQa262X633PEj1XXnzZhWk1P1cpuPa2a7PNEbpdXreEPEPW+54mFOVNwWlOelv1s09V15c2GZil+t9zmxet9zmyfU9afNi9T1p82Wxfrfc5sPW8IeJHqetPmwvR68+bAv1vCHiL1vueJF6PWlzY1Gm9jn4kFet9zxB9L7nNi6OHWlzDo4daXMFwPW+5zYPpeEA6KHWlzYujhf9KXzMFwH03CmL13CBSUVvYejxKWj1zdkqZ73A0Xh8FRpNK8YJO3G2vxuePyXRjiMo0Keu2km12LW/yPbXPh/wBW1OccP8vq/wBPwuJyNs+NnTlapkjJTr0HHppTUYaSuuL1fBM+uzw+fNWWMypgMm03duzaXGTsvBeJ8rQxjLOL7Po5cQ9TkPEYjFZIw+Ixbj01WOk9FWSTbtq+FjoxuJjhMHXxEtlKDm+5XKpU40aMKUFaMIqKXYlY+Dnvi/J8gypp2lXmoL4LW/yt3mMY36lR5lqeIceSMt5UxmQ8pY6rODlQi+itBJXSu/jqsd2aWVsTlbBV6mLlGVSFTRTjG2ppP87kZGwPQ5nOi16dahOcu1yTa8LHxMzcoUsn5NylXrO0aWhK29tppJdrdkenLHHPHPbHliLiYt9nOfL1fAVqGCyelLF1Wm01eyepK3Fv8u05c4MtZRyXHA4WnUpzxlWLdV6CabbSSS+N13GeamCq5QxtbLmNV5Tk1ST2X2NrsS1LvPmZXqYrKGd1SWBpKtUw0koReteja73ar3Lhhhu2eu5MzVvp9Pnj7Cl/6/qfYyHLK0qdaWV4xjO6UIxUdltb1N9nI+N5dnb+Bp/Kv5j1NB1Ogp9M06mitOysr2127zz6+VY1Uf4dMIuWgnJJN3skrtibOLK9dUMnVpX1uOirbbvUeXSx35xjHlvPLbjOUvK4mrUr4mpVtH05N91zL1nCPiTeHWkHq+sz9zjG3GIh+Zmbmz9P3fEPWcIkN0+u/EWlS675lso5yqQjpWjq4EQrTm7KK1a9YqjpuDSk2+Bz61r/ACMzlTpjjEwurVc1ZrtMRsTMOscJAYBXKq73x5MtVYvbdfFHMhoy9c4Q+hh8SqTejZ3O+MqsoqWjBX17T4ai+D5H06U8PGlFSrTTtr1tWZ0xl5NXTiOYdd6vCHMyqYidOWjKK46jCvXpRp+prSc+DZzdPJ/pK/bcs5MY6UzzTv8AK31VzBYqT+6jiVWL2potTi95ndJOlEeH0k6vCPMfrOEOZy0KilK05u3Yze9Pry5nSJtwyimi6ThEPWcIGd6fXlzHen15cysrvU4R5sd6nCJnen15cwvDrsJTS9ThHmF58I8zO8OvId4deQKW9OSatHZxMZ03B6/AtypxTbm7d5yzxLcnaK0b6r3uctTUxw7uunpZZ9mqKOXp5cIj8onwRz6jB26bN9GGnorUhyjOUbaj5yxVRbLFeWVOEfH6l6nBz6TUdnRS23RBzeWVOEfEXlU+rEdRgvS6jrQzi8rqcIj8rqcIjqMDpdR2IZxeV1OEeTDyyp1Y8h1GB0mo7hnD5ZU6sOQeW1OrDkXqcE6TUd2jF7Ypk9FT6iOPy2p1Ycn9R+W1OrDl/UdRpnS6rr6Cn1ReTU+DOXy6r1Ycv6h5dV6sOTJ1GmdNrOryaHFh5NHdJnL5fV6sOT+oeX1erDk/qOo0zptZ1eTLreB1QjKMElY+Z5fV6sOT+oLKFZboeJeo00n6XWl9TX2Ck2rprcfM+0K3CHiH2hVf3YeP1L1ODPRarsp0FGaknvOjXwPl/aFXqQ8fqP7RrdWHj9SdRprl9Jqy+nr4BrPl/aNbhDx+o/tGtwh4/UvU4M9Fqvpa+CDWfM+0K3CHj9Q+0KvCHJ/UdTgvRar6WsNZ837QrcIeP1D7Qq8IeP1HU4HR6r6Wvgha+B87y+r1YeIvL6vCPiTqcF6PUfS18EDvwPm+X1eEfH6h5fV4Q8fqOpwOj1H0dfANZ87y6rwj4/UPLqvCPiOpwOj1Hq82qLliKtZrVGKivj/+l4norngMDnHi8DSlTpUqDUnduUXfwZ0ed+UPY4X5ZfzHwvrNPU1tWco7PrfTYxpacYz3e3bPzjG4yvDO2rlB4KrXhSqWhGzSaSsnez4XPoed+UPY4b5ZfUPO/KHscN8sv5jlpaOppzPF275ZRLeOeOLnOMVkWreTSV5vf+yY54wr5QytgcDTpz0VbSkotpOTS8EvEXndj/Y4b5ZfzC87sf7LDfLL6mo0ssct2ONf5N0TFTL2CpxjRVKKSio6KXBWsfmWTck4zG45YLQq06Upp1JOLSSV9evfrdvifd87cf7LDfLL6i87Mf7LD/LL6mdLT1tOJqO65Tjk9W+jwGAapQtToU3oxSvqS1I/P8i5RxOS8ZXxM8n1q9SsrNu8bXd3ud7ux9Xzsx/ssP8ALL6i868f7LD/ACy+pNLR1MImMsbv9k5Yz2l1UM68XXr06SyRUTnJRTc3ZXdrv0T09zx3nXjvZYf5X9Q86sd7LD/K/qctT6XPL+3Gv8t46kR3l7C58DObFdHCjRW2Tcmuxal+b5HzvOrHeyw/yv6nHjMdWyhVVasoqWjZKKdlb4vtPR9B9Hnjrxll4ef6vVidKYjyac2rpLWZOvKLs4oanTUbObXFHNOpHSdr7T9LM0+Njhc9mzxDaa0dpgyHV4LmQ6knwRicrd8dKWrJbS2sxcpPa2SzNukaTV1Irfcl1VuRkJi2404W6z4IDICNbIYI1ot9NDRXpaSsnses1dOD+7yDoY3um18As6kTDsq46pRqaE6cbrhLUc2JxLxDi3FR0b7NdyJUnJuTndve9bF0MlstzNTMy5444Rz5SikHRyX3WFmtqa7jLrcGholFII3w9d0ZOSinfVrOqnjJ1JqMaau+LPno1ouKqxcpOKvra2o1GU9nLPTxnmYfUvW6sPm/oNOrvjH5v6GOnQ9vL5mNSo+2n8zOtvFOP6bXqdWPMPWdWPMx0qPtp/Mw0qPtp/MxabW3rOquY/WdVczHSo+2n8zDSo+2n8zFptRjJyUYxdlfXqZxmlaWlUk020tSu7kHzNbPdnMvq6OGzCIIBiOTsAAYCAYgABiAAAAAAGAgAAAAGAgGIAABgIAAAAYgAAAAAAAAGIAAAAAAYCAAAAAAAAAAAYgAAAAAAAAAAA1o13Sbdk7reZiZ6vp4q5cNWIniXZPEVIRjJwVpK+04pycpOTSu3eyG5NpJt2WxN7CWemZtxwwjEmSyrN7E2GhJ7EyOlwzYma9FJ7lzDoXvaFG/FixM36Fb2HRRX/7FJ8kOYDq0I9VcgJR8kM009jQ0cSKUpLZJrvFtTpuxFHIqs195lKvNcH3FtidOXUho51iHvin3lrELfHxDE4ZNtFPak+4XRxe4hV4PbfkUqsH97mVKyg+ijuDoVul4FKcHski01xDO7KGfRS3az6KdW36ENnW/ocaOtOnZenLmbx4ctTKZ7qTq9SHzf0C9bqw+b+gr0+vLmF4deXM243+jvW6sPm/oRWqVIUm2ordqlrK0qfXlzObFzTajGTa2vWctXLbhMuujjvziKcx6jNvNrC5WwEsTiataL03GKptLZ8U+J5c/Qsxv+hv9dL+B8x9Z5/OTNr7JhHEYWc6mGeqWna8H3bj4WGpKtiaVJuynNRbW67P0vC1aOVcDisJXnCc1UqU6kE9cVpNR1fC2s8FLAV8m5co4evCSca8dGTVlNaW1GY7q+hnRkDC5Ho0J4apWl0knFqo0/wAkjXNrNrC5VyfLE4mtWjLpHFKm0tStxT4n0P7QP+Uwf6yX5HVmP/0J/rpfkiwS4JZu5txk4yyu007NPE09XgfMy9kvJGBwcKmTsf5RVdRRcemhO0bPXZLsRxY3JWUZY3ESjk/FOLqSaaoys9fwOLEYXEYVqOJoVaLlsVSDjfmSB7GGZ2T6+T418PiMTKdSlpwblGzbV1uPEyi4ycZKzWppn6JmZjFiMhwpOSc6EnBq+u21fn4Hj8u4CpRzgr4enTk3VqaVNW26WtW47bF8nh6LAZl4SrgaNTFVcRGtOClKMJRSV92w8hj6CwuPxGHi240qsoJva0nY/VamKoUcTRw05pVKqehG+2x4DPLCPDZcnUUWoV0pp7r7H/vtBB5sZAp5Z6eeInUhTppKLg1rk/iv93PmZWw1DB5UxGGw05TpUpaKlPbdbd3G57rNHDrB5vxq1bQ6Vuq3LVZbnyVz87qTdSpKcneUm232ie5BH1sjZu4zK1qkUqWHvZ1ZfwW1/l2nzKFKVevTow/SqSUV8Wz9RxFSlkXIspQitDD0rRjxe7mwj4VXIubWSIxjlGrKc5q605Svyh/EinkvNXKT0MJiOim3ZJVHFv4Ke08o443KmJqVY062JqyelNwg5Pw2F/ZGU/7uxf7mX0Cry3kuWSMoPDSqKotFSjJK10+zuPTYbNDJjydSxOKxVeGlTU5y04xirq+9ajyGMjioVVHGqtGqopJVk9JR3bdx+i4ynOrmlKnShKc5YWKUYq7epbh4Ty+N5vZtf3x/+TT+h53K2DwmHyp5PgMR09F6Np6SlrfatRn9kZT/ALuxf7iX0OejFxxUIyTjJTSaa1rWIWXuY5j5O0VpYjFOVtbUo2v8p5PLmSKuSMa6M3p05a6c+svqfoOXsXPAZNeKp7aU4NritJJrkcOcmHp5YyBKtg7YicGp03T1t67Nauy+rsIPLZr5Fw+Wa9eGJqVYRpRTXRtJtv4pnBlHBxwuVq2EpybjCpoRctp6HMBNYrGpqz0I6u9nx8tf9zYn9f8AxL5Tw9NLMvJVKk6lfF4iEYq8pOcYpc0c3m9mz/fH/wCTT+h6HLtOdXImLp0oSnOVNpRirt9x+cfZGU/7uxf7iX0IqstYXCYPKE6OBr9PQSTU9JS124rUemo5p5Jjk6hisXjK1FTpxlKTqQjFNrtR4uUXGTjJNSTs01rTP0DLlCriM0KFOhSnVnoUrRhFyexbkUckM08jYuE1gspTqVEtsakKiXxSR5vLORcVkeqo10pU5N6FSOyXduOzN7JeU6WW8LU8kxFGMZ3nOdNxWjv1tb1qPs594rDywdLDRqQlXjV0nFNNxVntW7aiSQ8SeuyJmjh8bk2licZUrwnV9KMabSSju2p/E81k3CSx2UKGGin6yaTtuW98rnvM6cp/ZWTqVPDyUa0px0Ip61FO+zhqS7yo8jnNkmjkfH06GHnUnCdJTvUave7W5diMMh4TBYzH9FlDE+T0dFvT0lHXwu9R6jO2hHKmRcPlHCrpOj9JuOu0Xt5NfmeHEK9rQzXzfxFTo6GU6lWb16MK9OT5JF4jNLImFSeJx9aipOydStCN+aPi5lf9fh+rkfZ/tA/5XB/45fkJIfFy/kvJOBw1OeTsf5RUlO0o9LGdlbbqR15RzawmEzc+0YVa7raEJWbWj6TSeq3bxPLn6Dl3/sh/qqX/AMog8vB4XDVsZiIUMPTdSrN2jFbz1mEzVwOAwvlOW8QtmuCloxT4X2t/AWYOEi3icZJXkrU4vhvf8DDPvGzqY6lgoy9XSiptcZPj3fmJmiOXZQwmaGMqdDQko1JaledSOvs0tVz52cGas8nUnicFKdahFXmpW0oLj2ru1Hmz9KzbxLylm/T8oenKzpTb321a+6wLeEyFk+GVMqUsLUnKEJJuTjt1Lcenx2ZGGWFnLBV6zrpXjGo4tS7NisfJzWpOhnWqL203Uhyuj1s8pxw+cUsFXqRhTq0YzpuTt6V2rd/8AeX5nOEqc5QmnGUXZp7mesweauCr5ChjZ1sQq0qLqWTWje19lv4kZ6ZHnSxX2hQpt06i9borVGXF/E9Dkz/tKl//AJX/APEng8vzMBiEC6cNO+vYV0UeLKpWUNu1jc4LbJH0dLGIwh8/VyynOaT0cVuHopbES6sF94l14br8jpwxWcrYmZPELdEh4h7orvJbUaeTdkswdeb2WXcS6s397wFtxpS6BM5XUk9snzIbb2tsltRpft1trj4gcYC2viT0c1thJdwrNbU13HasfF7YPmNY6m9sZckWo9t7svThRSO5Yyi9sX3pB5Rh3tiu+I2x7TfPpxIaOzpcK9qj8oaWFe6PJobf2b/05ENHXbCveubBU8M9kkv2htTf+nKhradPQ0N018yH5PSeyb5obZN8MFKS2N8z68ZV7K9KOzrf0OBYaG6b8DooxlpWnXnbsdjWMTDz61ZQ6NKt7KPzf0DSrezj839CdGHt6nzBow9tP5jfLzVHpTnVSu6cPm/ofPqTdSbk9rOrEaMKTtVm29VtI4zxfU58xi930uERE5A/Qsxv+hP9dL+B+en6DmM08hySetVpX7NSPK9bzuFyn9l52YitJvopV5wqJdVy/htPXZeydDH0KGIgk6mHqRqRa3xurrlr7j89ys08rYxp3TrTs18WewzKytGthPs+tNKrS/4d3+lHgvgSOyz3Z5//APKYT9ZL8jszG/6E/wBdL+BxZ/zj5PhIaS0tOT0b67WOvMaaeRJRTV1WldcNSJBLzuLznyxTxlanDGWjGpJJdFDUr/A+XlDKeMylUhPGVullBWi9FK3JHt6uZeTq1adWVfFKU5OTtKNtf7J8TObNzB5IyfTr4arXnKVVQaqSTVrN7kuAgTmNiuhyvOhJ6q8Gl8VrXhc9Jj8nxr505OxFr6FObl+za3jI/PsDiHhMdQxEdtKalyZ+swnTqQjVhKMotXUlw+JZR4fOTKTpZ20akW9HCOCf5v8AOx9bPTBPGYHC1KSvONVRVuEtX52PDYyu8Vi61eW2pNz5s/T8iVIV8i4KV1O1GCb260l/FDwvlxZzVo5PzbqUqerSiqMP9/BM/Nz1mfmMVTE4fCQmmqcXOaT2N7L9y8TyZIHTk2pGjlLC1ZO0YVoSb7FJH6PnJQlicgYuEFeWhpJLsd/4H5ee4zXzloyw8MFj6ip1Ka0adSTtGS3JviXvB5eXyRljE5Hq1KmGjTk6kVFqom14NHts18t4nLMcS8TClDonHR6NNbb8W+BllXNDCY+u6+HqvDTm7ytHSi3xtdWO3IWQ6eRKVVRryqyqWcpNWWq+xd4hJeUz5/65H9TH82erxGIq4XNbp6EtCpTw0XGVr2eitzPH55YijiMt6VCpGpGNKMXKLur69/ee1w9CllDN+jQlN9HVoRi5Qeu1lsHhfLwvnXlr8b/6ofQ+ZSnKpi4zk7ylUTb4u57nzHyZ7fF/PH+U8vlrJ9HJWWo4ehUlOEdCV5tXQgl7PO//ALcxP7P/AMkfBzGyn0eInk6o3o1fTp9kkta5LwPu53yXm5iNa1uNte30kfnmExNTB4qliKTtUpyUkSCez9IwOTVgsu4yvTVqWJpqSS3ST9L80+88Plr/ALmxH6/+KP0TJ+Oo5RwdPE0JJxktavri+DPznLNSEs4sTOMk4dPfST1DyeH6HlnEVcLkjE16E9CpCm3GVk7PvPBedWWvxv8A6ofQ/QsXhqeOwVTD1JSVOrGzcGr2fA+F5j5M9vi/nj/KCHgpzlUqSnN3lJtt8Wfo+PyjWyXmzh8Th4wlNU6atNNrWlwZ4rOHJ1HJWVJYbDznOCipem02m/geozikvM2hrWuNK2vbqQ8Hl05u5fWW6dXD4iCp14x1qDaUo7LrXdHj84slvJWVJ0k3KnU9OnJu7afHtMch4h4XLOEqqeiulipN7ot2fgz3GeGBjjMiTqq2nh/WRfZvXL8hI+BmLgumyhUxkl6NCNo/4n/S/M+lnDm5lHK+UnXp1cPGlGKjBTlK/bfVxOzJcYZFzUVaTV+i6ZvjJrUvyR4b7Xynf/qOL/fS+pR+gZAyVXyfkieCxs6dROUraDbWi0tWtLfc/OsfhZYHHVsNPbSk434rc+R6rMrK1evi6+FxeIqVXOKnB1JuTVtqV/j4GWfuDUMRh8ZHbUWhJfDY/HwJJDhzK/7gh+rkfY/tA/5XB/45fkfGzMaWX6d3a8JJX36j7Of7Xk2EV9enLV3Fkju8SfoOXf8Ash/qqX/yifnp+g5caeZGprXSpb/eiJ7HlhmBUTwGKp/ejVUua/ofGz3pOGXnNrVUpxa/L+BxZvZWeSMoqtJOVGa0akVttxXwPcZQwOBzmyfTdOumovShVp2bT3pr+HYJ5SOH5mfo2ZdOVLN+EpalOcpq/DZ/A4sJmPh6VdTxWLnXgnfQjDQv8Xd6is68t0sJgnk/BSj0s1oT0H/w48Pi9gmeFrl8jNuqq+eM6sdk51ZLvuVn02st0mtTVGOvvZy5mtLOKhdpXjJLkzpz8a+2qVmm+gV+zWyEPU5Ex1PLmRV0yUpOPRVove7fx2lYWhPDZt9BU1TpUJQl8Umjw2bWVPsvKkZ1HahU9Cp2Lj3fU/RMozjHJuJnKSjHopa27LYWSH5IAxxipSSbsnvLhFzEEzUWyetk7jp6Glvn4oOiorbLxR9KMaeTfDlYmdehQW2S5ith1vXNjab3KyWdbeHXDkw08Oty+Ubf2u/9ONiZ29NQWyK+UXlNFbIvuSG2Pa7p9OKz4BoyeyLfcdvldNbIy5Il4yO6L8Btj2bsvTk6Op1JcmB1eWx6j5gKj2u7L0+choSGjDsaKRKGghopEopFQ0CEhoIpDEhhDGIAh3OinidCTehfUcw0ruxd1JOMTxLrqV3WUdVklqRmGxAfPzy3TbtjjGMVAAAMtAAAAAAAAAAAAAAAAAAAAAAADooY7F4aOjh8VXpR4U6jivBir43FYlWxGJrVVwqVHL82YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa0MRWw09PD1qlKdraVOTi+aMgA6quUsfWg4VcbiZxe1Sqya8TlAAAAAAAAABS3DJltfYddGLyZz7Je0TGJntcSYmNiCkxDYiBMTGyWFDExsTCkAARWSGSig0aGhIaCGjfCuiq6eIUnTV7qO18DBDKzL6qnkj2VXm/qUqmSPZVeb+p8lDQZ2/t9ZVMkeyq839SlUyP7Grzf1PkIaCbX11UyN7Grzf1GqmRvY1eb+p8hFIFPrKpkX2NXm/qDnkaztCtF8VtR8kBVlPqaWSuvivD6BfJe6WK8PofLGY+PH0ty+pH7Kb1zxXh9DWnSyTVnoxni2+76HzcJCnOq1Uloq229jthRw0GpRrtNb1JGo0cZcs9aceIdNTCZLpR0pSxdr7nH6Co4fJNa+hPGauKifNqVZybi5uUU9V95MKk6bbjJxvtsT4sL7EZ6m3vy+19n5L6+L/ANP0Jngsk04aUp4yy4aJzU5wdOLliZaT2rSWoqcaM42liG1w0kb+DBx6jUief/SujyJ7TG/6foPo8h+1xv8Ap+hzuhhlFtVtaWrXc5DE6GMO2OtOXZ9Toshe1x3+n6DVLIO+rjv9P0PlIY+HFv5JfV6HIG+rj/8AT9B9Dm/vq4//AE/Q+Uhj4cE+TJ9VUc399XKH+n6D6DN72uUOUfofKQD4MT5cn1ugzd31soco/Qfk+bntso8o/Q+Qhj4MD5cn3KeTs36kFKNTKNn2w+hf2VkD2uUOcPofFpVZxaipuMW9dtx3Xp/iZfMWPp8JefP6jVxl3U8j5CqVIwjUyg5SaSV4cfgfV8x8m+3xfzx/lODN2hGvlWm1WlPo05tX1atX5tHtjy62GOGVQ9P02plnjeTzHmPk72+K+eP8oPMfJ/t8V80f5T04HF6Xl/MfAfiMT80f5ReY+B9vifmj/Kffr5RwWFqdHicZh6U7X0Z1FF2+DM45YyZKSjHKGFlJuySrRbb5lHxPMfBfiMR80f5ReY+C/EYj5l/KeqIqTjThKdSSjGKbcnqSRB5d5j4P8RX+ZfQPMbCfiK/NfQ+79tZK/vHCfvo/U2w+Mw2LTeFxFKsouzdOalbkUec8x8J7et8y/lF5j4X8RW+Zfynoq+UcFhanR4jGUKVS19GpUUXb4Nmf21kv+8sJ++j9Qj4PmPhvxFb5l/KLzHw/4ir8y+h9/wC2slf3lhP30fqH21kr+8sJ++j9QPgeY+H3Yir8y+gvMeh+IqfMvoehp5UyfWmoUcdh6k3sjGrFt8mL7ayV/eWE/fR+osp5/wAx6H4ip8y+gvMej+Jqc19D02Gx2ExbksLiaNZxtpKnNStyZtOcacHOclGMVdt6kkLKeT8x6X4ifNfQXmPS/Ez5r6HovtrJX95YT99H6m2GxuFxel5LiKVbRtpdHNStwvb4C5KeX8x4fiJc/wCgvMeH4iXNfQ9dUqQpU5TqSUYRTbk3ZJHJ9tZK/vLCfvo/Uu4p5zzHh+Jlz/oHmPH8RLn/AEPVYbGYbFxlLDYilWUXZunNSs+40q1adGDnVnGnFbZSdku8binkPMZfiXz/AKB5j/8A3Pj/AEPt1c6MiUXaWUaDfuty/IqhnLkbESUaeUaGk90no/nYXKU+F5jf/c+P9BeYz/E+P9D2Sakrp3T3oY3G14vzGf4n/fIPMaX4lf77j2gDcbf28DlLNWOTcDUxVbE3hTSultbbS4HwdPAW/Qm+3/bPX5/4ro8Dh8KnrqzcmuxL+vgeEZ69H+23HOOat2OWB6k/H6kuWB6k/H6nGwZ2tjZ+3U5YHqS8fqJywXUl4/U5GAs2ft0VpYXo2qcJaW5tu35nIymSyTNt4xQZLKZLI2TBgxMBAAEVkUhIaDRoaBFIMkhq40UiolJ8GUk+DGikEtKT4MaT4MpFIJaFF8ClF8CkNBLRovgGi+BoOxUtnovgGi+BrYFHtBuVhJ9DVcnDSurWO6niOkkoxoJ37ThjGzLg5RacW78UaiZhw1MMcufL6F5+wj8y+hxYmMnXd4qL1alrOmg3OF51pJ8huhSk7yqSbe9tG5i4efHKMMuXAqb4otUJum5/dTtc7PJqXXfMpUKei49JKzd9pNrpOvHhwKm+IKHb4Hd5NR675kVaEYpdHK99zG1Y18Z4cqh2jUO02VKXYNUZdgpfkj2xUFxGoLibKjLihqi+KFJ8uPthodrK6NcWbKg+suQ1R97wLTPyx7YaC4seguLN1Q97wH0C63gKT5cWNOCU4tK7utT3nfeXsVzOdUbWak9RtBSd9KrI1EU46uUZPUZqUGqVavKGjdqK17lr/ieiODItDyfJdCDbbcdJ34vWd58rVy3ZzL62hht04gwEceVsX5BkvFYq+ulTlJfG2rxObs/LM5MSsoZw42ve8FUdOPC0VbV8bX7z50YqMlKOpp3TW5lQTcU27t623vbKsdojhzt+wZKxix+TMPik9dSCb+O/xufMz3xnkmbWISdp12qMe96/BM4v7P8AGdLk6thJP0qM9KP+GX9U+Z87+0bFaeKwWBT1Qi60l8dS/J8znXNN3w8UqcbbD9OzEwXkub8KjjaWIm6j+Gxfl4n5zTpyqVIwiryk0kuLbsj9XxVSGRc3akotWwuHtHtaVl4msmcX5nnFiVlDL+Nr3vFVHCL3WjqX5X7z5nRx4I0hF6Kbd29bb4s9RmXkbD5Sr4mpjKKq0aUUlFtpaTd76uFvE12hO8vJ9HHgg6OPBH6z5q5F/AQ+eX1DzVyL+Ah88vqZ3QtS8TmjhUpZRxzjqw2Fm0+EmnbwTPORpxcU2tbR+p5WwGDyTm1lPyKgqKnRlpWbd21bf8T8xUbJLsLjyTw9v/ZtRUKWPqpW0pQjyT+p0Z/5WeFydHJ9KVq2K/SttUP6vVzLzEUMNm/Xr1JKMellKUnsSUVr/M8RlbKE8r5Vr42V9GT0acX92K1L/fFszEXkt1D5/Rx4Hu/7NoKNLHtLbKn+UjxVj3f9nUbYTGvjUiuSNZdkju1/tByk8NkuGBpytUxUrStt0FrfN2XM/OlSTaSV2z62ceUftbLuIxEZXo030VLhorevi7vvOzNDJn2hlmE5q9HD2qSutTe5c/BMRFQTzL0lKvQzNzWo9NDSxVW8uj3ym9evsSsm+w8JlLKWNyvWdXHVpSV7xpp+jH4L/bPqZ5YyWOzjrxb9XhfVQW69rt/G7fJHz8mLDLKWHeN/5dTTqb9Xb2cSRHkmfDjWGn0emqUtBfe0XbmRoJ7lyP2fC4jB4vD2wtWhVpWtam00uyyPAYrM/KlTHYh0MLGNB1JdHepFejd21fCwjImHRmDlWtDHPJtScpUakXKmm76MlraXBWvyP0E8Tm3mtlDJ2WKOLxPRKnTUrqMrttppbu09sZyq+GoAARUnGnTlOWqMU23wRlX53nriHicuzgn6NCCh37X4u3cefcHwOrF15YnF1q8ttWblzdzE+jjjURDyzlcsnF8CXF8DYRVti4vgDT4M0YmFtk0+DJafBmzEyLbJp8CWasTC2yYjRiYW2YFABmqc3918ilSn1TfTivvIOlh1gxvy9MlSnwXMpUZdhp0se0Onj2hN2ZKjLiilRfFchdOt0fEfTvdEqfepUfeKVFcTPppbkg6aX+0GazaqjHiUqUe3mYqrN7/ANOXWYNuft0KnHgNU48Dn0pP7z5ju+LLbOzL26VGC3DtBcDlGLPjn26rwXAFOC3o5kNFtPij26elhx8A6WP8AtHOMWnxQ36aPBl08VGLd4NnKjfD04VG+kno27rliZZy08Yi5dkak5RTVHU9etlKU/Yr5kRFQirKvs1bUNW9u+aOjyTEf7a9Kfsf9SGpT9j/qRHo/iHzQej+IfNBK/wB5ZyhiHJtRSTYujxFr2Xgbej7d80D0bf8AMPmiU1GU+nJ0s+sHST6zMxmeXq24r6SfWfMenJ/efMgaBthWlLrPmGlLi+YkBUqFJvi+Z2ZLi62NpUNHS6Wajfgr6/A4kffzPw3TZWdV7KMG79r1LwuYzy24zKxhGUxD3CSSSQwA+W+kDyv9oOL6LItPCxdpYmqov/Ctb8bHqj86z7xXlGX6WGT9HDUrte9LX+VjWMXKTNQ83ol1KM6M9CpFxlZOz4NJrwaOjA4V4vHUMOv/AO2aj8E3rPv58YFYfKVCvTjaFamo6tl46vya5Ha+acY5i3FmbjPJMvUot+hXTpv4vWvFLmceceK8uzixtZO8IT6KPwirPxTfeclOUqVSFSDanBqUWtzTumQou7bbbk223vbdxt5td3FPq5qYTyvL+Gi16NN9JLuV142PTf2hYrosjUsLF2liaqTXGMdb8bHN/Z/hLPFYtrcqUX4v+B83PrFeU5wQw6d44WlrXvS1/lY5zzlTUcY285Y68JlTKGApSp4LFSoRlLSkkk9drb0ZU6UqlSMIK8pNJLi27I9iswo2V8oP91/U3NR3Zi/DzXnFl7+9Knyx+h25GyvlzHZXwuGllKpKM6i0lorXFa3u4Jn2PMKP94P91/U+hkXNaGScesV5S6zUXGKcLWb37XuvzMTONNRua56T0M1sZ7yjHnJH5nY/Rc/Z6Obrj160I+N/4H59YunHBnL7eNyg8Hmbg8nUXatjXKU7bVBSf52S+CZ8nJmAnj8dQwlJW05WbtsW99yuzOo5VakZTd9GChFcEj2+Y2S+iw88oVV6VW8Kd90U9b72vAs/bFpE7uHiMVCEMZXhTvoQqSjG/BNr+B9zJuUXkvNHKE4O1avV6Knbi4633K7PiVPSxFaXGrJ/6mKblOnCk36EJOaXa0lfwRauEupYQpqMFHgtZ+nZoZN+z8j05TVquI9ZK+225f74nic3smvKWV6NGSvSi9Op/hW7vdl3n6mrJajGc+GsOeX5fnXk6pg8u4mco+rxE+lhLc72uvinfwPjWP13H4fBYyg6OMVOcHsUmk0+zgzzOOzFTblgcVb3Kqv4r6FxyjyZYy8RBOlUVSlOVOa1qUJNNd6PRZHzvyhgpxhjZvF4e9m5fpx7U9/fzPmZRyXismVujxVPQv8AotO6l3nJY3tiWd0w/YMPXp4mhCvRkpU6iUoyW9Gp8PM5yebuH0tmlK1+Gkz7hwmKl1jmAfJzmxSwuRMQ7pOoujXf/S59Y8bn9iv+VwifGpJeC/ia04vKGc/7ZeWtB9UTjF7kc7Ez6NvD8f7dDpx4EunHh4mN2tjfMNOS+8+YtrZl7aOlETpLiZ9JLiHSy4rkS4NuceVOkuJLoviHTS7BdO98VzJw1WoTpPihOlL/AGyumW+LDpo8GOC82bpS4eJDpy6rNuli+PIfSRf3g1uy9OfQl1XyA3049YBULvn04ENEopGXc0NCQ0EUhoSGioaGhIaCKQ0JDQRSGShoqKGJDAaGiUUgyYySkVAjpwl7ytTU9S37DmRpTqTptuMmrlialzzi8ah3py9guaHeXsFzRnB6UE3iNb17tRdl7f8AI6vFMV/sqvL2C5oLy9guaFq9v4oF+vfgGf8AfJ+l7Bc0O8vYLmhJPdWfgPRftpeATj/bP0vYLmjnnQqym5KnZN7E1qOjRftn4Bov2z8BMW1jnt7OXyar1PFGexndou3/ABn4HN0OvXIkw64avtmBsqC3yGqMeLJTXy4sEe2zMw3R5OqV2tdaer4LV+dzyKox7X3n6NkzDLCZOoULW0Ia/jtZ5vqZrGno+mmM8rjw7AEM8L3E3bWz8ixuIeOynjMY3qq1W4v3U7LwR+k5yYzyHIGMrp2kqbjF9r1L8z8yo0+jpQjbWkr/ABOulHNuepNQ+/mXhOmy0qrXo0IOXe9S/N8j0meWD8qyHOoleWHkqi+Gx+DfI58x8L0eT62Ias6s7L4L+rZ6OtSjWozpVFeE4uMlxTJnP3LjH2vyHRDRN6+HnhsRUoVP0qU3Bvi07X77XHhsPLE4mlQj+lUmo83Y7+LcPL9BzWwywmQaGlqlUTqS79a8LH51i8Q8dlHF4y91Wqycf8Kdl4H6NnFiVkzNvFTp+jo0ujh2N+ivzPzWjT0KUY8Er/E5acXNuuc1FO3I1TD4fKlCvi5ONGlLTbSb1pXWpdtj2PnxkL8RU/dS+h4TRDQXBcjeWG5jHOnu/PjIX4ip+6l9D6GScu4DLMqiwU5zdJLSbg42ve234H5poLguR7zMrCqhkmVZr0q8279i1fnc5ZYRjFumOe6acv8AaFL/APjMHT62JT5Rf1PFaJ6/+0GXpZNp8ZVJPuS+p5PROmnHDGpPLbJuBnlDH0sNT1acrN22La33K5+qUKUMPQhRpx0YQjoxS3I81mVk3ocNPHVI+nV9GF1sit/e/wAj089UJPsZz1Juabwiot+PQWkpPjKT8WVohh1ejF8bvxO7JeBllDKFHDK6U5ek1ujtfgd44hynu9fmZk7yXJrxU42qYh3V9uju57TzeerqVc4qkHVqRhClBKMZWWu72H6LThGnCMIJRjFWSW5Hk89Mk1atWGUKEHJKGhVSWtJXafw1u/cefGby5dpiseHiqNClTr06klKWjJSab22dz9cw+Nw+Kw6r0a0JU2tqez4n5TomVTDU6rvKLvvadrnXLC+znjnXd6LPLLOHyhjcPg8HONWNDSdScXdXdlZfDf8AE+FRoTxFaFGlFynOSjFLe2VhMDOpNUsNRlOUt0U2+891m5m6sm2xOKtLEtaktagv4vtHGEH988PsZNwkcDgKGFi01Sgk3xe98zqGI87uD8+zhxTxOWK7jS0o030aba3an43Pd4mtHD4arWl+jTi5PuR+ZSac5S8od5Nyeza3c9X0uPMy8n1WXEQmanKDSoLhe6OV4Wt1fFHVq/EeKC6/EeKPbMRLx455Y9nI8LW6vijKcJQk4yVmazxFVSaVR2vtstYqaVebdapZrY20rmJiPD0xOUc5dmAjfEUqdO2hU0r7d9jnMzFOmM7ouAyWNiYbJiY2SyAZLGxMKQAAVihoSGiNqQ0SikGVIaEhoqGhoSGgikNCSb2JstQk9zDMzEEhopUpPbZFqlxfJFZnPGEIEbKlFbWylTitxaYnVhgikm9ibN0ktisUWmJ1f0wUJPcylSk+HM2Gi0xOrLNUXvaKVFb2y0NFpidTJtTcLKKpq61bDWy9kvA5k2ndM2pycldz18DUOGUT3XZeyXgNfq0L/MGv8Zpg9fU/IF/gDV1w1dcMnr6gfsCX+Mf7YGdTb+jYkqpt/SuQRqOygEO4Hbkqh5TlPD0mrpzTa7Frf5H6EfnmTcdLJ+J6eFOM5aOitJ7D6vnZifw1Lmzya+nnnlw9302rhp4893rhnkfOzEfh6XNh52Yj8PS5s4dPqenp6rT9vT4jD0cVS6PEUoVabaejOKav8GY/ZWT/AMDh/wB0voee87MR+Hpc2HnZiPw9Lmx8GonVaT1NKlToU1TpQjTgtkYqyXcaHlI5012tdCku9ledFf2NLmx0+p6Or0vb71TJ2CqzlOphKE5y1uUqabfxYU8nYKlNTp4ShCcdalGmk13nwfOiv7GlzYedFf2NLmy/BqJ1ei9HiMNQxVPo8RShVhdPRnFNX+Bj9lZP/A4f90vofC86K3saXNi86K/sKXNjp9Q6vSfe+ysn/gcP+6X0D7Kyf+Bw/wC6X0PPvOvEJ28npNfFledNf2FLmx8GqdVpPvfZWT/wOH/dL6HTSpwo01TpQjCEdSUVZI8q87MR+Hpc2LzsxH4alzY6fUXqtJ6bEYPDYqUJYjD0qrhfRc4p2+Bn9lZP/A4f90voed87MT+Gpc2Hnbifw1Lmx8GodTpPV04RpwjCEVGMVZJKyRbSaszyHnbifw1Lmw87cT+Gpc2Tp9T0vVab0SyTk6KssDhkls9Uvoa0MFhcPPToYalSk1a8IJPwPMed2J/DUubDzuxP4alzY+DUOp0nrwPH+d+J/DUubDzvxP4alzZOnz9L1Om9DXyPk7Etyq4Ok5b2o2fNGUc3skxd/I4X7W3/ABPheeGJ/DUubDzwxP4WlzZr4dROo0nrKGGoYaGjQowpR4QikanjfPHE/haXNh544n8LS5sz8Ga9RpvZAeQjndiHG7w9JP4sfnbiPYUubL0+p6TqtN9POrEOhkecIx0pVpKFtmrb/A/OqtKpBaUo2TfxsehytlerlTo+kUKap3so673sfLnCNRWnPUevS05xxqe7y6mvE53HZ80qcJRSck0mrrtOt4Wk/vsJYeM0lKs7JWVze2WvmxcjqR6Bw0FpXvpGbNZ0mm0mnZ6mZuEluZmXXGcfCXsJZTTW1NEsjpBMQ2JkUmSymSwExMbEw0QAAGKGjZUoram/iWoxW7wIk5wwSb2JstU5Pc+83Q0VidRkqUnt1Fqit75FoaLTE5ySpRXHvZajFbvASGisTlMqQ0SikGJNDRKGiosBIaKyaGJDQQ0NCGENDEgcora7d5UpSHEydWC7fgNVldJJrtYs2y7V+rH/AJZN09lVBaXtvyNvPS/2A/YJ0Ze2/IFGXtvyBS/2CaklGDbh32JnpRStVvyIcpSjot/ELGKOmjwYum4RKUIr7qKSXDwI39rNVpPZEenU3R8DQEwlx6Z6VTgP1ppcCpaNGpx8Q0Z9bxNLgKNyNCfWDo5dbxLC4S0qErrWdK/wGJr+2VnKT/YFr6gftB+0GBd9Qzq6TWqNu80/aJnsXpBqO7D1hvpO3/DIKlJrZIjU8sHUknriLpuMTVsT+AauPSOmW9B0sd7fIpxjwJcI8CLwfSRf3gunsaIdKO65Lo8JBahqBi4TWx8mDdVcfzJa7f21EZdJJbVzQKtxXJi12S0AjpYvbddw1KL3izbJj6OT3E3N9fXLEMzNFFWjZwD9gf7YtfXKyH/gF/lj19cWv2gB/lCf6oev2gtftArB0pttqNlwIknF2aOrX7U5636b9LSMzFOuMzLNmtGK0X6pS7bGI41JQVoszE03NzHBYinF1L6Gh2GDpcHzRtOTk7y1kskumOWUQwdKS2WIcJLamdDEzNOkakuV6iWdbSe0h04PdyFNxqOcDZ0o8QJTW+EIpEopBiTQ0JDKyaKRKGgikNEoaKypDJQ7pbQlLBGbqxW+/wACXW4LmLNsy3RRzdJNuy8ENQnLbfvFmz3Ldzit4nWitl2Zqi975GipRW27+JeUrGCdd7ku8FOpLZfuNFGK2IoUzuiO0MVCpLa33stUeMuSLQ0WknOSVKK23OihCKj/AMNPttcxRvRvo6p2NQ55zNNNXsh/5fgCv7Rch6/aLkacBq9mDtb/AIYa/aLkZznKLspXBEWzuMQEdFXAQXCKuAh3CGArgVDuMQXAYXFcLgVcqG16rmdzSntdnYJLT9gP2A/b8BSbSupFYRN69libg5Nu7ZNyN0dwFcLhRcLgIB3EFwuRRcQCuA7iAQUCcYvchiI1EodOL4r4Ml0uD5momyU1GUsHTmtngzqjVUrJUnf4GbKp/papWEcGU33aaT9i/AE+NJ+A/wDMMp1JqVlPkjTEctP8oP8AKOZ1K26pzRpT6SUbyrW7hdtbaav9UL/KJtJba65Id/8AyoqUP8o5636b9HR7DSrUcI3VVfAwlNzd27sxlLeET3SxMbEzLoGSNlTgo04y0ld+BFZsTGyWGgxMZLI1BAABWSGiUO6W1ojopDRm6sVsuJ1XuSFm2WyG5JbWjn0pS3t/ApU5ParfEGz21dWK2XE6zexJfESpLe+RooRWxcys/bDPSnLY33FKnJ7fFmiGhTM5+kqkt75FqnFbr/EaGiszlJq24aJQ0VhSGJDDJjJGiooZIwikb0baOuGl22MYR05WbsuJ0Rjoqyn4GoYznwrV7IPR9kGvr+BNScoWamn3GnKOSnOFmtCz5GZLd3d7RmXSIo7gK47gMdybjKh3HckdwhjuTcLgVcBXAIYBcLgMuna/6NzO41Jx2FSWzlFbYGTd22lbsBzctrJBEGILhcKAC4rkDuFxXC4AFxXC4UXC4gCgBXC5AXEAgptibBsQUAwbE2RQ2IBNhQAgZFVTlCN9OOka2g9fQ/6Uc7NadScno6SS4ssSkxPhFfo5w0YQUZcbWON05LZ4HTP9J3ZLMzy64zUOfTnHU2+8pVXvXI1dntRm6cXut8COlxPeAqkXv5nZS0XTXqr9trnA6XB8zsoRqKlH11uy17GsWNSIrhlUpyUpS0LRMmFbEVVOUHNSV7XS2mSq8VyMzTeOGVNGIlVIvfzHci1MABABxuUnvfcUoSe7mWklsSRSI9G6uyVS4vkWqcV2/EEUg5zlKlq2IEJDKxKholDQRSBCQysqQyUNBFIaJGVk0UiUNMIoaZKGVDQxJggjWn+mrxv2HRq9l4HPRv0is7dp0+l11yN4uWfdEp01qcPAxKrX6TXK/aiCSsRwYCuMimO5Nx3KhjuK4XCHcYguEMdybjKHcLiAIdx3FcLgO4XFcLgO4XFcLgO4XFcLgFwuFxAO4XEAUAK4XIALgIKYrhcVwAQXAKAbFcTIoYAJsKGxAJsihg2DYgoEwYmyKGxMGxBoMS2reAXs7oiuz0ba6L5HNWqQkloRtbeN4ipxMWzUyzjjXdLSe1Ih04vZc0ZLMO0TMMXTe6zIelF70dAiNxn7YdJL/aA1cY8ADVx6ZJlJkoaYVSGmShoMqQ0JDTKyaGhDQZUhkjQQ0NCQIqKRSZKYwyY0xJgVFJjRKGEUNMkZUaUrdIrxcvgbzinH0abTOaEnGV1qZ005TnG7mvhY1Dnl7YNOLs1zA3nS0ryc9hzkmKWJs7juSO4FXAm4wh3HcQXKirhcVwuBQXFcLhDuFxXGAwFcLhDAVwuAwFcLgMBXC4DFcLgFFwuILgMVwuK4DuK4XFcKdxAFwAVxXC5FFwARFDYgFcKLhcBBQIBEUA2DZLYUA2DYgpMGDEyNEwATCgQNiZFJiAGw0QABFYJlJkoaYdVpjRKY0wypDRKGmGZUholMZWZUNEoaCKTGSighjRI0VlQ0yRhDTKTJTBMqLGSmARQ7kjKjSnKKvpK4iUNJt6lyDNGFylSm91jRYd75fxLSTlEMhm6oQ3tlqnTX3UWmN8OUpJvYvA6vRWxJA6iW9Fpnf+nOqU3sixqhU4LvNnViJ1uCFQbskLDz4opYeXWQOs9yE6snvHCfcpYbjMFh11yOklxDTfFjg+7208nj1vAfk8eszHTfFhpdo4Ky9tvJ49Zh5PHrGOkw0n2i4Ky9tegj1vAPJ/eMtN/7Y+klx8S8FZe1+T8JCeHlxQukkt41VkOD7idGfZzJdKa+6adM96BVlvRKgvJi4SW2LJd951dLEekmKXdPmHIFzpag9sUS6UHsT5il3w5wubOit0uZDoyWxkpqJhncVynGS2xJI0LiuFxEUxAK4BcGwuIKBAIigGwbJuFDYNgxBQIGxNkaDENsQUmxMGDIpCuDEGgxMGwZFK4CANMUNCTGiOkqTGmSmNMrK0CEmNBlSY0yUxoIZSZKYFZWMlMYRQ0yRhk0NMSYJlRQ0JFwpSl2Liwk8Fca1vUbRoxW27NFaOpI1TnOceGMaU3uNI0V96RWkGkWoYnKZUoQjsiXpcDLSE6iLbNTLbSBzOd1HuJ0r7xZsdHSrcS6r3GNwuS12w1029rYtIzuFxa000g0jO4XFlNNINIzuFxZTTSDSM7hcWU00g0jO4XBTTSDSM7hcFNNINIzuFwU00g0jO4XFlNNINIzuFxZTTSDS7TO4XFlNVUZSq8VyMLhcWbYdKqJ7x6Ry3GpNFtnY6dIT0X+kjFVOJSknsFm2jdOL2aiHSa2MrSDSHCxMsXFraiTouJxi9pKajJgK5pKm9zM2mtqMtxyTYNibEGg2FwbEACbBsTZFDBsGxBoCARFAmwYgpA2DYg0GSxtiZFACuAaYpjTJTGmR1lSGmShphlaY0yUxplZUNMlMaDKkNMlMaDKhpkoZUUNMlGsKd9cgzPCVduyRrCk3rk+4qKUdSQ9I1TnOXpUYxjsXeVpGdw0isVbTSDSM9IHJbwbWmkJ1FuMnNv4E3Ja7WjnfeFzO4XC0u4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwUu4XIuFwU0uGkZ3C4KbKo95SlfYznuNSe4Wm1vpBpGSqcR6RbTa00gvuM9INIJRuCewzlFxL0guGomWQmzSUUzNpraZbgrg2DYg0BAJsihsTYCuFDExtkthQJsGxMjUBibBsTYaACuAVihpklIjqpMaJQ0GZNMpMkaKypMaZKKQZMaYhoIaZUU5PUSbU/wBErE9lwio/UdyQK5d1XC5IApVwuSAKU5WJcmSxEtaVcLkgVaVcLkgClXC5IApVwuSAKVcLkgClXC5IApVwuSAKVcLkgClXC5IApVwuSAKVcLkgClXC5IApVwuSAKVcLkgClXC5IApVwuSAKVcLkgClXC5IApVxqZAAprpXC5EdgwzSrhckAUq4NokAUUo70SaGctrDUEK4CZGhcLiBhSbBsBMjRNg2AmFDZLY2JhqCAAIr/9k="