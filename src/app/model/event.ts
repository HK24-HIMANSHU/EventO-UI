export interface Event {
  Id: number;
  Name: string;
  UserId: number;
  // CommunityId: number;
  SpaceId: number;
  Date: Date;
  Time: Date;
  Duration: number;
  Rules: string;
  CreatedAt: Date;
}
