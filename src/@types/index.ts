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

interface CardImage {
  description: string
  id: string
  file: {
    url: string
    fileName: string
    contentType: string
  }
}

export interface CardSectionType {
  id: string
  cardHeadline: string
  cardImage: CardImage
  cardCopy: {
    json: any
  }
}

export interface CardsSectionType {
  id: string
  cardItems: CardSectionType[]
}

export interface PageContextType {
  slug: string
  chapterNumber: string
  course: {
    courseName: string
  }
  prevChapter: ContentfulChapter
  nextChapter: ContentfulChapter
}
