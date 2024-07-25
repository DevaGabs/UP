import { useState, useContext, useEffect } from 'react';
import { Can } from '@/components/Can';
import { AuthContext } from '@/contexts/AuthContext';
import { setupAPIClient } from '@/services/api';
import { api } from '@/services/apiClient';
import { withSSRAuth } from '@/utils/withSSRAuth';
import CreateGroup from '@/components/CreateGroup';
import FileUpload from '@/components/FileUpload';
import ViewContacts from '@/components/ViewContacts';

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);
  const [view, setView] = useState('createGroup');
  const [group, setGroup] = useState(null);
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    api
      .get('/me')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleGroupCreated = (groupName) => {
    setGroup(groupName);
    setView('uploadContacts');
  };

  const handleFileUploaded = (fileContent) => {
    setContacts(fileContent);
    setView('viewContacts');
  };

  return (
    <div>
      {view === 'createGroup' && <CreateGroup onGroupCreated={handleGroupCreated} />}
      {view === 'uploadContacts' && <FileUpload onFileUploaded={handleFileUploaded} />}
      {view === 'viewContacts' && <ViewContacts contacts={contacts} />}
      
      <button onClick={signOut}>Sign Out</button>
      <Can permissions={['metrics.list']}>
        <div></div>
      </Can>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');
  console.log(response.data);

  return {
    props: {},
  };
});
