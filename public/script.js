fetch('/api/countries')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('countries');
    container.innerHTML = '';
    data.forEach(country => {
      const div = document.createElement('div');
      div.className = 'country';
      div.innerHTML = `
        <strong>${country.name.common}</strong><br>
        Capital: ${country.capital ? country.capital[0] : 'N/A'}<br>
        Región: ${country.region}
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('countries').innerText = 'Error al cargar países';
    console.error(err);
  });