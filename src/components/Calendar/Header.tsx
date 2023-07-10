import { useDate } from "./useCalendar";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { NavButton } from "./NavCalendar";

interface HeaderProps {
  nav: number;
  navLeftAction: () => void;
  navRightAction: () => void;
}

export function Header({ nav, navLeftAction, navRightAction }: HeaderProps) {
  const { dateDisplay } = useDate(nav);
  return (
    <div className="px-8 flex justify-between items-center">
      <NavButton icon={CaretLeft} onClick={navLeftAction} />
      <span
        className={`font-bold text-sm ${nav == 0 ? "text-violet-500" : ""}`}
      >
        {dateDisplay}
      </span>
      <NavButton icon={CaretRight} onClick={navRightAction} />
    </div>
  );
}
