export default function Hero() {
  return (
    <section className="relative text-white min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-3">
      <p className="mb-4 text-3xl">Hi, I am</p>

      <h1 className="font-extrabold text-5xl md:text-7xl uppercase tracking-tight bg-linear-to-b from-purple-400 via-purple-600 to-purple-900 md:to-black bg-clip-text text-transparent">
        Ittipat Yodprasit
      </h1>

      <p className="leading-6 my-10 text-lg max-w-3xl font-light text-gray-300">
        Full-stack Developer with hands-on experience delivering real-world
        solutions across multiple industries, including finance, engineering,
        academia, and CRM platforms.
      </p>

      <hr className="w-20" />

      <a
        href="#education"
        className="absolute bottom-10 font-display px-6 py-3 border border-white transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
      >
        View My Journey ↓
      </a>
    </section>
  );
}
