import type { AuthState } from "shared/store";
import { useSelector } from "react-redux";

import { useCrmDashboardSummaryQuery } from "@/services/hooks";

const Dashboard = () => {
  const authState = useSelector((state: { auth: AuthState }) => state.auth);
  const { data, isLoading, isFetching } = useCrmDashboardSummaryQuery();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Content Overview</h2>
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Syncing latest metrics..." : "Latest publishing stats"}
          </p>
        </div>
        {isFetching ? <span className="text-xs text-muted-foreground">Refreshing…</span> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Published articles</p>
          <p className="mt-2 text-2xl font-semibold">{data?.totalArticles ?? "—"}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Drafts</p>
          <p className="mt-2 text-2xl font-semibold">{data?.drafts ?? "—"}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Scheduled</p>
          <p className="mt-2 text-2xl font-semibold">{data?.scheduled ?? "—"}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Top author</p>
          <div className="mt-2 text-lg font-semibold">{data?.topAuthor.name ?? "—"}</div>
          <p className="text-xs text-muted-foreground">
            {data?.topAuthor ? `${data.topAuthor.articlesPublished} articles` : "No activity yet"}
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
