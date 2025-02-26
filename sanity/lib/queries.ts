import { defineQuery } from "next-sanity";

export const INTRO_QUERY = defineQuery(`*[_type == "intro"][0] {
        name,
        slug,
        description,
        role,
        socials,
        image,
        "seo": {
          "title": coalesce(seo.title, name),
          "description": seo.description,
          "image": seo.image,
          "noIndex": seo.noIndex == true
        }
    }`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "projects"] {
        _id,
        title,
        slug,
        bio,
        description,
        url,
        image,
}`);

export const CERTIFICATIONS_QUERY = defineQuery(`*[_type == "certifications"] {
        _id,
        title,
        organization,
        description,
        date,
        certificationId,
        url,
        image,
}`);

export const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience"] {
        _id,
        title,
        company,
        description,
        startDate,
        endDate,
       
}`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  body,
  mainImage {
    asset->{
      url,
      metadata
    },
    alt
  },
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  "date": coalesce(publishedAt, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), image},
`;

export const HERO_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`);

export const MORESTORIES_QUERY = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    ${postFields}
  }
`);

export const SITEMAP_QUERY = defineQuery(`
  *[_type in ["intro", "post"] && defined(slug.current)] {
      "href": select(
        _type == "intro" => "/" ,
        _type == "post" => "/blogs/" + slug.current,
        slug.current
      ),
      _updatedAt
  }
  `);
