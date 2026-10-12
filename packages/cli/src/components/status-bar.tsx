import { TextAttributes } from "@opentui/core";
export function StatusBar() {
  return (
    <box flexDirection="row" gap={1}>
      <text fg="#6EA6FF" attributes={TextAttributes.BOLD}>Build</text>
      <text attributes={TextAttributes.BOLD} fg="gray">
        {" > "}
      </text>
      <text>opus-4-6</text>
    </box>
  );
}
