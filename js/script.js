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
  opcionLigera: "OPCIÓN LIGERA",
  opcionClasica: "OPCIÓN CLÁSICA",
  promoTitulo: "",
  promoPrecio: "",
  promoTexto: "",
  plato1: "Milanesa con puré",
  plato2: "Pollo con arroz",
  plato3: "Tarta de verdura",
  plato4: "Albóndigas con fideos",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
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
  inputOpcionLigera: $("inputOpcionLigera"),
  inputOpcionClasica: $("inputOpcionClasica"),
  inputPromoTitulo: $("inputPromoTitulo"),
  inputPromoPrecio: $("inputPromoPrecio"),
  inputPromoTexto: $("inputPromoTexto"),
  inputPlato1: $("inputPlato1"),
  inputPlato2: $("inputPlato2"),
  inputPlato3: $("inputPlato3"),
  inputPlato4: $("inputPlato4"),
  inputImg1: $("inputImg1"),
  inputImg2: $("inputImg2"),
  inputImg3: $("inputImg3"),
  inputImg4: $("inputImg4"),
  inputDireccion: $("inputDireccion"),
  inputAlias: $("inputAlias"),
  inputInstagram: $("inputInstagram"),
  inputFudo: $("inputFudo"),
  inputExtra: $("inputExtra"),

  tituloFlyer: $("tituloFlyer"),
  precioFlyer: $("precioFlyer"),
  opcionLigeraFlyer: $("opcionLigeraFlyer"),
  opcionClasicaFlyer: $("opcionClasicaFlyer"),
  optionSep: $("optionSep"),
  telefonoFlyer: $("telefonoFlyer"),
  promoBox: $("promoBox"),
  promoTituloFlyer: $("promoTituloFlyer"),
  promoPrecioFlyer: $("promoPrecioFlyer"),
  promoTextoFlyer: $("promoTextoFlyer"),
  plato1Flyer: $("plato1Flyer"),
  plato2Flyer: $("plato2Flyer"),
  plato3Flyer: $("plato3Flyer"),
  plato4Flyer: $("plato4Flyer"),
  img1Flyer: $("img1Flyer"),
  img2Flyer: $("img2Flyer"),
  img3Flyer: $("img3Flyer"),
  img4Flyer: $("img4Flyer"),
  direccionFlyer: $("direccionFlyer"),
  aliasFlyer: $("aliasFlyer"),
  instagramFlyer: $("instagramFlyer"),
  fudoFlyer: $("fudoFlyer"),
  extraFlyer: $("extraFlyer"),
  bottomArea: $("bottomArea"),

  btnGuardar: $("btnGuardar"),
  btnDescargar: $("btnDescargar"),
  flyer: $("flyer")
};

function fillInputs() {
  refs.inputTitulo.value = data.titulo;
  refs.inputPrecio.value = data.precio;
  refs.inputTelefono.value = data.telefono;
  refs.inputOpcionLigera.value = data.opcionLigera;
  refs.inputOpcionClasica.value = data.opcionClasica;
  refs.inputPromoTitulo.value = data.promoTitulo;
  refs.inputPromoPrecio.value = data.promoPrecio;
  refs.inputPromoTexto.value = data.promoTexto;
  refs.inputPlato1.value = data.plato1;
  refs.inputPlato2.value = data.plato2;
  refs.inputPlato3.value = data.plato3;
  refs.inputPlato4.value = data.plato4;
  refs.inputDireccion.value = data.direccion;
  refs.inputAlias.value = data.alias;
  refs.inputInstagram.value = data.instagram;
  refs.inputFudo.value = data.fudo;
  refs.inputExtra.value = data.extra;
}

function setLineVisibility(element, text) {
  element.style.display = text && text.trim() ? "block" : "none";
}

function updateMenuImage(imgElement, src) {
  if (!imgElement) return;

  if (src && src.trim()) {
    imgElement.src = src;
    imgElement.style.display = "block";
  } else {
    imgElement.removeAttribute("src");
    imgElement.style.display = "none";
  }
}

