// Vul deze variabelen in met jouw Supabase gegevens
const SUPABASE_URL = "https://xmvmtatwfrigxqumlmwo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtdm10YXR3ZnJpZ3hxdW1sbXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjAxMjMsImV4cCI6MjA2NTYzNjEyM30.6tQWlCkXe3_pIqsJvNBdodbhUvX2mcQSNiinUQqzuc8";

const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

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

  container.innerHTML = data
    .map(
      (brood) => `
    <div class="product-card">
      <h3>${brood.naam || ""}</h3>
      <p>${brood.beschrijving || ""}</p>
      <p><strong>Ingrediënten:</strong> ${brood.ingrediënten || "-"}</p>
      <p><strong>Allergenen:</strong> ${brood.allergenen || "-"}</p>
      <p><strong>Prijs:</strong> €${
        brood.prijs ? brood.prijs.toFixed(2) : "-"
      }</p>
    </div>
  `
    )
    .join("");
}

window.onload = laadAssortiment;
