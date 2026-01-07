import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { learningResourcesData } from '@/data/learning-resources';

const getYear = (date: string): number => {
  return new Date(date).getFullYear();
};

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export function LearningResources() {
  return (
    <Card className="bg-white border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle>General Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {[2025, 2024].map((year) => {
          const resourcesForYear = learningResourcesData
            .filter((r) => getYear(r.date) === year)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          if (resourcesForYear.length === 0) return null;
          return (
            <div key={year}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                {year}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 p-0 text-sm list-none">
                {resourcesForYear.map((resource, index) => (
                  <li key={index} className="flex items-start">
                    <resource.icon className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
                    <a href={resource.url} className="text-blue-600 hover:underline">
                      {resource.title}
                    </a>
                    <span className="text-gray-500 pl-1">({formatDate(resource.date)})</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
