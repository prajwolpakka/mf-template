const TestPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">CMS Test Page</h1>
      <p className="text-muted-foreground mb-3">This is a test page for the Content Management System (CMS) module.</p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <h2 className="text-lg font-semibold mb-1.5">Module Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Module:</strong> Content Management System
          </li>
          <li>
            <strong>Route:</strong> /cms/test
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
