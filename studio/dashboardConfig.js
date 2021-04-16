export default {
  widgets: [
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
                  buildHookId: '6079a82965807411bed0104d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-o9judema',
                  apiId: 'fc08d287-36bb-4e6c-bca6-abfd56215d04'
                },
                {
                  buildHookId: '6079a829798f7510ab57dfc1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-p8g4iw7j',
                  apiId: 'b565613b-5a34-4e18-8703-2a76b7bbf704'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harshilredorange/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-p8g4iw7j.netlify.app', category: 'apps'}
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
