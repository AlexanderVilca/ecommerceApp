import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const bannerType = defineType({
    type: 'document',
    name: 'banner',
    title: 'Banner',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'image',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Banner Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'buttonTitle',
            title: 'Button Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
            validation: (Rule) => Rule.required()
        })
    ],
    preview: {
        select: {
            // title: "title",
            media: "image"
        }
    }
})