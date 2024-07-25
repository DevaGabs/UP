import { useState } from 'react';

export default function CreateGroup({ onGroupCreated }) {
  const [groupName, setGroupName] = useState('');

  const handleCreateGroup = () => {
    if (groupName.trim()) {
      onGroupCreated(groupName);
      setGroupName('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Create a Group</h1>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Group Name"
        className="mb-4 p-2 border border-gray-300"
      />
      <button onClick={handleCreateGroup} className="p-2 bg-blue-500 text-white">
        Create Group
      </button>
    </div>
  );
}