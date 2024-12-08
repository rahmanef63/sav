export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export type NotificationPriority = 'low' | 'medium' | 'high'

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  priority: NotificationPriority
  timestamp: string
  read: boolean
  link?: string
  action?: {
    label: string
    onClick: () => void
  }
  metadata?: Record<string, any>
}

export interface SystemNotification extends Notification {
  category: 'system' | 'maintenance' | 'update'
  affectedUsers: 'all' | 'admins' | 'partners' | 'clients'
  startTime?: string
  endTime?: string
}

export interface ProjectNotification extends Notification {
  projectId: string
  stage: 'consultation' | 'design' | 'revision' | 'implementation'
  requiresAction: boolean
}

export interface UserNotification extends Notification {
  userId: string
  category: 'account' | 'billing' | 'message'
}

export interface NotificationPreferences {
  email: {
    enabled: boolean
    frequency: 'immediate' | 'daily' | 'weekly'
    types: NotificationType[]
  }
  push: {
    enabled: boolean
    quiet: {
      start: string // 24h format "HH:mm"
      end: string
    }
    types: NotificationType[]
  }
  inApp: {
    enabled: boolean
    maxVisible: number
    types: NotificationType[]
  }
}

export interface NotificationStats {
  total: number
  unread: number
  byType: Record<NotificationType, number>
  byPriority: Record<NotificationPriority, number>
}
