import { defineField, defineType } from "sanity";

export const introType = defineType({
  name: "intro",
  title: "Intro",
  type: "document",
  icon: () => "👋",

  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      hidden: ({ document }) => !document?.name,
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "role",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "socials",
      title: "Social Media Handles",
      type: "object",
      fieldsets: [
        {
          name: "socials",
          title: "Social Media",
          options: {
            collapsible: true,
            collapsed: true,
            columns: 2,
            modal: { type: "popover", width: "auto" },
          },
        },
      ],
      fields: [
        defineField({
          name: "twitter",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          type: "url",
        }),
        defineField({
          name: "facebook",
          type: "url",
        }),
        defineField({
          name: "github",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "seo",
      type: "seo",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "name",
      role: "role",
      description: "description",
      media: "image",
    },
    prepare(selection) {
      const { title, role, media, description } = selection;
      return {
        title: title,
        subtitle: role[0],
        description: description,
        media: media,
      };
    },
  },
});
