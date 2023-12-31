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
  Title,
  Spoiler,
  Image,
} from "@mantine/core";
import logo from "../img/logo.png";
import { useContext } from "react";
import { MantineLogo } from "@mantine/ds";
import { IconBellRinging } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { Link, useHistory } from "react-router-dom";
import ButtonScheme from "./ButtonScheme";
import getHeaderStyles from "../helpers/getHeaderStyles";
import mockdata from "../helpers/headerMockdata";
import { UserContext } from "../App";

export default function HeaderMegaMenu() {
  const user = useContext(UserContext);
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
          <img style={{ width: "210px", height: "58px" }} src={logo} />
          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link to="/" className={classes.link}>
              Главная
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link to="/events" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Куда сходить
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
                {user.isMod && (
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
                )}
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/plans" className={classes.link}>
              Мои планы
            </Link>
            {user.isMod && (
              <Link to="/admin" className={classes.link}>
                Страница администратора
              </Link>
            )}
          </Group>
          {!user ? (
            <Group className={classes.hiddenMobile}>
              <Link to="/authentication">
                <Button variant="default">Вход</Button>
              </Link>
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
                    +2
                  </Button>
                </Popover.Target>
                <Popover.Dropdown>
                  <Spoiler maxHeight={24} showLabel="Прочитать полностью" hideLabel="Скрыть">
                    <Text size="sm">
                    Уже через неделю день города! Найдите себе мероприятие по душе и отправьтесь на него, проложив маршрут в 2ГИС.
                    </Text>
                  </Spoiler>
                  <hr />
                  <Text size="sm">Уже через неделю день города!</Text>
                  <hr />
                </Popover.Dropdown>
              </Popover>

              <Link to="/profile">
                <Button>Мой профиль</Button>
              </Link>
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
          <Link to="/plans" className={classes.link}>
          Мои планы
          </Link>
          <Link to="/admin" className={classes.link}>
            Страница администратора
          </Link>
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
          <div className="d-flex justify-content-between align-items-center px-3">
            {!user ? (
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
