import {defineField, defineType} from 'sanity'
export default defineType({
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        }),
    ]
})