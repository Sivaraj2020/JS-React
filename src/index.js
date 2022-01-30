import React, { createElement } from "react";
import ReactDom from "react-dom";
import { Component } from "react/cjs/react.production.min";
import "./index.css";

function Page() {
  return React.createElement(
    "div",{},
    <Blogzine />,
    <Line3 />,
    <Bolgzinemid />,
    <Line4 />,
    <Bolgzinelast />
  );
}

function Blogzine() {
  return React.createElement(
    "div",
    { className: "Blog" },
    <Header />,
    <MidHeader />,
    <Trend />,
    <Com1/>,
    <Highlights />,
    <Com2 />,
    <Com3 />,
    <Com4 />,
    <PostHead />,
    <Line />,
    <SponsoredNews />,
    <Line2 />,
    <Blog2 />
  );
}

function Bolgzinemid() {
  return React.createElement("div", { className: "flex" }, <Info />, <HT />);
}

function Bolgzinelast() {
  return React.createElement("div", { className: "flex" }, <Footer />);
}
function Header() {
  return React.createElement(
    "div",
    { className: "flex-header" },
    <TitleAbout />,
    <TitleForum />,
    <TitleBuy />,
    <TitleCom />,
    <TitleLogin />
  );
}

const TitleAbout = () => React.createElement("p", {}, "About");
const TitleForum = () => React.createElement("p", {}, "Forum");
const TitleBuy = () => React.createElement("p", {}, "Buynow!");
const TitleCom = () => React.createElement("p", {}, "Components");
const TitleLogin = () => React.createElement("p", {}, "Login/Join");

function MidHeader() {
  return React.createElement(
    "div",
    { className: "flex-blog" },
    <Blog />,
    <Home />,
    <Pages />,
    <Post />,
    <Lifestyle />,
    <Components />,
    <Subs />
  );
}

const Blog = () => React.createElement("h1", {}, "Blogzine");
const Home = () => React.createElement("h3", {}, "Home");
const Pages = () => React.createElement("h3", {}, "Pages");
const Post = () => React.createElement("h3", {}, "Post");
const Lifestyle = () => React.createElement("h3", {}, "Lifestyle");
const Components = () => React.createElement("h3", {}, "Components");
const Subs = () =>
  React.createElement("h3", { className: "background-sub" }, "Subscribe");

function Trend() {
  return React.createElement(
    "div",
    { className: "background-2" },
    React.createElement("p", { className: "background-trend" }, "Trending")
  );
}

function Com1() {
  return (
    <div className="flex-container">
      <Ls />
      <div>
        <Tech />
        <div className="flex2-container">
          <Busisness />
          <Sport />
        </div>
      </div>
    </div>
  );
}

function Ls() {
  return (
    <div className="box-ls">
      <img
        src="https://wallpapercave.com/wp/wp6350571.jpg"
        className="image-ls"
        alt=""
      />
      <h5 className="lf-position">Lifestyle</h5>
      <h2 className="lf-position">Ten tale signs you to get a new startup</h2>
    </div>
  );
}

function Tech() {
  return (
    <div className="box-tech">
      <img
        src="https://wallpapercave.com/uwp/uwp1949870.png"
        className="image-tech"
        alt=""
      />
      <h5 className="tech-position">Technology</h5>
      <h3 className="tech-position">
        Best Pintrest boards for learning Busisness
      </h3>
    </div>
  );
}

function Busisness() {
  return (
    <div className="box-bis">
      <img
        src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="image-busis"
        alt=""
      />
      <h5 className="busis-position">Busisness</h5>
      <h3 className="busis-position">Five intermediate guide to Busisness</h3>
    </div>
  );
}

function Sport() {
  return (
    <div className="box-sp">
      <img
        src="https://wallpapercave.com/wp/wp4236475.png"
        className="img-sports"
        alt=""
      />
      <h5 className="spt-position">Sports</h5>
      <h3 className="spt-position">15 reasons to choose startup</h3>
    </div>
  );
}

function Highlights() {
  return React.createElement("div", { className: "flex-tth" }, <TH />, <FFS />);
}

function TH() {
  return (
    <div className="tth">
      <h1>Today's Top Highlights</h1>
      <p>Latest breaking news,pictures,videos and special reports</p>
    </div>
  );
}

