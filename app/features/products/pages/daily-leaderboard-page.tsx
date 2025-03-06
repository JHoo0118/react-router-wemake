import type { MetaFunction } from "react-router";
import type { Route } from "./+types/daily-leaderboard-page";

export const meta: MetaFunction = ({ params }) => {
  // Type assertion for params
  const { month, day, year } = params as {
    month: string;
    day: string;
    year: string;
  };
  return [
    {
      title: `${month}/${day}/${year} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of ${params.month}/${params.day}/${params.year}`,
    },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    day: params.day,
    products: [], // Add daily leaderboard logic
  };
}

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of {loaderData.month}/{loaderData.day}/{loaderData.year}
      </h1>
      {/* Add daily leaderboard content */}
    </div>
  );
}
