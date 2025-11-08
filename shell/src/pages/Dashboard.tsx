import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import type { AuthState } from "shared/store";

const Dashboard = () => {
  const authState = useSelector((state: { auth: AuthState }) => state.auth);
  const queryClient = useQueryClient();

  const clearKmsCache = () => {
    queryClient.invalidateQueries({ queryKey: ["kms", "knowledge", "summary"] });
  };

  const clearCrmCache = () => {
    queryClient.invalidateQueries({ queryKey: ["crm", "dashboard", "summary"] });
  };

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-lg font-semibold">Auth State:</h2>
      <pre className="max-h-60 overflow-auto rounded-md bg-gray-900 p-3 text-xs text-green-200">
        {JSON.stringify(authState, null, 2)}
      </pre>

      <h2 className="mb-2 text-lg font-semibold">Query Client Cache Reset Test:</h2>
      <div className="flex space-x-4">
        <div className="relative">
          <button
            onClick={clearKmsCache}
            className={`rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${"bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"}`}
          >
            Clear KMS Cache
          </button>
        </div>

        <div className="relative">
          <button
            onClick={clearCrmCache}
            className={`rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${"bg-green-500 hover:bg-green-600 focus:ring-green-500"}`}
          >
            Clear CMS Cache
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
