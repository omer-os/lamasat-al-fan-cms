export default {
  title: "All Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "project name",
      name: "ProjectName",
      type: "string",
      description: "should be uniqe",
      validation: (Rule) => [Rule.required()],
    },
    {
      title: "project description",
      name: "description",
      type: "string",
    },
    {
      title: "project status",
      name: "Status",
      type: "string",
    },
    {
      title: "project locaition",
      name: "Location",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "ProjectName",
        maxLength: 80,
      },
      validation: (Rule) => [Rule.required()],
    },
    {
      title: "cover image",
      name: "ProjectCover",
      type: "image",
      description: "project first cover. ",
    },
    {
      name: "ProjectImages",
      title: "ProjectImages",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
  ],
};
