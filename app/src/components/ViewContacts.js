export default function ViewContacts({ contacts }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl mb-4">View Contacts</h1>
        <div className="border border-gray-300 p-4">
          <pre>{contacts}</pre>
        </div>
      </div>
    );
  }
  