async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Call the async function
getStarship();
