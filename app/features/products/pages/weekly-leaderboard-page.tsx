import type { Route } from "./+types/weekly-leaderboard-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => {
  const { week, year } = params as { week: string; year: string };
  return [
    {
      title: `Week ${week}, ${year} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of week ${params.week}, ${params.year}`,
    },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
    products: [], // Add weekly leaderboard logic
  };
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of Week {loaderData.week}, {loaderData.year}
      </h1>
      {/* Add weekly leaderboard content */}
    </div>
  );
}
