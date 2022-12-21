import { tableFromIPC } from "apache-arrow";
import { readParquet } from "parquet-wasm";

//const url = "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/parquet/building_area.parquet"
const url = "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/parquet/data.parquet"
console.log(url)

//parquet-wasm attempt
//https://github.com/kylebarron/parquet-wasm

fetch(url).then((pm) => {

    pm.arrayBuffer().then((data) => {
        //console.log(data)
        const parquetUint8Array = new Uint8Array(data);
        //console.log(parquetUint8Array)
        const arrowUint8Array = readParquet(parquetUint8Array);
        //console.log(arrowUint8Array)

        //https://arrow.apache.org/docs/js/index.html
        const t = tableFromIPC(arrowUint8Array);
        console.log(t.schema.fields)

        //see https://arrow.apache.org/docs/js/
        //https://loaders.gl/arrowjs/docs/developer-guide/tables#record-tojson-and-toarray
        const elt = t.get(0)
        console.log(elt)
        console.log(elt.toJSON())
        console.log(elt.toArray())

    });

}).catch(() => {
    console.log("fail 1")
});

