import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='flex'>
			<Link to='/'>
				<img
					src='../../public/keyboard.png'
					alt='Keyboard Icon'
					className='w-25 h-25'
				/>
			</Link>
      <div>Better Type Tester</div>
      <Link to='/about'>About</Link>
		</div>
	);
};

export default Navbar;
