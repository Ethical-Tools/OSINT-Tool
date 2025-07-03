function lookupIP() {
  const ip = document.getElementById("ipInput").value;
  fetch(`https://ipinfo.io/${ip}/json?token=demo`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("ipResult").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("ipResult").textContent = "Error fetching IP info.";
    });
}

function checkEmail() {
  const email = document.getElementById("emailInput").value;
  window.open(`https://haveibeenpwned.com/unifiedsearch/${email}`, "_blank");
}

function searchUsername() {
  const username = document.getElementById("userInput").value;
  window.open(`https://whatsmyname.app/?q=${username}`, "_blank");
}

function lookupPhone() {
  const number = document.getElementById("phoneInput").value;
  window.open(`https://numverify.com/lookup/${number}`, "_blank");
}

function lookupDomain() {
  const domain = document.getElementById("domainInput").value;
  fetch(`https://api.api-ninjas.com/v1/whois?domain=${domain}`, {
    headers: { 'X-Api-Key': 'YOUR_API_KEY_HERE' }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("domainResult").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("domainResult").textContent = "Error fetching domain info.";
    });
}
