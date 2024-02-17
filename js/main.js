// all
$(".toggler").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
});

// pane
$(".pane-open").click(function (e) {
  e.preventDefault();
  $("body").addClass("overflow-none");
  let paneId = $($(this)).attr("href");
  let currentPane = document.querySelector(paneId);
  if (!currentPane.classList.contains("show")) {
    $(".pane").removeClass("show");
    $(currentPane).addClass("show");
  } else {
    $(currentPane).removeClass("show");
    $("body").removeClass("overflow-none");
  }
});

// dropdown
document.addEventListener("DOMContentLoaded", function () {
  $(".dropdown-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("open");
    $(document).mouseup(function (e) {
      let item = $(".dropdown.open");
      if (item.has(e.target).length === 0) {
        item.removeClass("open");
      }
    });
  });
});

// fake-select
$(".fake-select__item").click(function () {
  $(this).parents(".fake-select").find(".fake-select__item").removeClass("active");
  $(this).addClass("active");
  $(this).parents(".fake-select").find(".fake-select__value").html(this.innerHTML);
  $(this).parents(".fake-select").removeClass("open");
});

// collapse
$(".collapse-link").click(function (e) {
  e.preventDefault();

  if ($(this).hasClass("active")) {
    $(this.getAttribute("href")).slideUp(300);
  } else {
    $(this.getAttribute("href")).slideDown(300);
  }

  $(this).toggleClass("active");
});

$(".search__open").click(function (e) {
  e.preventDefault();

  if (window.innerWidth > 768) {
    if ($(this).hasClass("active")) {
      $(this.getAttribute("href")).removeClass("show");
    } else {
      $(this.getAttribute("href")).addClass("show");
    }

    $(this).addClass("active");
    $(".search__close").addClass("active");
  } else {
    if ($(this).hasClass("active")) {
      $(this.getAttribute("href")).slideUp(300);
      $(".search__close").removeClass("active");
    } else {
      $(this.getAttribute("href")).slideDown(300);
      $(".search__close").addClass("active");
    }

    $(this).toggleClass("active");
  }
});

$(".search__close").click(function (e) {
  e.preventDefault();

  if (window.innerWidth > 768) {
    if ($(this).hasClass("active")) {
      $(this.getAttribute("href")).removeClass("show");
    } else {
      $(this.getAttribute("href")).addClass("show");
    }

    $(this).removeClass("active");
    $(".search__open").removeClass("active");
  } else {
    if ($(this).hasClass("active")) {
      $(this.getAttribute("href")).slideUp(300);
      $(".search__open").removeClass("active");
    } else {
      $(this.getAttribute("href")).slideDown(300);
      $(".search__open").addClass("active");

      $(this).toggleClass("active");
    }
  }
});

$(".faq-item__link").click(function (e) {
  $(this).parent().toggleClass("active");
});

// tabs
$(".tab-link").click(function (e) {
  e.preventDefault();
  $(this).parents(".tab-nav").find(".tab-link").removeClass("active");
  $(this).addClass("active");
  $(this).closest(".tab-section").find(".tab-pane").removeClass("active");
  $(this.getAttribute("href")).addClass("active");
});

$(".tab-link-main").click(function (e) {
  e.preventDefault();
  $(this).parents(".tab-nav").find(".tab-link-main").removeClass("active");
  $(this).addClass("active");
  $(this).parents(".tab-section").find(".tab-pane-main").removeClass("active");
  $(this.getAttribute("href")).addClass("active");
});

// up-link
let $page = $("html, body");
$(".up-link").click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    400
  );
  return false;
});

// modal
$(".modal-open").click(function (e) {
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $("body").removeClass("modal-open");
  $("body").addClass("modal-open");
});
$(".modal").mousedown(function (e) {
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for (let elem of closeLinks) {
    if (e.target == elem) {
      $(this).removeClass("show");
      $("body").removeClass("modal-open");
      $(".login__mobile-link").removeClass("active");
    }
  }
  for (let elem of modalsGroup) {
    if (e.target == elem) {
      $(this).removeClass("show");
      $("body").removeClass("modal-open");
      $(".login__mobile-link").removeClass("active");
    }
  }
});

