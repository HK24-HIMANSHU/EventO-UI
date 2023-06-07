export interface Community {
  Id: number;
  Name: string;
  UserId: number;
  IsExclusive: boolean;
  IsPremium: boolean;
  CreatedAt: Date;
  Price: number;
  InviteTokenId: number;
}
