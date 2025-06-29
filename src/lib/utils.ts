export function isActiveLink(currentPath: string, href: string) {
  return currentPath === href || currentPath.startsWith(href + '/');
}

export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  }
}
