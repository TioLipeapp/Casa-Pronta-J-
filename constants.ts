import { Post, User, UserRole, Product, Conversation } from './types';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Carlos Silva',
    role: UserRole.PROFESSIONAL,
    profession: 'Eletricista',
    location: 'São Paulo, SP',
    avatar: 'https://picsum.photos/id/1005/150/150',
    coverImage: 'https://picsum.photos/id/1018/800/300',
    bio: 'Eletricista residencial e predial com 10 anos de experiência. Instalações, reparos e manutenção.',
    rating: 4.8,
    reviewCount: 124,
    isAvailable: true,
    portfolio: ['https://picsum.photos/id/1019/300/300', 'https://picsum.photos/id/1020/300/300']
  },
  {
    id: 'u2',
    name: 'ConstruMais Materiais',
    role: UserRole.SUPPLIER,
    storeType: 'Material de Construção',
    location: 'Campinas, SP',
    avatar: 'https://picsum.photos/id/1021/150/150',
    coverImage: 'https://picsum.photos/id/1022/800/300',
    bio: 'Tudo para sua obra, do básico ao acabamento. Entrega rápida em toda região.',
    rating: 4.5,
    reviewCount: 89
  },
  {
    id: 'u3',
    name: 'Ana Pereira',
    role: UserRole.CLIENT,
    location: 'Osasco, SP',
    avatar: 'https://picsum.photos/id/1025/150/150',
    bio: 'Reformando a casa dos sonhos.',
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    userName: 'Carlos Silva',
    userAvatar: 'https://picsum.photos/id/1005/150/150',
    userRole: UserRole.PROFESSIONAL,
    content: 'Mais um serviço de quadro de distribuição finalizado com sucesso! Segurança em primeiro lugar. ⚡ #eletricista #segurança #obra',
    image: 'https://picsum.photos/id/175/600/400',
    likes: 45,
    comments: 12,
    timestamp: '2 horas atrás'
  },
  {
    id: 'p2',
    userId: 'u2',
    userName: 'ConstruMais Materiais',
    userAvatar: 'https://picsum.photos/id/1021/150/150',
    userRole: UserRole.SUPPLIER,
    content: '🔥 PROMOÇÃO RELÂMPAGO! 🔥 Cimento CP II por apenas R$ 29,90 o saco. Corra antes que acabe o estoque!',
    image: 'https://picsum.photos/id/250/600/400',
    likes: 89,
    comments: 34,
    timestamp: '5 horas atrás'
  },
  {
    id: 'p3',
    userId: 'u3',
    userName: 'Ana Pereira',
    userAvatar: 'https://picsum.photos/id/1025/150/150',
    userRole: UserRole.CLIENT,
    content: 'Alguém recomenda um bom pintor na região de Osasco? Preciso pintar a fachada.',
    likes: 12,
    comments: 8,
    timestamp: '1 dia atrás'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'prod1', name: 'Cimento CP II 50kg', price: 29.90, category: 'Básico', image: 'https://picsum.photos/id/100/200/200', description: 'Cimento de alta qualidade para uso geral.' },
  { id: 'prod2', name: 'Tinta Acrílica Branca 18L', price: 289.00, category: 'Pintura', image: 'https://picsum.photos/id/101/200/200', description: 'Acabamento fosco, alto rendimento.' },
  { id: 'prod3', name: 'Kit Ferramentas Básicas', price: 159.90, category: 'Ferramentas', image: 'https://picsum.photos/id/102/200/200', description: 'Martelo, chave de fenda, alicate e trena.' },
];

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'c1',
    participantId: 'u1',
    participantName: 'Carlos Silva',
    participantAvatar: 'https://picsum.photos/id/1005/150/150',
    lastMessage: 'Posso fazer o orçamento amanhã às 14h?',
    unreadCount: 2
  },
  {
    id: 'c2',
    participantId: 'u2',
    participantName: 'ConstruMais',
    participantAvatar: 'https://picsum.photos/id/1021/150/150',
    lastMessage: 'Seu pedido saiu para entrega!',
    unreadCount: 0
  }
];