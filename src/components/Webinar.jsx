import React, { useEffect, useState } from "react";
import { CalendarDays, Clock, Video, Globe } from "lucide-react";

const WebinarSection = () => {
  const [values, setValues] = useState({
    webinar_date: "",
    webinar_time: "",
    zoom_link: "",
  });

  useEffect(() => {
    // ✅ Simulate fetch from GoHighLevel API or custom JSON
    // बाद में यहाँ तुम अपने API से data fetch कर सकती हो
    const fetchData = async () => {
      try {
        const res = await fetch("https://your-backend.com/api/custom-values");
        const data = await res.json();

        setValues({
          webinar_date: data.webinar_date || "19 Oct 2025",
          webinar_time: data.webinar_time || "07:00 PM",
          zoom_link: data.zoom_link || "https://zoom.us/j/yourlink",
        });
      } catch (err) {
        console.error("Error fetching webinar data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#010726] text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Master Your Life
      </h1>
      <p className="text-lg text-gray-300 text-center mb-10">
        Unlock your potential & transform your normal personality into a
        confident personality.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Left Video Box */}
        <div className="border-8 border-yellow-400 rounded-3xl overflow-hidden w-full md:w-1/2 aspect-video">
          <iframe
            className="w-full h-full"
            src={values.zoom_link.replace("register/", "embed/")}
            title="Webinar Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
          {/* Date */}
          <div className="bg-[#0b112b] rounded-2xl p-6 flex items-center gap-4 shadow-lg">
            <div className="bg-yellow-500 p-3 rounded-full">
              <CalendarDays className="text-black" size={30} />
            </div>
            <div>
              <p className="text-gray-300">Date</p>
              <h3 className="text-xl font-bold">{values.webinar_date}</h3>
            </div>
          </div>

          {/* Time */}
          <div className="bg-[#0b112b] rounded-2xl p-6 flex items-center gap-4 shadow-lg">
            <div className="bg-yellow-500 p-3 rounded-full">
              <Clock className="text-black" size={30} />
            </div>
            <div>
              <p className="text-gray-300">Time</p>
              <h3 className="text-xl font-bold">{values.webinar_time}</h3>
            </div>
          </div>

          {/* Venue */}
          <div className="bg-[#0b112b] rounded-2xl p-6 flex items-center gap-4 shadow-lg">
            <div className="bg-yellow-500 p-3 rounded-full">
              <Video className="text-black" size={30} />
            </div>
            <div>
              <p className="text-gray-300">Venue</p>
              <h3 className="text-xl font-bold">Zoom</h3>
            </div>
          </div>

          {/* Language */}
          <div className="bg-[#0b112b] rounded-2xl p-6 flex items-center gap-4 shadow-lg">
            <div className="bg-yellow-500 p-3 rounded-full">
              <Globe className="text-black" size={30} />
            </div>
            <div>
              <p className="text-gray-300">Language</p>
              <h3 className="text-xl font-bold">English | Hindi</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSection;
