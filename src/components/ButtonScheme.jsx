import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function ButtonScheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => {
        toggleColorScheme();
        localStorage.setItem("theme", colorScheme === "dark" ? "light" : "dark");
      }}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
}
