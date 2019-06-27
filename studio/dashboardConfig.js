export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d14a8e910948b1500524b07',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-js8ju79f',
                  apiId: 'c65f3b9c-89ae-47d4-ab67-5893202fbb1e'
                },
                {
                  buildHookId: '5d14a8e9e5435d5551b9a079',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-79wcmk3a',
                  apiId: '18cadf1b-ac25-41ae-8e9c-cf0a4c348b85'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ramey1986/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-79wcmk3a.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
