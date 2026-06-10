import BlobAvatar from "./BlobAvatar";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 animate-fadeUp">
      <BlobAvatar />

      <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
        Hoshi Experience
      </h1>

      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/60 text-sm font-medium text-white mb-6">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        Full-Stack Web Developer &amp;{" "}
        <span className="text-amber-400 font-semibold">Technical Wanderer</span>
      </div>

      <p className="max-w-xl text-zinc-400 text-base leading-relaxed mb-10">
        Specializing in building robust web applications using the MERN stack
        and Laravel. Passionate about crafting clean code, mentoring the next
        generation of developers, and bridging the gap between education and
        modern technology.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#" className="px-7 py-3 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors">
          Get In Touch
        </a>
        <a href="#" className="px-7 py-3 rounded-xl font-bold text-white border border-zinc-700 bg-zinc-900 hover:border-zinc-500 transition-colors">
          View Projects
        </a>
      </div>
    </section>
  );
}