// // home
$(".login__mobile-link").click(function (e) {
  e.preventDefault();
  $(".btn-menu").removeClass("active");
  $(this).toggleClass("active");
});

$(".btn-menu").click(function (e) {
  e.preventDefault();
  $(".login__mobile-link").removeClass("active");
  $(this).toggleClass("active");
});

new Swiper(".logos-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 76,
    },
  },
  navigation: {
    nextEl: ".logos-next",
    prevEl: ".logos-prev",
  },
});

new Swiper(".top-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});

// trades
$(".radio-list__item").click(function () {
  $(this).parents(".radio-list").find(".radio-list__item").removeClass("active");
  $(this).addClass("active");
});

// range
let slider = document.querySelector("#range");
let inputNumber = document.querySelector("#range-value");

noUiSlider.create(slider, {
  connect: [true, false],
  range: {
    min: 10,
    max: 1000000,
  },
  start: [100000],
});

slider.noUiSlider.on("update", function (values, handle) {
  inputNumber.value = Math.ceil(values[handle]) + " $";
});

inputNumber.addEventListener("change", function () {
  slider.noUiSlider.set(this.value);
});

let sliderWithdraw = document.querySelector("#range-withdraw");

if (sliderWithdraw) {
  let inputNumberWithdraw = document.querySelector("#range-value-withdraw");

  noUiSlider.create(sliderWithdraw, {
    connect: [true, false],
    range: {
      min: 10,
      max: 1000000,
    },
    start: [100000],
  });

  sliderWithdraw.noUiSlider.on("update", function (values, handle) {
    inputNumberWithdraw.value = Math.ceil(values[handle]) + " $";
  });

  inputNumberWithdraw.addEventListener("change", function () {
    sliderWithdraw.noUiSlider.set(this.value);
  });
}

// referrals
$(".copy-link").click(function (e) {
  e.preventDefault();
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(this.getAttribute("href")).val()).select();
  document.execCommand("copy");
  $temp.remove();
});

new Swiper(".tag-slider", {
  freeMode: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    993: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 8,
    },
  },
  navigation: {
    nextEl: ".swiper-next",
  },
});

// incomeGraph
let incomeGraph30options = {
  series: [
    {
      name: "series1",
      data: [295, 205, 380, 250, 470, 340],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 20,
      left: 0,
      blur: 5,
      color: "#00C7FF",
      opacity: 0.2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "date",
    categories: ["5", "10", "15", "20", "25", "30", "35"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="tooltip__num">' +
        series[seriesIndex][dataPointIndex] +
        " $" +
        "</div>" +
        '<div class="d-flex align-items-center"><span class="text_size-xs">6.42%</span><span class="icon icon-arrow-up"></span></div>' +
        "</div>"
      );
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#00C7FF",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#583AFB",
          opacity: 1,
        },
      ],
    },
  },
};
let incomeGraph30 = new ApexCharts(document.querySelector("#chart-incomeGraph-30"), incomeGraph30options);
if (document.querySelector("#chart-incomeGraph-30")) {
  incomeGraph30.render();
}

let incomeGraph60options = {
  series: [
    {
      name: "series1",
      data: [295, 205, 380, 250, 470, 340, 295, 205, 380, 250, 470, 340],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 20,
      left: 0,
      blur: 5,
      color: "#00C7FF",
      opacity: 0.2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "date",
    categories: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="tooltip__num">' +
        series[seriesIndex][dataPointIndex] +
        " $" +
        "</div>" +
        '<div class="d-flex align-items-center"><span class="text_size-xs">6.42%</span><span class="icon icon-arrow-up"></span></div>' +
        "</div>"
      );
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#00C7FF",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#583AFB",
          opacity: 1,
        },
      ],
    },
  },
};
var incomeGraph60 = new ApexCharts(document.querySelector("#chart-incomeGraph-60"), incomeGraph60options);
if (document.querySelector("#chart-incomeGraph-60")) {
  incomeGraph60.render();
}

