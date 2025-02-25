import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blogTypes/blockContentType";
import { categoryType } from "./blogTypes/categoryType";
import { postType } from "./blogTypes/postType";
import { authorType } from "./blogTypes/authorType";
import { introType } from "./portfolioTypes/introType";
import { projectType } from "./portfolioTypes/projectType";
import { certificationType } from "./portfolioTypes/certificationType";
import { experienceType } from "./portfolioTypes/experienceType";
import { seoType } from "./portfolioTypes/seoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    introType,
    seoType,
    projectType,
    certificationType,
    experienceType,
  ],
};
