import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Signup from "./Pages/Signup";
import SignUpWithPhoneOrEmail from "./Pages/SignUpWithPhoneOrEmail";
import PasswordPage from "./Pages/PasswordPage";
import VerifyPhoneNumber from "./Pages/VerifyPhoneNumber";
import Login from "./Pages/Login";
import GettingStartedPage from "./Pages/GettingStartedPage";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Meditate from "./Pages/Meditate";
import MeditateDetailsPage from "./Pages/MeditateDetailsPage";
import PlayMeditation from "./Pages/PlayMeditation";
import AddJournal from "./Pages/AddJournal";
import Journals from "./Pages/Journals";
import ViewTextJournal from "./Pages/ViewTextJournal";
import AddJournalVoice from "./Pages/AddJournalVoice";
import AddJournalVoiceTitlePage from "./Pages/AddJournalVoiceTitlePage";
import MoodTrackerL1 from "./Pages/MoodTrackerL1";
import MoodTrackerL2 from "./Pages/MoodTrackerL2";
import MoodTrackerL3 from "./Pages/MoodTrackerL3";
import MoodTrackerTitlePage from "./Pages/MoodTrackerTitlePage";
import MoodHistory from "./Pages/MoodHistory";
import ViewMoodDetails from "./Pages/ViewMoodDetails";
import SleepTracker from "./Pages/SleepTracker";
import SleepTrackerSummary from "./Pages/SleepTrackerSummary";
import Sleep from "./Pages/Sleep";
import SleepSounds from "./Pages/SleepSounds";
import SleepSoundsDetailsPage from "./Pages/SleepSoundsDetailsPage";
import PlaySleepSound from "./Pages/PlaySleepSound";
import ExplorePage from "./Pages/ExplorePage";
import ExploreMeditation from "./Pages/ExploreMeditation";
import ExploreMentalWellness from "./Pages/ExploreMentalWellness";
import ExploreMeditaionDetails from "./Pages/ExploreMeditaionDetails";
import ExplorePlayMoodlifter from "./Pages/ExplorePlayMoodlifter";
import CoachingPage from "./Pages/CoachingPage";
import CoachBookingPage from "./Pages/CoachBookingPage";
import { checkTime } from "./Layout/Utils";
import { UserProvider } from "./Layout/UserContext";
import { PublicRoute } from "./Routes/PublicRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";
import MoodTrackerFinalPage from "./Pages/MoodTrackerFinalPage";
import MoodTrackerHomePage from "./Pages/MoodTrackerHomePage";

// GOOGLE ANALYTICS TRACKING ID
import ReactGA from "react-ga"
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import CreateNewPassword from "./Pages/CreateNewPassword";
const TRACKING_ID = "G-54X4BNV2M3"

ReactGA.initialize(TRACKING_ID)



function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <PublicRoute
              component={GettingStartedPage}
              path={"/getting-started"}
              exact
            />
            <PublicRoute component={Login} path={"/login"} exact />

            <PublicRoute component={Signup} path={"/signup"} exact />
            <PublicRoute
              component={SignUpWithPhoneOrEmail}
              path={"/signup-contact-details"}
              exact
            />
            <PublicRoute
              component={PasswordPage}
              path={"/signup-password"}
              exact
            />
            <PublicRoute
              component={VerifyPhoneNumber}
              path={"/signup-verify-phone"}
              exact
            />
            <PublicRoute
              component={ForgotPassword}
              path={"/forgot-password"}
              exact
            />
            <PublicRoute
              component={ResetPassword}
              path={"/reset-password"}
              exact
            />
            <PublicRoute
              component={CreateNewPassword}
              path={"/change-password"}
              exact
            />

            <Layout nightMode={checkTime}>
              <PrivateRoute component={Home} path={"/"} exact />

              <PrivateRoute component={Meditate} path={"/meditate"} exact />
              <PrivateRoute
                component={MeditateDetailsPage}
                path={"/meditate/:id"}
                exact
              />
              <PrivateRoute
                component={PlayMeditation}
                path={"/meditate/:id/:chapter"}
                exact
              />

              <PrivateRoute
                component={AddJournal}
                path={"/add-journal"}
                exact
              />
              <PrivateRoute component={Journals} path={"/journals"} exact />
              <PrivateRoute
                component={ViewTextJournal}
                path={"/journals/text/:id"}
                exact
              />
              <PrivateRoute
                component={AddJournalVoice}
                path={"/add-journal-voice"}
                exact
              />
              <PrivateRoute
                component={AddJournalVoiceTitlePage}
                path={"/add-journal-voice/title"}
                exact
              />
              <PrivateRoute
                component={MoodTrackerHomePage}
                path={"/moodtracker-home"}
                exact
              />
              <PrivateRoute
                component={MoodTrackerL1}
                path={"/moodtracker"}
                exact
              />

              <PrivateRoute
                component={MoodTrackerL2}
                path={"/moodtracker/:id"}
                exact
              />
              <PrivateRoute
                component={MoodTrackerL3}
                path={"/moodtracker/:id/:id"}
                exact
              />
              <PrivateRoute
                component={MoodTrackerTitlePage}
                path={"/moodtracker/:id/:id/title"}
                exact
              />
              <PrivateRoute
                component={MoodTrackerFinalPage}
                path={"/moodtracker/:id/:id/:id/my-mood"}
                exact
              />
              <PrivateRoute
                component={MoodHistory}
                path={"/moodhistory"}
                exact
              />
              <PrivateRoute
                component={ViewMoodDetails}
                path={"/moodhistory/:id"}
                exact
              />
              <PrivateRoute
                component={SleepTracker}
                path={"/sleeptracker"}
                exact
              />
              <PrivateRoute
                component={SleepTrackerSummary}
                path={"/sleeptracker/summary"}
                exact
              />
              <PrivateRoute component={Sleep} path={"/sleep"} exact />
              <PrivateRoute
                component={SleepSounds}
                path={"/sleepsounds"}
                exact
              />
              <PrivateRoute
                component={SleepSoundsDetailsPage}
                path={"/sleepsounds/:id"}
                exact
              />

              <PrivateRoute
                component={PlaySleepSound}
                path={"/sleepsounds/:id/:chapter"}
                exact
              />
              <PrivateRoute component={ExplorePage} path={"/explore"} exact />
              <PrivateRoute
                component={ExploreMeditation}
                path={"/explore/meditation"}
                exact
              />
              <PrivateRoute
                component={ExploreMentalWellness}
                path={"/explore/mental-wellness"}
                exact
              />
              <PrivateRoute
                component={ExploreMentalWellness}
                path={"/explore/moodlifters"}
                exact
              />
              <PrivateRoute
                component={ExploreMeditaionDetails}
                path={"/explore/moodlifters/:id"}
                exact
              />
              <PrivateRoute
                component={ExplorePlayMoodlifter}
                path={"/explore/moodlifters/:id/:chapter"}
                exact
              />
              <PrivateRoute component={CoachingPage} path={"/coaching"} exact />
              <PrivateRoute
                component={CoachBookingPage}
                path={"/coaching/book"}
                exact
              />
            </Layout>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
