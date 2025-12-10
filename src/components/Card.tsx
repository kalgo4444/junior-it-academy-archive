import { CardData } from "@/types";

const Card: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <div className="border shadow rounded border-gray-100 p-4 flex flex-col h-full bg-white">
      <h2 className="text-xl font-bold mb-2 primary-color">{data.title}</h2>
      <p className="text-gray-600 flex-grow">{data.description}</p>
      {data.link && (
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-accent font-medium w-full h-10 bg-red-500 flex items-center justify-center rounded hover:bg-red-600 transition-colors text-white "
        >
          Havolani ochish
        </a>
      )}
    </div>
  );
};

export default Card;
