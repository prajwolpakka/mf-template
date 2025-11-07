const TestPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">KMS Test Page</h1>
      <p className="text-muted-foreground mb-3">
        This is a test page for the Knowledge Management System (KMS) module.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <h2 className="text-lg font-semibold mb-1.5">Module Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Module:</strong> Knowledge Management System
          </li>
          <li>
            <strong>Route:</strong> /kms/test
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
