import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const AuthContext = createContext({
  isReady: false,
  user: null,
  open: () => {},
  logout: () => {}
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => setUser(null));

    netlifyIdentity.on('init', (user) => {
      setUser(user);
      setReady(true);
    });

    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off('login');
    };
  }, []);

  const ctx = {
    user,
    open: () => netlifyIdentity.open(),
    logout: () => netlifyIdentity.logout(),
    isReady
  };

  return (
    <AuthContext.Provider value={ctx}>
      <section className="uk-margin-left uk-margin-right uk-margin">
        <div data-uk-grid="masonry: true; parallax: 52">{children}</div>
      </section>
    </AuthContext.Provider>
  );
}

export default AuthContext;
