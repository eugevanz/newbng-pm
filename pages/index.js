import Head from "next/head";

import ThisWeekProjectActivities from "../components/dashboard/ThisWeekProjectActivities";
import PerformanceMatrix from "../components/dashboard/PerformanceMatrix";
import OnVsOffSchedule from "../components/dashboard/OnVsOffSchedule";
import SelectedProject from "../components/dashboard/SelectedProject";
//

export default () => {
  return (
    <>
      <Head>
        <title>Project Management Server</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>

      <div className="uk-width-expand@m uk-margin">
        <div
          className="uk-child-width-1-2@m"
          data-uk-grid="masonry: true; parallax: 96"
        >
          <div>
            <ThisWeekProjectActivities></ThisWeekProjectActivities>
          </div>
          <div>
            <PerformanceMatrix></PerformanceMatrix>
          </div>
          <div>
            <OnVsOffSchedule></OnVsOffSchedule>
          </div>
          <div>
            <SelectedProject></SelectedProject>
          </div>
        </div>
      </div>
    </>
  );
};
