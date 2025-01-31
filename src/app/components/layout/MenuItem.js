"use client";
export default function MenuItem({image, title, description, price}) {
  return (
    <div className=" bg-gray-300 p-4 rounded-lg text-center group hover:bg-slate-100 hover:shadow-lg hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src={image} alt={title} className="max-h-32 mx-auto block"></img>
      </div>

      <h4 className=" font-bold my-3">{title}</h4>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
      <div className="text-center bg-primary text-white px-6 py-2 my-2 mx-8 rounded-full font-semibold">
       {price}
      </div>
    </div>
  );
}
