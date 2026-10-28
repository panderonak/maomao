import { Outlet } from "react-router";
import { DialogProvider } from "../providers/dialog";
import { ThemeProvider } from "../providers/theme";
import { ToastProvider } from "../providers/toast";
import { KeyboardLayerProvider } from "../providers/keyboard-layer";
import { ThemedRoot } from "./theme-root";

export function RootLayout() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <KeyboardLayerProvider>
          <DialogProvider>
            <ThemedRoot>
              <Outlet />
            </ThemedRoot>
          </DialogProvider>
        </KeyboardLayerProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
