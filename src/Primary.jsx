import { useEffect, useState } from 'react';
import Game from './Game';
import GameTitle from './GameTitle';

function Primary () {
    const [kanjiData, setKanjiData] = useState([]);
    const [score, setScore] = useState(0);
    const [gradeLevel, setGradeLevel] = useState();
    const [titleKanji, setTitleKanji] = useState([]);

    const jlptN5Kanji = [
        "日", "一", "国", "人", "年", "大", "十", "二", "本", "中",
        "長", "出", "三", "時", "行", "見", "月", "分", "後", "前",
        "生", "五", "間", "上", "東", "四", "今", "金", "九", "入",
        "学", "高", "円", "子", "外", "八", "六", "下", "来", "気",
        "小", "七", "山", "話", "女", "北", "午", "百", "書", "先",
        "名", "川", "千", "水", "半", "男", "西", "電", "校", "語",
        "土", "木", "聞", "食", "車", "何", "南", "万", "毎", "白",
        "天", "母", "火", "右", "読", "友", "左", "休", "父", "雨"
    ];
    const jlptN4Kanji = [
        "明", "暗", "暑", "寒", "遠", "近", "速", "遅", "楽", "難",
        "新", "古", "元", "気", "住", "始", "終", "読", "書", "聞",
        "見", "立", "話", "思", "買", "売", "借", "貸", "教", "学",
        "寝", "起", "出", "入", "送", "受", "開", "閉", "空", "花",
        "雨", "晴", "雪", "風", "地", "通", "道", "車", "駅", "歩",
        "足", "手", "頭", "耳", "口", "目", "体", "心", "英", "語",
        "日", "語", "漢", "字", "線", "和", "洋", "食", "家", "店",
        "店", "大", "小", "中", "色", "線", "図", "光", "私", "公",
        "使", "事", "思", "台", "都", "府", "県", "市", "町", "村"
    ];
    const jlptN3Kanji = [
        "英", "語", "社", "会", "道", "友", "世", "界", "変", "化",
        "理", "解", "答", "事", "成", "歩", "進", "約", "信", "願",
        "説", "得", "答", "届", "運", "動", "急", "常", "語",
        "調", "整", "開", "設", "続", "完", "備", "品", "価", "値",
        "性", "考", "者", "未", "来", "期", "間", "季", "節", "早",
        "遅", "感", "覚", "感", "想", "真", "実", "意", "味", "気",
        "時", "間", "速", "道", "通", "高", "低", "夜", "昼",
        "仕", "事", "業", "学", "習", "試", "験", "試", "合",
        "開", "放", "閉", "館", "館", "年", "齢", "合", "宿", "泊",
        "所", "所", "生", "命", "子", "育", "動", "物", "品", "価",
        "得", "信", "者", "学", "問", "研", "究", "発", "表", "信"
    ];
    const jlptN2Kanji = [
        "意", "志", "事", "業", "性", "関", "連", "協", "力", "会",
        "社", "員", "資", "源", "力", "探", "索", "使", "役", "選",
        "択", "試", "験", "結", "果", "自", "由", "会", "議", "進",
        "行", "勉", "強", "記", "録", "測", "定", "直", "接", "経",
        "験", "設", "定", "成", "果", "動", "物", "明", "暗", "遠",
        "近", "想", "法", "建", "設", "発", "展", "進", "化", "職",
        "場", "休", "暇", "局", "通", "貨", "認", "証", "承",
        "知", "識", "評", "価", "対", "象", "言", "語", "報", "告",
        "伝", "達", "対", "応", "計", "算", "経", "済", "登", "録",
        "設", "立", "付", "加", "運", "転", "生", "活", "資", "格",
        "確", "認", "組", "織", "運", "営", "調", "査", "産", "業"
    ];
    const jlptN1Kanji = [
        "意", "志", "結", "果", "概", "念", "復", "習", "続", "進",
        "施", "行", "機", "能", "論", "証", "明", "接", "続",
        "報", "告", "表", "現", "通", "訳", "概", "要", "解", "明",
        "探", "求", "求", "解", "決", "策", "解", "釈", "確", "認",
        "期", "限", "運", "営", "選", "択", "卒", "業", "集",
        "中", "納", "税", "協", "力", "連", "携", "進", "化", "示",
        "指", "導", "受", "信", "取", "引", "試", "験", "資", "源",
        "準", "備", "制", "限", "伝", "達", "流", "通", "運", "営",
        "商", "業", "展", "開", "考", "察", "適", "応", "関", "係",
        "所", "属", "命", "令", "規", "模", "式", "定", "義", "実",
        "用", "制", "度", "認", "証", "価", "値", "報", "酬"
    ];

    //The project required using an effect to get API data, however as
    //the project evolved I wanted more control over the data and less
    //wait times, so I'm just using the arrays above. I consider the goal of
    //the project complete, but using this method for my personal goals.
    useEffect(() => {
        switch (gradeLevel) {
            case "n5":
              setKanjiData(jlptN5Kanji);
              break;
            case "n4":
              setKanjiData(jlptN4Kanji);
              break;
            case "n3":
              setKanjiData(jlptN3Kanji);
              break;
            case "n2":
              setKanjiData(jlptN2Kanji);
              break;
            case "n1":
              setKanjiData(jlptN1Kanji);
              break;
            default:
              console.log("Invalid grade level.");
          }          
    }, [gradeLevel] );

    //Effect for getting kanji dataset on initialization.
    //USED FOR EDUCATIONAL PURPOSES BUT WILL BE UNUSED IN PRODUCTION
    // useEffect(() => {
    //     const getInitialData = async () => {
    //         // const response = await fetch('https://kanjiapi.dev/v1/kanji/grade-1');
    //         const response = await fetch(`https://kanjiapi.dev${gradeLevel}`);
    //         const data = await response.json();
    //         return data;
    //     }
    //     const fetchData = async () => {
    //         try {
    //             const data = await getInitialData();
    //             setKanjiData(data);
    //         } catch (error) {
    //             console.error('Error fetching kanji data:', error);
    //         }
    //     };
    //     fetchData();
    // }, [gradeLevel] );

    return(
        <div className="gameContainer">
            {
                gradeLevel
                    ? 
                    <>
                        <Game 
                        kanjiData={kanjiData} 
                        score={score}
                        setScore={setScore} 
                        setGradeLevel={setGradeLevel}
                        titleKanji={titleKanji}
                        setTitleKanji={setTitleKanji} />
                    </>
                    : 
                    <>
                        <GameTitle 
                        score={score}
                        setScore={setScore} 
                        setGradeLevel={setGradeLevel}
                        titleKanji={titleKanji}
                        setTitleKanji={setTitleKanji} />
                    </>
            }
        </div>
    );
}

export default Primary;