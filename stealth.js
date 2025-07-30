(function (){
  function loadLocalo(){
    const el = document.createElement("div");
    el.id = "free-tool";
    el.innerText = "Loading...";
    document.body.appendChild(el);
    window.LOCALO_FREE_TOOL = {
      container: "#free-tool",
      hidePoweredBy: true,
      token: "FrBHJZclLSY-e6a5cGmha1o4qKRXse5Iuab81WYq3pE"
    };
    const s = document.createElement("script");
    s.src = "https://jstools.localo.app/scripts/freetool.js";
    s.defer = true;
    document.body.appendChild(s);
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", loadLocalo);
  } else {
    loadLocalo();
  }
})();
