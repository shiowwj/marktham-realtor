module.exports = {
    content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js'
    ],
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary-white': '#FFFFFF',
                'alt-red': '#EA580C',
                'body-grey': '#9299A6',
                'background-primary': '#151821',
                agency: {
                    'p-light': 'var(--template-primary-light)',
                    's-light': 'var(--template-secondary-light)',

                    'p-dark': 'var(--template-primary-dark)',
                    's-dark': 'var(--template-secondary-dark)',

                    'a-green': 'var(--template-alt-green)',
                    'a-orange': 'var(--template-alt-orange)',
                    'a-blue': 'var(--template-alt-blue)'
                },
                template: {
                    'p-light': 'var(--template-primary-light)',
                    's-light': 'var(--template-secondary-light)',

                    'p-dark': 'var(--template-primary-dark)',
                    's-dark': 'var(--template-secondary-dark)',

                    'a-green': 'var(--template-alt-green)',
                    'a-orange': 'var(--template-alt-orange)',
                    'a-blue': 'var(--template-alt-blue)',
                    'a-gold': 'var(--template-alt-gold)'
                },
            },
            spacing: {
                '56.25%': '56.25%',
                '95vw': '95vw'
              }
        },
        fontFamily: {
            sans: ['Josefin Sans', 'Lexend'],
            // 'agency': ['Inter']
            agency: ['IBM Plex Mono'],
            template: ['Open Sans']
            // mono: ['IBM Plex Mono']
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
}
