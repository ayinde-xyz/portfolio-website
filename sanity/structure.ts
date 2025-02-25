import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin Dashboard")
    .items([
      S.listItem()
        .title("Portfolio")
        .child(
          S.list()
            .title("Portfolio")
            .items([
              S.listItem()
                .title("About Me")
                .schemaType("intro")
                .child(
                  S.documentTypeList("intro")
                    .title("About Me")
                    .schemaType("intro")
                ),
              S.listItem()
                .title("Projects")
                .schemaType("projects")
                .child(S.documentTypeList("projects").title("Projects")),
              S.listItem()
                .title("Certifications")
                .schemaType("certifications")
                .child(
                  S.documentTypeList("certifications").title("Certifications")
                ),
              S.listItem()
                .title("Experience")
                .schemaType("experience")
                .child(S.documentTypeList("experience").title("Experience")),

              // S.listItem()
              //   .title("Categories")
              //   .schemaType("category")
              //   .child(S.documentTypeList("category").title("Categories")),
              // S.listItem()
              //   .title("Skills")
              //   .schemaType("skill")
              //   .child(S.documentTypeList("skill").title("Skills")),
              // S.listItem()
              //   .title("Tools")
              //   .schemaType("tool")
              //   .child(S.documentTypeList("tool").title("Tools")),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
            ])
        ),
    ]);
// S.listItem()
//   .title("Intro")
//   .schemaType("intro")
//   .child(S.documentTypeList("intro").title("Intro")),
// S.documentTypeListItems()

// S.divider(),
// ...S.documentTypeListItems().filter(
//   (item) =>
//     item.getId() &&
//     !["post", "category", "author"].includes(item.getId()!)
// ),
