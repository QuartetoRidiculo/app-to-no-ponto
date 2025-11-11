const links = [
  { title: "Início", href: "index.html", icon: "house" },
  { title: "Atividade", href: "activity.html", icon: "clock" },
  { title: "Mensagens", href: "messages.html", icon: "message-circle" },
  { title: "Suporte", href: "support.html", icon: "life-buoy" },
  { title: "Conta", href: "account.html", icon: "user" },
];

const path = window.location.pathname.split("/").pop();
const nav = document.getElementById("nav-bar");
const ul = document.createElement("ul");

for (const link of links) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.href;

  const i = document.createElement("i");
  i.setAttribute("data-lucide", link.icon);
  i.classList.add("nav-bar-icon");

  const span = document.createElement("span");
  span.textContent = link.title;
  i.classList.add("nav-bar-text");

  if (path === link.href) a.classList.add("active");

  a.appendChild(i);
  a.appendChild(span);
  li.appendChild(a);
  ul.appendChild(li);
}

nav.appendChild(ul);
lucide.createIcons();