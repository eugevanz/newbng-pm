import { useRouter } from 'next/router';
import { useContext } from 'react';

import AuthContext from '../context/auth-context';

export default () => {
  const router = useRouter();
  const { user, open, logout, isReady } = useContext(AuthContext);

  return (
    <div className="uk-width-1-4@m">
      {!user && (
        <button
          className="uk-button uk-button-primary uk-margin-top uk-margin-large-bottom uk-border-rounded"
          onClick={open}
        >
          <span className="uk-text-small uk-text-bold">Enter</span>
        </button>
      )}

      {user && (
        <button className="uk-button uk-button-link uk-margin-top uk-margin-large-bottom uk-inline">
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                src={`${process.env.PUBLIC_URL}/images/art-hauntington-jzY0KRJopEI-unsplash.jpg`}
                alt="hauntington"
              ></img>
            </div>
            <div className="uk-width-expand uk-text-left">
              <h3 className="uk-card-title uk-text-small uk-text-bold uk-margin-remove-bottom">
                {user?.user_metadata?.full_name ?? 'NoName'}
              </h3>
              <p className="uk-text-meta uk-margin-remove-top">{user?.email}</p>
            </div>
          </div>

          <div data-uk-dropdown="mode: click">
            <ul className="uk-list uk-list-large uk-list-divider">
              <li className="uk-text-meta">{user?.email}</li>
              <li>
                <button
                  className="uk-button uk-button-small uk-button-danger uk-width-1-1"
                  onClick={logout}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </button>
      )}

      {isReady && (
        <div className="uk-margin-large-bottom">
          <ul className="uk-tab-right" data-uk-tab>
            <li className="uk-active">
              <a href="#dashboard" onClick={() => router.push('/')}>
                <span
                  data-uk-icon="icon: calendar"
                  className="uk-margin-small-right"
                ></span>
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() =>
                  user ? router.push('/projects') : router.push('/')
                }
              >
                <span
                  data-uk-icon="icon: database"
                  className="uk-margin-small-right"
                ></span>
                Projects
              </a>
            </li>

            <li>
              <a
                href="#milestones"
                onClick={() =>
                  user ? router.push('/milestones') : router.push('/')
                }
              >
                <span
                  data-uk-icon="icon: check"
                  className="uk-margin-small-right"
                ></span>
                Milestones
              </a>
            </li>

            <li>
              <a
                href="#tasks"
                onClick={() =>
                  user ? router.push('/tasks') : router.push('/')
                }
              >
                <span
                  data-uk-icon="icon: list"
                  className="uk-margin-small-right"
                ></span>
                Tasks
              </a>
            </li>

            <li>
              <a
                href="#logs"
                onClick={() => (user ? router.push('/logs') : router.push('/'))}
              >
                <span
                  data-uk-icon="icon: clock"
                  className="uk-margin-small-right"
                ></span>
                Timesheets
              </a>
            </li>

            <li>
              <a
                href="#documents"
                onClick={() =>
                  user ? router.push('/documents') : router.push('/')
                }
              >
                <span
                  data-uk-icon="icon: folder"
                  className="uk-margin-small-right"
                ></span>
                Documents
              </a>
            </li>

            <li>
              <a
                href="#users"
                onClick={() =>
                  user ? router.push('/profiles') : router.push('/')
                }
              >
                <span
                  data-uk-icon="icon: users"
                  className="uk-margin-small-right"
                ></span>
                Users
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
