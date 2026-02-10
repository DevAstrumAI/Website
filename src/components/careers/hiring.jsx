import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  MapPin,
  Briefcase,
  LineChart,
} from "lucide-react";

export default function Hiring() {
  const [expandedDept, setExpandedDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All locations");

  const departments = [
    {
      name: "Business Operations",
      icon: Briefcase,
      roles: 1,
      jobs: [
        {
          title: "Business Operations & Strategy Manager",
          location: "San Francisco, CA",
          applyLink: "#",
        },
      ],
    },
    {
      name: "Data Science and Analytics",
      icon: LineChart,
      roles: 2,
      jobs: [
        {
          title: "Senior Data Scientist - ML Research",
          location: "Remote (US)",
          applyLink: "#",
        },
        {
          title: "Analytics Engineer",
          location: "London, UK",
          applyLink: "#",
        },
      ],
    },
    // Add more departments as needed
  ];

  // Helper to extract unique departments and locations for dropdowns
  const availableDepts = [
    "All Departments",
    ...new Set(departments.map((d) => d.name)),
  ];
  const availableLocations = [
    "All locations",
    ...new Set(departments.flatMap((d) => d.jobs.map((j) => j.location))),
  ];

  // Filtering Logic
  const filteredDepartments = departments
    .filter((dept) =>
      selectedDept === "All Departments" ? true : dept.name === selectedDept,
    )
    .map((dept) => {
      const filteredJobs = dept.jobs.filter((job) => {
        const matchesSearch = job.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesLocation =
          selectedLocation === "All locations"
            ? true
            : job.location === selectedLocation;
        return matchesSearch && matchesLocation;
      });

      return {
        ...dept,
        jobs: filteredJobs,
        roles: filteredJobs.length,
      };
    })
    .filter((dept) => dept.roles > 0);

  const totalRoles = filteredDepartments.reduce(
    (acc, dept) => acc + dept.roles,
    0,
  );
  const totalDepts = filteredDepartments.length;

  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section */}
      <section className=" py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,79,252,0.12)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semi-bold tracking-tight leading-tight"
          >
            Help us bring{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-violet-600 bg-clip-text text-transparent">
              human
              <br /> intelligence
            </span>{" "}
            to software
          </h1>

          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            Join us as we develop reliable AI systems for the world's most
            important decisions.
          </p>
        </div>
      </section>

      {/* Filters & Stats */}
      <section className="py-12 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            {/* Search & Filters */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                    w-full pl-12 pr-4 py-3 bg-gray-900/70 border border-gray-700 
                    rounded-lg text-white placeholder-gray-500 focus:outline-none 
                    focus:border-purple-500/50 transition-colors
                  "
                />
              </div>

              <div className="relative flex-1 min-w-[200px]">
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="
                  w-full appearance-none pl-4 pr-10 py-3 bg-gray-900/70 border border-gray-700 
                  rounded-lg text-white focus:outline-none focus:border-purple-500/50
                "
                >
                  {availableDepts.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>

              <div className="relative flex-1 min-w-[200px]">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="
                  w-full appearance-none pl-4 pr-10 py-3 bg-gray-900/70 border border-gray-700 
                  rounded-lg text-white focus:outline-none focus:border-purple-500/50
                "
                >
                  {availableLocations.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Stats */}
            <div className="text-gray-400 text-lg md:text-xl whitespace-nowrap">
              {totalRoles} roles across {totalDepts} department
              {totalDepts !== 1 ? "s" : ""}
              <button
                onClick={() =>
                  setExpandedDept(expandedDept === "all" ? null : "all")
                }
                className="ml-4 text-purple-400 hover:text-purple-300 transition-colors"
              >
                {expandedDept === "all" ? "Collapse all" : "Expand all"}
              </button>
            </div>
          </div>

          {/* Job Categories */}
          <div className="space-y-6">
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((dept) => (
                <div
                  key={dept.name}
                  className="
                    bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 
                    rounded-xl overflow-hidden
                  "
                >
                  {/* Department Header */}
                  <button
                    onClick={() =>
                      setExpandedDept(
                        expandedDept === dept.name ? null : dept.name,
                      )
                    }
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-purple-900/20 text-purple-400">
                        <dept.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {dept.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {dept.roles} role{dept.roles !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-transform ${expandedDept === dept.name || expandedDept === "all" ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Expanded Jobs */}
                  {(expandedDept === dept.name || expandedDept === "all") && (
                    <div className="border-t border-gray-800/50 px-6 py-4 space-y-4">
                      {dept.jobs.map((job, idx) => (
                        <div
                          key={idx}
                          className="
                            flex flex-col sm:flex-row sm:items-center 
                            justify-between gap-4 py-4 px-6 
                            bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-colors
                          "
                        >
                          <div>
                            <h4 className="text-lg font-medium text-white">
                              {job.title}
                            </h4>
                            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                              <MapPin size={16} />
                              {job.location}
                            </div>
                          </div>

                          <a
                            href={job.applyLink}
                            className="
                              inline-flex items-center px-6 py-2.5 
                              bg-purple-600 hover:bg-purple-700 
                              text-white font-medium rounded-lg 
                              transition-colors whitespace-nowrap
                            "
                          >
                            Apply Now
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-gray-900/40 rounded-xl border border-gray-800/50">
                <p className="text-gray-400 text-xl">
                  No positions match your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDept("All Departments");
                    setSelectedLocation("All locations");
                  }}
                  className="mt-4 text-purple-400 hover:text-purple-300"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
