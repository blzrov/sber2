import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "../img/image.jpg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  content: {
    maxWidth: rem(480),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export default function HeroBullets() {


  const { classes } = useStyles();
  return (
    <div>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>Мероприятия</span> <br />
              на каждый день
            </Title>
            <Text color="dimmed" mt="md">
              Каждый день появляются новые мероприятия на любой вкус, выбирай для себя и записывайся! А мы пришлем тебе
              уведомление о начале!
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Легко найти</b> – на странице мероприятий вы можете выбрать интересные для себя теги и подобрать удобное по расположение ближе к дому
              </List.Item>
              <List.Item>
                <b>Проложить маршрут</b> – узнать как доехать до интересного концерта
              </List.Item>
              <List.Item>
                <b>Спланировать на месяц вперед</b> – каждый день новое мероприятие
              </List.Item>
            </List>
          </div>
          <Image src={image} className={classes.image} />
        </div>
    </div>
  );
}
