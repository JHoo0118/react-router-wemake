import type { Route } from "./+types/monthly-leaderboard-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => {
  const { month, year } = params as { month: string; year: string };
  return [
    {
      title: `${month}/${year} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of ${params.month}/${params.year}`,
    },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    products: [], // Add monthly leaderboard logic
  };
}

export default function MonthlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of {loaderData.month}/{loaderData.year}
      </h1>
      {/* Add monthly leaderboard content */}
    </div>
  );
}
