(function () {
  var categories = [
    {
      id: "trapani",
      label: "Trapani",
      eyebrow: "Foratura e assemblaggio",
      description: "Trapani avvitatori compatti per posa, impiantistica e montaggi ricorrenti.",
      image: "images/staff/man-chooses-power-tool-hardware-store-minsk-belarus-267657052-2157193254.jpg",
    },
    {
      id: "avvitatori",
      label: "Avvitatori",
      eyebrow: "Coppia e velocita'",
      description: "Soluzioni snelle ad alta coppia per carpenteria leggera e serraggio intenso.",
      image: "images/staff/1702724789813-155983860.jpg",
    },
    {
      id: "perforazione",
      label: "Perforazione",
      eyebrow: "Muratura e calcestruzzo",
      description: "Martelli SDS+ pensati per installazioni, tassellature e manutenzione strutturale.",
      image: "images/staff/cfr_base_dewalt_charging_station_20230706-blog-3296940232.jpg",
    },
    {
      id: "fissaggio",
      label: "Fissaggio",
      eyebrow: "Posa rapida",
      description: "Chiodatrici cordless per rifiniture, rivestimenti e allestimenti in interno.",
      image: "images/prodotti/dewalt-12v-og-2458229247.jpg",
    },
    {
      id: "storage",
      label: "Storage",
      eyebrow: "Trasporto e ordine",
      description: "Organizer e casse robuste per tenere il materiale pronto e protetto.",
      image: "images/staff/dewalt-power-tool-cabinet-dwst82824-detail-view-3-2572166036.jpg",
    },
  ];

  var products = [
    {
      id: "ftx-180",
      name: "FTX 180 Compact Pro",
      category: "trapani",
      price: "229 EUR",
      tagline: "Trapano avvitatore 18V compatto per montaggi precisi e lavori quotidiani.",
      image: "images/prodotti/fc799334c0655666a73856ab43ad759e-2652985489.jpg",
      power_source: "Batteria XR",
      voltage: "18V",
      motor_type: "Brushless",
      weight: "1,6 kg",
      performance: "0-600 / 0-2.000 giri-min | 70 Nm",
      battery: "2 x 5,0 Ah incluse",
      use_case: "Installazioni, montaggio serramenti, impiantistica leggera.",
      included: "Valigetta rigida, caricatore rapido, gancio cintura.",
      availability: "Disponibile in showroom",
      featured: true,
    },
    {
      id: "ftx-188",
      name: "FTX 188 Impact Drive",
      category: "avvitatori",
      price: "249 EUR",
      tagline: "Avvitatore a impulsi rapido per serraggi continui su metallo e legno.",
      image: "images/prodotti/Ecomm_Large-DCF888B_1_d1af11f6-2b48-47af-9062-f557ee294163-1575172034.jpg",
      power_source: "Batteria XR",
      voltage: "18V",
      motor_type: "Brushless",
      weight: "1,3 kg",
      performance: "205 Nm | 0-3.250 colpi-min",
      battery: "2 x 4,0 Ah incluse",
      use_case: "Fissaggi strutturali, carpenteria leggera, tassellature veloci.",
      included: "Clip cintura, inserto starter, valigetta TSTAK.",
      availability: "Disponibile in 24 ore",
      featured: true,
    },
    {
      id: "ftx-260",
      name: "FTX 260 SDS Force",
      category: "perforazione",
      price: "389 EUR",
      tagline: "Martello perforatore SDS+ per forature ripetute su muratura e calcestruzzo.",
      image: "images/prodotti/Ecomm_Large-DCH293R2DH_1_386f8528-01bb-40ca-a2c3-7689b18df523-2554659119.jpg",
      power_source: "Batteria ProCore",
      voltage: "18V",
      motor_type: "Brushless ad alta efficienza",
      weight: "3,4 kg",
      performance: "2,8 J | 0-4.480 colpi-min",
      battery: "2 x 6,0 Ah incluse",
      use_case: "Foratura tasselli, canaline, installazioni in muratura piena.",
      included: "Impugnatura laterale, battuta di profondita', valigia.",
      availability: "Disponibile su ordinazione rapida",
      featured: true,
    },
    {
      id: "ftx-450",
      name: "FTX 450 FastFix",
      category: "fissaggio",
      price: "469 EUR",
      tagline: "Chiodatrice cordless per finiture pulite e posa veloce senza compressore.",
      image: "images/prodotti/Ecomm_Large-DCN45RNB_3-3177217992.jpg",
      power_source: "Batteria XR",
      voltage: "18V",
      motor_type: "Motore elettronico a colpo singolo",
      weight: "3,1 kg",
      performance: "Fino a 2 chiodi-sec | inclinazione 15 gradi",
      battery: "1 x 5,0 Ah inclusa",
      use_case: "Rifiniture, rivestimenti, posa pannelli e listelli.",
      included: "Custodia, punte di contatto, chiave di servizio.",
      availability: "Disponibile in showroom",
      featured: false,
    },
    {
      id: "ftx-stackbox-24",
      name: "FTX StackBox 24",
      category: "storage",
      price: "119 EUR",
      tagline: "Organizer modulare compatto per accessori, minuteria e consumabili da squadra.",
      image: "images/prodotti/Ecomm_Small-DWST08400_3-3873308411.jpg",
      power_source: "Nessuna alimentazione",
      voltage: "N/A",
      motor_type: "Scocca rinforzata IP54",
      weight: "4,8 kg",
      performance: "Capienza 24 L | chiusura a pressione rapida",
      battery: "N/A",
      use_case: "Trasporto di inserti, tasselli, viteria e accessori da furgone.",
      included: "Divisori modulari interni, maniglia superiore, agganci laterali.",
      availability: "Disponibile in showroom",
      featured: false,
    },
    {
      id: "ftx-sitecase-20",
      name: "FTX SiteCase 2.0",
      category: "storage",
      price: "139 EUR",
      tagline: "Cassetta porta utensili robusta per proteggere elettroutensili e kit di lavoro.",
      image: "images/prodotti/dewalt-dwst83345-1-tstak-2-0-ip54-powertool-storage-box-foam-insert-clipboard~5055995560232_01c_MP-3960760126.jpg",
      power_source: "Nessuna alimentazione",
      voltage: "N/A",
      motor_type: "Scocca composita antiurto",
      weight: "5,2 kg",
      performance: "Portata 30 kg | tenuta polvere e spruzzi",
      battery: "N/A",
      use_case: "Trasporto in cantiere di trapani, batterie e utensili manuali.",
      included: "Vassoio interno, guarnizione, chiusure metalliche rinforzate.",
      availability: "Disponibile in 24 ore",
      featured: false,
    },
  ];

  function getCategoryById(categoryId) {
    return categories.find(function (category) {
      return category.id === categoryId;
    });
  }

  function getCategoryCount(categoryId) {
    return products.filter(function (product) {
      return product.category === categoryId;
    }).length;
  }

  function getFeaturedProducts() {
    return products.filter(function (product) {
      return product.featured;
    });
  }

  function getProductsByCategory(categoryId) {
    if (!categoryId || categoryId === "all") {
      return products.slice();
    }

    return products.filter(function (product) {
      return product.category === categoryId;
    });
  }

  function buildCategoryCard(category) {
    return [
      '<a class="category-card category-card-' + category.id + '" data-category="' + category.id + '" data-reveal href="products.html?category=' + category.id + '">',
      '  <div class="category-card-image">',
      '    <img src="' + category.image + '" alt="' + category.label + '" loading="lazy" />',
      "  </div>",
      '  <div class="category-card-copy">',
      '    <p class="eyebrow">' + category.eyebrow + "</p>",
      "    <h3>" + category.label + "</h3>",
      "    <p>" + category.description + "</p>",
      '    <span class="category-meta">' + getCategoryCount(category.id) + " articoli</span>",
      "  </div>",
      "</a>",
    ].join("");
  }

  function buildFilterButton(category, activeId) {
    var pressed = category.id === activeId ? "true" : "false";
    var activeClass = category.id === activeId ? " is-active" : "";

    return [
      '<button class="filter-chip' + activeClass + '" type="button" data-filter="' + category.id + '" aria-pressed="' + pressed + '">',
      category.label,
      "</button>",
    ].join("");
  }

  function buildAllFilterButton(activeId) {
    var pressed = activeId === "all" ? "true" : "false";
    var activeClass = activeId === "all" ? " is-active" : "";

    return [
      '<button class="filter-chip' + activeClass + '" type="button" data-filter="all" aria-pressed="' + pressed + '">',
      "Tutti",
      "</button>",
    ].join("");
  }

  function buildCompactSpecs(product) {
    return [
      '<li><strong>' + product.voltage + "</strong><span>Alimentazione</span></li>",
      '<li><strong>' + product.motor_type + "</strong><span>Motore</span></li>",
      '<li><strong>' + product.weight + "</strong><span>Peso</span></li>",
    ].join("");
  }

  function buildFullSpecs(product) {
    return [
      "<li><span>Alimentazione</span><strong>" + product.power_source + "</strong></li>",
      "<li><span>Tensione</span><strong>" + product.voltage + "</strong></li>",
      "<li><span>Motore</span><strong>" + product.motor_type + "</strong></li>",
      "<li><span>Peso</span><strong>" + product.weight + "</strong></li>",
      "<li><span>Prestazioni</span><strong>" + product.performance + "</strong></li>",
      "<li><span>Batteria</span><strong>" + product.battery + "</strong></li>",
      "<li><span>Dotazione</span><strong>" + product.included + "</strong></li>",
    ].join("");
  }

  function buildProductCard(product, variant) {
    var category = getCategoryById(product.category);
    var compact = variant === "compact";
    var cardClass = compact ? "product-card compact" : "product-card";

    return [
      '<article class="' + cardClass + '" data-category="' + product.category + '" data-product-id="' + product.id + '" data-reveal>',
      '  <div class="product-image-wrap">',
      '    <img src="' + product.image + '" alt="' + product.name + '" loading="lazy" />',
      '    <span class="product-category">' + category.label + "</span>",
      "  </div>",
      '  <div class="product-card-body">',
      '    <div class="product-topline">',
      '      <p class="eyebrow">' + category.eyebrow + "</p>",
      '      <span class="price-tag">' + product.price + "</span>",
      "    </div>",
      "    <h3>" + product.name + "</h3>",
      '    <p class="product-tagline">' + product.tagline + "</p>",
      compact ? '    <ul class="compact-specs">' + buildCompactSpecs(product) + "</ul>" : '    <ul class="product-specs">' + buildFullSpecs(product) + "</ul>",
      compact ? "" : '    <p class="use-case"><strong>Uso consigliato:</strong> ' + product.use_case + "</p>",
      '    <div class="product-footer">',
      '      <span class="availability">' + product.availability + "</span>",
      '      <a class="text-link" href="index.html#preventivo">Richiedi info</a>',
      "    </div>",
      "  </div>",
      "</article>",
    ].join("");
  }

  window.FerratekCatalog = {
    categories: categories,
    products: products,
    getCategoryById: getCategoryById,
    getCategoryCount: getCategoryCount,
    getFeaturedProducts: getFeaturedProducts,
    getProductsByCategory: getProductsByCategory,
    buildCategoryCard: buildCategoryCard,
    buildFilterButton: buildFilterButton,
    buildAllFilterButton: buildAllFilterButton,
    buildProductCard: buildProductCard,
  };
})();
