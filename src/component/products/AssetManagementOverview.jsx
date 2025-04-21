import React from "react";
import {
  QrCode,
  ClipboardList,
  PackageCheck,
  BookOpen,
  BellRing,
  FileText,
  Wrench,
  FileBarChart,
  CalendarDays,
} from "lucide-react";

const sections = [
  {
    title: "Equipment Registry with Smart QR Codes",
    icon: <QrCode className="w-6 h-6 text-green-600" />,
    desc: "Add and manage all your equipment with unique QR codes. Tag, scan, and retrieve history or raise issues instantly.",
  },
  {
    title: "Service Book & Maintenance Logs",
    icon: <ClipboardList className="w-6 h-6 text-green-600" />,
    desc: "Track full lifecycle logs, upcoming services, and past maintenance in one centralized digital book.",
  },
  {
    title: "Inventory Stock Book",
    icon: <PackageCheck className="w-6 h-6 text-green-600" />,
    desc: "Maintain full control over spare parts, monitor stock levels, and manage inventory flow in real-time.",
  },
  {
    title: "Daily Log Book",
    icon: <BookOpen className="w-6 h-6 text-green-600" />,
    desc: "Capture operational notes, equipment statuses, and incidents in a date-wise format across all shifts.",
  },
  {
    title: "Inventory Requests",
    icon: <FileText className="w-6 h-6 text-green-600" />,
    desc: "Operators can raise item requests with approval workflows — enabling quick, trackable responses.",
  },
  {
    title: "Service Requests",
    icon: <Wrench className="w-6 h-6 text-green-600" />,
    desc: "Report faults, assign technicians, track resolution status, and link logged services to specific assets.",
  },
  {
    title: "Monthly Electrical Maintenance Reports",
    icon: <FileBarChart className="w-6 h-6 text-green-600" />,
    desc: "Generate technician-stamped electrical maintenance summaries with PDF/CSV export options.",
  },
  {
    title: "Monthly Mechanical Maintenance Reports",
    icon: <FileBarChart className="w-6 h-6 text-green-600" />,
    desc: "Log inspections, replacements, and audit compliance actions — always ready for reporting.",
  },
  {
    title: "Scheduling & Notifications",
    icon: <BellRing className="w-6 h-6 text-green-600" />,
    desc: "Never miss a task. Get notified for pending services, inspections, and low stock alerts.",
  },
];

const AssetManagementOverview = () => {
  return (
    <section className="bg-gradient-to-br from-[#f7fbfd] to-[#e6f4f8] py-24 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#236a80]">
            Simplified Asset Management for Modern Industries
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Optimize, monitor, and maintain your environmental assets
            confidently with our EBHOOM EMS Asset Management platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md p-6 flex flex-col gap-4 group
                  transition-all duration-500 border border-gray-100 bg-white"
            >
              {/* Background Overlay that expands diagonally on hover */}
              <div className="absolute inset-0 bg-[#0f1523] origin-top-left scale-0 group-hover:scale-150 transition-transform duration-700 ease-out z-0" />

              {/* Foreground Content */}
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <div className="flex items-center gap-4">
                  {/* Icon with hover color transition */}
                  <div className="p-3 rounded-full transition-colors duration-500 group-hover:bg-white">
                    {/* Add group-hover:text-[#0f1523] inside the icon element */}
                    {React.cloneElement(item.icon, {
                      className:
                        "w-6 h-6 text-green-600 group-hover:text-[#0f1523]",
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f1523] group-hover:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-2 group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetManagementOverview;
