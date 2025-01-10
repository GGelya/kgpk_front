/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      '2xl': {'max':'1536px'},
      // => @media (max-width: 1536px) { ... }

      'xl': {'max':'1280px'},
      // => @media (max-width: 1280px) { ... }

      '2lg': {'max':'1140px'},
      // => @media (max-width: 1140px) { ... }

      'lg': {'max':'1024px'},
      // => @media (max-width: 1024px) { ... }

      '2md': {'max':'880px'},
      // => @media (max-width: 880px) { ... }

      'md': {'max':'768px'},
      // => @media (max-width: 768px) { ... }
      
      'sm': {'max':'640px'},
      // => @media (max-width: 640px) { ... }

      'xs': {'max':'425px'},
      // => @media (max-width: 425px) { ... }

      'xxs': {'max':'320px'},
      // => @media (max-width: 320px) { ... }

      '2xxs': {'max':'270px'},
      // => @media (max-width: 270px) { ... }
    },

    container:{
      padding: '15px',
      center: true,
    },

    extend: {
      fontSize: {
        fluid: 'var(--fluid)',
        fluid_title: 'var(--fluid_title)',
        fluid_subtitle: 'var(--fluid_subtitle)',
        fluid_card_title: 'var(--fluid_card_title)',
        fluid_menu_section: 'var(--fluid_menu_section)',
        fluid_links: 'var(--fluid_links)',
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
      },
      display: ['group-hover', 'group-active'],
      visibility: ['group-hover', 'group-active'],
      colors:{
        'text_color_secondary':'rgb(var(--text_color_secondary) / <alpha-value>)',
        'text_color_primary':'rgb(var(--text_color_primary) / <alpha-value>)',
        'text_color_links':'rgb(var(--text_color_links) / <alpha-value>)',
        'bg_color':'rgb(var(--bg_color) / <alpha-value>)',
        'element_color':'rgb(var(--element_color) / <alpha-value>)',
        'element_color_panels':'rgb(var(--element_color_panels) / <alpha-value>)',
        'basic_color_1':'rgb(var(--basic_color_1) / <alpha-value>)',
        'basic_color_2':'rgb(var(--basic_color_2) / <alpha-value>)',
        'basic_color_3':'rgb(var(--basic_color_3) / <alpha-value>)',
        'basic_color_4':'rgb(var(--basic_color_4) / <alpha-value>)',
        'basic_color_table_title':'rgb(var(--basic_color_table_title) / <alpha-value>)',
        'basic_color_table_body':'rgb(var(--basic_color_table_body) / <alpha-value>)',
        'basic_color_deco1':'rgb(var(--basic_color_deco1) / <alpha-value>)',
        'basic_color_deco2':'rgb(var(--basic_color_deco2) / <alpha-value>)',
        'basic_color_deco3': 'rgb(var(--basic_color_deco3) / <alpha-value>)',
      },
      backgroundImage:{
        'bg_main_page': "url('../src/img/bcg-main.webp')", 
        'bg_baseinfo': "url('../src/img/bcg-baseinfo.webp')",
        'bg_studActivity': "url('../src/img/bcg-studActivity.webp')",
        'bg_studentBody': "url('../src/img/studentBodyPhoto.webp')",
        'bg_traektoria': "url('../src/img/traektoriaPhoto.webp')",
        
      },
      boxShadow: {
        'shadowCards': '0px 0px 32px 1px rgba(0, 0, 0, 0.25)',
        'shadowCards_element': '0px -6px 9px 2px rgba(0, 0, 0, 0.25)',
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

