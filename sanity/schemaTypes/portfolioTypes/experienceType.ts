import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: () => "🏢",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "company",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      placeholder: "MM-DD-YYYY",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      placeholder: "MM-DD-YYYY",
    }),
  ],
  preview: {
    select: {
      title: "title",
      company: "company",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare(selection) {
      const { title, company, startDate, endDate } = selection;
      return {
        title: title,
        subtitle: company,
        description: `${startDate} - ${endDate}`,
      };
    },
  },
});