let incomeGraph90options = {
  series: [
    {
      name: "series1",
      data: [295, 205, 380, 250, 470, 340, 295, 205, 380, 250, 470, 340, 295, 205, 380, 250, 470, 340],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 20,
      left: 0,
      blur: 5,
      color: "#00C7FF",
      opacity: 0.2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "date",
    categories: [
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55",
      "60",
      "65",
      "70",
      "75",
      "80",
      "85",
      "90",
    ],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="tooltip__num">' +
        series[seriesIndex][dataPointIndex] +
        " $" +
        "</div>" +
        '<div class="d-flex align-items-center"><span class="text_size-xs">6.42%</span><span class="icon icon-arrow-up"></span></div>' +
        "</div>"
      );
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#00C7FF",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#583AFB",
          opacity: 1,
        },
      ],
    },
  },
};
let incomeGraph90 = new ApexCharts(document.querySelector("#chart-incomeGraph-90"), incomeGraph90options);
if (document.querySelector("#chart-incomeGraph-90")) {
  incomeGraph90.render();
}

// percentage-income
let percentageIncomeoptions = {
  series: [50, 35, 15],
  chart: {
    type: "polarArea",
  },
  labels: ["Weblancer", "CryptoMain", "Binance"],
  stroke: {
    colors: ["#fff"],
  },
  fill: {
    opacity: 1,
    colors: ["#583AFB", "#00C7FF", "#C629FD"],
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    background: {
      enabled: false,
    },
    style: {
      fontWeight: 700,
      colors: ["#2A3144"],
      fontSize: 16,
    },
  },
  yaxis: {
    show: false,
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + "%";
      },
    },
  },
};
let chart = new ApexCharts(document.querySelector("#percentage-income"), percentageIncomeoptions);

if (document.querySelector("#percentage-income")) {
  chart.render();
}

// incomeTotal
let incomeTotal30options = {
  series: [
    {
      name: "series1",
      data: [195, 405, 220, 550],
    },
  ],
  chart: {
    height: 240,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 15,
      left: 0,
      blur: 5,
      color: "#583AFB",
      opacity: 0.2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "10", "20", "30"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="tooltip__num">' +
        series[seriesIndex][dataPointIndex] +
        " $" +
        "</div>" +
        '<div class="d-flex align-items-center"><span class="text_size-xs">6.42%</span><span class="icon icon-arrow-up"></span></div>' +
        "</div>"
      );
    },
  },
  stroke: {
    curve: "smooth",
    colors: ["#583AFB"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#583AFB",
          opacity: 0.2,
        },
        {
          offset: 100,
          color: "#583AFB",
          opacity: 0,
        },
      ],
    },
  },
};
var incomeTotal30 = new ApexCharts(document.querySelector("#chart-incomeTotal-30"), incomeTotal30options);
if (document.querySelector("#chart-incomeTotal-30")) {
  incomeTotal30.render();
}

let incomeTotal60options = {
  series: [
    {
      name: "series1",
      data: [195, 405, 220, 550, 100, 600, 550],
    },
  ],
  chart: {
    height: 240,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 15,
      left: 0,
      blur: 5,
      color: "#583AFB",
      opacity: 0.2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "10", "20", "30", "40", "50", "60"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="tooltip__num">' +
        series[seriesIndex][dataPointIndex] +
        " $" +
        "</div>" +
        '<div class="d-flex align-items-center"><span class="text_size-xs">6.42%</span><span class="icon icon-arrow-up"></span></div>' +
        "</div>"
      );
    },
  },
  stroke: {
    curve: "smooth",
    colors: ["#583AFB"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#583AFB",
          opacity: 0.2,
        },
        {
          offset: 100,
          color: "#583AFB",
          opacity: 0,
        },
      ],
    },
  },
};
let incomeTotal60 = new ApexCharts(document.querySelector("#chart-incomeTotal-60"), incomeTotal60options);
if (document.querySelector("#chart-incomeTotal-60")) {
  incomeTotal60.render();
}

