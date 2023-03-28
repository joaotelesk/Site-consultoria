export function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offset = sectionTop + scrollTop - 125; // 125 pixels de espaço acima da seção
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
}
