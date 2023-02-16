module.exports = {
    siteMetadata: {
        title: `Expedition Fairbanks`,
        description: `Section G15's 2023 Conclave`,
        twitterUsername: `@sectiong15`,
        image: `/images/logoYellow.png`,
        siteUrl: `https://alaskaclave.com/`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Expedition Fairbanks`,
                short_name: `Alaskaclave`,
                start_url: `/`,
                background_color: `#061A4A`,
                theme_color: `#FFB70A`,
                display: `standalone`,
                icon: `static/images/logoYellow.png`
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}