import "./App.css";

import {
  Broom,
  Circle,
  Code,
  DiscordLogo,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Moon,
  Pause,
  Play,
  Star,
  Stop,
  TwitchLogo,
  WarningCircle,
  YoutubeLogo,
} from "@phosphor-icons/react";

import { Card } from "./components/Card";
import { Clock } from "./components/Clock";
import { Weather } from "./components/Weather/index";

import { IGetWeatherDataResponse } from "./data/getWeatherData";

import { useApp } from "./useApp";
import { Calendar } from "./components/Calendar";
import { useEffect, useState } from "react";
import { Authors } from "./components/Authors";
import { Contact } from "./components/Contact";
import { Pomodoro } from "./components/Pomodoro";
import { Quote } from "./components/Quote";
import { Bookmarks } from "./components/Bookmarks";

function App() {
  let pageLoad = 0;

  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [pomodoroProgress, setPomodoroProgress] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);

  const [focusRepeat, setFocusRepeat] = useState(false);

  const [focusTimes, setFocusTimes] = useState(0);

  useEffect(() => {
    const progressPercentage = (pomodoroTime / (25 * 60)) * 100;
    setPomodoroProgress(progressPercentage);

    if (pomodoroActive === true) {
      if (pomodoroTime === 1) {
        setPomodoroActive(false);
        setTimeout(() => {
          setPomodoroTime(25 * 60);
        }, 5000);
        setChillActive(true);
        setFocusTimes((state) => state + 1);
      }
      setTimeout(() => {
        setPomodoroTime((state) => state - 1);
      }, 1000);
    }
  }, [pomodoroTime, pomodoroActive]);

  const [chillTime, setChillTime] = useState(5 * 60);
  const [chillProgress, setChillProgress] = useState(0);
  const [chillActive, setChillActive] = useState(false);

  useEffect(() => {
    const chillPercentage = (chillTime / (5 * 60)) * 100;
    setChillProgress(chillPercentage);

    if (chillActive === true && pomodoroActive === false) {
      if (chillTime === 1) {
        setChillActive(false);
        setTimeout(() => {
          setChillTime(5 * 60);
        }, 5000);
        if (focusRepeat) {
          setPomodoroActive(true);
        }
      }
      setTimeout(() => {
        setChillTime((state) => state - 1);
      }, 1000);
    }
  }, [chillTime, chillActive]);

  const chillMinutes = Math.floor(chillTime / 60);
  const chillSeconds = chillTime % 60;

  const pomodoroMinutes = Math.floor(pomodoroTime / 60);
  const pomodoroSeconds = pomodoroTime % 60;

  const [calendarNav, setCalendarNav] = useState(0);
  const { actions, states } = useApp();

  useEffect(() => {
    actions.fetchQuote();
  }, [pageLoad]);

  return (
    <>
      <div className="w-full h-full p-4 flex flex-wrap justify-center gap-4">
        <Card.Wrapper variant="md">
          <Card.Title text="Quote" />
          <Quote.Wrapper>
            <Quote.Quote
              quoteData={{
                quote: states.quoteData?.quote || "Some quote here",
                character: states.quoteData?.character || "Some character",
                title: states.quoteData?.title || "Some game",
              }}
            />
            <div className="flex items-center justify-between w-full">
              <Quote.Character
                quoteData={{
                  quote: states.quoteData?.quote || "Some quote here",
                  character: states.quoteData?.character || "Some character",
                  title: states.quoteData?.title || "Some game",
                }}
              />
              <Quote.Game
                quoteData={{
                  quote: states.quoteData?.quote || "Some quote here",
                  character: states.quoteData?.character || "Some character",
                  title: states.quoteData?.title || "Some game",
                }}
              />
            </div>
          </Quote.Wrapper>
        </Card.Wrapper>
        <Card.Wrapper variant="sm">
          <Card.Title text="Bookmarks" />
          <Bookmarks.Wrapper>
            <a href="" target="_blank" className="focus:outline-none bookmark">
              <Bookmarks.Button icon={YoutubeLogo} text="Youtube" />
            </a>
            <a href="" target="_blank" className="focus:outline-none bookmark">
              <Bookmarks.Button icon={GithubLogo} text="Github" />
            </a>
            <a href="" target="_blank" className="focus:outline-none bookmark">
              <Bookmarks.Button icon={Star} text="Star+" />
            </a>
            <a href="" target="_blank" className="focus:outline-none bookmark">
              <Bookmarks.Button icon={InstagramLogo} text="Instagram" />
            </a>
            <a href="" target="_blank" className="focus:outline-none bookmark">
              <Bookmarks.Button icon={DiscordLogo} text="Discord" />
            </a>
            <a href="" target="_blank" className="focus:outline-none bookmark">
              <Bookmarks.Button icon={TwitchLogo} text="Twitch" />
            </a>
          </Bookmarks.Wrapper>
        </Card.Wrapper>
        <Card.Wrapper variant="sm">
          <Card.Title text="Calendar" />
          <Calendar.Wrapper>
            <Calendar.Header
              nav={calendarNav}
              navLeftAction={() => setCalendarNav(calendarNav - 1)}
              navRightAction={() => setCalendarNav(calendarNav + 1)}
            />
            <Calendar.Weekdays nav={calendarNav} />
            <Calendar.Days nav={calendarNav} />
          </Calendar.Wrapper>
        </Card.Wrapper>
        <Card.Wrapper variant="sm">
          <Card.Title text="Clock" />
          <div className="flex flex-col items-center justify-between pb-6 h-full">
            <Clock.Time />
            <Clock.Weekday />
            <Clock.Date />
          </div>
        </Card.Wrapper>
        <Card.Wrapper variant="sm">
          <Card.Title text="Weather" />
          <div className="flex flex-col items-center gap-8 h-full">
            <Weather
              citySearchvalue={states.city}
              weatherCardData={states.weatherData as IGetWeatherDataResponse}
              handleSubmit={() => {
                actions.getCityWeather();
              }}
              onChange={(e) => {
                states.setCity(e.target.value);
                actions.resetHelperText();
                states.setWheatherData(undefined);
              }}
              errorHelperText={{
                text: states.helperText,
                icon: states.helperText.trim() ? <WarningCircle /> : <></>,
              }}
            />
          </div>
        </Card.Wrapper>
        <Card.Wrapper variant="lg">
          <Card.Title text="Pomodoro" />
          <Pomodoro.Wrapper>
            <div className="flex flex-col justify-between pb-6">
              <Pomodoro.Clock
                minutes={pomodoroMinutes}
                seconds={pomodoroSeconds}
                title="Focus"
                focus={pomodoroActive ? true : false}
              />
              <Pomodoro.ProgressBar
                progress={pomodoroProgress}
                title={
                  pomodoroActive
                    ? `${100 - Math.floor(pomodoroProgress)}/100%`
                    : "Waiting start"
                }
              />
            </div>
            <div className="flex flex-col w-[19rem] h-full pb-6 gap-[0.5rem]">
              <Pomodoro.Buttons>
                <div className="w-[17rem] self-center h-full flex items-center justify-around">
                  {!pomodoroActive === true ? (
                    <Pomodoro.Button
                      icon={Play}
                      text="Play"
                      iconSide={true}
                      className="py-3 w-24 rounded-lg transition-all ease-linear bg-violet-500 text-violet-50 hover:bg-violet-600 hover:text-violet-200 flex items-center justify-center gap-2 pomodorobtn"
                      onClick={() => {
                        setPomodoroActive(true);
                      }}
                    />
                  ) : (
                    <Pomodoro.Button
                      icon={Pause}
                      text="Pause"
                      iconSide={true}
                      className="py-3 w-24 rounded-lg transition-all ease-linear bg-amber-500 text-amber-50 hover:bg-amber-600 hover:text-amber-200 flex items-center justify-center gap-2 pomodorobtn"
                      onClick={() => {
                        setPomodoroActive(false);
                      }}
                    />
                  )}
                  <Pomodoro.Button
                    icon={Stop}
                    text="Stop"
                    iconSide={true}
                    className="py-3 w-24 rounded-lg transition-all ease-linear bg-red-500 text-red-50 hover:bg-red-600 hover:text-red-200 flex items-center justify-center gap-2 pomodorobtn"
                    onClick={() => {
                      setPomodoroActive(false);
                      setTimeout(() => {
                        setPomodoroTime(25 * 60);
                      }, 1000);
                      setChillActive(false);
                      setTimeout(() => {
                        setChillTime(5 * 60);
                      }, 1000);
                    }}
                  />
                </div>
                <div className="w-[17rem] self-center h-full flex items-center justify-around">
                  {!focusRepeat === true ? (
                    <Pomodoro.Button
                      icon={Circle}
                      iconWeight="bold"
                      text="Repeat"
                      iconSide={false}
                      className="py-3 w-24 rounded-lg transition-all ease-linear bg-violet-500 text-violet-50 hover:bg-violet-600 hover:text-violet-200 flex items-center justify-center gap-2 pomodorobtn"
                      onClick={() => setFocusRepeat(true)}
                    />
                  ) : (
                    <Pomodoro.Button
                      icon={Circle}
                      iconWeight="fill"
                      text="Repeat"
                      iconSide={false}
                      className="py-3 w-24 rounded-lg transition-all ease-linear bg-amber-500 text-amber-50 hover:bg-amber-600 hover:text-amber-200 flex items-center justify-center gap-2 pomodorobtn"
                      onClick={() => setFocusRepeat(false)}
                    />
                  )}
                  <Pomodoro.Button
                    icon={Broom}
                    text="Clear"
                    iconSide={true}
                    className="py-3 w-24 rounded-lg transition-all ease-linear bg-teal-500 text-teal-50 hover:bg-teal-600 hover:text-teal-200 flex items-center justify-center gap-2 pomodorobtn"
                    onClick={() => setFocusTimes(0)}
                  />
                </div>
              </Pomodoro.Buttons>
              <div className="w-[17rem] self-center flex flex-col items-center justify-center rounded-xl bg-violet-200 py-6 gap-2 transition-all ease-linear text-zinc-950 hover:bg-violet-300 hover:text-violet-800">
                <span className="text-5xl font-bold">{focusTimes}</span>
                <span className="text-xl">times focused</span>
              </div>
            </div>
            <div className="flex flex-col justify-between pb-6">
              <Pomodoro.Clock
                minutes={chillMinutes}
                seconds={chillSeconds}
                title="Chill"
                focus={chillActive ? true : false}
              />
              <Pomodoro.ProgressBar
                progress={chillProgress}
                title={
                  chillActive
                    ? `${100 - Math.floor(chillProgress)}/100%`
                    : `Waiting start`
                }
              />
            </div>
          </Pomodoro.Wrapper>
        </Card.Wrapper>
        <Card.Wrapper variant="sm">
          <Card.Title text="Authors" />
          <Authors.Wrapper>
            <Authors.Author>
              <Authors.Name name="pulse" />
              <Authors.Icons>
                <Authors.Icon icon={Moon} variant="fill" author={true} />
                <a
                  href="https://github.com/pabloalbrnz"
                  target="_blank"
                  className="author rounded-3xl"
                >
                  <Authors.Icon icon={GithubLogo} variant="bold" />
                </a>
              </Authors.Icons>
            </Authors.Author>
            <Authors.Author>
              <Authors.Name name="Paulo" />
              <Authors.Icons>
                <Authors.Icon icon={Code} variant="bold" author={true} />
                <a
                  href="https://github.com/Paulo-Augusto12"
                  target="_blank"
                  className="author rounded-3xl"
                >
                  <Authors.Icon icon={GithubLogo} variant="bold" />
                </a>
              </Authors.Icons>
            </Authors.Author>
          </Authors.Wrapper>
        </Card.Wrapper>
        <Card.Wrapper variant="md">
          <Card.Title text="Contact" />
          <Contact.Wrapper>
            <Contact.Contacts>
              <Contact.Icons>
                <Contact.Icon
                  icon={Moon}
                  variant="fill"
                  author={true}
                  text="pulse"
                />
                <a
                  href="mailto:pabloalbernazrincon@gmail.com"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon icon={Envelope} variant="bold" text="Email" />
                </a>
                <a
                  href="https://discord.com/invite/ErJHvmG99p"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon
                    icon={DiscordLogo}
                    variant="bold"
                    text="Discord"
                  />
                </a>
                <a
                  href="https://instagram.com/pabloalbrnz"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon
                    icon={InstagramLogo}
                    variant="bold"
                    text="Instagram"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/pabloalbrnz"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon
                    icon={LinkedinLogo}
                    variant="bold"
                    text="LinkedIn"
                  />
                </a>
              </Contact.Icons>
            </Contact.Contacts>
            <Contact.Contacts>
              <Contact.Icons>
                <Contact.Icon
                  icon={Code}
                  variant="bold"
                  author={true}
                  text="Paulo"
                />
                <a
                  href="mailto:"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon icon={Envelope} variant="bold" text="Email" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon
                    icon={DiscordLogo}
                    variant="bold"
                    text="Discord"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon
                    icon={InstagramLogo}
                    variant="bold"
                    text="Instagram"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="contact focus:outline-none"
                >
                  <Contact.Icon
                    icon={LinkedinLogo}
                    variant="bold"
                    text="LinkedIn"
                  />
                </a>
              </Contact.Icons>
            </Contact.Contacts>
          </Contact.Wrapper>
        </Card.Wrapper>
      </div>
    </>
  );
}

export default App;
