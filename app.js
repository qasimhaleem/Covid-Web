// API for this Project is "https://disease.sh/v3/covid-19/countries/"
const fetchData = async () => {
    const countryName = document.getElementById('countryInput').value;    
    const countryHeading = document.createElement('h1');
    countryHeading.textContent = countryName;
    document.getElementById('countryInput').value = '';

    const response = await fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`)
    const data = await response.json();
    return data
    // console.log(data);
}
const run = async () => {
    // Call Function 
    const obj = await fetchData();
    
    // Extracting the Desierd thing from Object
    const activCases = obj.active;
    const death = obj.deaths;
    const totalCases = obj.cases;
    const recovered = obj.recovered;
    const totalTests = obj.tests;
    const continent = obj.continent;

    // Setting values to the Cards
    document.getElementById('totalCases').textContent = totalCases;
    document.getElementById('activeCases').textContent = activCases;
    document.getElementById('recovered').textContent = recovered;
    document.getElementById('deaths').textContent = death;
    document.getElementById('totalTests').textContent = totalTests;
    document.getElementById('continent').textContent = continent;




}
