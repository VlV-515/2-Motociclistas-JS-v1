//Variables.
const arrMoto = [
  { hora: "08:00", disp: 0, selected: false },
  { hora: "08:30", disp: 1, selected: false },
  { hora: "09:00", disp: 2, selected: false },
  { hora: "09:30", disp: 3, selected: false },
  { hora: "10:00", disp: 4, selected: false },
  { hora: "10:30", disp: 5, selected: false },
  { hora: "11:00", disp: 6, selected: false },
  { hora: "11:30", disp: 7, selected: false },
  { hora: "12:00", disp: 8, selected: false },
  { hora: "12:30", disp: 0, selected: false },
  { hora: "13:00", disp: 1, selected: false },
  { hora: "13:30", disp: 2, selected: false },
  { hora: "14:00", disp: 3, selected: false },
  { hora: "14:30", disp: 4, selected: false },
  { hora: "15:00", disp: 5, selected: false },
  { hora: "15:30", disp: 6, selected: false },
  { hora: "16:00", disp: 7, selected: false },
  { hora: "16:30", disp: 8, selected: false },
  { hora: "17:00", disp: 0, selected: false },
  { hora: "17:30", disp: 1, selected: false },
  { hora: "18:00", disp: 2, selected: false },
  { hora: "18:30", disp: 3, selected: false },
  { hora: "19:00", disp: 4, selected: false },
  { hora: "19:30", disp: 5, selected: false },
];
let content = ""; //Usada para la inserción en div👇🏻
const divList = document.getElementById("motoList");

const selectStyle = (moto) => {
  //1) Si tiene disponibilidad y no esta seleccionado.
  //2) Si no tiene disponibles y no esta seleccionado.
  //3) Si esta seleccionado.
  if (moto.disp > 0 && !moto.selected) {
    return "card";
  } else if (moto.disp < 1 && !moto.selected) {
    return "cardBad";
  } else if (moto.selected) {
    return "cardSelected";
  }
};

function llenarListado() {
  arrMoto.forEach((moto, index) => {
    content += `
    <div id="${index}" class="${selectStyle(moto)}">
    <div class="item">
    <h4>Hora: ${moto.hora}</h4>
    </div>
    <div class="item">
    <p>Libres: ${moto.disp}</p>
    </div>
    </div>`;
  });
  divList.innerHTML = content;
  content = "";
}
llenarListado();

//Metodo ON para los listener
const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

//Manejo de los objetos sin disponibilidad
on(document, "click", ".cardBad", (e) => {
  alert("No hay disponibles en esa hora :(");
});

//Manejo de los objetos disponibles sin seleccionar
on(document, "mousedown", ".card", (e) => {
  e.stopImmediatePropagation();
  let fila = e.target.parentNode.parentNode;
  arrMoto[fila.id].disp = arrMoto[fila.id].disp - 1;
  arrMoto[fila.id].selected = true;
  llenarListado();
});

//Manejo de los objetos seleccionados.
on(document, "mousedown", ".cardSelected", (e) => {
  e.stopImmediatePropagation();
  let fila = e.target.parentNode.parentNode;
  arrMoto[fila.id].disp = arrMoto[fila.id].disp + 1;
  arrMoto[fila.id].selected = false;
  llenarListado();
});
