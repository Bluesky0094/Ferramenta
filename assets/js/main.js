(function () {
  var catalog = window.FerratekCatalog;

  if (!catalog) {
    return;
  }

  function setCurrentYear() {
    var yearTargets = document.querySelectorAll("#current-year");
    var year = new Date().getFullYear();

    yearTargets.forEach(function (target) {
      target.textContent = year;
    });
  }

  function initHomePage() {
    var categoryGrid = document.getElementById("category-grid");
    var featuredGrid = document.getElementById("featured-products");

    if (categoryGrid) {
      categoryGrid.innerHTML = catalog.categories
        .map(function (category) {
          return catalog.buildCategoryCard(category);
        })
        .join("");
    }

    if (featuredGrid) {
      featuredGrid.innerHTML = catalog.getFeaturedProducts()
        .map(function (product) {
          return catalog.buildProductCard(product, "compact");
        })
        .join("");
    }
  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".site-nav");

    if (!toggle || !nav) {
      return;
    }

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Apri menu di navigazione");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione");
    });

    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 780) {
        closeNav();
      }
    });
  }

  function updateFilterButtons(activeCategory) {
    var buttons = document.querySelectorAll(".filter-chip");

    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-filter") === activeCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function updateCatalogStatus(activeCategory, count) {
    var status = document.getElementById("catalog-status");
    if (!status) {
      return;
    }

    if (activeCategory === "all") {
      status.textContent = count + " prodotti in catalogo pronti da confrontare.";
      return;
    }

    var category = catalog.getCategoryById(activeCategory);
    if (!category) {
      status.textContent = count + " prodotti in catalogo pronti da confrontare.";
      return;
    }

    status.textContent = count + " articoli nel reparto " + category.label.toLowerCase() + ".";
  }

  function renderProductGrid(activeCategory) {
    var grid = document.getElementById("product-grid");
    if (!grid) {
      return;
    }

    var matchingProducts = catalog.getProductsByCategory(activeCategory);

    grid.innerHTML = matchingProducts
      .map(function (product) {
        return catalog.buildProductCard(product, "full");
      })
      .join("");

    updateFilterButtons(activeCategory);
    updateCatalogStatus(activeCategory, matchingProducts.length);
  }

  function initProductsPage() {
    var filterRow = document.getElementById("catalog-filters");
    if (!filterRow) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var requestedCategory = params.get("category");
    var isKnownCategory = catalog.categories.some(function (category) {
      return category.id === requestedCategory;
    });
    var activeCategory = isKnownCategory ? requestedCategory : "all";

    filterRow.innerHTML =
      catalog.buildAllFilterButton(activeCategory) +
      catalog.categories
        .map(function (category) {
          return catalog.buildFilterButton(category, activeCategory);
        })
        .join("");

    renderProductGrid(activeCategory);

    filterRow.addEventListener("click", function (event) {
      var button = event.target.closest(".filter-chip");
      if (!button) {
        return;
      }

      activeCategory = button.getAttribute("data-filter") || "all";
      renderProductGrid(activeCategory);

      var nextUrl = new URL(window.location.href);
      if (activeCategory === "all") {
        nextUrl.searchParams.delete("category");
      } else {
        nextUrl.searchParams.set("category", activeCategory);
      }
      window.history.replaceState({}, "", nextUrl);
    });
  }

  function clearFieldState(field) {
    field.removeAttribute("aria-invalid");
    var note = field.parentElement.querySelector(".field-note");
    if (note) {
      note.textContent = "";
    }
  }

  function setFieldError(field, message) {
    field.setAttribute("aria-invalid", "true");
    var note = field.parentElement.querySelector(".field-note");
    if (note) {
      note.textContent = message;
    }
  }

  function validateFormField(field) {
    var value = field.value.trim();
    var fieldName = field.getAttribute("name");

    clearFieldState(field);

    if (!value) {
      setFieldError(field, "Compila questo campo.");
      return false;
    }

    if (fieldName === "email") {
      var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!validEmail) {
        setFieldError(field, "Inserisci un indirizzo email valido.");
        return false;
      }
    }

    if (fieldName === "phone") {
      var validPhone = /^[+\d\s/-]{7,}$/.test(value);
      if (!validPhone) {
        setFieldError(field, "Inserisci un numero di telefono valido.");
        return false;
      }
    }

    return true;
  }

  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) {
      return;
    }

    var successMessage = document.getElementById("form-success");
    var fields = form.querySelectorAll("input[required], textarea[required]");

    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true") {
          validateFormField(field);
        }
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var firstInvalidField = null;
      var allValid = true;

      fields.forEach(function (field) {
        var valid = validateFormField(field);
        if (!valid) {
          allValid = false;
          if (!firstInvalidField) {
            firstInvalidField = field;
          }
        }
      });

      if (!allValid) {
        if (successMessage) {
          successMessage.hidden = true;
        }
        if (firstInvalidField) {
          firstInvalidField.focus();
        }
        return;
      }

      form.reset();
      fields.forEach(clearFieldState);
      if (successMessage) {
        successMessage.hidden = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");

    setCurrentYear();
    initMobileNav();
    initQuoteForm();

    if (page === "home") {
      initHomePage();
    }

    if (page === "products") {
      initProductsPage();
    }
  });
})();
