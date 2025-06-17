// Vul deze variabelen in met jouw Supabase gegevens
const SUPABASE_URL = "https://xmvmtatwfrigxqumlmwo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtdm10YXR3ZnJpZ3hxdW1sbXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjAxMjMsImV4cCI6MjA2NTYzNjEyM30.6tQWlCkXe3_pIqsJvNBdodbhUvX2mcQSNiinUQqzuc8";

const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let alleProducten = [];

async function laadAssortiment() {
  const { data, error } = await client.from("producten").select("*");

  const container = document.getElementById("assortiment");

  if (error) {
    container.innerHTML = "Fout bij laden van assortiment.";
    return;
  }

  if (!data || data.length === 0) {
    container.innerHTML = "Geen broden gevonden.";
    return;
  }

  alleProducten = data;
  // Sorteer de producten op naam
  const gesorteerdeProducten = [...data].sort((a, b) =>
    a.naam.localeCompare(b.naam, "nl")
  );
  renderProducten(gesorteerdeProducten);
}

function renderProducten(producten) {
  const container = document.getElementById("assortiment");
  container.innerHTML = producten
    .map((brood) => {
      // Bepaal de juiste afbeelding op basis van de productnaam
      let imgFileName = "";
      const naam = brood.naam.toLowerCase();

      if (naam.includes("lijnzaad")) imgFileName = "lijnzaadbrood.jpeg";
      else if (naam.includes("meergranen")) imgFileName = "Meergranen.jpeg";
      else if (naam.includes("suikerbrood")) imgFileName = "Suikerbrood.jpg";
      else if (naam.includes("melkbrood")) imgFileName = "Wit melkbrood.jpg";
      else if (naam.includes("wit vloerbrood"))
        imgFileName = "Wit vloerbrood.jpeg";
      else if (naam.includes("casino")) imgFileName = "Casino wit.jpeg";
      else if (naam.includes("tijgerbrood") && naam.includes("wit"))
        imgFileName = "Wit tijgerbrood.jpeg";
      else if (naam.includes("spelt")) imgFileName = "Spelt volkoren.jpeg";
      else if (naam.includes("pompoen"))
        imgFileName = "Pompoenpit volkoren.jpg";
      else if (naam.includes("zonne")) imgFileName = "Zonnepit volkoren.jpg";
      else if (naam.includes("volkoren vloerbrood"))
        imgFileName = "Volkoren vloerbrood.jpeg";
      else if (naam.includes("tijger") && naam.includes("volkoren"))
        imgFileName = "tijgervolkoren.jpeg";
      // Nieuwe broodsoorten
      else if (naam.includes("olijven")) imgFileName = "Olijvenbrood.jpg";
      else if (naam.includes("noten")) imgFileName = "notenbrood.jpg";
      else if (naam.includes("rozijn")) imgFileName = "rozijnbrood.jpg";
      else if (naam.includes("rogge")) imgFileName = "roggebrood.jpg";
      else if (naam.includes("turks")) imgFileName = "Turksbrood.jpg";
      else if (
        naam.includes("boerenmeerzaden") ||
        naam.includes("boeren meerzaden")
      )
        imgFileName = "boerenmeerzaden.png";
      else if (naam.includes("focaccia")) imgFileName = "Focaccia.jpg";

      const imgPath = imgFileName ? `images/assortiment/${imgFileName}` : "";

      return `
    <div class="product-card">
      ${
        imgPath
          ? `<div class="product-image"><img src="${imgPath}" alt="${brood.naam}"></div>`
          : ""
      }
      <h3>${brood.naam || ""}</h3>
      <div class="product-info">
        <p>${brood.beschrijving || ""}</p>
        <p><strong>Ingrediënten:</strong> ${brood.ingrediënten || "-"}</p>
        <p><strong>Allergenen:</strong> ${brood.allergenen || "-"}</p>
      </div>
      <p class="prijs"><strong>Prijs:</strong> €${
        brood.prijs ? brood.prijs.toFixed(2) : "-"
      }</p>
    </div>
  `;
    })
    .join("");
}

function filterOpCategorie(categorieId) {
  if (categorieId === "all") {
    // Sorteer alle producten op naam
    const gesorteerdeProducten = [...alleProducten].sort((a, b) =>
      a.naam.localeCompare(b.naam, "nl")
    );
    renderProducten(gesorteerdeProducten);
  } else {
    // Filter en sorteer de gefilterde producten op naam
    const gefilterd = alleProducten
      .filter((p) => String(p.categorieid) === String(categorieId))
      .sort((a, b) => a.naam.localeCompare(b.naam, "nl"));
    renderProducten(gefilterd);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  laadAssortiment();

  // Categorie filter knoppen
  document.querySelectorAll(".categorie-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".categorie-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      filterOpCategorie(this.getAttribute("data-categorie"));
    });
  });

  // Mobiel menu functionaliteit
  const menuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("nav ul");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Sluit menu bij klikken op een link
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });

  // Sluit menu bij scrollen
  window.addEventListener("scroll", () => {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  });
});
