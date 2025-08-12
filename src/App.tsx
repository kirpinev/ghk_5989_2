import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import hero from "./assets/hero.png";
import drums from "./assets/drums.png";
import free from "./assets/free.png";
import discount from "./assets/discount.png";
import bag from "./assets/bag.png";
import ruble from "./assets/ruble.png";
import transfer from "./assets/transfer.png";
import sim from "./assets/sim.png";
import pocket from "./assets/pocket.png";
import light from "./assets/light.png";
import cash from "./assets/cash.png";
import smart from "./assets/smart.png";
import clock from "./assets/clock.png";
import crown from "./assets/crown.png";
import banknoteOff from "./assets/banknote-off.png";
import card2 from "./assets/card2.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { ThxLayout } from "./thx/ThxLayout.tsx";
import { CircularProgressBar } from "@alfalab/core-components/circular-progress-bar";

interface Product {
  title: string;
  text: string;
  image: string;
}

const familyProducts: Array<Product> = [
  {
    title: "Альфа-Смарт для вас и 2 близких",
    text: "Приглашайте участников в семейную подписку",
    image: smart,
  },
];

const products: Array<Product> = [
  {
    title: "+1 категория с кэшбэком 5%",
    text: "Дополнительная категория каждый месяц",
    image: bag,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "+2% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: ruble,
  },
  {
    title: "Бесплатная мобильная связь Альфа-Мобайл",
    text: "Тариф Смарт на 3 ГБ, 100 мин, 10 смс и мессенджеры",
    image: sim,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в категориях, 10 000 ₽ или миль в сервиса Альфа-Банка",
    image: pocket,
  },
  {
    title: "Эксклюзивный кэшбэк от партнёров",
    text: "Доступ к особой подборке",
    image: light,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "В любые банки без комиссий",
    image: transfer,
  },
  {
    title: "Увеличенный лимит на снятие наличных",
    text: "Без комиссии в банкоматах любых банков России",
    image: cash,
  },
  {
    title: "На 20% ниже комиссия на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [isMoreClicked, setIsMoreClicked] = useState(false);

  const submit = () => {
    window.gtag("event", "5989_get_sub", {
      variant_name: "5989_2",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hero} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium">
            Первый месяц бесплатно, <br /> далее — 399 ₽ в месяц
          </Typography.Text>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          <div
            className={appSt.product}
            style={{
              overflow: "hidden",
            }}
          >
            <div>
              <Typography.TitleResponsive
                font="system"
                view="small"
                weight="bold"
                tag="h3"
                className={appSt.productTitle}
              >
                Умный кэшбэк
              </Typography.TitleResponsive>

              <Typography.Text
                view="secondary-large"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Максимальный кэшбэк с каждой покупки
              </Typography.Text>
              <Gap size={16} />
              <div
                onClick={() => {
                  setIsMoreClicked(true);

                  window.gtag("event", "5989_get_info", {
                    variant_name: "5989_2",
                  });
                }}
                style={{
                  padding: "4px 16px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "16px",
                  width: "fit-content",
                }}
              >
                Подробнее
              </div>
            </div>
            <img src={card2} alt="" height={96} className={appSt.productIcon} />
          </div>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="" onClick={submit}>
          Подключить
        </ButtonMobile>
      </div>

      <BottomSheet open={isMoreClicked} onClose={() => setIsMoreClicked(false)}>
        <div className={appSt.box}>
          <Gap size={4} />
          <img
            src={card2}
            width={200}
            style={{ display: "block", margin: "0 auto" }}
            alt="Картинка Альфа-Смарт"
          />
          <div>
            <Typography.TitleResponsive
              tag="h1"
              view="small"
              font="system"
              weight="bold"
            >
              Выбирайте карту — получайте больше кэшбэка
            </Typography.TitleResponsive>
            <Typography.Text view="primary-small">
              Подскажем, какой картой выгоднее платить за каждую покупку
            </Typography.Text>
          </div>
        </div>
        <Gap size={32} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#F3F4F5",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <img src={crown} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Максимальный кэшбэк всегда
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Сравнивает все ваши карты
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#F3F4F5",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <img src={clock} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Экономьте время
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Не нужно помнить все акции и категории
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#F3F4F5",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <img src={banknoteOff} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Всегда бесплатно
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Никаких скрытых комиссий
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={32} />
        <Typography.TitleResponsive
          tag="h1"
          view="small"
          font="system"
          weight="bold"
        >
          Как это работает
        </Typography.TitleResponsive>
        <Gap size={24} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ width: "48px", height: "48px" }}>
              <CircularProgressBar
                value={35}
                size={48}
                contentColor="primary"
                view="negative"
                title={
                  <Typography.Text
                    view="primary-medium"
                    color="primary"
                    weight="bold"
                  >
                    1
                  </Typography.Text>
                }
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Подключите карты
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Добавьте все свои банковские карты в приложение за 1 минуту
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ width: "48px", height: "48px" }}>
              <CircularProgressBar
                value={75}
                size={48}
                contentColor="primary"
                view="negative"
                title={
                  <Typography.Text
                    view="primary-medium"
                    color="primary"
                    weight="bold"
                  >
                    2
                  </Typography.Text>
                }
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Выберите покупку
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Укажите магазин или товар
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ width: "48px", height: "48px" }}>
              <CircularProgressBar
                value={100}
                size={48}
                contentColor="primary"
                view="negative"
                title={
                  <Typography.Text
                    view="primary-medium"
                    color="primary"
                    weight="bold"
                  >
                    3
                  </Typography.Text>
                }
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Получите совет
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Система подскажет какой картой платить выгоднее
              </Typography.Text>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
};
