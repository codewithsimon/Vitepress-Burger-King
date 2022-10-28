export default {
    themeConfig: {
        siteTitle: 'Vite Burger King',
        logo: 'logo.png',
        base: '/vitepress/',
        lang: 'en-US',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Stephen SIMON'
        },
        nav: [
            { text: 'Drinks and Coffee', link: '/drinks-and-coffee/index' },
            { text: 'Flame Grilled Burgers', link: '/flame-grilled-burgers/index' },
            {
                text: 'Sides',
                items: [
                    { text: '8 Pc Cheesy Tots', link: '/sides/8-pc-cheesy-tots' },
                    { text: 'Classic Fries', link: '/sides/classic-fries' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Drinks and Coffee',
                items: [
                    { text: 'Coca Cola', link: '/drinks-and-coffee/coca-cola' },
                    { text: 'Sprite', link: '/drinks-and-coffee/sprite' },
                    { text: 'Medium Sweetened Iced Tea', link: '/drinks-and-coffee/sweetened-iced-tea' },
                ]
            },
            {
                text: 'Flame Grilled Burgers',
                items: [
                    { text: 'Double Cheese Burger', link: '/flame-grilled-burgers/double-cheese-burger' },
                    { text: 'Double Whooper', link: '/flame-grilled-burgers/double-whooper' },
                    { text: 'Hamburger', link: '/flame-grilled-burgers/hamburger' },

                ]
            },
            {
                text: 'Sides',
                items: [
                    { text: '8 Pc Cheesy Tots', link: '/sides/8-pc-cheesy-tots' },
                    { text: 'Classic Fries', link: '/sides/classic-fries' },

                ]
            }
        ]
    }
}