function applyData() {
  data.titulo = refs.inputTitulo.value.trim() || defaultData.titulo;
  data.precio = refs.inputPrecio.value.trim() || defaultData.precio;
  data.telefono = refs.inputTelefono.value.trim() || defaultData.telefono;
  data.opcionLigera = refs.inputOpcionLigera.value.trim();
  data.opcionClasica = refs.inputOpcionClasica.value.trim();
  data.promoTitulo = refs.inputPromoTitulo.value.trim();
  data.promoPrecio = refs.inputPromoPrecio.value.trim();
  data.promoTexto = refs.inputPromoTexto.value.trim();
  data.plato1 = refs.inputPlato1.value.trim() || defaultData.plato1;
  data.plato2 = refs.inputPlato2.value.trim() || defaultData.plato2;
  data.plato3 = refs.inputPlato3.value.trim() || defaultData.plato3;
  data.plato4 = refs.inputPlato4.value.trim() || defaultData.plato4;
  data.direccion = refs.inputDireccion.value.trim() || defaultData.direccion;
  data.alias = refs.inputAlias.value.trim() || defaultData.alias;
  data.instagram = refs.inputInstagram.value.trim() || defaultData.instagram;
  data.fudo = refs.inputFudo.value.trim() || defaultData.fudo;
  data.extra = refs.inputExtra.value.trim();

  refs.tituloFlyer.textContent = data.titulo;
  refs.precioFlyer.textContent = data.precio;

  refs.telefonoFlyer.textContent = `📞 ${data.telefono}`;
  refs.promoTituloFlyer.textContent = data.promoTitulo || "PROMO ESPECIAL";
  refs.promoPrecioFlyer.textContent = data.promoPrecio;
  refs.promoTextoFlyer.textContent = data.promoTexto;

  refs.plato1Flyer.textContent = data.plato1;
  refs.plato2Flyer.textContent = data.plato2;
  refs.plato3Flyer.textContent = data.plato3;
  refs.plato4Flyer.textContent = data.plato4;

  updateMenuImage(refs.img1Flyer, data.img1);
  updateMenuImage(refs.img2Flyer, data.img2);
  updateMenuImage(refs.img3Flyer, data.img3);
  updateMenuImage(refs.img4Flyer, data.img4);

  refs.direccionFlyer.textContent = `📍 ${data.direccion}`;
  refs.aliasFlyer.textContent = `💳 Alias: ${data.alias}`;
  refs.instagramFlyer.textContent = `📷 ${data.instagram}`;
  refs.fudoFlyer.textContent = `🌐 ${data.fudo}`;
  refs.extraFlyer.textContent = `✓ ${data.extra}`;

  const ligeraText = refs.opcionLigeraFlyer?.querySelector(".option-text");
  const clasicaText = refs.opcionClasicaFlyer?.querySelector(".option-text");

  if (ligeraText) {
    ligeraText.textContent = data.opcionLigera || defaultData.opcionLigera;
  }

  if (clasicaText) {
    clasicaText.textContent = data.opcionClasica || defaultData.opcionClasica;
  }

  if (refs.opcionLigeraFlyer) {
    refs.opcionLigeraFlyer.style.display = data.opcionLigera ? "flex" : "none";
  }

  if (refs.opcionClasicaFlyer) {
    refs.opcionClasicaFlyer.style.display = data.opcionClasica ? "flex" : "none";
  }

  if (refs.optionSep) {
    const mostrarSeparador = data.opcionLigera && data.opcionClasica;
    refs.optionSep.style.display = mostrarSeparador ? "block" : "none";
  }

  const promoHasContent = data.promoTitulo || data.promoPrecio || data.promoTexto;
  refs.promoBox.style.display = promoHasContent ? "block" : "none";

  refs.promoBox.style.top = "";
  refs.bottomArea.style.bottom = "";

  setLineVisibility(refs.extraFlyer, data.extra);

  autoScaleText();
}

