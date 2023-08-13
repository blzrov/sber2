import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  Divider,
} from "@mantine/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../helpers/api";

// import Prefe

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundImage:
      theme.colorScheme === "dark"
        ? "url(https://all.accor.com/magazine/imagerie/6152_de_00_p_2048x1536-46ef.jpg)"
        : "url(https://upload.wikimedia.org/wikipedia/commons/5/5e/Yekaterinburg-City_%28September_2022%29_-_1.jpg)",
  },

  form: {
    borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]}`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function Authentication({ setUser }) {
  const [data, setData] = useState({ login: "", password: "" });
  const [isReg, setIsReg] = useState(false);

  const { classes } = useStyles();
  const history = useHistory();

  function toggleMode() {
    setData({ login: "", password: "" });
    setIsReg(!isReg);
  }

  function handleLogin() {
    const doFetch = async () => {
      const response = await fetch(apiURL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          email: data.login,
          password: data.password,
        }),
      });
      const result = await response.json();
      result.isMod = true;
      if (result.access_token) {
        localStorage.setItem("user", JSON.stringify(result));
        setUser(result);
        history.push("/");
      }
    };
    doFetch();
  }

  function handleReg() {
    console.log(data);
    const doFetch = async () => {
      const response = await fetch(apiURL + "register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          password: data.password,
          email: data.login,
        }),
      });
      const result = await response.json();
      console.log(result);
    };
    doFetch();
  }

  if (isReg) {
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md">
            Добро пожаловать в Екатеринбург
          </Title>

          <Divider label="Найти мероприятие по душе" labelPosition="center" my="lg" />

          <TextInput
            value={data.login}
            onChange={(e) => setData((obj) => ({ ...obj, login: e.target.value }))}
            label="Электронная почта"
            placeholder="hello@gmail.com"
            size="md"
          />
          <PasswordInput
            value={data.password}
            onChange={(e) => setData((obj) => ({ ...obj, password: e.target.value }))}
            label="Пароль"
            placeholder="password"
            mt="md"
            size="md"
          />
          {/* <PasswordInput value={data.password} label="Повторите пароль" placeholder="password" mt="md" size="md" /> */}
          <Checkbox label="Я ознакомился с правилами сервиса" mt="xl" size="md" />
          <Button onClick={handleReg} fullWidth mt="xl" size="md">
            Зарегистрироваться
          </Button>

          <Text ta="center" mt="md">
            Уже есть аккаунт?{" "}
            <Anchor onClick={toggleMode} weight={700}>
              Войти
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  } else
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md">
            С возвращением в Екатеринбург
          </Title>

          <Divider label="Найти мероприятие по душе" labelPosition="center" my="lg" />

          <TextInput
            value={data.login}
            onChange={(e) => setData((obj) => ({ ...obj, login: e.target.value }))}
            label="Электронная почта"
            placeholder="hello@gmail.com"
            size="md"
          />
          <PasswordInput
            value={data.password}
            onChange={(e) => setData((obj) => ({ ...obj, password: e.target.value }))}
            label="Пароль"
            placeholder="password"
            mt="md"
            size="md"
          />
          <Checkbox label="Не выходить из системы" mt="xl" size="md" />
          <Button onClick={handleLogin} fullWidth mt="xl" size="md">
            Войти
          </Button>

          <Text ta="center" mt="md">
            Нет аккаунта?{" "}
            <Anchor weight={700} onClick={toggleMode}>
              Создать аккаунт
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
}
