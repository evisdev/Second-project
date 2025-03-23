const totalItemsSold = document.querySelector(".total-items-sold span");
const totalIncome = document.querySelector(".total-income");

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  populateEarningsData();
  renderChart();
});

function populateEarningsData() {
  const selectedArtistName = localStorage.getItem("selectedArtistName");
  const selectedArtistData = artistItems.find(
    (item) => item.artist === selectedArtistName
  );

  if (selectedArtistData) {
    const totalItemsCount = artistItems.filter(
      (item) => item.artist === selectedArtistName
    ).length;
    const soldItemsCount = artistItems.filter(
      (item) => item.artist === selectedArtistName && item.dateSold !== null
    ).length;
    let totalIncomeCount = 0;
    artistItems.forEach((item) => {
      if (item.artist === selectedArtistName && item.dateSold !== null) {
        totalIncomeCount += item.priceSold;
      }
    });

    totalItemsSold.textContent = `${soldItemsCount}/${totalItemsCount}`;
    totalIncome.textContent = `$${totalIncomeCount}`;
  } else {
    totalItemsSold.textContent = "0/0";
    totalIncome.textContent = "$0";
  }
}

//Chart method
let myChart = null;

const array = JSON.parse(localStorage.getItem("artistItems"));
const selectedArtistName = localStorage.getItem("selectedArtistName");
const dateSoldArray = getDateSoldByArtist(array, selectedArtistName);

function getDateSoldByArtist(array, selectedArtistName) {
  const dateSoldArray = array
    .filter(
      (item) => item.artist === selectedArtistName && item.dateSold !== null
    )
    .map((item) => item.dateSold);

  return dateSoldArray.map((dateSold) => dateSold.slice(0, 10));
}

const buttons = document.querySelectorAll(".income-days .button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

let dateRange = 14;

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const clickedButton = event.target;
  dateRange = +clickedButton.textContent.split(" ")[0];
  if (isNaN(dateRange)) {
    dateRange = 12;
  }

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  clickedButton.classList.add("active");

  renderChart();
}

function renderChart() {
  const ctx = document.getElementById("myChart").getContext("2d");

  const filteredDateSoldArray = dateSoldArray.slice(0, dateRange);

  let dateLabels = [];
  let data = [];

  if (dateRange === 12) {
    const monthlyCounts = Array(12).fill(0);
    dateSoldArray.forEach((dateSold) => {
      const [_, month] = dateSold.split("-");
      const monthIndex = parseInt(month) - 1;
      monthlyCounts[monthIndex]++;
    });
    data = [...monthlyCounts];

    const currentYear = new Date().getFullYear();
    for (let month = 0; month < 12; month++) {
      const monthName = new Date(currentYear, month).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "long" }
      );
      dateLabels.push(monthName);
    }
  } else {
    for (let dayOffset = dateRange - 1; dayOffset >= 0; dayOffset--) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - dayOffset);
      dateLabels.push(currentDate.toISOString().slice(0, 10));
    }
    data = dateLabels.map(
      (label) =>
        filteredDateSoldArray.filter(
          (dateSold) => dateSold && dateSold === label
        ).length
    );
  }

  /* Chart configs */
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dateLabels,
      datasets: [
        {
          label: "# Amount",
          data: data,
          backgroundColor: ["#A16A5E"],
          hoverBackgroundColor: ["#D44C2E"],
          borderWidth: 0,
          barPercentage: 0.6,
          categoryPercentage: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            precision: 0,
            autoSkip: true,
            callback: function (value, index, values) {
              return value;
            },
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            precision: 0,
            autoSkip: false,
            callback: function (value, index, values) {
              return value + 1;
            },
          },
        },
      },
      indexAxis: "y",
    },
  });
}
