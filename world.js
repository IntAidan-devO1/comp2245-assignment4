document.addEventListener("DOMContentLoaded", () => {
  const resultDiv = document.getElementById("result");
  const countryInput = document.getElementById("country");

  document.getElementById("lookup").addEventListener("click", () => {
    const country = countryInput.value.trim();
    let url = `world.php?country=${encodeURIComponent(country)}`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p style="color:red;">Error: ${error}</p>`;
      });
  });

  document.getElementById("lookup-cities").addEventListener("click", () => {
    const country = countryInput.value.trim();
    let url = `world.php?country=${encodeURIComponent(country)}&lookup=cities`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p style="color:red;">Error: ${error}</p>`;
      });
  });
});
