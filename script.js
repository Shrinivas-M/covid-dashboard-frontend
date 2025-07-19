async function loadData() {
  const res = await fetch("https://your-backend.onrender.com/api/data");
  const data = await res.json();

  const dates = [];
  const indiaCases = [];

  data.forEach(entry => {
    if (entry.Country === "India") {
      dates.push(entry.Date);
      indiaCases.push(entry.New_Cases);
    }
  });

  new Chart(document.getElementById("covidChart"), {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'New Cases in India',
        data: indiaCases,
        borderColor: 'blue',
        fill: false
      }]
    }
  });
}

loadData();
