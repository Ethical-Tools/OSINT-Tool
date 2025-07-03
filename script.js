// IP Lookup
function lookupIP() {
  const ip = document.getElementById("ipInput").value;
  fetch(\`https://ipinfo.io/\${ip}/json?token=demo\`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("ipResult").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("ipResult").textContent = "Error fetching IP info.";
    });
}

// Email Breach Checker
function checkEmail() {
  const email = document.getElementById("emailInput").value;
  fetch(\`https://haveibeenpwned.com/api/v3/breachedaccount/\${email}\`, {
    headers: { 'hibp-api-key': 'YOUR_API_KEY_HERE' }
  })
  .then(response => {
    if (response.status === 200) {
      response.json().then(data => {
        document.getElementById("emailResult").textContent = \`Breached in: \${data.map(item => item.Name).join(", ")}\`;
      });
    } else {
      document.getElementById("emailResult").textContent = "No breaches found.";
    }
  })
  .catch(error => {
    document.getElementById("emailResult").textContent = "Error fetching breach info.";
  });
}

// Username Search (Social Media)
function searchUsername() {
  const username = document.getElementById("userInput").value;
  fetch(\`https://api.social-searcher.com/api/v2/search/?query=\${username}&key=YOUR_API_KEY\`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("userResult").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("userResult").textContent = "Error fetching username info.";
    });
}

// Phone Number Lookup
function lookupPhone() {
  const number = document.getElementById("phoneInput").value;
  fetch(\`https://numverify.com/lookup/\${number}\`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("phoneResult").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("phoneResult").textContent = "Error fetching phone info.";
    });
}

// Domain WHOIS Lookup
function lookupDomain() {
  const domain = document.getElementById("domainInput").value;
  fetch(\`https://api.api-ninjas.com/v1/whois?domain=\${domain}\`, {
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

// DNS Records Lookup
function lookupDNS() {
  const domain = document.getElementById("dnsInput").value;
  fetch(\`https://api.dnslookup.io/\${domain}/json\`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("dnsResult").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("dnsResult").textContent = "Error fetching DNS info.";
    });
}

// Pastebin Keyword Monitor
function searchPastebin() {
  const keyword = document.getElementById("pasteInput").value;
  fetch(\`https://pastebin.com/api/api_post.php?api_dev_key=YOUR_API_KEY_HERE&keyword=\${keyword}\`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("pasteResult").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("pasteResult").textContent = "Error fetching pastebin info.";
    });
}

// Metadata Viewer
function viewMetadata() {
  const file = document.getElementById("fileInput").files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    const exif = EXIF.readFromBinaryFile(reader.result);
    document.getElementById("metadataResult").textContent = JSON.stringify(exif, null, 2);
  };
  reader.readAsArrayBuffer(file);
}
