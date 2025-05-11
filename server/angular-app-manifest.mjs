
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/server',
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
    'index.csr.html': {size: 28078, hash: 'a08124a900c6466d754eb14c03a08d7fcd287b99da3602aebc05b3aec0978294', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17197, hash: 'c4191cd9ed58f92d15f3f65bdddc4664185ee1f8869bb0e694bca2c24bf27227', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DLBGDHWB.css': {size: 237885, hash: 'EFXg02ETPfQ', text: () => import('./assets-chunks/styles-DLBGDHWB_css.mjs').then(m => m.default)}
  },
};
