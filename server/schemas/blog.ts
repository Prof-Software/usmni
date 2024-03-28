export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the blog post',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
        description: 'Link associated with the blog post',
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
        description: 'Caption for the blog post',
      },
    ],
  };
  