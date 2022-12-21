import { tableFromIPC } from "apache-arrow";
import * as parquetModule from "parquet-wasm";

function component() {
    const url = "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/parquet/building_area.parquet"

    //parquet-wasm attempt
    //https://github.com/kylebarron/parquet-wasm
    //import { tableFromIPC } from "apache-arrow";
    // Edit the `parquet-wasm` import as necessary
    //import { readParquet } from "parquet-wasm/node";

    //import { tableFromIPC } from "apache-arrow";
    // Edit the `parquet-wasm` import as necessary
    //import { readParquet2 } from "parquet-wasm/node2";

    console.log(parquetModule)
    parquetModule.default();

    
    fetch(url).then((pm) => {

        pm.arrayBuffer().then((data) => {
            console.log(data)
            const parquetUint8Array = new Uint8Array(data);
            console.log(parquetUint8Array)
            console.log(readParquet)
            const arrowUint8Array = readParquet2(parquetUint8Array);
            //console.log(arrowUint8Array)
            //const arrowTable = tableFromIPC(arrowUint8Array);
        })/*.catch(() => {
            console.log("fail 2")
        });*/

    }).catch(() => {
        console.log("fail 1")
    });




    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Hello world';

    return element;
}

document.body.appendChild(component());
