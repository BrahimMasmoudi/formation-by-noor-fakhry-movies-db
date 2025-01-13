// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    ssr: true,
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss',
        'vuetify-nuxt-module',
    ],
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css'
                }
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js'
                }
            ]
        }
    },
    runtimeConfig: {
        accessToken: process.env.ACCESS_TOKEN
    },
    vuetify: {
        vuetifyOptions: {
            theme: {
                themes: {
                    light: {
                        dark: false,
                        colors: {
                            primary: '#3643BA',
                            "dark-primary": '#2E399E',
                            gray: '#a0a0a0',
                            "quiet-gray": '#616161',
                            'dark-gray': '#4E5D6BCC',
                            "light-gray": '#F5F5F5',
                            "primary-light": '#D9ECF5',
                            "light-blue": '#9ADDFF',
                            'completed': '#149B65',
                            'in_progress': '#0113B6FF',
                            'to_be_processed': '#EC6607',
                            archive: '#D70321',
                            yes: '#149B65',
                            no: '#ff0000',
                            'not-concerned': '#3643BA'
                        }
                    },
                }
            },
        }
    }

})
