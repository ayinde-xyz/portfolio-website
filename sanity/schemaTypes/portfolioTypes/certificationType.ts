import { defineField, defineType } from "sanity";

export const certificationType = defineType({
  name: "certifications",
  title: "Certifications",
  type: "document",
  icon: () => "🎓",

  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "organization",
      title: "Issued By",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "date",
      title: "Issued Date",
      type: "date",
      placeholder: "MM-DD-YYYY",
    }),
    defineField({
      name: "certificationId",
      title: "Certification ID",
      type: "string",
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
      options: {
        hotspot: true,
        accept: "image/*",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "organization",
      media: "image",
    },
  },
});
