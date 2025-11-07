import { useSelector } from "react-redux";
import type { AuthState } from "shared/store";

import { useKmsKnowledgeSummaryQuery } from "@/services/hooks";

const Dashboard = () => {
  const authState = useSelector((state: { auth: AuthState }) => state.auth);
  const { data, isLoading, isFetching } = useKmsKnowledgeSummaryQuery();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Knowledge Base Snapshot</h2>
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Loading library insights..." : "Usage in the last 24 hours"}
          </p>
        </div>
        {isFetching ? <span className="text-xs text-muted-foreground">Refreshing…</span> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Articles</p>
          <p className="mt-2 text-2xl font-semibold">{data?.articles ?? "—"}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Collections</p>
          <p className="mt-2 text-2xl font-semibold">{data?.collections ?? "—"}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Active contributors</p>
          <p className="mt-2 text-2xl font-semibold">{data?.activeContributors ?? "—"}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Trending topic</p>
          <div className="mt-2 text-lg font-semibold">{data?.trendingTopic.title ?? "—"}</div>
          <p className="text-xs text-muted-foreground">
            {data?.trendingTopic ? `${data.trendingTopic.weeklyViews} views this week` : "No data yet"}
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <p className="text-sm font-medium text-muted-foreground">Raw auth state</p>
        <pre className="mt-2 max-h-60 overflow-auto rounded-md bg-gray-900 p-3 text-xs text-green-200">
          {JSON.stringify(authState, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Dashboard;
