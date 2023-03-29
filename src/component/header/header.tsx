const Header = () => {
    return (
        <div className='w-full m-0 h-7 fixed flex justify-between top-0 z-50 bg-gradient-to-br from-slate-900 to-slate-800 ' >
        <div className='flex gap-2'>
          <button className='w-3 h-3 ml-2 fill-white bg-transparent mt-[6px]'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
          <p className='text-white text-sm mt-[3px]'>Warteg</p>
        </div>
        <div className="flex gap-1 mr-2">
          <p className='text-white text-sm mt-[3px]'>Masuk</p>
          <svg className='fill-white w-[10px] h-[10px] mt-[9px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
      </div>
    );
}

export default Header;