function searchCongress(query) {
  const url = `https://www.loc.gov/search/?q=${query}&fo=json`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
    });
}

window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
        searchCongress(searchFieldElement.value);
    };
}