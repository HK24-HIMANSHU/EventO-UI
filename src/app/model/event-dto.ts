export interface EventDto {
  id: number;
  name: string;
  userId: number;
  // CommunityId: number;
  spaceId: number;
  date: Date;
  time: Date;
  duration: number;
  rules: string;
  createdAt: Date;
  price: number;
}
