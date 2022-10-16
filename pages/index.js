import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StatCard from "../components/StatCard";
import Trending from "../components/Trending";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Pagination from "../components/Pagination";

export default function Home({ success, coins, trending }) {
  return (
    <div>
      <Head>
        <title>Crypto Prices</title>
        <meta
          name="description"
          content="List of the top 100 cryptocurrencies"
        />
        <link rel="icon" href="/money-svgrepo-com.svg" />
      </Head>

      {/* Header */}
      <Header />

      <main className="py-12 px-8 flex flex-col max-w-[1600px] mx-auto">
        {!success && (
          <div className=" bg-brand-card p-4 rounded-lg shadow-xl mb-12 border-4 border-brand-a1">
            <h1 className="text-center">
              Oh uh! Looks like we are having issues fetching the data... Please
              try again later 😔
            </h1>
          </div>
        )}

        {/* Trending */}
        <h1 className="text-3xl pb-4 sm:pb-12">Trending Coins</h1>
        {success && (
          <section className="flex sm:pb-12 justify-center 2xl:justify-between flex-wrap">
            <Swiper
              slidesPerView="auto"
              modules={[Autoplay]}
              autoplay={true}
              loop={true}
              speed={3000}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 4,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 4,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 4,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {trending.map((trending) => (
                <SwiperSlide key={trending.coin_id}>
                  <Trending {...trending} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}

        {/* Crypto prices */}
        <h1 className="text-3xl text-left pb-8 sm:pb-12">Crypto Prices</h1>
        {success && (
          <section className="flex flex-col gap-8">
            {coins.getCoins.map((coin) => (
              <StatCard key={coin.id} {...coin} />
            ))}
            <Pagination {...coins} />
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const currentPage =
    Number(query.page) < 6 && 0 < Number(query.page) ? query.page : 1;
  // Error variable
  let success = { sucess: true };

  // End points
  const coinsEndpoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false`;
  const btcEndpoint =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
  const trendingEndpoint = "https://api.coingecko.com/api/v3/search/trending";

  // Fetch cryptocurrencies
  const getCoins = await fetch(coinsEndpoint)
    .then((res) => res.json())
    .catch((error) => (success.sucess = false));

  if (!success.sucess) {
    return {
      props: {
        success: false,
      },
    };
  }

  // Fetch BTC price
  const getBtc = await fetch(btcEndpoint)
    .then((res) => res.json())
    .catch((error) => (success.sucess = false));

  if (!success.sucess) {
    return {
      props: {
        success: false,
      },
    };
  }
  // Fetch trending coins
  const getTrending = await fetch(trendingEndpoint)
    .then((res) => res.json())
    .catch((error) => (success.sucess = false));
  if (!success.sucess) {
    return {
      props: {
        success: false,
      },
    };
  }
  const trending = getTrending.coins.map((item) => ({
    ...item.item,
    btc: getBtc.bitcoin.usd,
  }));

  if (success.sucess) {
    return {
      props: {
        success: true,
        coins: { getCoins, currentPage },
        trending: trending,
      },
    };
  }
}
