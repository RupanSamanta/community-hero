import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      richColors
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--info-bg": "#eff6ff",
          "--info-text": "#1e3a8a",
          "--info-border": "#bfdbfe",
          "--success-bg": "#ecfdf5",
          "--success-text": "#064e3b",
          "--success-border": "#a7f3d0",
          "--warning-bg": "#fff7ed",
          "--warning-text": "#7c2d12",
          "--warning-border": "#fed7aa",
          "--error-bg": "#fef2f2",
          "--error-text": "#7f1d1d",
          "--error-border": "#fecaca",
          "--border-radius": "var(--radius)",
          zIndex: 99999,
        }
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
          info: "[&_[data-icon]]:text-blue-600",
          success: "[&_[data-icon]]:text-emerald-600",
          warning: "[&_[data-icon]]:text-orange-600",
          error: "[&_[data-icon]]:text-red-600",
        },
      }}
      {...props} />
  );
}

export { Toaster }
