import React from 'react'
import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'

export type IconName = keyof typeof LucideIcons

interface LucideIconProps extends LucideProps {
  name: string
  fallback?: IconName
}

export const LucideIcon = ({ name, fallback = 'HelpCircle', ...props }: LucideIconProps) => {
  // Check if the icon exists in Lucide
  const Icon = (LucideIcons[name as IconName] || LucideIcons[fallback]) as React.FC<LucideProps>

  if (!Icon) return null

  return <Icon {...props} />
}
