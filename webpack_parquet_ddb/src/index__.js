import * as duckdb from '@duckdb/duckdb-wasm';
import duckdb_wasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm';
import duckdb_wasm_next from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm';



function component() {
    const url = "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/parquet/building_area.parquet"


    //https://observablehq.com/@cmudig/duckdb
    //https://www.npmjs.com/package/@duckdb/duckdb-wasm
    //https://github.com/duckdb/duckdb-wasm/tree/master/packages/duckdb-wasm

    const MANUAL_BUNDLES = {
        mvp: {
            mainModule: duckdb_wasm,
            mainWorker: new URL('@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js', import.meta.url).toString(),
        },
        eh: {
            mainModule: duckdb_wasm_next,
            mainWorker: new URL('@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js', import.meta.url).toString(),
        },
    };
    duckdb.DuckDBBundles = MANUAL_BUNDLES

    // Select a bundle based on browser checks
    const bundle = duckdb.selectBundle(MANUAL_BUNDLES).then((b) => {

        console.log("bbfg")
        console.log(b)
        console.log(duckdb.DuckDBBundles)

        const worker = new Worker(b.mainWorker);
        //const logger = new duckdb.ConsoleLogger();
        //const db = new duckdb.AsyncDuckDB(logger, worker);
        //await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

    });



    console.log("abbaa")

    //var duckdb = require('duckdb');
    /*var db = new duckdb.Database(':memory:'); // or a file name for a persistent DB
    db.all('SELECT 42 AS fortytwo', function(err, res) {
      if (err) {
        throw err;
      }
      console.log(res[0].fortytwo)
    });*/



    //https://github.com/duckdb/duckdb-wasm/tree/master/packages/duckdb-wasm

    //    "@duckdb/duckdb-wasm": "^1.20.0",

    /*
        const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
            mvp: {
                mainModule: duckdb_wasm,
                mainWorker: new URL('@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js', import.meta.url).toString(),
            },
            eh: {
                mainModule: duckdb_wasm_next,
                mainWorker: new URL('@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js', import.meta.url).toString(),
            },
        };
    */

    // Select a bundle based on browser checks
    //const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
    // Instantiate the asynchronus version of DuckDB-wasm
    //const worker = new Worker(bundle.mainWorker!);
    //const logger = new duckdb.ConsoleLogger();
    //const db = new duckdb.AsyncDuckDB(logger, worker);
    //await db.instantiate(bundle.mainModule, bundle.pthreadWorker);




    //https://stackoverflow.com/questions/74613024/reading-parquet-format-from-webpack-application?noredirect=1#comment131753360_74613024
    //https://observablehq.com/@observablehq/csv-to-parquet
    //https://duckdb.org/2021/10/29/duckdb-wasm.html




    //https://stackoverflow.com/questions/55506633/nodejs-reading-parquet-files


    //parquetjs-lite attempt
    //https://github.com/ZJONSSON/parquetjs#reading-data-from-a-url
    //import * as request from "request";
    //import { ParquetReader } from "parquetjs-lite";

    //let reader = ParquetReader.openUrl(request, url);







    //parquetjs attempt

    //https://github.com/ironSource/parquetjs#usage-reading-files
    //import { ParquetReader } from "parquetjs";
    //let reader = ParquetReader.openFile(url);

    /*
    // create a new cursor
    let cursor = reader.getCursor();

    // read all records from the file and print them
    let record = null;
    while (record = await cursor.next()) {
      console.log(record);
    }

    reader.close();
    */







    //parquet-wasm attempt
    //https://github.com/kylebarron/parquet-wasm
    //import { tableFromIPC } from "apache-arrow";
    // Edit the `parquet-wasm` import as necessary
    //import { readParquet } from "parquet-wasm/node";

    //import { tableFromIPC } from "apache-arrow";
    // Edit the `parquet-wasm` import as necessary
    //import { readParquet2 } from "parquet-wasm/node2";

    /*
    fetch(url).then((pm) => {

        pm.arrayBuffer().then((data) => {
            console.log(data)
            const parquetUint8Array = new Uint8Array(data);
            console.log(parquetUint8Array)
            const arrowUint8Array = readParquet2(parquetUint8Array);
            //console.log(arrowUint8Array)

            //const arrowTable = tableFromIPC(arrowUint8Array);

            //data = readParquet(data);
            //data = tableFromIPC(data);
            //const arrowUint8Array = readParquet(parquetUint8Array);
            //data = readParquet(parquetUint8Array);
            //console.log(parquetUint8Array)
            //const arrowTable = tableFromIPC(arrowUint8Array);

        }).catch(() => {
            console.log("fail 2")
        });

    }).catch(() => {
        console.log("fail 1")
    });
*/






    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Hello world';

    return element;
}

document.body.appendChild(component());
