const TestPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Shell Test Page</h1>
      <p className="text-muted-foreground mb-3">
        This is a test page for the Shell module - the main application container.
      </p>
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
        <h2 className="text-lg font-semibold mb-1.5">Module Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Module:</strong> Shell Application
          </li>
          <li>
            <strong>Route:</strong> /test
          </li>
          <li>
            <strong>Status:</strong> Active
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestPage;
