export interface Community {
  id: number;
  name: string;
  userId: number;
  isExclusive: boolean;
  isPremium: boolean;
  createdAt: Date;
  price: number;
  inviteTokenId: number;
}
