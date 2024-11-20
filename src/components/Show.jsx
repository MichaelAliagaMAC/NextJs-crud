import Link from "next/link";
import BtnDelete from "./BtnDelete";

const getData = async () => {
  try {
    const response = await fetch(`${process.env.URI}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
    return { data: [] }; // Devuelve un array vacío en caso de error
  }
};

const Show = async () => {
  const { data } = await getData();

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((element) => (
        <div key={element._id} className="p-3 shadow-lg shadow-indigo-500/50 my-4 flex justify-between gap-4 items-start">
          <div>
            <h2 className="font-bold text-2xl text-slate-700">{element.name}</h2>
            <p>{element.age}</p>
          </div>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              href={`/edit/${element._id}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-violet-400 rounded-lg hover:bg-violet-600 focus:ring-4 focus:outline-none"
            >
              Actualizar
            </Link>
            <BtnDelete id={element._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;

