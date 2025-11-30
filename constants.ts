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
    portfolio: ['https://picsum.photos/id/1019/300/300', 'https://picsum.photos/id/1020/300/300'],
    whatsapp: '5511999999999',
    phone: '(11) 99999-9999',
    instagram: '@carlos.eletrica'
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
    reviewCount: 89,
    address: 'Av. das Construções, 1000 - Jardim Obras',
    whatsapp: '5519988888888',
    phone: '(19) 3333-4444',
    instagram: '@construmais'
  },
  {
    id: 'u3',
    name: 'Ana Pereira',
    role: UserRole.CLIENT,
    location: 'Osasco, SP',
    avatar: 'https://picsum.photos/id/1025/150/150',
    bio: 'Reformando a casa dos sonhos.',
  },
  {
    id: 'u4',
    name: 'Elétrica Trovão',
    role: UserRole.SUPPLIER,
    storeType: 'Materiais Elétricos',
    location: 'São Paulo, SP',
    avatar: 'https://picsum.photos/id/1060/150/150',
    coverImage: 'https://picsum.photos/id/1061/800/300',
    bio: 'Especialistas em iluminação, fiação e automação residencial. As melhores marcas do mercado.',
    rating: 4.9,
    reviewCount: 210,
    address: 'Rua da Luz, 45 - Centro',
    whatsapp: '5511977777777',
    phone: '(11) 3232-1010',
    instagram: '@eletricatrovao'
  },
  {
    id: 'u5',
    name: 'Hidráulica Pura',
    role: UserRole.SUPPLIER,
    storeType: 'Hidráulica e Encanamento',
    location: 'Guarulhos, SP',
    avatar: 'https://picsum.photos/id/1070/150/150',
    coverImage: 'https://picsum.photos/id/1071/800/300',
    bio: 'Tubos, conexões, torneiras e louças sanitárias. Soluções completas para sua instalação hidráulica.',
    rating: 4.7,
    reviewCount: 56,
    address: 'Av. das Águas, 200 - Vila Nova',
    whatsapp: '5511966666666',
    phone: '(11) 4040-5050',
    instagram: '@hidraulicapura'
  },
  {
    id: 'u6',
    name: 'Casa das Tintas Cor & Arte',
    role: UserRole.SUPPLIER,
    storeType: 'Tintas e Acabamentos',
    location: 'São Bernardo, SP',
    avatar: 'https://picsum.photos/id/1080/150/150',
    coverImage: 'https://picsum.photos/id/1081/800/300',
    bio: 'Mistura de tintas na hora, acessórios para pintura e consultoria de cores gratuita.',
    rating: 4.6,
    reviewCount: 145,
    address: 'Rua Colorida, 123 - Centro',
    whatsapp: '5511955555555',
    phone: '(11) 4343-2020',
    instagram: '@casadastintas.abc'
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