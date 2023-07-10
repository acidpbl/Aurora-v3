import "./App.css";

import {
  Code,
  DiscordLogo,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Moon,
  WarningCircle,
} from "@phosphor-icons/react";

import { Card } from "./components/Card";
import { Clock } from "./components/Clock";
import { Weather } from "./components/Weather/index";

import { IGetWeatherDataResponse } from "./data/getWeatherData";

import { useApp } from "./useApp";
import { Calendar } from "./components/Calendar";
import { useState } from "react";
import { Authors } from "./components/Authors";
import { Contact } from "./components/Contact";

function App() {
  const [calendarNav, setCalendarNav] = useState(0);
  const { actions, states } = useApp();
  return (
    <>
      <div className="w-full h-full p-4 flex flex-wrap justify-center gap-4">
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
          <div className="flex flex-col items-center gap-8 h-full">
            <Clock.Time />
            <Clock.Weekday />
            <Clock.Date />
          </div>
        </Card.Wrapper>
        <Card.Wrapper variant="sm">
          <Card.Title text="Weather" />
          <div className="flex flex-col items-center gap-8 h-full">
            <Weather.Wrapper
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
              children={""}
            />
          </div>
        </Card.Wrapper>
        <Card.Wrapper variant="sm">
          <Card.Title text="Authors" />
          <Authors.Wrapper>
            <Authors.Author>
              <Authors.Name name="pulse" />
              <Authors.Icons>
                <Authors.Icon icon={Moon} variant="fill" author={true} />
                <a href="https://github.com/pabloalbrnz" target="_blank">
                  <Authors.Icon icon={GithubLogo} variant="bold" />
                </a>
              </Authors.Icons>
            </Authors.Author>
            <Authors.Author>
              <Authors.Name name="Paulo" />
              <Authors.Icons>
                <Authors.Icon icon={Code} variant="bold" author={true} />
                <a href="https://github.com/Paulo-Augusto12" target="_blank">
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
                <a href="mailto:pabloalbernazrincon@gmail.com" target="_blank">
                  <Contact.Icon icon={Envelope} variant="bold" text="Email" />
                </a>
                <a href="https://discord.com/invite/ErJHvmG99p" target="_blank">
                  <Contact.Icon
                    icon={DiscordLogo}
                    variant="bold"
                    text="Discord"
                  />
                </a>
                <a href="https://instagram.com/pabloalbrnz" target="_blank">
                  <Contact.Icon
                    icon={InstagramLogo}
                    variant="bold"
                    text="Instagram"
                  />
                </a>
                <a href="https://linkedin.com/in/pabloalbrnz" target="_blank">
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
                <a href="mailto:" target="_blank">
                  <Contact.Icon icon={Envelope} variant="bold" text="Email" />
                </a>
                <a href="#" target="_blank">
                  <Contact.Icon
                    icon={DiscordLogo}
                    variant="bold"
                    text="Discord"
                  />
                </a>
                <a href="#" target="_blank">
                  <Contact.Icon
                    icon={InstagramLogo}
                    variant="bold"
                    text="Instagram"
                  />
                </a>
                <a href="#" target="_blank">
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
