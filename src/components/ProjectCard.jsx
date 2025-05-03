const ProjectCard = ({ title, date, description, tech, link, thumbnail }) => {
  return (
    <div className="border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 bg-white/5 backdrop-blur">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {date && <p className="text-sm text-gray-300 mb-2">{date}</p>}
        <p className="text-gray-200 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, idx) => (
            <li
              key={idx}
              className="text-sm bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded"
            >
              {item}
            </li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
