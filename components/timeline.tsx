import { Pill, Beaker, Hammer, TestTube } from "lucide-react"
import { Card } from "@/components/ui/primitives"

interface TimelineItem {
  id: string
  title: string
  startDate: { year: number; month: number }
  endDate: { year: number; month: number }
  icon: React.ReactNode
  color: string
}

const timelineData: TimelineItem[] = [
  {
    id: "pilling",
    title: "Pilling",
    startDate: { year: 2024, month: 1 }, // Starts at beginning of 2024
    endDate: { year: 2025, month: 1 }, // Ends at beginning of 2025
    icon: <Pill className="h-5 w-5" />,
    color: "bg-slate-400",
  },
  {
    id: "speccing",
    title: "Speccing",
    startDate: { year: 2025, month: 1 }, // Starts at beginning of 2025
    endDate: { year: 2026, month: 1 }, // Ends at beginning of 2026
    icon: <Beaker className="h-5 w-5" />,
    color: "bg-amber-500",
  },
  {
    id: "building",
    title: "Building",
    startDate: { year: 2026, month: 1 }, // Starts at beginning of 2026
    endDate: { year: 2028, month: 1 }, // Ends at beginning of 2028
    icon: <Hammer className="h-5 w-5" />,
    color: "bg-blue-500",
  },
  {
    id: "testing",
    title: "Testing",
    startDate: { year: 2027, month: 1 }, // Starts at beginning of 2027
    endDate: { year: 2029, month: 1 }, // Ends at beginning of 2029
    icon: <TestTube className="h-5 w-5" />,
    color: "bg-green-500",
  },
]

const START_YEAR = 2024
const END_YEAR = 2030
const TOTAL_MONTHS = (END_YEAR - START_YEAR) * 12

// Helper function to convert date to months since start
const getMonthsSinceStart = (date: { year: number; month: number }) => {
  return (date.year - START_YEAR) * 12 + (date.month - 1)
}

// Helper function to calculate grid position percentage
const getGridPosition = (date: { year: number; month: number }) => {
  const totalMonths = (date.year - START_YEAR) * 12 + (date.month - 1)
  return (totalMonths / TOTAL_MONTHS) * 100
}

export function Timeline() {
  const CURRENT_DATE = { year: 2025, month: 3 }
  const currentOffset = getGridPosition(CURRENT_DATE)

  return (
    <Card className="bg-white border-slate-200 p-4">
      <div className="relative px-8 py-4">
        <div className="relative">
          {/* Year marker lines */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-7 h-full">
              {Array.from({ length: TOTAL_MONTHS / 12 + 1 }).map((_, index) => (
                <div key={index} className="relative h-full">
                  <div 
                    className={`absolute top-0 bottom-0 -left-3 w-0.5 bg-slate-200 
                      ${index === 0 || index === TOTAL_MONTHS / 12 ? 'bg-slate-300' : ''}`} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right edge line */}
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-slate-200" />

          {/* Year labels */}
          <div className="grid grid-cols-7 mb-16 relative">
            {Array.from({ length: TOTAL_MONTHS / 12 + 1 }).map((_, index) => (
              <div key={index} className={`text-sm font-medium 
                ${index === 0 || index === TOTAL_MONTHS / 12 ? 'text-slate-900' : 'text-slate-500'}`}>
                {START_YEAR + index}
              </div>
            ))}
          </div>

          {/* We are here marker */}
          <div 
            className="absolute w-0 border-l border-dashed border-slate-600/30"
            style={{ 
              left: `${currentOffset}%`,
              top: "3rem", // Start after year labels
              bottom: "0", // Extend to bottom
              zIndex: 0
            }}
          >
            <div className="absolute -top-2 -translate-x-1/2 whitespace-nowrap z-10">
              <div className="bg-slate-600 text-white text-xs px-2 py-1 rounded">
                We are here
              </div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 mx-auto
                border-l-transparent border-r-transparent border-t-slate-600" />
            </div>
          </div>

          {/* Timeline bars */}
          <div className="relative h-56 px-3">
            {timelineData.map((item, index) => {
              const startOffset = getGridPosition(item.startDate)
              const endOffset = getGridPosition(item.endDate)
              const width = endOffset - startOffset

              return (
                <div
                  key={item.id}
                  className="absolute flex items-center"
                  style={{
                    top: `${index * 3.5}rem`,
                    left: `${startOffset}%`,
                    width: `${width}%`,
                  }}
                >
                  {/* Simple filled bar */}
                  <div className={`h-3 w-full ${item.color} rounded-full`} />
                  
                  {/* Icon and title */}
                  <div className="absolute -top-8 left-0 flex items-center gap-2.5">
                    <div className={`${item.color} p-2.5 rounded-lg text-white`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-900">
                      {item.title}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Card>
  )
} 
