import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingCalendar() {
  const [selected, setSelected] =  useState<Date | undefined>(undefined);

  const today = new Date();
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  return (
    <div className="flex justify-centermin-h-screen items-center">
      <div className="w-full">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">
                High Demand
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Currently Fully Booked
            </h2>
            <p className="text-gray-400 text-base max-w-md mx-auto">
              All sessions are booked out. Please contact us to discuss further.
            </p>
          </div>

          {/* Calendar */}
          <div className="flex scale-90 lg:scale-100 w-full justify-center">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              fromDate={today}
              modifiers={{
                booked: { after: today }, // all future dates look booked
              }}
              modifiersStyles={{
                booked: {
                  border: "2px solid #ef4444",
                  borderRadius: "0.5rem",
                  color: "#ef4444",
                  opacity: 0.8,
                },
              }}
              disabled={[
                { before: tomorrow}
                
              ]}
              styles={{
                root: { margin: "0 auto", color: "#fff" },
                months: { display: "flex", justifyContent: "center" },
                caption: { color: "#fff", fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" },
                head_cell: { color: "#9ca3af", fontWeight: "600", fontSize: "0.875rem", textTransform: "uppercase" },
                day: { color: "#d1d5db", borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: "500", transition: "all 0.2s" },
                day_selected: { backgroundColor: "#10b981", color: "white", fontWeight: "700" },
                day_today: { backgroundColor: "#374151", color: "#fff", fontWeight: "700" },
                nav_button: { color: "#fff", borderRadius: "0.5rem", transition: "all 0.2s" },
              }}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
            
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-red-500"></div>
              <span className="text-gray-400">Fully Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span className="text-gray-400">Selected (Waitlist)</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
