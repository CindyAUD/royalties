import Link from 'next/link'
import React from 'react' 
import Image from 'next/image'
import nftLogo from '../assets/AlgoWay.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRef, useState, useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import {MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex` ,
    logoContainer: `flex items-center cursor pointer` ,
    logoText: `ml-[0.8rem] text-white font-semibold text-2xl` ,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c50c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg` ,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: `flex items-center justify-end` ,
    headerItem: `text-white px-4 font-bold text-[#c8caca] hover:text-white cursor pointer`,
    headerIcon:`text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer` ,
}



const Header = () => {
    const reach = useRef()
  const reachStdlib = useRef()
  const myAlgoConnect = useRef()
  const walletConnect = useRef()
  const [loading, setLoading] = useState(true)

  async function connectMyAlgoWallet() {
    setWallet({ MyAlgoConnect: myAlgoConnect.current })
    await connectWallet()
  }

  async function connectPeraWallet() {
    setWallet({ WalletConnect: walletConnect.current })
    await connectWallet()
  }

  function setWallet(wallet) {
    reach.current = reachStdlib.current.loadStdlib({ ...process.env, 'REACH_CONNECTOR_MODE': 'ALGO' })
    reach.current.setWalletFallback(reach.current.walletFallback({
      providerEnv: 'TestNet', ...wallet
    }))
  }


  async function connectWallet() {
    let account;
    try {
      account = await reach.current.getDefaultAccount()
    } catch (e) {
      console.error('Error when connecting to wallet', e)
      return;
    }
    const balance = await reach.current.balanceOf(account)
    reach.current.formatCurrency(balance, 4)
  }

  useEffect(() => {
    async function loadLibs() {
      reachStdlib.current = await import('@reach-sh/stdlib')
      myAlgoConnect.current = reachStdlib.current.ALGO_MyAlgoConnect
      walletConnect.current = reachStdlib.current.ALGO_WalletConnect
      setLoading(false)
    }
    loadLibs()
  }, [])


    return (
      <div className={style.wrapper} >
        <Link href='/'>
            <div className={style.logoContainer}>
                <Image src={nftLogo} height={40} width={40}/>
                <div className ={style.logoText}>ALgo</div>
            </div>
        </Link>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch/>
            </div>
            <input className={style.searchInput} placeholder="Search items, collections and accounts" />
        </div>
  
        <div className={style.headerItems}>
        <Link href='/collections/0x68018D20a6fa4B66e124DE4007C2e61146Fff788'>
        <div className={style.headerItem}> Collections</div>
        </Link>
            
            <div className={style.headerItem}> Stats</div>
            <div className={style.headerItem}> Resources</div>
            <div className={style.headerItem}> 
            
            
            
            <button onClick={connectMyAlgoWallet}>
            Create
            </button>
             
               </div>
           
           <div className={style.headerIcon}>
               <CgProfile />
           </div>
           <div className={style.headerIcon}>
               <MdOutlineAccountBalanceWallet />
           </div>
        </div>
      </div>
    )
  }
  
  export default Header