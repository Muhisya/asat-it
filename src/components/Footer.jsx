export default function Footer() {
  const socials = ["GitHub", "LinkedIn", "Twitter"];
  return (
    <footer className="w-full border-t border-zinc-900 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-sm">
      <span>© 2026 Personal Portfolio. All rights reserved.</span>
      <ul className="flex gap-6">
        {socials.map((s) => (
          <li key={s}>
            <a href={`https://github.com/HoshiExperience` || `#`} className="hover:text-amber-400 transition-colors">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}