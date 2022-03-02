import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../context/auth-context";
import SearchAcrossProjects from "../../components/search-across-projects";
import ReadAllRows from "../../components/read-all-rows";

export default () => {
  const router = useRouter();

  const { user, isReady } = useContext(AuthContext);

  useEffect(() => !user && router.push("/"));

  return (
    <div className="uk-width-expand@m uk-margin">
      {!isReady && <div data-uk-spinner></div>}

      {user && (
        <div
          className="uk-child-width-1-2@m js-filter"
          data-uk-grid="masonry: true; parallax: 60"
        >
          <div>
            <SearchAcrossProjects title="profiles"></SearchAcrossProjects>
          </div>

          <div>
            <ReadAllRows table="profiles" title="All Profiles"></ReadAllRows>
          </div>
        </div>
      )}
    </div>
  );
};
