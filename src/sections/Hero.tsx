export default function Hero() {
  return (
    <section className="text-white min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-6">
      <p className="mb-4 text-3xl">Hi, I am</p>

      <h1 className="font-extrabold  text-5xl md:text-7xl uppercase tracking-tight">
        Ittipat Yodprasit
      </h1>

      <p className="leading-6 my-10 text-lg max-w-3xl font-light text-gray-300">
        Full-stack Developer with hands-on experience delivering real-world
        solutions across multiple industries, including finance, engineering,
        academia, and CRM platforms.
      </p>

      <a
        href="#education"
        className="font-display absolute bottom-12 px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300"
      >
        View My Journey ↓
      </a>
    </section>
  );
}
