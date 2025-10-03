const API_URL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch Giphy data
fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Full Response Object:", data);
    console.log("First GIF object:", data.data[0]); 
    console.log("First GIF URL:", data.data[0].images.original.url); 
  })
  .catch(error => console.error("❌ Fetch error:", error));
