import React from "react";

const page = () => {
  const profile = {
    name: "John Doe",
    image: "https://i.pravatar.cc/200?img=12",
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
    bio: "Passionate full-stack developer who enjoys collaborating on innovative projects and building scalable web applications.",
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Profile</h2>
        <p className="text-default-500 mt-1">
          Manage your collaborator profile information.
        </p>
      </div>

      <div className="rounded-2xl border border-default-200 bg-content1 p-6 shadow-sm">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img
            src={profile.image}
            alt={profile.name}
            className="h-28 w-28 rounded-full object-cover border"
          />

          <div className="flex-1 space-y-4">
            <div>
              <p className="text-sm text-default-500">Name</p>
              <h3 className="text-xl font-semibold">{profile.name}</h3>
            </div>

            <div>
              <p className="text-sm text-default-500">Skills</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-default-100 px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-default-500">Bio</p>
              <p className="mt-1">{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;