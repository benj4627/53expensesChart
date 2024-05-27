// Gemmer json data i variabel
let data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];
  
  // Får label og amount fra json
  let labels = data.map(item => item.day);
  let amount = data.map(item => item.amount);

  
  // Laver graf 
  let graphEl = document.querySelector('.graph'); 
  
  let graph = new Chart(graphEl, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: amount,
        backgroundColor: 'rgb(236, 119, 95)', // Adjust background color if needed
        border: '2px solid rgb(236, 119, 95)',
        label: '',
        borderRadius: '5',
      }]
    },
    options: {
        scales: {
          x: { 
            grid: { 
              display: false 
            },
            border: {
              display: false
            },
            ticks: {
              color: 'black' 
            }
          },
          y: { 
            grid: { 
              display: false 
            },
            border: {
              display: false
            },
            ticks: {
              display: false
            }
          }
        }
      }
  });

  //vælger HTML element og tildeler summen af amounts for "total this month"
  let totalEl = document.querySelector('.amountTotal') 
  let totalAmount = amount.reduce((acc, amount) => acc + amount, 0);
  
  totalEl.innerHTML = `<p class="amountTotal">$${totalAmount}</p>`
  