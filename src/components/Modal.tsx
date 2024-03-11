import { cn } from '../libs/utils'

export function Modal({
  show = false,
  onButtonClick,
  onTeam1NameChange,
  onTeam2NameChange
}: {
  show: boolean
  onButtonClick: () => void
  onTeam1NameChange: (name: string) => void
  onTeam2NameChange: (name: string) => void
}) {
  return (
    <div
      id='popup-modal'
      tabIndex={-1}
      className={cn(
        'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full',
        { flex: show, hidden: !show }
      )}
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow '>
          <div className='px-4 py-8 md:p-5 text-center space-y-8'>
            <div className='relative z-0'>
              <input
                type='text'
                id='small_standard'
                className='block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=''
                onChange={(e) => {
                  onTeam1NameChange(e.target.value)
                }}
              />
              <label
                htmlFor='small_standard'
                className='start-0 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                Team 1
              </label>
            </div>
            <div className='relative z-0'>
              <input
                type='text'
                id='small_standard'
                className='block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=''
                onChange={(e) => {
                  onTeam2NameChange(e.target.value)
                }}
              />
              <label
                htmlFor='small_standard'
                className='start-0 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                Team 2
              </label>
            </div>
            <button
              onClick={onButtonClick}
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
