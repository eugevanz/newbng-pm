import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import TaskDetails from "./task-details";
import AuthContext from "../../context/auth-context";
import Delete from "../../components/delete";

export default () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [owner, setOwner] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const { user, isReady } = useContext(AuthContext);

  useEffect(() => !user && router.push("/"));

  useEffect(
    () =>
      fetch("/api/tasks").then((data) =>
        setData(data.find((item) => item.id === router.query.id))
      ),
    [router.query.id]
  );

  useEffect(
    () =>
      data &&
      fetch(`/api/owner/${data.user_id}`).then((data) => setOwner(data)),
    [data]
  );

  useEffect(
    () =>
      data &&
      fetch("/api/projects").then((data) =>
        setProjectName(data.find((item) => item.id === data.project_id).name)
      ),
    [data]
  );

  return (
    <div className="uk-width-expand@m uk-margin">
      {!isReady && <div data-uk-spinner></div>}

      {user && (
        <div
          className="uk-child-width-1-2@m js-filter"
          data-uk-grid="masonry: true; parallax: 60"
        >
          <div>
            <TaskDetails
              data={data}
              owner={owner}
              projectName={projectName}
            ></TaskDetails>
          </div>

          <div>
            <Delete item={data} table="tasks"></Delete>
          </div>
        </div>
      )}
    </div>
  );
};
