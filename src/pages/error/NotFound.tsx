import erroelogo from "../../assets/images/404page.webp";

export default function NOtFound() {
  return (
    <section className="w-full flex flex-col justify-center items-center   h-screen  ">
      <div>
        <h1 className="text-center mt-10">Opps... page not found</h1>
        <img
          src={erroelogo}
          alt="Erro logo"
          className=" text-green-50 w-2xl h-2xl bg-gray-50 rounded-full"
        />
      </div>
      <div>
        <a
          href="/"
          className="border border-teal-200/20   p-2 rounded-md transition hover:scale-98  hover:bg-teal-200/20 hover"
        >
          Go to home page
        </a>
      </div>
    </section>
  );
}
