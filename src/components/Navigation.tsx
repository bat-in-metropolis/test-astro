import React from 'react';

interface NavItem {
  href: string;
  label: string;
}

interface NavigationProps {
  currentPath?: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about.html', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio.html', label: 'Portfolio' },
  { href: '/blog.html', label: 'Blog' },
  { href: '/team.html', label: 'Team' },
  { href: '/gallery.html', label: 'Gallery' },
  { href: '/testimonials.html', label: 'Testimonials' },
  { href: '/faq.html', label: 'FAQ' },
  { href: '/contact.html', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPath = '' }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">Creative Studio</div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={currentPath === item.href ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
