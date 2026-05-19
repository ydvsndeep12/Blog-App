import React from "react";
import { useAuth } from "../context/AuthProvider";

const skills = ["React.js", "Node.js", "MongoDB", "Express.js", "AWS", "Docker", "TypeScript", "Tailwind CSS"];

function About() {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-14 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">About</h1>
        <p className="text-indigo-100 text-lg">The story behind CilliBlog</p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col sm:flex-row items-center gap-6">
          {profile?.user?.photo?.url && (
            <img
              src={profile.user.photo.url}
              alt={profile.user.name}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-100 shrink-0"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {profile?.user?.name || "Akhil K"}
            </h2>
            <p className="text-indigo-600 font-medium mt-1">Full Stack Developer</p>
            <p className="text-gray-500 text-sm mt-2">
              A proficient full stack developer with a passion for building dynamic, responsive,
              and user-friendly web applications.
            </p>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Expertise</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
              <span key={skill} className="bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Adept in modern JavaScript frameworks including React.js, Angular, and Vue.js.
            Proficient in server-side technologies like Node.js and Express.js, with strong
            database management skills across SQL and NoSQL databases. Experienced with cloud
            platforms like AWS, Azure, and Google Cloud for scalable deployments.
          </p>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Highlights</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            {[
              "Developed and deployed numerous full-stack applications with strong problem-solving skills.",
              "Collaborated with cross-functional teams to deliver high-quality software within tight deadlines.",
              "Continuously learning and adapting to emerging technologies and industry trends.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Personal */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Interests</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Beyond professional achievements, a big fan of cricket and holds immense admiration
            for <strong className="text-indigo-700">King Kohli</strong>. Biggest inspiration is
            twin brother <strong className="text-indigo-700">Ankush</strong> — a steadfast friend
            and constant motivator to strive for excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
