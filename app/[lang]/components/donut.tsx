import {Card, Title, DonutChart, Legend, CategoryBar} from "@tremor/react";

interface City {
    name: string;
    count: number;
}
const countBNB = 200;
const countGSC = 400;
const countEth = 140;
const nameBNB = 'BNB';
const nameGSC = 'GlobalStakeCoin';
const nameEth = 'ETH';

const colorBNB = 'yellow';
const colorGSC = 'violet';
const colorETH = 'blue';

const crypto: City[] = [
    {
        name: nameBNB,
        count: countBNB,
    },
    {
        name: nameGSC,
        count: countGSC,
    },
    {
        name: nameEth,
        count: countEth,
    }
];

const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const DonutChartExample = () => (
    <Card  className="" decoration="top" decorationColor="yellow">
        <Title>Wallet</Title>
        <DonutChart
            className="mt-6"
            data={crypto}
            category="count"
            index="name"
            valueFormatter={valueFormatter}
            colors={[colorBNB, colorGSC, colorETH]}
        />

        <CategoryBar
            className="mt-4"
            categoryPercentageValues={ [countBNB, countGSC, countEth] }
            colors={ [colorBNB, colorGSC, colorETH] }
        />
        <Legend
            className="mt-3"
            categories={ [nameBNB, nameGSC, nameEth] }
            colors={ [colorBNB, colorGSC, colorETH] }
        />
    </Card>
);

export default DonutChartExample;
