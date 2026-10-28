import { TextAttributes } from "@opentui/core";
import { useTheme } from "../../providers/theme";

type UserMessageProps = {
  message: string;
};

export function UserMessage({ message }: UserMessageProps) {
  const { colors } = useTheme();

  return (
    <box width="100%" alignItems="center">
      <box
        border={["left"]}
        borderStyle="heavy"
        borderColor={colors.primary}
        width="100%"
      >
        <box
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor={colors.surface}
          width="100%"
        >
          <text attributes={TextAttributes.BOLD}>{message}</text>
        </box>
      </box>
    </box>
  );
}
