'use client';
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import data from '@/app/constants/ChartConst';

const Chart: React.FC = () => {
    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartContainerRef.current) {
            const chart = createChart(chartContainerRef.current, {
                width: chartContainerRef.current.clientWidth,
                height: chartContainerRef.current.clientHeight,
                layout: {
                    textColor: 'black',
                    background: { type: 'solid', color: 'white' }
                },
                crossHair: {
                    vertLine: { color: '#eeeeee' },
                    horzLine: { color: '#eeeeee' }
                },
                priceScale: {
                    borderColor: '#cccccc'
                },
                timeScale: {
                    borderColor: '#cccccc',
                    timeVisible: true
                },
            });

            const candlestickSeries = chart.addCandlestickSeries({
                upColor: '#26a69a',    // Green color for bullish candles
                downColor: '#ef5350',  // Red color for bearish candles
                borderVisible: true,
                wickUpColor: '#26a69a',
                wickDownColor: '#ef5350',
                borderColor: '#000000',
                wickColor: '#000000',
            });

           

            candlestickSeries.setData(data);

            // Adjust spacing to approximate 30px width for candlesticks
            chart.applyOptions({
                timeScale: {
                    barSpacing: 32, // Adjust this value to approximate 30px width
                },
            });

            chart.timeScale().fitContent();

            return () => chart.remove();
        }
    }, []);

    return <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '500px' }} />;
};

export default Chart;