function FFS() {
  return (
    <div className="flex-container 3">
      <Fans />
      <Followers />
      <Sub />
    </div>
  );
}
const Fans = () =>
  React.createElement("p", { className: "Box-fans" }, "1.5k Fans");
const Followers = () =>
  React.createElement("p", { className: "Box-followers" }, "1.8M followers");
const Sub = () => React.createElement("p", { className: "Box-sub" }, "22k Sub");

function Com2() {
  return React.createElement(
    "div",
    { className: "flex-tt" },
    <Tech2 />,
    <Travel />,
    <TP />
  );
}

function Tech2() {
  return (
    <section>
      <div className="box-tech2">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/23/19/30/earth-2254769_960_720.jpg"
          className="image-tech2"
          alt=""
        />
        <h5 className="tech2-position">Technology</h5>
      </div>
      <h3>Bad habits that people in the industry need to quit</h3>
      <p className="ad-fw">For who thoroughly her boy estimating conviction.</p>
      <p className="ad-rd">
        Removed demands expense account in outward tedious do.
      </p>
      <p className="ad-pw">Particular way thoroughly unaffected</p>
      <h5>by Billy Dec 29, 2021</h5>
    </section>
  );
}

function Travel() {
  return (
    <section>
      <div className="box-travel">
        <img
          src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="image-travel"
          alt=""
        />
        <h5 className="travel-position">Travel</h5>
      </div>
      <h3 className="adjust-a">
        Around the web: 20 fabulous infographics about business
      </h3>
      <p className="width-pfm">
        Projection favorable Mrs can be projecting own.
      </p>
      <p className="width-tim">
        Thirty it matter enable become admire in giving.
      </p>
      <p className="width-srg">
        See resolved goodness felicity shy civility domestic had but.
      </p>
      <h5>by SamuelJan 22, 2021</h5>
    </section>
  );
}

function TP() {
  return React.createElement(
    "div",
    { className: "pad-trendingtopics" },
    <T1 />,
    <Tr1 />,
    <B1 />,
    <M1 />,
    <P1 />,
    <S1 />
  );
}

const T1 = () => React.createElement("h2", {}, "Trending Topics");
const Tr1 = () =>
  React.createElement("h3", { className: "box-travel-2" }, "Travel");
const B1 = () =>
  React.createElement("h3", { className: "box-busisness-2" }, "Busisness");
const M1 = () =>
  React.createElement("h3", { className: "box-market" }, "Marketing");
const P1 = () =>
  React.createElement("h3", { className: "box-photo" }, "Photography");
const S1 = () =>
  React.createElement("h3", { className: "box-sports-2" }, "Sports");

function Com3() {
  return React.createElement(
    "div",
    { className: "flex-container-4" },
    <Gadjects />,
    <Sport2 />,
    <RP />
  );
}

function Gadjects() {
  return (
    <section>
      <div className="box-gad">
        <img
          src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="image-gadjects"
          alt=""
        />
        <h5 className="gad-position">Gadjets</h5>
      </div>
      <h3 className="width1">
        12 worst types of business accounts you follow on Twitter
      </h3>
      <p className="width2">He moonlights difficult engrossed it, sportsmen.</p>
      <p className="width3">
        Interested has all Devonshire difficulty gay assistance joy.
      </p>
      <p className="width-unaffected">
        Unaffected at ye of compliment alteration to
      </p>
      <h5>by Bryan Jun 17, 2021</h5>
    </section>
  );
}

function Sport2() {
  return (
    <section>
      <div className="box-spt">
        <img
          src="https://images5.alphacoders.com/418/thumb-1920-418002.jpg"
          class="image-sports2"
          alt=""
        />
        <h5 className="sports2-position">Sports</h5>
      </div>
      <div className="width4">
        <h3>Dirty little secrets about the business industry</h3>
        <p>Place voice no arises along to.</p>
        <p>Parlors waiting so against me no.</p>
        <p>Wishing calling is warrant settled was lucky.</p>
        <p>Express besides it present if at an opinion visitor.</p>
      </div>

      <h5>by Denni Mar 07, 2021</h5>
    </section>
  );
}

