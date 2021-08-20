const {resolve} = require('path');

module.exports = [
    {
        name: 'a',
        path: '/hotel',
        component: resolve(__dirname, 'src/pages/index.vue')
    },
    {
        name: 'b',
        path: '/b',
        component: resolve(__dirname, 'src/pages/b.vue')
    }
]