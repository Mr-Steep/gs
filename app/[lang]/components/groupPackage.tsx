import Package from './package'

export default function GroupPackage() {
	return (
		<>
			<Package
				_price={5}
				_color={'green-800'}
				_name={'Standard'}
			/>
			<Package
				_price={50}
				_color={'blue-800 disabled'}
				_name={'Premium'}
			/>
			<Package
				_price={500}
				_color={'amber-500 disabled'}
				_name={'Gold'}
			/>
		</>

	);
}