function RP() {
  return (
    <div>
      <p>View all categories</p>
      <h2 className="mar-rp">Recent post</h2>
      <p className="mar-p1">The pros and cons of business agency May 17,2021</p>
      <p className="mar-p2">5 reasons why you shouldn't startup Apr 04,2021</p>
      <p className="mar-p3">
        Ten questions you should answer truthfully.Jun 30,2021
      </p>
      <p className="mar-p4">Five unbelievable facts about money.Nov 29,2021</p>
    </div>
  );
}

function Com4() {
  return (
    React >
    createElement(
      "div",
      { className: "flex-container" },
      <Marketing />,
      <Photography />,
      <Ad />
    )
  );
}
function Marketing() {
  return (
    <section>
      <div className="box-marketing">
        <img
          src="https://cdn.hipwallpaper.com/i/39/35/FQWvuP.jpeg"
          className="image-mark2"
          alt=""
        />
        <h5 className="position-mark">Marketing</h5>
      </div>
      <h3 className="adj-width">
        7 common mistakes everyone makes while traveling
      </h3>
      <p className="adj-doy">
        Drawings offended yet answered Jennings perceive laughing six did far.
      </p>
      <p>Rooms oh fully taken by worse do.</p>
      <p>Points afraid but may end law lasted.</p>
      <h5>by Carolyn Sep 01, 2021</h5>
    </section>
  );
}

function Photography() {
  return (
    <section>
      <div className="box-pgy">
        <img
          src="https://images.pexels.com/photos/1655817/pexels-photo-1655817.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          className="image-photo"
          alt=""
        />
        <h5 class="position-photo">Photography</h5>
      </div>
      <h3>5 investment doubts you should clarify</h3>
      <p>Was out laughter raptures returned outweigh.</p>
      <p>Luckily cheered colonel I do we attack highest enabled.</p>
      <p>Tried law yet style child.</p>
      <p>The bore of true of no be deal.</p>
      <h5>by Jacqueline Nov 11, 2021</h5>
    </section>
  );
}

function Ad() {
  return (
    <div className="box-ad">
      <h3>Advertisement</h3>
      <p>Place your ad here</p>
    </div>
  );
}

const PostHead = () =>
  React.createElement(
    "div",
    { className: "box-post" },
    React.createElement("h4", {}, "Load more post")
  );

const Line = () => React.createElement("div", { className: "line" });
const Sn = () =>
  React.createElement(
    "div",
    {},
    React.createElement(
      "h3",
      {},
      "Sponsered news",
      React.createElement("p", {}, "Content by: Bootstrap")
    )
  );

function SponsoredNews() {
  return (
    <section>
      <div className="flex-sn-cb">
        <Sn />
      </div>
      <div className="flex-cont">
        <Mark />
        <Photo />
        <Sport3 />
        <Gad2 />
      </div>
    </section>
  );
}

function Mark() {
  return (
    <section>
      <div className="box-marketing-2">
        <img
          src="https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="image-market"
          alt=""
        />
        <h3 className="position-market">Marketing</h3>
      </div>
      <h4 className="dfg">7 common mistakes everyone makes while traveling</h4>
    </section>
  );
}

function Photo() {
  return (
    <section>
      <div className="box-photography-2">
        <img
          src="https://wallpapers.com/images/high/extreme-cycling-rock-jump-4e9ovi626nq9p201.jpg"
          className="image-photo2"
          alt=""
        />
        <h3 className="position-photo2">Photography</h3>
      </div>
      <h4 className="lmn">5 investment doubts you should clarify</h4>
    </section>
  );
}

function Sport3() {
  return (
    <section>
      <div className="box-sports-3">
        <img
          src="https://wallpapers.com/images/high/extreme-cycling-on-grass-qoa9x12ly4lmrpo0.jpg"
          className="image-sports3"
          alt=""
        />
        <h3 className="position-sports2">Sports</h3>
      </div>
      <h4 className="lki">Dirty little secrets about the business industry</h4>
    </section>
  );
}

function Gad2() {
  return (
    <section>
      <div className="box-gadgets-3">
        <img
          src="https://getwallpapers.com/wallpaper/full/d/3/b/254711.jpg"
          className="image-gad2"
          alt=""
        />
        <h3 className="position-gad2">Gadgets</h3>
      </div>
      <h4 className="hij">
        12 worst types of business accounts you follow on Twitter
      </h4>
    </section>
  );
}

