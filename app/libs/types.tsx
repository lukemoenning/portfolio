export interface navItem {
  name: string
  href: string
}

export type icon = 'Email' | 'GitHub' | 'LinkedIn' | 'Phone' | string // TODO: remove string

export interface social {
  name: string
  url: string
  icon: icon
}

export interface socialLinkProps {
  social: social
  size: string
  displayName: boolean
}

export interface experience {
  title: string
  location: string
  date: string
  paragraph: string
  bulletPoints: string[]
  display: 'paragraph' | 'bulletPoints' | string // TODO: remove string
  skills: string[]
}

export interface project {
  name: string
  description: string
  photo: string
  techstack: string[]
  github: string
  date: string
  live_demo: string | null
}
