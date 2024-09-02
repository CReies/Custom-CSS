let cssLink = document.createElement("link");
cssLink.href = "https://cdn.jsdelivr.net/gh/CReies/Custom-CSS@main/campus-dark.css";
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
frames['iframe1'].document.head.appendChild(cssLink);