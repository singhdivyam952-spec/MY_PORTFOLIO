const fs = require("fs");
const path = require("path");

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function svg(title, subtitle, hue = 210) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hue} 40% 12%)"/>
      <stop offset="50%" stop-color="hsl(${hue} 30% 18%)"/>
      <stop offset="100%" stop-color="hsl(${hue + 20} 35% 10%)"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#g)"/>
  <circle cx="1280" cy="180" r="220" fill="hsl(${hue} 60% 55% / 0.12)"/>
  <circle cx="280" cy="720" r="280" fill="hsl(${hue + 30} 50% 50% / 0.1)"/>
  <rect x="80" y="80" width="1440" height="740" rx="28" fill="none" stroke="hsl(${hue} 40% 70% / 0.25)" stroke-width="2"/>
  <text x="120" y="420" fill="white" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="700">${title}</text>
  <text x="120" y="490" fill="hsl(${hue} 20% 75%)" font-family="Segoe UI, Arial, sans-serif" font-size="28">${subtitle}</text>
</svg>`;
}

ensure("public/projects");
ensure("public/avatars");
ensure("public/logos");
ensure("public/blog");

const projects = [
  ["wondrfly-cover", "Wondrfly", "Travel & Experiences", 200],
  ["wondrfly-1", "Wondrfly", "Discovery Experience", 200],
  ["wondrfly-2", "Wondrfly", "Booking Flow", 205],
  ["wondrfly-3", "Wondrfly", "Operator Dashboard", 210],
  ["mentorx-cover", "MentorX", "Business Intelligence", 220],
  ["mentorx-1", "MentorX", "Executive Dashboard", 220],
  ["mentorx-2", "MentorX", "AI Insights", 225],
  ["mentorx-3", "MentorX", "Automation", 230],
  ["vavencloud-cover", "VavenCloud", "Cloud Platform", 195],
  ["vavencloud-1", "VavenCloud", "Authentication", 195],
  ["vavencloud-2", "VavenCloud", "Infrastructure", 200],
  ["vavencloud-3", "VavenCloud", "Security", 205],
  ["rag-cover", "AI RAG Chatbot", "Enterprise Assistant", 250],
  ["rag-1", "AI RAG", "Document Chat", 250],
  ["rag-2", "AI RAG", "Semantic Search", 255],
  ["rag-3", "AI RAG", "Citations", 260],
  ["erp-cover", "Manufacturing ERP", "Operations Platform", 180],
  ["erp-1", "ERP", "Inventory", 180],
  ["erp-2", "ERP", "Production", 185],
  ["erp-3", "ERP", "Analytics", 190],
  ["rmi-cover", "Restaurant MI", "Market Intelligence", 170],
  ["rmi-1", "Restaurant MI", "Competitor Map", 170],
  ["rmi-2", "Restaurant MI", "Pricing", 175],
  ["rmi-3", "Restaurant MI", "Reports", 178],
];

for (const [name, title, sub, hue] of projects) {
  fs.writeFileSync(path.join("public/projects", `${name}.svg`), svg(title, sub, hue));
}

function avatar(initials, hue) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="hsl(${hue} 45% 35%)"/><stop offset="100%" stop-color="hsl(${hue} 50% 20%)"/>
  </linearGradient></defs>
  <rect width="200" height="200" rx="100" fill="url(#a)"/>
  <text x="100" y="118" text-anchor="middle" fill="white" font-family="Segoe UI, Arial" font-size="56" font-weight="700">${initials}</text>
</svg>`;
}

[
  ["avatar-1", "PM", 210],
  ["avatar-2", "JC", 200],
  ["avatar-3", "AR", 230],
  ["avatar-4", "MC", 190],
].forEach(([n, i, h]) => fs.writeFileSync(`public/avatars/${n}.svg`, avatar(i, h)));

function logo(name, hue) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="8" fill="hsl(${hue} 20% 18%)"/>
  <text x="80" y="26" text-anchor="middle" fill="hsl(${hue} 15% 80%)" font-family="Segoe UI, Arial" font-size="13" font-weight="600">${name}</text>
</svg>`;
}

[
  ["logo-1", "Northline", 210],
  ["logo-2", "Atlas", 200],
  ["logo-3", "Helix", 230],
  ["logo-4", "Forge", 190],
].forEach(([n, t, h]) => fs.writeFileSync(`public/logos/${n}.svg`, logo(t, h)));

const profile = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="p" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#p)"/>
  <circle cx="400" cy="380" r="160" fill="#334155"/>
  <circle cx="400" cy="340" r="70" fill="#94a3b8"/>
  <ellipse cx="400" cy="520" rx="120" ry="90" fill="#94a3b8"/>
  <text x="400" y="780" text-anchor="middle" fill="white" font-family="Segoe UI, Arial" font-size="36" font-weight="700">Divyam Singh</text>
  <text x="400" y="830" text-anchor="middle" fill="#94a3b8" font-family="Segoe UI, Arial" font-size="20">AI &amp; Full-Stack Engineer</text>
</svg>`;
fs.writeFileSync("public/profile.svg", profile);
fs.writeFileSync("public/og.svg", svg("Divyam Singh", "Senior AI & Full-Stack Software Engineer", 210));

fs.writeFileSync(
  "public/resume.pdf",
  "%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n4 0 obj\n<< /Length 68 >>\nstream\nBT /F1 24 Tf 72 720 Td (Divyam Singh - Resume Placeholder) Tj ET\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000266 00000 n \n0000000386 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n465\n%%EOF\n"
);

console.log("assets generated");
