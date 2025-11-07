import type { ReactNode } from "react";

type AppHeaderProps = {
  leftSide: ReactNode;
  actions?: ReactNode;
};

const AppHeader = ({ leftSide, actions }: AppHeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-background px-6 py-3">
      {leftSide}
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  );
};

export default AppHeader;
