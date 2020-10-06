let body = $("#cargar-apuestas");

let r = $.get('https://www.datos.gov.co/resource/8my7-2hnt.json', function (data) {

    for (let dato of data) {

        let tr = $("<tr>");

        tr.append($("<td>", {text: dato.direccion_web}));
        tr.append($("<td>", {text: dato.nit}));
        tr.append($("<td>", {text: dato.operador}));
        tr.append($("<td>").append($("<a>", {text: 'Ir', href: 'http://'+dato.direccion_web, target: '_blank'})));

        body.append(tr);
    }

});

}