const Line2 = () => React.createElement("div", { className: "line-2" });

function Blog2() {
  return React.createElement(
    "div",
    { className: "flex-6" },
    <Bl />,
    <S2 />,
    <M2 />,
    <Su />
  );
}
const Bl = () => React.createElement("h2", {}, "blogzine");
const S2 = () =>
  React.createElement(
    "div",
    { className: "red-wid" },
    React.createElement(
      "p",
      {},
      "The next-generation blog, news, and magazine theme for you to start sharing your stories today!",
      React.createElement(
        "p",
        {},
        "This Bootstrap 5 based theme is ideal for all types of sites that deliver the news."
      )
    )
  );

const M2 = () =>
  React.createElement(
    "p",
    { className: "box-mailid" },
    "Enter your email address"
  );
const Su = () =>
  React.createElement("p", { className: "box-sub2" }, "Subscribe");
const Line3 = () => React.createElement("div", { className: "line-3" });

function Info() {
  return React.createElement(
    "div",
    { className: "flex-words" },
    <Rp />,
    <Nav />,
    <Gru />,
    <MApp />
  );
}

function Rp() {
  return (
    <div className=" mar-top">
      <h3>Recent post</h3>
      <h4 className="Box-bs1">Busisness</h4>
      <h4 className="sdf">Up-coming business bloggers, you need to watch</h4>
      <h4 className="Box-mt1">Marketing</h4>
      <h4 className="wer">
        How did we get here? The history of the business told through tweets
      </h4>
    </div>
  );
}

function Nav() {
  return (
    <div className="mar-nav">
      <h3>Navigation</h3>
      <div className="flex-words">
        <div className="margin-features">
          <h4>Features</h4>
          <h4>Style Guide</h4>
          <h4>Contact us</h4>
          <h4>Get Theme</h4>
          <h4>Support</h4>
          <h4>Privacy Policy</h4>
          <h4>Newsletter</h4>
        </div>
        <div className="width">
          <h4>News</h4>
          <h4>Career</h4>
          <h4>Technology</h4>
          <h4>Startups</h4>
          <h4>Gadgets</h4>
          <h4>Inspiration</h4>
        </div>
      </div>
    </div>
  );
}

function Gru() {
  return (
    <div className="margin-gru">
      <h3>Get Regular Updates</h3>
      <h4 className="margin-whapp">WhatsApp</h4>
      <h4>YouTube</h4>
      <h4>Website Notifications</h4>
      <h4>Newsletters</h4>
      <h4>Podcasts</h4>
    </div>
  );
}

function MApp() {
  return (
    <div className="margin-oma">
      <h3>Our mobile App</h3>
      <h4 className="width-pop">
        Download our App and get the latest Breaking News Alerts and latest
        headlines and daily articles near you.
      </h4>
    </div>
  );
}

function HT() {
  return React.createElement("div", {}, <Hottp />);
}

const Hottp = () => (
  <div>
    <h2 class="margin-ht">Hot topics</h2>
    <h4>
      Covid-19 Politics Entertainment Media Royalist World Half Full Scouted
      Travel Beast Inside Crossword Newsletters
    </h4>
    <h4>
      Podcasts Auction 2021 Protests NewsCyber Education Sports Tech And Auto
      Opinion Share Market
    </h4>
  </div>
);

function Footer() {
  return React.createElement(
    "div",
    { className: "flex-webes" },
    <Web />,
    <Ee />,
    <Terms />,
    <Privacy />,
    <Cookie />
  );
}

const Line4 = () => React.createElement("div", { className: "line-4" });
const Web = () =>
  React.createElement("h4", {}, "©2021 Webestica. All rights reserved");
const Ee = () =>
  React.createElement("h4", { className: "pad-ee" }, "English Edition");
const Terms = () =>
  React.createElement("h4", { className: "pad-terms" }, "Terms");
const Privacy = () =>
  React.createElement("h4", { className: "pad-privacy" }, "Privacy");
const Cookie = () =>
  React.createElement("h4", { className: "pad-cookie" }, "Cookie");

ReactDom.render(<Page />, document.getElementById("root"));