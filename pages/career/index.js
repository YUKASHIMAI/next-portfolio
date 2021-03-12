import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../../components/layout'
import homeStyles from '../../styles/home.module.scss'
import '../../styles/profile.module.scss'
import Link from 'next/link'
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactTextTransition, { presets } from "react-text-transition";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Slider from "react-slick";


const name = 'yuuka shimai'

export default function Profile() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true
        }
      }
    ]
  };
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="l_container">
        <main>
          <section id="profile" className={`${homeStyles.secProfile} secProfile`}>
            <div className={`${homeStyles.profile__bg} profile__bg`}></div> 
            <div className={`${homeStyles.profile__inner} profile__inner u-inner u-cf`} >
              <h2 className={`${homeStyles.profile__tit} c-head01 u-font-times`} data-aos="fade-up" data-aos-duration="2000">CAREER</h2> 
              <div className={homeStyles.profile__areaLabelTxt}>
                {/* <div className={homeStyles.profile__areaLabel} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100">
                  <Image src="/static/image/top/profile.jpg" layout="intrinsic" width={600} height={602} alt={name}/>
                </div>  */}
                <div className={`${homeStyles.profile__areaTxt} profile__areaTxt`}>
                  <ul className={homeStyles.profile__list}>
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__name}>島居 夕歌　<span className={homeStyles.profile__nameEn}>YUKA SHIMAI</span></span><br />フロントエンドエンジニア</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2017年</span><br />日本に帰国後、サンフランシスコにてプログラミング好きの仲間に出会ったことをきっかけにWEBの世界に惹かれプログラマーを目指す。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2017年</span><br />日本に帰国後、サンフランシスコにてプログラミング好きの仲間に出会ったことをきっかけにWEBの世界に惹かれプログラマーを目指す。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000">0から技術を習得するべく「社内セミナーの案内ツール」「出張旅費精算支援ツール」「3目並べ」等を社内研修で構築しながらHTML, CSS, JS, PHP等のプログラミング言語を習得。
                    </li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2018年</span><br />WEB制作会社に入社後、クライアント向けのHP制作に従事する。コーディング、CMS（WordPress,MovableType）組み込み作業に没頭しフロントエンドエンジニアとして成長。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000">その後フォーム構築やデータベース等、WEBサイト制作においての幅広い知識に触れ、現在はReact(Next.js)、Vue(Nuxt.js)やLaravel等のワンランク上のスキルを磨きながら日々より良いモノ作りのため勉強中。</li>
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* #profile */}
          <section id="skill" className={homeStyles.skill}>
            <div className={`${homeStyles.skill__inner} u-inner u-cf`}>
              <h2 className={`${homeStyles.skill__tit} c-head01 u-font-timese`} data-aos="fade-up" data-aos-duration="2000">SKILL</h2> 
              <div className={`${homeStyles.skill__icons} skill__div u-cf`}>
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500">
                  <Image src="/static/image/top/skill01.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div>
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                  <Image src="/static/image/top/skill02.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
                 <Image src="/static/image/top/skill03.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                  <Image src="/static/image/top/skill04.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
                  <Image src="/static/image/top/skill05.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
                  <Image src="/static/image/top/skill06.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="700">
                  <Image src="/static/image/top/skill07.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div>
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="800">
                  <Image src="/static/image/top/skill08.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="900">
                  <Image src="/static/image/top/skill09.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
                  <Image src="/static/image/top/skill10.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> 
                <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="1100">
                  <Image src="/static/image/top/skill11.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div> <div className={homeStyles.skill__icons__image} data-aos="fade-left" data-aos-duration="500" data-aos-delay="1200">
                  <Image src="/static/image/top/skill12.png" layout="intrinsic" width={400} height={400} alt={name}/> 
                </div>
              </div>
              <div className={`${homeStyles.skill__img} skill__div`} data-aos="fade-up" data-aos-duration="2000">
                <Image src="/static/image/top/skill_image.png" layout="intrinsic" width={400} height={400} alt={name}/> 
              </div>
            </div>
          </section>
          {/* #skill */}
          <section id="works" class="works">
            <div className={homeStyles.works__inner}>
              <h2 className={`${homeStyles.works__tit} c-head01 u-font-times`} data-aos="fade-up" data-aos-duration="2000">WORKS</h2> 
              <div className={`${homeStyles.works__areaList} u-inner`}>
                <ul className={homeStyles.works__list}>
                  <Slider {...settings}>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="https://www.oneship.biz/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works01.png" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#HTML #CSS #PHP #JQuery #Ajax #Azure</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="https://yakujinryuoh.com/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works02.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#HTML #CSS #PHP #JQuery #SNS API連携</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="https://shintora.co.jp/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works03.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#HTML #CSS #PHP #JQuery #WordPress #blog</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="http://yshimai321.xsrv.jp/todos/todos/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works04.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#個人開発 #TodoList #Nuxt.js #Firebase</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="http://yshimai321.xsrv.jp/contact/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works05.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#個人開発 #お問い合わせフォーム #Laravel #Bootstrap</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="http://yshimai321.xsrv.jp/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works06.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#個人開発 #ポートフォリオ #Nuxt.js #BEM #FLOCSS</p></div></a></Link></li>
                  </Slider>
                </ul>
              </div> 
              <div className={homeStyles.works__bg}></div>
            </div>
          </section>
          {/* #works */}
         
          <div className={`${homeStyles.profile__topBtn} profile__topBtn c-btn01`} data-aos="fade-up" data-aos-duration="2000">
            <Link href="/">
              <a>BACK TO TOP</a>
            </Link>
          </div>
          
         
          <section id="contact" className={homeStyles.contact}>
            <div  className={`${homeStyles.contact__inner} u-inner`} data-aos="fade-up" data-aos-duration="2000">
              <a href="/contact/" target="_blank">
                <div className={homeStyles.contact__areaContact}>
                  <h2  className={`${homeStyles.contact__tit} u-font-times`} data-aos="fade-up" data-aos-duration="2000">CONTACT</h2> 
                  <p className={homeStyles.contact__txt} data-aos="fade-up" data-aos-duration="2000">こちらからお問い合わせください</p>
                </div>
              </a>
            </div>
          </section>
          {/* contact */}

        </main>
        <style jsx>{`

        `}</style>
      </div>
    </Layout>
  )
}
