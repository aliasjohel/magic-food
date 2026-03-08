console.log("✅ Magic Food híbrido cargado");

function $(id) {
  return document.getElementById(id);
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error("Error leyendo localStorage:", error);
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error guardando localStorage:", error);
  }
}

const defaultData = {
  titulo: "MENÚ DEL DÍA",
  precio: "$6500",
  telefono: "3815843427",
  promoTitulo: "",
  promoPrecio: "",
  promoTexto: "",
  plato1: "Milanesa con puré",
  plato2: "Pollo con arroz",
  plato3: "Tarta de verdura",
  plato4: "Albóndigas con fideos",
  plato5: "Polenta con salsa boloñesa",
  direccion: "La Rioja 619 P. B.",
  alias: "Magic.alpaso",
  instagram: "@magicfoodbs",
  fudo: "menu.fu.do/magicfoodalpaso",
  extra: "¡Envíos sin cargo!"
};

let data = loadJSON("magicFoodHibrido", defaultData);

const refs = {
  inputTitulo: $("inputTitulo"),
  inputPrecio: $("inputPrecio"),
  inputTelefono: $("inputTelefono"),
  inputPromoTitulo: $("inputPromoTitulo"),
  inputPromoPrecio: $("inputPromoPrecio"),
  inputPromoTexto: $("inputPromoTexto"),
  inputPlato1: $("inputPlato1"),
  inputPlato2: $("inputPlato2"),
  inputPlato3: $("inputPlato3"),
  inputPlato4: $("inputPlato4"),
  inputPlato5: $("inputPlato5"),
  inputDireccion: $("inputDireccion"),
  inputAlias: $("inputAlias"),
  inputInstagram: $("inputInstagram"),
  inputFudo: $("inputFudo"),
  inputExtra: $("inputExtra"),

  tituloFlyer: $("tituloFlyer"),
  precioFlyer: $("precioFlyer"),
  precio1Flyer: $("precio1Flyer"),
  precio2Flyer: $("precio2Flyer"),
  precio3Flyer: $("precio3Flyer"),
  precio4Flyer: $("precio4Flyer"),
  precio5Flyer: $("precio5Flyer"),
  telefonoFlyer: $("telefonoFlyer"),
  promoBox: $("promoBox"),
  promoTituloFlyer: $("promoTituloFlyer"),
  promoPrecioFlyer: $("promoPrecioFlyer"),
  promoTextoFlyer: $("promoTextoFlyer"),
  plato1Flyer: $("plato1Flyer"),
  plato2Flyer: $("plato2Flyer"),
  plato3Flyer: $("plato3Flyer"),
  plato4Flyer: $("plato4Flyer"),
  plato5Flyer: $("plato5Flyer"),
  direccionFlyer: $("direccionFlyer"),
  aliasFlyer: $("aliasFlyer"),
  instagramFlyer: $("instagramFlyer"),
  fudoFlyer: $("fudoFlyer"),
  extraFlyer: $("extraFlyer"),

  btnGuardar: $("btnGuardar"),
  btnDescargar: $("btnDescargar"),
  flyer: $("flyer")
};

function fillInputs() {
  refs.inputTitulo.value = data.titulo;
  refs.inputPrecio.value = data.precio;
  refs.inputTelefono.value = data.telefono;
  refs.inputPromoTitulo.value = data.promoTitulo;
  refs.inputPromoPrecio.value = data.promoPrecio;
  refs.inputPromoTexto.value = data.promoTexto;
  refs.inputPlato1.value = data.plato1;
  refs.inputPlato2.value = data.plato2;
  refs.inputPlato3.value = data.plato3;
  refs.inputPlato4.value = data.plato4;
  refs.inputPlato5.value = data.plato5;
  refs.inputDireccion.value = data.direccion;
  refs.inputAlias.value = data.alias;
  refs.inputInstagram.value = data.instagram;
  refs.inputFudo.value = data.fudo;
  refs.inputExtra.value = data.extra;
}

function setLineVisibility(element, text) {
  element.style.display = text.trim() ? "block" : "none";
}

