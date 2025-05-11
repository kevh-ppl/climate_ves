
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 28072, hash: '67628f91e251bfe6de11366556e12f8e6dc96b96e208d3a5745a81644a6ab05c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17191, hash: '42c473d17f03d6aa800d884b3605e834722d8d9874ac927ae2819a25b4687d78', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DLBGDHWB.css': {size: 237885, hash: 'EFXg02ETPfQ', text: () => import('./assets-chunks/styles-DLBGDHWB_css.mjs').then(m => m.default)}
  },
};
