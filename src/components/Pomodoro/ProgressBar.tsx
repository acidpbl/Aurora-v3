import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  progress: number;
  title: string;
}

export function ProgressBar({ progress, title }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-center">{title}</span>
      <Progress.Root
        className="flex items-center p-1 bg-violet-200 relative overflow-hidden bg-blackA9 rounded-xl w-full h-8"
        value={progress}
      >
        <div className="w-full h-full rounded-lg overflow-hidden">
          <Progress.Indicator
            className="bg-violet-500 w-full h-full transition-transform duration-[660ms] rounded-r-md ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            style={{
              transform: `translateX(-${progress}%)`,
            }}
          />
        </div>
      </Progress.Root>
    </div>
  );
}