function applyData() {
  data.titulo = refs.inputTitulo.value.trim() || defaultData.titulo;
  data.precio = refs.inputPrecio.value.trim() || defaultData.precio;
  data.telefono = refs.inputTelefono.value.trim() || defaultData.telefono;
  data.promoTitulo = refs.inputPromoTitulo.value.trim();
  data.promoPrecio = refs.inputPromoPrecio.value.trim();
  data.promoTexto = refs.inputPromoTexto.value.trim();
  data.plato1 = refs.inputPlato1.value.trim() || defaultData.plato1;
  data.plato2 = refs.inputPlato2.value.trim() || defaultData.plato2;
  data.plato3 = refs.inputPlato3.value.trim() || defaultData.plato3;
  data.plato4 = refs.inputPlato4.value.trim() || defaultData.plato4;
  data.plato5 = refs.inputPlato5.value.trim() || defaultData.plato5;
  data.direccion = refs.inputDireccion.value.trim() || defaultData.direccion;
  data.alias = refs.inputAlias.value.trim() || defaultData.alias;
  data.instagram = refs.inputInstagram.value.trim() || defaultData.instagram;
  data.fudo = refs.inputFudo.value.trim() || defaultData.fudo;
  data.extra = refs.inputExtra.value.trim();

  refs.tituloFlyer.textContent = data.titulo;
  refs.precioFlyer.textContent = data.precio;

  refs.precio1Flyer.textContent = data.precio;
  refs.precio2Flyer.textContent = data.precio;
  refs.precio3Flyer.textContent = data.precio;
  refs.precio4Flyer.textContent = data.precio;
  refs.precio5Flyer.textContent = data.precio;

  refs.telefonoFlyer.textContent = `📞 ${data.telefono}`;
  refs.promoTituloFlyer.textContent = data.promoTitulo;
  refs.promoPrecioFlyer.textContent = data.promoPrecio;
  refs.promoTextoFlyer.textContent = data.promoTexto;

  refs.plato1Flyer.textContent = data.plato1;
  refs.plato2Flyer.textContent = data.plato2;
  refs.plato3Flyer.textContent = data.plato3;
  refs.plato4Flyer.textContent = data.plato4;
  refs.plato5Flyer.textContent = data.plato5;

  refs.direccionFlyer.textContent = `📍 ${data.direccion}`;
  refs.aliasFlyer.textContent = `💳 Alias: ${data.alias}`;
  refs.instagramFlyer.textContent = `📷 ${data.instagram}`;
  refs.fudoFlyer.textContent = `🌐 ${data.fudo}`;
  refs.extraFlyer.textContent = `✓ ${data.extra}`;

  const promoHasContent = data.promoTitulo || data.promoPrecio || data.promoTexto;
  refs.promoBox.style.display = promoHasContent ? "block" : "none";

  const infoBox = document.querySelector(".info-box");
  if (promoHasContent) {
    refs.promoBox.style.top = "900px";
    infoBox.style.bottom = "126px";
  } else {
    infoBox.style.bottom = "220px";
  }

  setLineVisibility(refs.extraFlyer, data.extra);

  autoScaleText();
}

function autoScaleText() {
  const menuTexts = document.querySelectorAll(".menu-text");

  menuTexts.forEach((item) => {
    item.style.fontSize = "34px";
    const length = item.textContent.trim().length;

    if (length > 46) {
      item.style.fontSize = "24px";
    } else if (length > 36) {
      item.style.fontSize = "28px";
    } else if (length > 28) {
      item.style.fontSize = "31px";
    }
  });

  refs.tituloFlyer.style.fontSize = "64px";
  const titleLength = refs.tituloFlyer.textContent.trim().length;
  if (titleLength > 16) refs.tituloFlyer.style.fontSize = "56px";
  if (titleLength > 22) refs.tituloFlyer.style.fontSize = "48px";

  refs.precioFlyer.style.fontSize = "46px";
  if (refs.precioFlyer.textContent.trim().length > 10) {
    refs.precioFlyer.style.fontSize = "40px";
  }

  refs.promoPrecioFlyer.style.fontSize = "44px";
  const promoLen = refs.promoPrecioFlyer.textContent.trim().length;
  if (promoLen > 16) refs.promoPrecioFlyer.style.fontSize = "38px";
  if (promoLen > 22) refs.promoPrecioFlyer.style.fontSize = "34px";
  if (promoLen > 28) refs.promoPrecioFlyer.style.fontSize = "30px";

  refs.promoTituloFlyer.style.fontSize = "30px";
  if (refs.promoTituloFlyer.textContent.trim().length > 20) {
    refs.promoTituloFlyer.style.fontSize = "26px";
  }

  refs.promoTextoFlyer.style.fontSize = "26px";
  if (refs.promoTextoFlyer.textContent.trim().length > 26) {
    refs.promoTextoFlyer.style.fontSize = "22px";
  }

  const infoLines = document.querySelectorAll(".info-line");
  infoLines.forEach((line) => {
    line.style.fontSize = line.classList.contains("link-line") ? "22px" : "27px";
    if (line.textContent.trim().length > 34) {
      line.style.fontSize = line.classList.contains("link-line") ? "19px" : "23px";
    }
  });
}

function saveData() {
  saveJSON("magicFoodHibrido", data);
  alert("Cambios guardados");
}

async function downloadFlyer() {
  try {
    const canvas = await html2canvas(refs.flyer, {
      scale: 2,
      useCORS: true,
      backgroundColor: null
    });

    const link = document.createElement("a");
    link.download = "magic-food-hibrido.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Error al descargar imagen:", error);
    alert("No se pudo descargar la imagen.");
  }
}

[
  refs.inputTitulo,
  refs.inputPrecio,
  refs.inputTelefono,
  refs.inputPromoTitulo,
  refs.inputPromoPrecio,
  refs.inputPromoTexto,
  refs.inputPlato1,
  refs.inputPlato2,
  refs.inputPlato3,
  refs.inputPlato4,
  refs.inputPlato5,
  refs.inputDireccion,
  refs.inputAlias,
  refs.inputInstagram,
  refs.inputFudo,
  refs.inputExtra
].forEach((input) => {
  input.addEventListener("input", applyData);
});

refs.btnGuardar.addEventListener("click", () => {
  applyData();
  saveData();
});

refs.btnDescargar.addEventListener("click", async () => {
  applyData();
  await downloadFlyer();
});

fillInputs();
applyData();