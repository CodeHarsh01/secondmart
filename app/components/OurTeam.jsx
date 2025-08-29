"use client";

const team = [
  {
    name: "Courtney Henry",
    role: "Development Manager",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    bg: "bg-blue-50",
  },
  {
    name: "Jerome Bell",
    role: "Software Developer",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    bg: "bg-indigo-50",
  },
  {
    name: "Jerome Bell",
    role: "Software Tester",
    image:
      "https://randomuser.me/api/portraits/men/76.jpg",
    bg: "bg-purple-50",
  },
]

export default function OurTeam() {
  return (
    <section className="w-full px-6 py-12 mt-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
        Our Team
      </h2>

      <div className="flex flex-col sm:flex-row gap-10 justify-center">
        {team.map((member, index) => (
          <div
            key={index}
            className={`${member.bg} rounded-2xl p-6 flex flex-col items-center text-center shadow-sm`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