let incomeTotal90options = {
  series: [
    {
      name: "series1",
      data: [195, 405, 220, 550, 300, 700, 220, 350, 600, 420],
    },
  ],
  chart: {
    height: 240,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 15,
      left: 0,
      blur: 5,
      color: "#583AFB",
      opacity: 0.2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="tooltip__num">' +
        series[seriesIndex][dataPointIndex] +
        " $" +
        "</div>" +
        '<div class="d-flex align-items-center"><span class="text_size-xs">6.42%</span><span class="icon icon-arrow-up"></span></div>' +
        "</div>"
      );
    },
  },
  stroke: {
    curve: "smooth",
    colors: ["#583AFB"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#583AFB",
          opacity: 0.2,
        },
        {
          offset: 100,
          color: "#583AFB",
          opacity: 0,
        },
      ],
    },
  },
};
let incomeTotal90 = new ApexCharts(document.querySelector("#chart-incomeTotal-90"), incomeTotal90options);
if (document.querySelector("#chart-incomeTotal-90")) {
  incomeTotal90.render();
}

// amountDeals
let amountDeals30options = {
  series: [
    {
      name: "series1",
      data: [200, 320, 450],
    },
  ],
  chart: {
    height: 240,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 15,
      left: 0,
      blur: 5,
      color: "#00C7FF",
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "15", "30"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="d-flex align-items-center tooltip__num">180 <span class="icon icon-candlestick icon-candlestick_sm"></span></div>' +
        '<span class="text_size-xs">' +
        series[seriesIndex][dataPointIndex] +
        " $</span>" +
        "</div>"
      );
    },
  },
  stroke: {
    curve: "smooth",
    colors: ["#00C7FF"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#00C7FF",
          opacity: 0.2,
        },
        {
          offset: 100,
          color: "#00C7FF",
          opacity: 0,
        },
      ],
    },
  },
};
let amountDeals30 = new ApexCharts(document.querySelector("#chart-amountDeals-30"), amountDeals30options);
if (document.querySelector("#chart-amountDeals-30")) {
  amountDeals30.render();
}

let amountDeals90options = {
  series: [
    {
      name: "series1",
      data: [200, 320, 450, 500],
    },
  ],
  chart: {
    height: 240,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 15,
      left: 0,
      blur: 5,
      color: "#00C7FF",
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "30", "60", "90"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="d-flex align-items-center tooltip__num">180 <span class="icon icon-candlestick icon-candlestick_sm"></span></div>' +
        '<span class="text_size-xs">' +
        series[seriesIndex][dataPointIndex] +
        " $</span>" +
        "</div>"
      );
    },
  },
  stroke: {
    curve: "smooth",
    colors: ["#00C7FF"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#00C7FF",
          opacity: 0.2,
        },
        {
          offset: 100,
          color: "#00C7FF",
          opacity: 0,
        },
      ],
    },
  },
};
let amountDeals90 = new ApexCharts(document.querySelector("#chart-amountDeals-90"), amountDeals90options);
if (document.querySelector("#amountDeals-90")) {
  amountDeals90.render();
}

let amountDeals180options = {
  series: [
    {
      name: "series1",
      data: [200, 320, 450, 500, 550, 400, 600],
    },
  ],
  chart: {
    height: 240,
    type: "area",

    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 15,
      left: 0,
      blur: 5,
      color: "#00C7FF",
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "30", "60", "90", "120", "150", "180"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="tooltip">' +
        '<div class="d-flex align-items-center tooltip__num">180 <span class="icon icon-candlestick icon-candlestick_sm"></span></div>' +
        '<span class="text_size-xs">' +
        series[seriesIndex][dataPointIndex] +
        " $</span>" +
        "</div>"
      );
    },
  },
  stroke: {
    curve: "smooth",
    colors: ["#00C7FF"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      shade: "dark",
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#00C7FF",
          opacity: 0.2,
        },
        {
          offset: 100,
          color: "#00C7FF",
          opacity: 0,
        },
      ],
    },
  },
};
let amountDeals180 = new ApexCharts(document.querySelector("#chart-amountDeals-180"), amountDeals180options);
if (document.querySelector("#chart-amountDeals-180")) {
  amountDeals180.render();
}

// calc-range
let sliderCalc = document.querySelector("#calc-range");
let inputNumberCalc = document.querySelector("#calc-range-value");
let currency = "$";

if (sliderCalc) {
  noUiSlider.create(sliderCalc, {
    connect: [true, false],
    range: {
      min: 10,
      max: 100000,
    },
    start: [50000],
  });

  sliderCalc.noUiSlider.on("update", function (values, handle) {
    inputNumberCalc.value = Math.ceil(values[handle]) + ` ${currency}`;
  });

  inputNumberCalc.addEventListener("change", function () {
    sliderCalc.noUiSlider.set(this.value);
  });
}

$(".currency-link").click(function (e) {
  e.preventDefault();
  $(this).parents(".btn-nav").find(".currency-link").removeClass("active");
  $(this).addClass("active");
  currency = this.dataset.currency;
});

// historyDeals
let historyDeals30options = {
  series: [
    {
      name: "",
      data: [
        2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18, 20, 25, 19.8, -40, -50, -60, -43.3,
        -18.6, -48.6, -41.1, -61.1,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 245,
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -1000,
            to: 0,
            color: "#00C7FF",
          },
          {
            from: 0,
            to: 100,
            color: "#583AFB",
          },
        ],
      },
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2021-10-01",
      "2021-10-02",
      "2021-10-03",
      "2021-10-04",
      "2021-10-05",
      "2021-10-06",
      "2021-10-07",
      "2021-10-08",
      "2021-10-09",
      "2021-10-10",
      "2021-10-11",
      "2021-10-12",
      "2021-10-13",
      "2021-10-14",
      "2021-10-15",
      "2021-10-16",
      "2021-10-17",
      "2021-10-18",
      "2021-10-19",
      "2021-10-20",
      "2021-10-21",
      "2021-10-22",
      "2021-10-23",
      "2021-10-24",
      "2021-10-25",
      "2021-10-26",
      "2021-10-27",
      "2021-10-28",
      "2021-10-29",
      "2021-10-30",
    ],
    labels: {
      rotate: -90,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (y) {
        return y.toFixed(0) + "$";
      },
    },
    x: {
      show: true,
      format: "dd MMM yyyy",
      formatter: undefined,
    },
  },
};

let historyDeals30 = new ApexCharts(document.querySelector("#chart-historyDeals-30"), historyDeals30options);
if (document.querySelector("#chart-historyDeals-30")) {
  historyDeals30.render();
}

