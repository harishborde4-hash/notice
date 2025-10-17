// script.js - small interactions for the exam notice

document.addEventListener("DOMContentLoaded", function () {
  const streamSelect = document.getElementById("streamSelect");
  const printBtn = document.getElementById("printBtn");
  const table = document.getElementById("examTable");

  // Mapping of column class names for each stream
  const streamMap = {
    all: [],
    science: ["col-commerce", "col-arts"],
    commerce: ["col-science", "col-arts"],
    arts: ["col-science", "col-commerce"]
  };

  // Utility: set hidden class on columns that are not current stream
  function applyStreamFilter(stream) {
    // First, clear all hidden
    const allCells = table.querySelectorAll(".cell");
    allCells.forEach((c) => c.classList.remove("hidden-col"));

    if (stream === "all") {
      return;
    }

    const hideClasses = streamMap[stream] || [];
    hideClasses.forEach(hideClass => {
      table.querySelectorAll("." + hideClass).forEach(cell => {
        cell.classList.add("hidden-col");
      });
    });
  }

  // When selection changes, apply a filter
  streamSelect.addEventListener("change", function (e) {
    const val = e.target.value;
    applyStreamFilter(val);
  });

  // Print button handler - opens print dialog
  printBtn.addEventListener("click", function () {
    window.print();
  });

  // Accessibility: keyboard shortcut to toggle stream (S / C / A / L)
  document.addEventListener("keydown", function (e) {
    if (e.altKey && !e.shiftKey && !e.ctrlKey) {
      const key = e.key.toLowerCase();
      if (key === "s") streamSelect.value = "science";
      if (key === "c") streamSelect.value = "commerce";
      if (key === "a") streamSelect.value = "arts";
      if (key === "l") streamSelect.value = "all"; // l for 'all' (like 'list')
      applyStreamFilter(streamSelect.value);
    }
  });

  // initial state: all streams visible
  applyStreamFilter("all");
});
