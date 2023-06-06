import {Button, Card, CardBody, CardFooter, CardHeader, Typography,} from "@material-tailwind/react";
import {CheckIcon} from "@heroicons/react/24/outline";

interface PackageProps {
	_price: number;
	_color: any;
	_name: string;
}

export default function Package({ _price, _color, _name }: PackageProps){
	const _class = `w-full max-w-[20rem] p-8 text-white bg-${_color}  bg-gradient-to-r from-zinc-500/0 via-zinc-300/30 to-zinc-500/0`
	const _classButton = `text-${_color} hover:scale-[1.02] focus:scale-[1.02] active:scale-100`
	return (
		<Card variant="gradient" className={_class} >
			<CardHeader
				floated={false}
				shadow={false}
				color="transparent"
				className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
			>
				<Typography
					variant="small"
					color="white"
					className="font-normal uppercase"
				>
					{_name}
				</Typography>
				<Typography
					variant="h1"
					color="white"
					className="mt-6 flex justify-center gap-1 text-7xl font-normal"
				>
					<span className="mt-2 text-4xl">$</span>{_price}{" "}
				</Typography>
			</CardHeader>
			<CardBody className="p-0">
				<ul className="flex flex-col gap-4">
					<li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon strokeWidth={2} className="h-3 w-3" />
            </span>
						<Typography className="font-normal">5 team members</Typography>
					</li>
					<li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon strokeWidth={2} className="h-3 w-3" />
            </span>
						<Typography className="font-normal">200+ components</Typography>
					</li>
					<li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon strokeWidth={2} className="h-3 w-3" />
            </span>
						<Typography className="font-normal">40+ built-in pages</Typography>
					</li>
					<li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon strokeWidth={2} className="h-3 w-3" />
            </span>
						<Typography className="font-normal">1 year free updates</Typography>
					</li>
					<li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon strokeWidth={2} className="h-3 w-3" />
            </span>
						<Typography className="font-normal">Life time technical support</Typography>
					</li>
				</ul>
			</CardBody>
			<CardFooter className="mt-12 p-0">
				<Button
					size="lg"
					color="white"
					className={_classButton}
					ripple={false}
					fullWidth={true}
				>
					Buy Now
				</Button>
			</CardFooter>
		</Card>
	);
}