let historyDeals90options = {
  series: [
    {
      name: "",
      data: [
        2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18, 20, 25, 19.8, -40, -50, -60, -43.3,
        -18.6, -48.6, -41.1, -61.1, 2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18, 20, 25,
        19.8, -40, -50, -60, -43.3, -18.6, -48.6, -41.1, -61.1, 2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5,
        21, 10, 5, 7, 15, 18, 20, 25, 19.8, -40, -50, -60, -43.3, -18.6, -48.6, -41.1, -61.1,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 245,
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -1000,
            to: 0,
            color: "#00C7FF",
          },
          {
            from: 0,
            to: 100,
            color: "#583AFB",
          },
        ],
      },
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2021-10-01",
      "2021-10-02",
      "2021-10-03",
      "2021-10-04",
      "2021-10-05",
      "2021-10-06",
      "2021-10-07",
      "2021-10-08",
      "2021-10-09",
      "2021-10-10",
      "2021-10-11",
      "2021-10-12",
      "2021-10-13",
      "2021-10-14",
      "2021-10-15",
      "2021-10-16",
      "2021-10-17",
      "2021-10-18",
      "2021-10-19",
      "2021-10-20",
      "2021-10-21",
      "2021-10-22",
      "2021-10-23",
      "2021-10-24",
      "2021-10-25",
      "2021-10-26",
      "2021-10-27",
      "2021-10-28",
      "2021-10-29",
      "2021-10-30",
      "2021-11-01",
      "2021-11-02",
      "2021-11-03",
      "2021-11-04",
      "2021-11-05",
      "2021-11-06",
      "2021-11-07",
      "2021-11-08",
      "2021-11-09",
      "2021-11-10",
      "2021-11-11",
      "2021-11-12",
      "2021-11-13",
      "2021-11-14",
      "2021-11-15",
      "2021-11-16",
      "2021-11-17",
      "2021-11-18",
      "2021-11-19",
      "2021-11-20",
      "2021-11-21",
      "2021-11-22",
      "2021-11-23",
      "2021-11-24",
      "2021-11-25",
      "2021-11-26",
      "2021-11-27",
      "2021-11-28",
      "2021-11-29",
      "2021-11-30",
      "2021-12-01",
      "2021-12-02",
      "2021-12-03",
      "2021-12-04",
      "2021-12-05",
      "2021-12-06",
      "2021-12-07",
      "2021-12-08",
      "2021-12-09",
      "2021-12-10",
      "2021-12-11",
      "2021-12-12",
      "2021-12-13",
      "2021-12-14",
      "2021-12-15",
      "2021-12-16",
      "2021-12-17",
      "2021-12-18",
      "2021-12-19",
      "2021-12-20",
      "2021-12-21",
      "2021-12-22",
      "2021-12-23",
      "2021-12-24",
      "2021-12-25",
      "2021-12-26",
      "2021-12-27",
      "2021-12-28",
      "2021-12-29",
      "2021-12-30",
    ],
    labels: {
      rotate: -90,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (y) {
        return y.toFixed(0) + "$";
      },
    },
    x: {
      show: true,
      format: "dd MMM yyyy",
      formatter: undefined,
    },
  },
};

let historyDeals90 = new ApexCharts(document.querySelector("#chart-historyDeals-90"), historyDeals90options);
if (document.querySelector("#chart-historyDeals-90")) {
  historyDeals90.render();
}

