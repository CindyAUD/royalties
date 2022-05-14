import React from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/What%20is%20an%20NFT%20and%20How%20To%20Invest%20in%20One1625075369923972.jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                    Tradeable NFTs for countries and cities around the world. 
                    Built on Algorand Blockchain
                    </div>
                    <div className={style.description}>
                        Marketplace for buying and selling Algorand NFTs
                    </div>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                    
                </div>
                <div className={style.cardContainer}>
                    <img className='rounded-t-lg' src="https://lh3.googleusercontent.com/WWqquoDwWLbtJ2c1sOoSu8a5N4HzrNdlfsG_8mUjtCfx7808bhNXWGRUZobtr4kSr-SvRZriKYzP-8OU-x0D6CXaUUhhGQsDTqrmVQ=w600"/>
                    <div className={style.infoContainer}>
                        <img className='h-[2.25rem] rounded-full' 
                            src='https://pbs.twimg.com/media/E94hIRDXsAk-VKJ?format=jpg&name=large'
                        />

                        <div className={style.author}>
                            <div className={style.name}>Greg Solano</div>
                            <a className='text= [#1868b7]'
                                href='https://lh3.googleusercontent.com/WWqquoDwWLbtJ2c1sOoSu8a5N4HzrNdlfsG_8mUjtCfx7808bhNXWGRUZobtr4kSr-SvRZriKYzP-8OU-x0D6CXaUUhhGQsDTqrmVQ=w600' >
                                    bored ape
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero