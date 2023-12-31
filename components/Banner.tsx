import { globalActions } from '@/store/globalSlices'
import { RootState } from '@/utils/types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Banner = () => {
  const dispatch = useDispatch()
  const { setCreateModal } = globalActions
  const { wallet } = useSelector((states: RootState) => states.globalStates)

  const onPressCreate = () => {
    if (wallet === '') return toast.warning('Connect wallet first!')
    dispatch(setCreateModal('scale-100'))
  }

  return (
    <main className="mx-auto text-center space-y-8">
      <div className="area">
      <h1 className="text-[45px] font-[600px] text-center leading-none">Vote Without Rigging</h1>
      <p style={{marginTop:"2vw"}} className="text-[16px] font-[500px] text-center">
      Due to the secure and immutable nature of blockchain, votes may be cast by computer or mobile device instead of having voters show up at a local polling place or cast a mail-in-ballot to be processed manually by election officials. Votes tracked through a blockchain provide for a quicker, tamper-proof way of counting votes, which could lead to greater voter participation, better ballot security, and at lower cost..
      </p>
      </div>
      <button
        className="text-black h-[45px] w-[148px] rounded-full transition-all duration-300
        border border-gray-400 bg-white hover:bg-opacity-20 hover:text-white"
        onClick={onPressCreate}
      >
        Create poll
      </button>
    </main>
  )
}

export default Banner