let historyDeals180options = {
  series: [
    {
      name: "",
      data: [
        2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18, 20, 25, 19.8, -40, -50, -60, -43.3,
        -18.6, -48.6, -41.1, -61.1, 2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18, 20, 25,
        19.8, -40, -50, -60, -43.3, -18.6, -48.6, -41.1, -61.1, 2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5,
        21, 10, 5, 7, 15, 18, 20, 25, 19.8, -40, -50, -60, -43.3, -18.6, -48.6, -41.1, -61.1, 2, 10, 17, 21, -1, -20,
        -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18, 20, 25, 19.8, -40, -50, -60, -43.3, -18.6, -48.6, -41.1,
        -61.1, 2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18, 20, 25, 19.8, -40, -50, -60,
        -43.3, -18.6, -48.6, -41.1, -61.1, 2, 10, 17, 21, -1, -20, -35, -35, -23, -18, -12, 1, 5, 21, 10, 5, 7, 15, 18,
        20, 25, 19.8, -40, -50, -60, -43.3, -18.6, -48.6, -41.1, -61.1,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 245,
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -1000,
            to: 0,
            color: "#00C7FF",
          },
          {
            from: 0,
            to: 100,
            color: "#583AFB",
          },
        ],
      },
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2021-10-01",
      "2021-10-02",
      "2021-10-03",
      "2021-10-04",
      "2021-10-05",
      "2021-10-06",
      "2021-10-07",
      "2021-10-08",
      "2021-10-09",
      "2021-10-10",
      "2021-10-11",
      "2021-10-12",
      "2021-10-13",
      "2021-10-14",
      "2021-10-15",
      "2021-10-16",
      "2021-10-17",
      "2021-10-18",
      "2021-10-19",
      "2021-10-20",
      "2021-10-21",
      "2021-10-22",
      "2021-10-23",
      "2021-10-24",
      "2021-10-25",
      "2021-10-26",
      "2021-10-27",
      "2021-10-28",
      "2021-10-29",
      "2021-10-30",
      "2021-11-01",
      "2021-11-02",
      "2021-11-03",
      "2021-11-04",
      "2021-11-05",
      "2021-11-06",
      "2021-11-07",
      "2021-11-08",
      "2021-11-09",
      "2021-11-10",
      "2021-11-11",
      "2021-11-12",
      "2021-11-13",
      "2021-11-14",
      "2021-11-15",
      "2021-11-16",
      "2021-11-17",
      "2021-11-18",
      "2021-11-19",
      "2021-11-20",
      "2021-11-21",
      "2021-11-22",
      "2021-11-23",
      "2021-11-24",
      "2021-11-25",
      "2021-11-26",
      "2021-11-27",
      "2021-11-28",
      "2021-11-29",
      "2021-11-30",
      "2021-12-01",
      "2021-12-02",
      "2021-12-03",
      "2021-12-04",
      "2021-12-05",
      "2021-12-06",
      "2021-12-07",
      "2021-12-08",
      "2021-12-09",
      "2021-12-10",
      "2021-12-11",
      "2021-12-12",
      "2021-12-13",
      "2021-12-14",
      "2021-12-15",
      "2021-12-16",
      "2021-12-17",
      "2021-12-18",
      "2021-12-19",
      "2021-12-20",
      "2021-12-21",
      "2021-12-22",
      "2021-12-23",
      "2021-12-24",
      "2021-12-25",
      "2021-12-26",
      "2021-12-27",
      "2021-12-28",
      "2021-12-29",
      "2021-12-30",
      "2022-01-01",
      "2022-01-02",
      "2022-01-03",
      "2022-01-04",
      "2022-01-05",
      "2022-01-06",
      "2022-01-07",
      "2022-01-08",
      "2022-01-09",
      "2022-01-10",
      "2022-01-11",
      "2022-01-12",
      "2022-01-13",
      "2022-01-14",
      "2022-01-15",
      "2022-01-16",
      "2022-01-17",
      "2022-01-18",
      "2022-01-19",
      "2022-01-20",
      "2022-01-21",
      "2022-01-22",
      "2022-01-23",
      "2022-01-24",
      "2022-01-25",
      "2022-01-26",
      "2022-01-27",
      "2022-01-28",
      "2022-01-29",
      "2022-01-30",
      "2022-02-01",
      "2022-02-02",
      "2022-02-03",
      "2022-02-04",
      "2022-02-05",
      "2022-02-06",
      "2022-02-07",
      "2022-02-08",
      "2022-02-09",
      "2022-02-10",
      "2022-02-11",
      "2022-02-12",
      "2022-02-13",
      "2022-02-14",
      "2022-02-15",
      "2022-02-16",
      "2022-02-17",
      "2022-02-18",
      "2022-02-19",
      "2022-02-20",
      "2022-02-21",
      "2022-02-22",
      "2022-02-23",
      "2022-02-24",
      "2022-02-25",
      "2022-02-26",
      "2022-02-27",
      "2022-02-28",
      "2022-02-29",
      "2022-02-30",
      "2022-03-01",
      "2022-03-02",
      "2022-03-03",
      "2022-03-04",
      "2022-03-05",
      "2022-03-06",
      "2022-03-07",
      "2022-03-08",
      "2022-03-09",
      "2022-03-10",
      "2022-03-11",
      "2022-03-12",
      "2022-03-13",
      "2022-03-14",
      "2022-03-15",
      "2022-03-16",
      "2022-03-17",
      "2022-03-18",
      "2022-03-19",
      "2022-03-20",
      "2022-03-21",
      "2022-03-22",
      "2022-03-23",
      "2022-03-24",
      "2022-03-25",
      "2022-03-26",
      "2022-03-27",
      "2022-03-28",
      "2022-03-29",
      "2022-03-30",
    ],
    labels: {
      rotate: -90,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (y) {
        return y.toFixed(0) + "$";
      },
    },
    x: {
      show: true,
      format: "dd MMM yyyy",
      formatter: undefined,
    },
  },
};

