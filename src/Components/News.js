import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Chantal Da Silva, Kurt Chirbas",
      title:
        "'Explosion' at Baytown, Texas ExxonMobil oil refinery leaves several injured - NBC News",
      description:
        "An overnight fire and possible explosion at an ExxonMobil oil refinery in Baytown, Texas left several people injured early Thursday",
      url: "https://www.nbcnews.com/news/us-news/explosion-fire-baytown-texas-exxonmobil-oil-refinery-rcna9756",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211223-texas-exxon-fire-mb-1003-d6d16e.jpg",
      publishedAt: "2021-12-23T12:17:14Z",
      content:
        "A fire at an ExxonMobil oil refinery in Texas left several people injured early Thursday after what officials and local residents suggested may have been an explosion.\r\nAt least three people were tra… [+2679 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Anton Troianovski, Andrew E. Kramer",
      title:
        "Putin Blames the West for Talk of ‘War, War, War’ - The New York Times",
      description:
        "At a traditional year-end news conference, in comments intended to sway a domestic audience, President Vladimir V. Putin of Russia said his country was defending historically Russian territories.",
      url: "https://www.nytimes.com/2021/12/23/world/europe/russia-putin-ukraine.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/12/23/world/23russia-putin01sub/23russia-putin01sub-facebookJumbo.jpg",
      publishedAt: "2021-12-23T11:56:06Z",
      content:
        "MOSCOW President Vladimir V. Putin of Russia spoke in stark terms on Thursday of rising military tensions in Eastern Europe, saying that there was talk of war, war, war, but that Moscow was not to bl… [+1087 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "FOXBusiness",
      title:
        "COVID-19 treatment pill: When will it be available, and where will it be available? - Fox Business",
      description:
        "The FDA approved an emergency use authorization for Pfizer's oral antiviral treatment drug against COVID-19, Paxlovid.",
      url: "https://www.foxbusiness.com/healthcare/covid-19-treatment-pill-when-will-it-be-available-and-where-will-it-be-available",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/11/0/0/2021-11-16T211906Z_44580289_RC2WVQ9YBB0O_RTRMADP_3_HEALTH-CORONAVIRUS-USA-PFIZER.jpg?ve=1&tl=1",
      publishedAt: "2021-12-23T11:31:13Z",
      content:
        "The Food and Drug Administration approved an emergency use authorization on Wednesday for Pfizer's oral antiviral treatment drug against COVID-19, Paxlovid.\r\nUnder the emergency use authorization, th… [+4040 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "James Vincent",
      title:
        "Huawei’s foldable P50 Pocket has a circular external screen that’s perfect for notifications - The Verge",
      description:
        "Huawei has officially announced its third foldable smartphone: the P50 Pocket. It has a clamshell design like Samsung’s Z Flip 3, and an external, circular display that’s perfect for notifications.",
      url: "https://www.theverge.com/2021/12/23/22851418/huawei-pocket-p50-foldable-clamshell-phone-specs-features",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/5fXy7sv5_t52SjTXGGNNzEJfQaA=/0x123:2861x1621/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23122389/p506.png",
      publishedAt: "2021-12-23T10:34:58Z",
      content:
        "The phone launches in China today, but wont be coming to the US\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "James Franco admits sleeping with students from his acting school - BBC News",
      description:
        "The actor spoke at length about allegations of sexual misconduct made against him in 2018.",
      url: "https://www.bbc.com/news/entertainment-arts-59765052",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/12383/production/_122472647_gettyimages-902345956.jpg",
      publishedAt: "2021-12-23T10:21:05Z",
      content:
        "Image source, Getty Images\r\nImage caption, James Franco has starred in films such as 127 Hours and Milk\r\nActor James Franco has admitted having sex with students from his acting school, almost four y… [+2073 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Alyssa Lukpat",
      title:
        "California Woman Pleads Guilty to Punching Flight Attendant in the Face - The New York Times",
      description:
        "Vyvianna M. Quinonez, 28, bloodied a flight attendant in May on a Southwest Airlines flight to San Diego, prosecutors said.",
      url: "https://www.nytimes.com/2021/12/23/us/southwest-flight-attendant-vyvianna-quinonez-guilty.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/12/22/multimedia/22xp-passenger/22xp-passenger-facebookJumbo.jpg",
      publishedAt: "2021-12-23T10:00:11Z",
      content:
        "Southwest Airlines did not comment on Wednesday night.\r\nMs. Quinonez is set to be sentenced on March 11, prosecutors said. It was not clear if Ms. Quinonez had a lawyer, and she did not respond on We… [+1533 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "U.S. congresswoman carjacked at gunpoint in Philadelphia park - Reuters",
      description:
        "Delaware state police have taken into custody five suspects after U.S. Representative Mary Gay Scanlon was robbed of her automobile at gunpoint in a Philadelphia park on Wednesday.",
      url: "https://www.reuters.com/world/us/us-congresswoman-carjacked-gunpoint-philadelphia-park-2021-12-23/",
      urlToImage:
        "https://www.reuters.com/resizer/wU4Efga1F3LbgYUdf0oaBWGHGvw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PECMJRAUGBKPBCLRLL5H633PIE.jpg",
      publishedAt: "2021-12-23T09:59:00Z",
      content:
        "Dec 22 (Reuters) - Delaware state police have taken into custody five suspects after U.S. Representative Mary Gay Scanlon was robbed of her automobile at gunpoint in a Philadelphia park on Wednesday.… [+2083 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "Marianne LeVine, Sarah Ferris",
      title:
        "Senate GOP feels another Trump effect: The rise of celeb candidates - POLITICO",
      description:
        "House experience isn't necessarily the best way to get traction across the Capitol anymore — as Herschel Walker and Mehmet Oz are proving.",
      url: "https://www.politico.com/news/2021/12/23/trump-spurs-rise-in-celebrity-candidates-525865",
      urlToImage:
        "https://static.politico.com/90/ec/bd3bee5341d496ee6aa2e5f683f5/ap21300613523691-1.jpg",
      publishedAt: "2021-12-23T09:30:31Z",
      content:
        "Trump winning kind of showed, Hey, anybody can do this, said Sen. Tommy Tuberville (R-Ala.), a former college football coach elected in 2020. President Trump opened the doors for a lot of people. Hes… [+6524 chars]",
    },
    {
      source: {
        id: null,
        name: "Anchorage Daily News",
      },
      author: "Annie Berman",
      title:
        "Alaska reports 2nd omicron variant case, involving Anchorage resident who traveled out of state - Anchorage Daily News",
      description:
        "Alaska on Wednesday also reported 30 COVID-19 deaths — four of which occurred recently, with the rest identified through a death certificate review starting in September.",
      url: "https://www.adn.com/alaska-news/2021/12/22/alaska-reports-2nd-omicron-variant-case-involving-anchorage-resident-who-traveled-out-of-state/",
      urlToImage:
        "https://www.adn.com/resizer//y0dX3YcGokqU-d8afoQOMYPhjdU=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/adn/KOXBLU23MZCYZP4C27FMCNVANY.JPG",
      publishedAt: "2021-12-23T09:29:48Z",
      content:
        "Alaska has identified its second omicron variant case, involving an Anchorage resident who had recently traveled out of state, the state health department said Wednesday.\r\nThe person involved had tra… [+3557 chars]",
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: null,
      title:
        "Live news: Third dose of AstraZeneca jab increases antibody levels against Omicron, study finds - Financial Times",
      description: "",
      url: "https://www.ft.com/content/d8741069-9517-4cc8-ae3b-e585ee6cb5a1",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F85fd476c-9359-4c8b-9bf8-89b57887cc82.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2021-12-23T09:23:45Z",
      content:
        "New York reported more than 28,000 new Covid-19 cases, setting a record for daily cases for the fifth time in six days.\r\nA further 28,924 infections were reported to the state, reflecting cases on De… [+1793 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "By Helen Regan and Adam Renton, CNN",
      title:
        "The latest on the coronavirus pandemic and Omicron variant: Live updates - CNN",
      description:
        "Countries around the world are canceling or restricting indoor events and activities as cases of Covid-19, fueled by both the Delta and Omicron variant, spike. Follow here for the latest news updates.",
      url: "https://www.cnn.com/world/live-news/omicron-variant-coronavirus-news-12-23-21/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200213175742-05-coronavirus-0213-super-tease.jpg",
      publishedAt: "2021-12-23T07:38:00Z",
      content:
        "On Tuesday, the central Chinese city of Xi'an recorded 52 new Covid-19 cases. By Wednesday, authorities had imposed strict lockdown measures on its estimated 13 million residents.\r\nThe sweeping restr… [+1665 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Pillar of Shame: Hong Kong's Tiananmen Square statue removed - BBC News",
      description:
        "It was one of the few remaining public memorials in Hong Kong commemorating the 1989 massacre.",
      url: "https://www.bbc.com/news/world-asia-china-59764029",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/52E1/production/_122471212_mediaitem122471211.jpg",
      publishedAt: "2021-12-23T07:24:51Z",
      content:
        "Media caption, Watch: Statue marking Tiananmen Square massacre removed from the University of Hong Kong\r\nA famous statue at the University of Hong Kong marking the Tiananmen Square massacre was remov… [+5180 chars]",
    },
    {
      source: {
        id: null,
        name: "The Times of Israel",
      },
      author: null,
      title:
        "US Navy says it seized arms from Iran likely bound for Yemen - The Times of Israel",
      description:
        "Sailors boarding fishing vessel find 1,400 Kalashnikov-style rifles and 226,600 rounds of ammunition",
      url: "https://www.timesofisrael.com/us-navy-says-it-seized-arms-from-iran-likely-bound-for-yemen/",
      urlToImage:
        "https://static.timesofisrael.com/www/uploads/2021/12/AP21357184363964-1024x640.jpg",
      publishedAt: "2021-12-23T05:03:36Z",
      content:
        "DUBAI, United Arab Emirates The US Navy said it seized a large cache of assault rifles and ammunition being smuggled by a fishing ship from Iran likely bound for war-ravaged Yemen.\r\nUS Navy patrol sh… [+2527 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "2022 Pro Bowl snubs: Cordarrelle Patterson, Roquan Smith lead list of players who deserved recognition - CBS Sports",
      description: "Looking at some players who should have made the Pro Bowl",
      url: "https://www.cbssports.com/nfl/news/2022-pro-bowl-snubs-cordarrelle-patterson-roquan-smith-lead-list-of-players-who-deserved-recognition/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2021/09/20/e3a5d970-dfb0-4821-8ead-cdca1be81067/thumbnail/1200x675/629de4c4e4445b8ed212f22735b597c4/cordarrelle-patterson-falcons.jpg",
      publishedAt: "2021-12-23T04:20:00Z",
      content:
        "The 2022 Pro Bowl rosters have officially been announced, and there is plenty to digest. Tom Brady recorded a record-breaking 15th selection, the Indianapolis Colts led all teams with seven selection… [+4622 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Brent Kendall, Jess Bravin",
      title:
        "Supreme Court Sets Oral Arguments on Biden Covid-19 Vaccine Rules - The Wall Street Journal",
      description:
        "Justices will hold special sitting on Jan. 7 concerning rules for private employers, healthcare workers",
      url: "https://www.wsj.com/articles/supreme-court-sets-oral-arguments-on-biden-covid-19-vaccine-rules-11640218967",
      urlToImage: "https://images.wsj.net/im-457307/social",
      publishedAt: "2021-12-23T04:16:00Z",
      content:
        "WASHINGTONThe Supreme Court on Wednesday said it would hold a special sitting to hear oral arguments early next month on whether the Biden administration can enforce Covid-19 vaccine-or-testing rules… [+5262 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: null,
      title:
        "Intel Apologizes as Pop Star Severs Ties in Xinjiang Furor - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=3b92c4b7-63ce-11ec-99f9-6f4f79466e4a&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0xMi0yMy9jaGluZXNlLXBvcC1zdGFyLWN1dHMtdGllcy13aXRoLWludGVsLWFmdGVyLXhpbmppYW5nLXJldmVsYXRpb24=",
      urlToImage: null,
      publishedAt: "2021-12-23T03:56:00Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Jesse O’Neill",
      title:
        "Biden says he will run for reelection if he is 'in good health' - New York Post ",
      description:
        "President Joe Biden said he would run for re-election if he was “in good health” and he believed “fate” would help bring him a second term.",
      url: "https://nypost.com/2021/12/22/biden-says-he-will-run-for-reelection-if-he-is-in-good-health/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2021/12/biden-abc-index.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2021-12-23T03:23:00Z",
      content:
        "President Joe Biden said he would run for re-election if he was in good health and he believed fate would help bring him a second term. \r\nBiden, 79, made the caveat in an interview with ABC News Wedn… [+2688 chars]",
    },
    {
      source: {
        id: null,
        name: "Investor's Business Daily",
      },
      author: "Investor's Business Daily",
      title:
        "Market Rally Extends Rebound As Nasdaq Faces Test; Elon Musk's Tesla Sales Aren't 'Enough' Yet - Investor's Business Daily",
      description:
        "The market rally continued Wednesday. How aggressive should you be?",
      url: "https://www.investors.com/market-trend/stock-market-today/market-rally-extends-rebound-as-nasdaq-tops-key-level-tesla-google-lead-7-stocks-to-watch/",
      urlToImage:
        "https://www.investors.com/wp-content/uploads/2017/04/bull-cowboy-stock-sunset-adobe-1.jpg",
      publishedAt: "2021-12-23T03:01:00Z",
      content:
        "Dow Jones futures rose slightly early Thursday, along with S&amp;P 500 futures and Nasdaq futures. The stock market rally on Wednesday extended its bounce from Monday's lows, with the Nasdaq reclaimi… [+10771 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Evelyn Cheng",
      title: "Major Chinese city locks down to control Covid outbreak - CNBC",
      description:
        "The outbreak in Xi'an city — population 13 million — stems from the delta variant, authorities said.",
      url: "https://www.cnbc.com/2021/12/23/major-chinese-city-locks-down-to-control-covid-outbreak.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106993044-1640217919793-gettyimages-1359638454-vcg111362133739.jpeg?v=1640217989",
      publishedAt: "2021-12-23T02:53:00Z",
      content:
        "Students queue up for COVID-19 nucleic acid testing at Xi'an Jiaotong University on December 17, 2021 in Xi an, Shaanxi Province of China.\r\nBEIJING A major city in central China that's seen a flare-u… [+3634 chars]",
    },
    {
      source: {
        id: null,
        name: "Buffalo News",
      },
      author: "Eric DuVall News Assistant City Editor",
      title:
        "First case of Omicron variant identified in Western New York - The Buffalo News",
      description:
        "UB researchers said they were not able to pinpoint exactly when the variant arrived in Western New York, but it has likely been circulating in the community for at least",
      url: "https://buffalonews.com/news/local/first-case-of-omicron-variant-identified-in-western-new-york/article_612fe172-636a-11ec-8771-27b0c5f6cc4a.html",
      urlToImage:
        "https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/6/12/612fe172-636a-11ec-8771-27b0c5f6cc4a/61c399f6779e1.preview.jpg?crop=1040%2C546%2C0%2C73&resize=1040%2C546&order=crop%2Cresize",
      publishedAt: "2021-12-23T02:01:30Z",
      content:
        "So, its possible that Omicron didnt arrive here until this month, said Dr. Jennifer Surtees, the lead researcher at UB working to identify viral strains.\r\nThe Omicron variant is believed to be more t… [+1266 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I M Constructor");
    this.state = {
      articles: this.articles,
      //   loading: flase,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Daily Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="mydesc"
              imageUrl="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211223-texas-exxon-fire-mb-1003-d6d16e.jpg"
              newUrl="ToDo"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;