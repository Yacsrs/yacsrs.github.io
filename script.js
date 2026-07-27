document.querySelectorAll("[data-email]").forEach(el => {
  el.textContent = window.YACSRS_CONFIG.email;
  if (el.tagName === "A") el.href = "mailto:" + window.YACSRS_CONFIG.email;
});
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
if(menuBtn && nav){
  menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",()=>nav && nav.classList.remove("open"));
});
const form = document.querySelector("#contact-form");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent("YACSRS Website Inquiry: " + (d.get("subject") || "General"));
    const body = encodeURIComponent(
      "Name: " + d.get("name") + "\n" +
      "Email: " + d.get("email") + "\n\n" +
      d.get("message")
    );
    window.location.href = `mailto:${window.YACSRS_CONFIG.email}?subject=${subject}&body=${body}`;
  });
}
