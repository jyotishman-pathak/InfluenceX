const data = [
    { open: 50, high: 55, low: 45, close: 52, time: 1642427876 }, // Bullish engulfing
    { open: 52, high: 53, low: 49, close: 50, time: 1642514276 }, // Bearish
    { open: 50, high: 54, low: 48, close: 53, time: 1642600676 }, // Hammer
    { open: 53, high: 55, low: 51, close: 52, time: 1642687076 }, // Bearish
    { open: 52, high: 57, low: 51, close: 56, time: 1642773476 }, // Bullish engulfing
    { open: 56, high: 58, low: 54, close: 55, time: 1642859876 }, // Bearish
    { open: 55, high: 60, low: 53, close: 58, time: 1642946276 }, // Bullish
    { open: 58, high: 61, low: 56, close: 60, time: 1643032676 }, // Hammer
    { open: 60, high: 63, low: 58, close: 59, time: 1643119076 }, // Bearish
    { open: 59, high: 62, low: 57, close: 61, time: 1643205476 }, // Bullish
    { open: 61, high: 63, low: 60, close: 62, time: 1643291876 }, // Hammer
    { open: 62, high: 64, low: 60, close: 61, time: 1643378276 }, // Bearish
    { open: 61, high: 66, low: 60, close: 65, time: 1643464676 }, // Bullish engulfing
    { open: 65, high: 67, low: 63, close: 64, time: 1643551076 }, // Bearish
    { open: 64, high: 68, low: 63, close: 67, time: 1643637476 }, // Bullish
    { open: 67, high: 70, low: 65, close: 68, time: 1643723876 }, // Hammer
    { open: 68, high: 71, low: 66, close: 70, time: 1643810276 }, // Bullish
    { open: 70, high: 72, low: 68, close: 71, time: 1643896676 }, // Bearish
    { open: 71, high: 74, low: 69, close: 73, time: 1643983076 }, // Bullish engulfing
    { open: 73, high: 75, low: 71, close: 72, time: 1644069476 }, // Bearish
    { open: 72, high: 76, low: 70, close: 75, time: 1644155876 }, // Bullish
    { open: 75, high: 78, low: 72, close: 77, time: 1644242276 }, // Hammer
    { open: 77, high: 80, low: 74, close: 79, time: 1644328676 }, // Bullish
    { open: 79, high: 82, low: 76, close: 81, time: 1644415076 }, // Bearish
    { open: 81, high: 83, low: 78, close: 80, time: 1644501476 }, // Bullish engulfing
    { open: 80, high: 84, low: 76, close: 83, time: 1644587876 }, // Bullish
    { open: 83, high: 86, low: 80, close: 85, time: 1644674276 }, // Hammer
    { open: 85, high: 87, low: 82, close: 86, time: 1644760676 }, // Bearish
    { open: 86, high: 88, low: 84, close: 87, time: 1644847076 }, // Bullish
    { open: 87, high: 90, low: 85, close: 89, time: 1644933476 }, // Hammer
    { open: 89, high: 92, low: 86, close: 91, time: 1645019876 }, // Bullish
    { open: 91, high: 93, low: 89, close: 92, time: 1645106276 }, // Bearish
    { open: 92, high: 95, low: 88, close: 94, time: 1645192676 }, // Bullish engulfing
    { open: 94, high: 96, low: 91, close: 95, time: 1645279076 }, // Hammer
    { open: 95, high: 98, low: 92, close: 97, time: 1645365476 }, // Bullish
    { open: 97, high: 100, low: 94, close: 99, time: 1645451876 }, // Bearish
    { open: 99, high: 102, low: 96, close: 101, time: 1645538276 }, // Bullish
    { open: 101, high: 104, low: 98, close: 103, time: 1645624676 }, // Hammer
    { open: 103, high: 106, low: 100, close: 105, time: 1645711076 }, // Bullish
    { open: 105, high: 108, low: 102, close: 107, time: 1645797476 }, // Bearish
    { open: 107, high: 110, low: 104, close: 109, time: 1645883876 }, // Bullish engulfing
    { open: 109, high: 112, low: 106, close: 111, time: 1645970276 }, // Hammer
    { open: 111, high: 114, low: 108, close: 113, time: 1646056676 }, // Bullish
    { open: 113, high: 116, low: 110, close: 115, time: 1646143076 }, // Bearish
    { open: 115, high: 118, low: 112, close: 117, time: 1646229476 }, // Bullish engulfing
    { open: 117, high: 120, low: 114, close: 119, time: 1646315876 }, // Hammer
    { open: 119, high: 122, low: 116, close: 121, time: 1646402276 }, // Bullish
    { open: 121, high: 124, low: 118, close: 123, time: 1646488676 }, // Bearish
    { open: 123, high: 126, low: 120, close: 125, time: 1646575076 }, // Bullish engulfing
    { open: 125, high: 128, low: 122, close: 127, time: 1646661476 }, // Hammer
    { open: 127, high: 130, low: 124, close: 129, time: 1646747876 }, // Bullish
    { open: 129, high: 132, low: 126, close: 131, time: 1646834276 }, // Bearish
    { open: 131, high: 134, low: 128, close: 133, time: 1646920676 }, // Bullish engulfing
    { open: 133, high: 136, low: 130, close: 135, time: 1647007076 }, // Hammer
    { open: 135, high: 138, low: 132, close: 137, time: 1647093476 }, // Bullish
    { open: 137, high: 140, low: 134, close: 139, time: 1647179876 }, // Bearish
    { open: 139, high: 142, low: 136, close: 141, time: 1647266276 }, // Bullish engulfing
    { open: 141, high: 144, low: 138, close: 143, time: 1647352676 }, // Hammer
];



export default data
