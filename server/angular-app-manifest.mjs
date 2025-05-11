
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/extra_proyect/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/apexcharts/dist/apexcharts.esm.js": [
    {
      "path": "chunk-OFYZ6HBG.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 28086, hash: '54cbe303a3c0ac5f19769521f98b9349bc8315e19be7c03ec1776b5ae1d3cb6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17205, hash: 'c79fc306b025806543357b6fa595d7ba551d00ba224949ad79d0c712ad185fa1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DLBGDHWB.css': {size: 237885, hash: 'EFXg02ETPfQ', text: () => import('./assets-chunks/styles-DLBGDHWB_css.mjs').then(m => m.default)}
  },
};
