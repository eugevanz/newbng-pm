import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/auth-context';
import SearchAcrossProjects from '../../components/search-across-projects';
import ReadAllRows from '../../components/read-all-rows';
import MyLogs from './my-logs';

export default () => {
  const router = useRouter();

  const { user, isReady } = useContext(AuthContext);

  useEffect(() => !user && router.push('/'));

  return (
    <div className="uk-width-expand@m uk-margin">
      {!isReady && <div data-uk-spinner></div>}

      {user && (
        <div
          className="uk-child-width-1-2@m js-filter"
          data-uk-grid="masonry: true; parallax: 60"
        >
          <div>
            <SearchAcrossProjects title="logs"></SearchAcrossProjects>
          </div>

          <div>
            <ReadAllRows table="logs" title="All Logs"></ReadAllRows>
          </div>

          <div>
            <MyLogs></MyLogs>
          </div>
        </div>
      )}
    </div>
  );
};
