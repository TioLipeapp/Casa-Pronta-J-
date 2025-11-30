export enum UserRole {
  CLIENT = 'CLIENT',
  PROFESSIONAL = 'PROFESSIONAL',
  SUPPLIER = 'SUPPLIER',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  coverImage?: string;
  location?: string;
  bio?: string;
  rating?: number;
  reviewCount?: number;
  // Professional specific
  profession?: string;
  isAvailable?: boolean;
  portfolio?: string[];
  // Supplier specific
  storeType?: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userRole: UserRole;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  unreadCount: number;
}