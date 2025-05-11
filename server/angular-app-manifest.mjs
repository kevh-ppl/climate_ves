
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/extra_proyect',
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
    'index.csr.html': {size: 28085, hash: '273582f171b0d550a8e7df052ad043df818fe892926c85d32d08bb788a77c2de', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17204, hash: 'bd6adbd25c70e927f34507f5b5b82c866f60f2b82b495a8df639ae25523034bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DLBGDHWB.css': {size: 237885, hash: 'EFXg02ETPfQ', text: () => import('./assets-chunks/styles-DLBGDHWB_css.mjs').then(m => m.default)}
  },
};
