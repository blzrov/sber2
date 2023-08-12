import {
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Popover,
  Spoiler,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { IconBellRinging } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { Link, useHistory } from "react-router-dom";
import ButtonScheme from "./ButtonScheme";
import getHeaderStyles from "../helpers/getHeaderStyles";
import mockdata from "../helpers/headerMockdata";

export default function HeaderMegaMenu() {
  const history = useHistory();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = getHeaderStyles();

  const links = mockdata.map((item) => (
    <Link key={item.title} to={`/${item.path}`}>
      <UnstyledButton className={classes.subLink}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <MantineLogo size={30} />
          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link to="/" className={classes.link}>
              Главная
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link to="/events" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Мероприятия
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </Link>
              </HoverCard.Target>
              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Категории</Text>
                  <Anchor onClick={() => history.push("/events")} fz="xs">
                    Все категории
                  </Anchor>
                </Group>
                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Екатеринбург
                      </Text>
                      <Text size="xs" color="dimmed">
                        Найти мероприятие по душе
                      </Text>
                    </div>
                    <Link to="/event/new">
                      <Button variant="default">Создать мероприятие</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/event/123" className={classes.link}>
              123
            </Link>
            <Link to="/admin" className={classes.link}>
              Страница администратора
            </Link>
          </Group>
          {false ? (
            <Group className={classes.hiddenMobile}>
              <Button variant="default">Вход</Button>
              <Link to="/authentication">
                <Button>Регистрация</Button>
              </Link>
              <ButtonScheme />
            </Group>
          ) : (
            <Group className={classes.hiddenMobile}>
              <Popover width={600} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Button compact variant="white" leftIcon={<IconBellRinging />}>
                    +5
                  </Button>
                </Popover.Target>
                <Popover.Dropdown>
                  <Spoiler maxHeight={24} showLabel="Прочитать полностью" hideLabel="Скрыть">
                    <Text size="sm">
                      This is uncont uncontrolled popover, it is opened when button uncontrolled popover, it is opened
                      when button rolled popover, it is opened when button is clicked
                    </Text>
                  </Spoiler>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                </Popover.Dropdown>
              </Popover>
              <Button>Мой профиль</Button>
              <ButtonScheme />
            </Group>
          )}
          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Меню"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
          <Link to="/" className={classes.link}>
            Главная
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Мероприятия
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
            <Anchor href="#" fz="xs">
              Все
            </Anchor>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link to="/event/8" className={classes.link}>
            123
          </Link>
          <Link to="/event/9" className={classes.link}>
            Страница администратора
          </Link>
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
          <div className="d-flex justify-content-between align-items-center px-3">
            {false ? (
              <div className="d-flex">
                <Button className="me-2" variant="default">
                  Вход
                </Button>
                <Button>Регистрация</Button>
              </div>
            ) : (
              <Button>Мой профиль</Button>
            )}
            <ButtonScheme />
          </div>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
