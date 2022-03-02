import { useRouter } from 'next/router';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth-context';

export default function MyTasks() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('/api/documents')
      .then((data) => data.json())
      .then((data) => setData(data.filter((item) => item.user_id === user.id)));
  }, [user.id]);

  return (
    data && (
      <div className="uk-card uk-card-secondary uk-card-small uk-card-body uk-border-rounded">
        <div className="uk-width-expand uk-margin-large uk-text-bold uk-text-small uk-text-muted">
          My Documents
        </div>

        <ul className="uk-list uk-list-large uk-list-divider uk-margin">
          {data.map((item) => (
            <li key={item.id}>
              <a
                className="uk-link-toggle"
                href="#list-item"
                onClick={() => router.push(`/documents/${item.id}`)}
                data-uk-scroll
              >
                <div className="uk-text-bold uk-link-text">{item.name}</div>
                <div className="uk-text-meta">
                  Created on {moment(item.created_at).format('MMMM Do YYYY')}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