let historyDeals180 = new ApexCharts(document.querySelector("#chart-historyDeals-180"), historyDeals180options);
if (document.querySelector("#chart-historyDeals-180")) {
  historyDeals180.render();
}

// graph
let graphOptions = {
  series: [
    {
      name: "series1",
      data: [0, 235, 200, 0],
    },
  ],
  chart: {
    height: 100,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "10", "20", "30"],
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    colors: ["#583AFB"],
    width: 2,
  },
  yaxis: {
    labels: {
      formatter: function (value, index) {
        if (index === 0 || index === 3) {
          return value.toFixed(2); // Форматируйте значение как вам нужно
        }
        return "";
      },
      style: {
        colors: "#838D9B",
        fontSize: "8px",
      },
    },
  },
  fill: {
    colors: ["#583AFB"],
  },
};

let graphOptionsGold = {
  series: [
    {
      name: "series1",
      data: [0, 350, 15, 50, 150, 0],
    },
  ],
  chart: {
    height: 100,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "10", "20", "30", "40", "50"],
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    colors: ["#E4C471"],
    width: 2,
  },
  yaxis: {
    labels: {
      formatter: function (value, index) {
        if (index === 0 || index === 3) {
          return value.toFixed(2); // Форматируйте значение как вам нужно
        }
        return "";
      },
      style: {
        colors: "#838D9B",
        fontSize: "8px",
      },
    },
  },
  fill: {
    colors: ["#E4C471"],
  },
};

let graphOptionsSilver = {
  series: [
    {
      name: "series1",
      data: [0, 250, 200, 0],
    },
  ],
  chart: {
    height: 100,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "10", "20", "30"],
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    colors: ["#9DA0AD"],
    width: 2,
  },
  yaxis: {
    labels: {
      formatter: function (value, index) {
        if (index === 0 || index === 3) {
          return value.toFixed(2); // Форматируйте значение как вам нужно
        }
        return "";
      },
      style: {
        colors: "#838D9B",
        fontSize: "8px",
      },
    },
  },
  fill: {
    colors: ["#9DA0AD"],
  },
};

let graphOptionsBronze = {
  series: [
    {
      name: "series1",
      data: [0, 100, 250, 0],
    },
  ],
  chart: {
    height: 100,
    type: "area",
    fontFamily: "Roboto",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "date",
    categories: ["1", "10", "20", "30"],
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    colors: ["#DCB89E"],
    width: 2,
  },
  yaxis: {
    labels: {
      formatter: function (value, index) {
        if (index === 0 || index === 3) {
          return value.toFixed(2); // Форматируйте значение как вам нужно
        }
        return "";
      },
      style: {
        colors: "#838D9B",
        fontSize: "8px",
      },
    },
  },
  fill: {
    colors: ["#DCB89E"],
  },
};

let graphArr = document.querySelectorAll(".graph");

for (let item of graphArr) {
  if (item.closest(".trader-item_gold")) {
    var graph = new ApexCharts(item, graphOptionsGold);
    graph.render();
  } else if (item.closest(".trader-item_silver")) {
    var graph = new ApexCharts(item, graphOptionsSilver);
    graph.render();
  } else if (item.closest(".trader-item_bronze")) {
    var graph = new ApexCharts(item, graphOptionsBronze);
    graph.render();
  } else {
    var graph = new ApexCharts(item, graphOptions);
    graph.render();
  }
}

//table
$(".mobile-table").cardtable();
