export const isComponentType = data => {
  switch (data.__typename) {
    case "ContentfulChapterSection":
      return "section"
    case "ContentfulTopicsListComponent":
      return "topics"
    default:
      return false
  }
}
