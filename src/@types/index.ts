export interface ContentfulChapter {
  chapterNumber: string
  chapterSlug: string
  chapterName: string
  chapterCopy: {
    json: any
  }
  chapterSections: any[]
}

export interface SectionType {
  id: string
  sectionTitle: string
  sectionSlug: string
  sectionCopy: {
    json: any
  }
}

export interface TopicsListSectionType {
  id: string
  topicsComponentHeadline: string
  topicsComponentList: {
    json: any
  }
}
