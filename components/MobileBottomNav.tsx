'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderDot, Box, Mail } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', href: '/', icon: Home },
    { name: 'WORK', href: '/work', icon: FolderDot },
    { name: 'SERVICES', href: '/services', icon: Box },
    { name: 'CONTACT', href: '/contact', icon: Mail },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-wo-bg/80 backdrop-blur-xl border-t border-wo-border/50 pb-safe">
      <div className="flex justify-around items-center h-[72px] px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full gap-1.5 transition-colors duration-300 ${
                isActive ? 'text-wo-amber' : 'text-wo-text-muted hover:text-wo-text'
              }`}
            >
              <Icon 
                strokeWidth={isActive ? 2 : 1.5} 
                className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,171,64,0.5)]' : ''}`} 
              />
              <span className={`text-[9px] font-mono tracking-wider ${isActive ? 'font-medium' : 'font-light'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
