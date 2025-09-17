import { features } from "@/data/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {features.map((f, index) => (
          <div
            key={f.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={f.image}
                alt={f.title}
                className="object-contain w-full h-full"
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
