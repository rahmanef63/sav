import { LucideIcon } from 'lucide-react'
import { IconType } from '@/types/common'

export const createIconComponent = (Icon: LucideIcon): IconType => {
  const IconComponent = (props: React.ComponentProps<LucideIcon>) => <Icon {...props} />
  IconComponent.displayName = `Icon(${Icon.displayName || Icon.name})`
  return IconComponent
}
