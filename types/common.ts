import { LucideProps } from 'lucide-react'
import { ReactNode } from 'react'

export type IconType = ReactNode | ((props: LucideProps) => JSX.Element)

export interface LinkItem {
  text: string
  link: string
}

export interface BaseItem {
  id: string
  title: string
  description?: string
}
