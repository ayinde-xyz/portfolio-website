import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  icon: () => "🚀",

  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      hidden: ({ document }) => !document?.title,
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: "bio",
      type: "string",
      description: "A short description of the project",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "url",
      title: "Link",
      type: "url",
      validation: (rule) =>
        rule
          .uri({
            scheme: ["http", "https"],
          })
          .error(`Must be a valid URL`),
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context?.parent as { asset?: { _ref?: string } };

              return !value && parent?.asset?._ref
                ? "Alt text is required when an image is present"
                : true;
            }),
        }),
      ],
      options: {
        hotspot: true,
        accept: "image/*",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
