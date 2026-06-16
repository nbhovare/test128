// Replace with your Azure App Service URL
const API_BASE = "https://hilariocantrell-a2cfgwaba8g6aud3.centralus-01.azurewebsites.net/";

async function getData() {
  try {
    const response = await fetch(`${API_BASE}/`);
    const data = await response.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById("output").textContent = "Error: " + error;
  }
}

async function getItem() {
  try {
    const response = await fetch(`${API_BASE}/items/42?q=test`);
    const data = await response.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById("output").textContent = "Error: " + error;
  }
}
