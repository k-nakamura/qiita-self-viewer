class Item {
  rendered_body?: string;
  body?: string;
  coediting?: boolean;
  comments_count?: number;
  created_at: string;
  group?: string;
  id?: string;
  likes_count?: number;
  private?: boolean;
  reactions_count?: number;
  tags: any[];
  title?: string;
  updated_at?: string;
  url?: string;
  user?: string;
  page_views_count?: number;

  constructor(init: Partial<Item>) {
    this.tags = [];
    this.created_at = '';
    Object.assign(this, init);
  }
}

export default Item;