// Inject widget container
const el = document.createElement("div");
el.id = "free-tool";
el.innerText = "Loading...";
document.body.appendChild(el);

// Localo widget configuration
window.LOCALO_FREE_TOOL = {
  container: "#free-tool",
  hidePoweredBy: true,
  token: "FrBHJZclLSY-e6a5cGmha1o4qKRXse5Iuab81WYq3pE"
};

// Load Localo tool script
const s = document.createElement("script");
s.src = "https://jstools.localo.app/scripts/freetool.js";
s.defer = true;
document.body.appendChild(s);
