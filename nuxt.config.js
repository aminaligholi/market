export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'boomiro Market',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },

        ],
        script: [{
                src: "https://code.jquery.com/jquery-3.5.1.slim.js"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.js"
            },

            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.js"
            },
            {
                src: "https://kit.fontawesome.com/a076d05399.js"
            },

        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@/assets/css/bootstrap/bootstrap.css',
        '@/assets/css/fonts.css',
        '@/assets/css/animation.css',
        '@/assets/css/Global/Global.css'

    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/core_cmp.js',
        '@/plugins/hello.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        // baceUrl:''
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}