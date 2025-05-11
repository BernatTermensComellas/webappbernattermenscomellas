let scriptURL = "https://script.google.com/macros/s/AKfycbwCSO-3s4QaV4DOo-fUiaLh-G54cWF4m-SDY6_dw_SbNxAaHMCcPMh6m8gpsd_MbMpQQw/exec"   // aquí s'ha d'escriure l'URL del script
let consulta = scriptURL + "?query=select&where=Tipus&is=Turisme";
    fetch(consulta)
        .then((resposta) => {    // primera "promesa"
            return resposta.json();    // retorna les dades JSON obtingudes com a llista
        })
        .then((resposta) => {    // segona "promesa". Resposta = [{"Tipus":"Turisme","Motor":"Elèctric","Any":"2022","Velocitat":"120"}]
// espai per a les instruccions que s'executen en rebre la llista
        });
