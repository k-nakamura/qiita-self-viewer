export type User = Required<{
  description: string | null;
  facebook_id: string | null;
  followees_count: number;
  followers_count: number;
  github_login_name: string | null;
  id: string;
  items_count: number;
  linkedin_id: string | null;
  location: string | null;
  name: string | null;
  organization: string | null;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string | null;
  website_url: string | null;
}>