export type NavItem = {
  title: string;
  href: string;
  /** Only highlight on an exact pathname match, not on descendant routes. */
  isExact?: boolean;
};

/** A titled group renders as a labelled list, an untitled one as bare links. */
export type NavGroup = {
  title?: string;
  items: NavItem[];
};
