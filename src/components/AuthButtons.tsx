import Link from 'next/link'

export default function AuthButtons() {
	return (
		<div className='flex'>
			<Link href='/login'>
				<button className='mr-2 border-b-2 text-slate-300 hover:bg-pink-500 transition duration-900 hover:text-black rounded-full uppercase font-bold px-3 py-2'>
					войти
				</button>
			</Link>
		</div>
	)
}

//<Link href='/signup'>
//<button className=' text-slate-300 hover:bg-pink-500 transition duration-900  hover:text-black rounded-full uppercase font-bold px-3 py-2'>
//зарегестрироваться
//</button>
//</Link>