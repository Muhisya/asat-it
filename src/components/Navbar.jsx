export default function Navbar() {
  const links = ["Home", "About", "Projects"];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-zinc-900"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
    >
      <span className="font-extrabold text-lg tracking-tight text-white">
        HOSHI<span className="text-amber-400">.</span>EXE
      </span>
      <ul className="flex gap-8 text-sm font-medium text-zinc-400">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`transition-colors hover:text-amber-400 ${
                link === "Home" ? "text-white font-semibold" : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}