function autoScaleText() {
  const menuTexts = document.querySelectorAll(".menu-text");

  menuTexts.forEach((item) => {
    item.style.fontSize = "32px";
    const length = item.textContent.trim().length;

    if (length > 48) {
      item.style.fontSize = "22px";
    } else if (length > 38) {
      item.style.fontSize = "26px";
    } else if (length > 30) {
      item.style.fontSize = "29px";
    }
  });

  refs.tituloFlyer.style.fontSize = "58px";
  const titleLength = refs.tituloFlyer.textContent.trim().length;
  if (titleLength > 16) refs.tituloFlyer.style.fontSize = "52px";
  if (titleLength > 22) refs.tituloFlyer.style.fontSize = "46px";
  if (titleLength > 30) refs.tituloFlyer.style.fontSize = "40px";

  refs.precioFlyer.style.fontSize = "42px";
  if (refs.precioFlyer.textContent.trim().length > 10) {
    refs.precioFlyer.style.fontSize = "36px";
  }

  refs.promoPrecioFlyer.style.fontSize = "44px";
  const promoLen = refs.promoPrecioFlyer.textContent.trim().length;
  if (promoLen > 16) refs.promoPrecioFlyer.style.fontSize = "38px";
  if (promoLen > 22) refs.promoPrecioFlyer.style.fontSize = "34px";
  if (promoLen > 28) refs.promoPrecioFlyer.style.fontSize = "30px";

  refs.promoTituloFlyer.style.fontSize = "28px";
  if (refs.promoTituloFlyer.textContent.trim().length > 20) {
    refs.promoTituloFlyer.style.fontSize = "24px";
  }

  refs.promoTextoFlyer.style.fontSize = "24px";
  if (refs.promoTextoFlyer.textContent.trim().length > 26) {
    refs.promoTextoFlyer.style.fontSize = "21px";
  }

  const infoLines = document.querySelectorAll(".info-line");
  infoLines.forEach((line) => {
    line.style.fontSize = line.classList.contains("link-line") ? "21px" : "25px";
    if (line.textContent.trim().length > 34) {
      line.style.fontSize = line.classList.contains("link-line") ? "18px" : "22px";
    }
    if (line.textContent.trim().length > 48) {
      line.style.fontSize = line.classList.contains("link-line") ? "16px" : "19px";
    }
  });

  const optionTexts = document.querySelectorAll(".option-item .option-text");
  optionTexts.forEach((text) => {
    text.style.fontSize = "26px";
    const len = text.textContent.trim().length;
    if (len > 18) text.style.fontSize = "22px";
    if (len > 26) text.style.fontSize = "18px";
  });
}

function saveData() {
  saveJSON("magicFoodHibrido", data);
  alert("Cambios guardados");
}

function handleImageUpload(file, key) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    data[key] = event.target.result;
    applyData();
    saveJSON("magicFoodHibrido", data);
  };
  reader.readAsDataURL(file);
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
  refs.inputOpcionLigera,
  refs.inputOpcionClasica,
  refs.inputPromoTitulo,
  refs.inputPromoPrecio,
  refs.inputPromoTexto,
  refs.inputPlato1,
  refs.inputPlato2,
  refs.inputPlato3,
  refs.inputPlato4,
  refs.inputDireccion,
  refs.inputAlias,
  refs.inputInstagram,
  refs.inputFudo,
  refs.inputExtra
].forEach((input) => {
  input?.addEventListener("input", applyData);
});

refs.inputImg1?.addEventListener("change", (e) => handleImageUpload(e.target.files[0], "img1"));
refs.inputImg2?.addEventListener("change", (e) => handleImageUpload(e.target.files[0], "img2"));
refs.inputImg3?.addEventListener("change", (e) => handleImageUpload(e.target.files[0], "img3"));
refs.inputImg4?.addEventListener("change", (e) => handleImageUpload(e.target.files[0], "img4"));

refs.btnGuardar?.addEventListener("click", () => {
  applyData();
  saveData();
});

refs.btnDescargar?.addEventListener("click", async () => {
  applyData();
  await downloadFlyer();
});

fillInputs();
applyData();