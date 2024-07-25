import { Can } from "@/components/Can";
import { AuthContext } from "@/contexts/AuthContext";
import { setupAPIClient } from "@/services/api";
import { api } from "@/services/apiClient";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { useContext, useEffect } from "react";
import FileUpload from "@/components/FileUpload"; // Corrigi o caminho do import

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <FileUpload />
      </div>

      <button onClick={signOut}>signOut</button>

      <Can permissions={["metrics.list"]}>
        <div>Dados secretos que só usuários com permissão podem ver</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
});
