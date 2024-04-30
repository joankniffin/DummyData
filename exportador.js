function eleccion() {
    const formatoElegido = document.getElementById('generarFormato').value;
    const alumnos = document.getElementById('mostrarAlumnos');
    if (formatoElegido == 0 || !alumnos) {
        return;
    }
    switch (formatoElegido) {
        case "csv":
            generarCSV(alumnos);
            break;
        case "json":
            generarJSON(alumnos);
            break;
        case "sql":
            generarSQL(alumnos);
            break;
        case "xml":
            generarXML(alumnos);
            break;
        default:
            console.warn("Formato invalido");
    }
}

function generarCSV(alumnos) {
    const file = document.createElement('a');
    const alumnos2 = alumnos.innerHTML.split("<br>").filter(Boolean);
    const salida = alumnos2.join("\n");

    file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(salida));
    file.setAttribute('download', 'alumnos.csv');
    file.style.display = 'none';
    document.body.appendChild(file);
    file.click();
    document.body.removeChild(file);
}

function generarJSON(alumnos) {
    const file = document.createElement('a');
    const alumnos2 = alumnos.innerHTML.split("<br>").filter(Boolean);
    const salida = alumnos2.map(alumno => {
        const [expediente, apellido1, apellido2, nombre, correo, fechaNacimiento] = alumno.split(", ");
        return {
            expediente,
            apellido1,
            apellido2,
            nombre,
            correo,
            fechaNacimiento
        };
    });

    const jsonSalida = JSON.stringify(salida, null, 2);
    file.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonSalida));
    file.setAttribute('download', 'alumnos.json');
    file.style.display = 'none';
    document.body.appendChild(file);
    file.click();
    document.body.removeChild(file);
}

function generarSQL(alumnos) {
    const file = document.createElement('a');
    const alumnos2 = alumnos.innerHTML.split("<br>").filter(Boolean);
    const salida = alumnos2.map(alumno => {
        const [expediente, apellido1, apellido2, nombre, correo, fechaNacimiento] = alumno.split(", ");
        return `('${expediente}', '${apellido1}', '${apellido2}', '${nombre}', '${correo}', '${fechaNacimiento}')`;
    }).join(",\n");

    const sql = `CREATE DATABASE IF NOT EXISTS evento;\n USE evento;\nCREATE TABLE IF NOT EXISTS asistentes(expediente INT NOT NULL, apellido1 VARCHAR(255), apellido2 VARCHAR(255), nombre VARCHAR(255), correo VARCHAR(255) NOT NULL, fechaNacimiento DATE);\n INSERT INTO asistentes (expediente, apellido1, apellido2, nombre, correo, fechaNacimiento) VALUES\n${salida};`;

    file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sql));
    file.setAttribute('download', 'alumnos.sql');
    file.style.display = 'none';
    document.body.appendChild(file);
    file.click();
    document.body.removeChild(file);
}

function generarXML(alumnos) {
    const file = document.createElement('a');
    const alumnos2 = alumnos.innerHTML.split("<br>").filter(Boolean);
    const salida = alumnos2.map(alumno => {
        const [expediente, apellido1, apellido2, nombre, correo, fechaNacimiento] = alumno.split(", ");
        return `  <asistente>\n    <expediente>${expediente}</expediente>\n    <apellido1>${apellido1}</apellido1>\n    <apellido2>${apellido2}</apellido2>\n    <nombre>${nombre}</nombre>\n    <correo>${correo}</correo>\n    <fechaNacimiento>${fechaNacimiento}</fechaNacimiento>\n  </asistente>`;
    }).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<asistentes>\n${salida}\n</asistentes>`;

    file.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(xml));
    file.setAttribute('download', 'alumnos.xml');
    file.style.display = 'none';
    document.body.appendChild(file);
    file.click();
    document.body.removeChild(file);
}
