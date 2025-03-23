const URL_API = "https://jsonplaceholder.typicode.com/users";
const LANDING_PAGE = "landing-page";
const PAGE_CLASS_NAME = ".page-section";

const handleRouting = () => {
  const hash = window.location.hash;
  const sections = document.querySelectorAll(PAGE_CLASS_NAME);
  let pageFlag = false;

  sections.forEach((section) => {
    if (section.id === hash.substring(1)) {
      section.style.display = "block";
      pageFlag = true;

      switch (hash) {
        case "#landing-page":
          document.title = "Home - ARTists";
          break;
        case "#artist/home":
          document.title = `${localStorage.getItem(
            "selectedArtistName"
          )} - ARTists`;
          break;
        case "#auction":
          document.title = "Auction - ARTists";
          break;
        case "#visitor-page":
          document.title = "Visitor - ARTists";
          break;
        case "#listing-page":
          document.title = "Art listing - ARTists";
          break;
        default:
          console.log(hash);
          document.title = "ARTists";
      }
    } else {
      section.style.display = "none";
    }
  });
};

let reloadFlag = true;

window.addEventListener("hashchange", function () {
  if (
    (window.location.hash === "#visitor-page" ||
      window.location.hash === "#artist/home") &&
    reloadFlag
  ) {
    reloadFlag = false;
    window.location.reload();
  } else {
    reloadFlag = true;
    handleRouting();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  handleRouting();
});

if (!window.location.hash || window.location.hash === "#") {
  window.location.hash = LANDING_PAGE;
}
