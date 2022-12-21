import * as duckdb from '@duckdb/duckdb-wasm';
//import duckdb_wasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm';
//import duckdb_wasm_next from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm';

//import duckdb_wasm from './duckdb-mvp.wasm';


const url = "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/parquet/building_area.parquet"

console.log(url)


    //https://github.com/duckdb/duckdb-wasm/tree/master/packages/duckdb-wasm
    //    "@duckdb/duckdb-wasm": "^1.20.0",
    //https://duckdb.org/2021/10/29/duckdb-wasm.html
    //https://observablehq.com/@cmudig/duckdb
    //https://www.npmjs.com/package/@duckdb/duckdb-wasm


    /*
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
duckdb.DuckDBBundles = MANUAL_BUNDLES*/

/*/ Select a bundle based on browser checks
const bundle = duckdb.selectBundle(MANUAL_BUNDLES).then((b) => {

    console.log("bbfg")
    console.log(b)
    console.log(duckdb.DuckDBBundles)

    const worker = new Worker(b.mainWorker);
    //const logger = new duckdb.ConsoleLogger();
    //const db = new duckdb.AsyncDuckDB(logger, worker);
    //await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

});
*/


