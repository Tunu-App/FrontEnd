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
import { useEffect, useState } from "react";
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
import { AppContext } from "./Layout/Context";
import { checkTime } from "./Layout/Utils";

function App() {
  const [signUpUserData, setSignUpUserData] = useState({
    firstName: "",
    phoneNumber: "",
    password: "",
    email: "",
  });

  function updateSignUpUserData(payload) {
    setSignUpUserData(payload);
    console.log(payload)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <AppContext.Provider
            value={{ checkTime, signUpUserData, updateSignUpUserData }}
          >
            <Route path={"/getting-started"} exact>
              <GettingStartedPage />
            </Route>
            <Route path={"/login"} exact>
              <Login />
            </Route>
            <Route path={"/signup"} exact>
              <Signup />
            </Route>
            <Route path={"/signup-contact-details"} exact>
              <SignUpWithPhoneOrEmail />
            </Route>
            <Route path={"/signup-password"} exact>
              <PasswordPage />
            </Route>
            <Route path={"/signup-verify-phone"} exact>
              <VerifyPhoneNumber />
            </Route>

            <Layout nightMode={checkTime}>
              <Route path={"/"} exact>
                <Home nightMode={checkTime} />
              </Route>
              <Route path={"/meditate"} exact>
                <Meditate nightMode={checkTime} />
              </Route>
              <Route path={"/meditate/:id"} exact>
                <MeditateDetailsPage />
              </Route>
              <Route path={"/meditate/:id/:chapter"} exact>
                <PlayMeditation />
              </Route>
              <Route path={"/add-journal"} exact>
                <AddJournal />
              </Route>
              <Route path={"/journals"} exact>
                <Journals />
              </Route>
              <Route path={"/journals/text/:id"} exact>
                <ViewTextJournal />
              </Route>
              <Route path={"/add-journal-voice"} exact>
                <AddJournalVoice />
              </Route>
              <Route path={"/add-journal-voice/title"} exact>
                <AddJournalVoiceTitlePage />
              </Route>
              <Route path={"/moodtracker"} exact>
                <MoodTrackerL1 />
              </Route>

              <Route path={"/moodtracker/:id"} exact>
                <MoodTrackerL2 />
              </Route>
              <Route path={"/moodtracker/:id/:id"} exact>
                <MoodTrackerL3 />
              </Route>
              <Route path={"/moodtracker/:id/:id/title"} exact>
                <MoodTrackerTitlePage />
              </Route>
              <Route path={"/moodhistory"} exact>
                <MoodHistory />
              </Route>
              <Route path={"/moodhistory/:id"} exact>
                <ViewMoodDetails />
              </Route>
              <Route path={"/sleeptracker"} exact>
                <SleepTracker nightMode={checkTime} />
              </Route>
              <Route path={"/sleeptracker/summary"} exact>
                <SleepTrackerSummary nightMode={checkTime} />
              </Route>
              <Route path={"/sleep"} exact>
                <Sleep nightMode={checkTime} />
              </Route>
              <Route path={"/sleepsounds"} exact>
                <SleepSounds nightMode={checkTime} />
              </Route>
              <Route path={"/sleepsounds/:id"} exact>
                <SleepSoundsDetailsPage />
              </Route>

              <Route path={"/sleepsounds/:id/:chapter"} exact>
                <PlaySleepSound />
              </Route>
              <Route path={"/explore"} exact>
                <ExplorePage nightMode={checkTime} />
              </Route>
              <Route path={"/explore/meditation"} exact>
                <ExploreMeditation nightMode={checkTime} />
              </Route>
              <Route path={"/explore/mental-wellness"} exact>
                <ExploreMentalWellness nightMode={checkTime} />
              </Route>
              <Route path={"/explore/moodlifters"} exact>
                <ExploreMentalWellness nightMode={checkTime} />
              </Route>
              <Route path={"/explore/moodlifters/:id"} exact>
                <ExploreMeditaionDetails nightMode={checkTime} />
              </Route>
              <Route path={"/explore/moodlifters/:id/:chapter"} exact>
                <ExplorePlayMoodlifter nightMode={checkTime} />
              </Route>
              <Route path={"/coaching"} exact>
                <CoachingPage nightMode={checkTime} />
              </Route>
              <Route path={"/coaching/book"} exact>
                <CoachBookingPage nightMode={checkTime} />
              </Route>
            </Layout>
          </AppContext.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
