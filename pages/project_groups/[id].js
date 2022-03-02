import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import ProjectGroupDetails from '../../components/project_groups/project-group-details';
import AuthContext from '../../context/auth-context';
import Delete from '../../components/delete';

export default () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { user, isReady } = useContext(AuthContext);

  useEffect(() => !user && router.push('/'));

  useEffect(
    () =>
      fetch('/api/project_groups').then((data) =>
        setData(data.find((item) => item.id === router.query.id))
      ),
    [router.query.id]
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
            <ProjectGroupDetails data={data}></ProjectGroupDetails>
          </div>

          <div>
            <Delete item={data} table="project_groups"></Delete>
          </div>
        </div>
      )}
    </div>
  );
};
