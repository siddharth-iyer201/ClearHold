export type Category='Fossil fuels'|'Weapons'|'Private prisons'|'Tobacco'|'Deforestation';
export interface Fund{ticker:string;name:string;benchmark:string;expenseRatio:number;return3y:number;volatility3y:number;kind:string;asOf:string}
export interface Holding{ticker:string;name:string;sector:string;weight:number;categories:Category[];evidence?:string;source?:string}
export interface Analysis{fund:Fund;holdings:Holding[];categoryExposure:{category:Category;weight:number}[];flaggedWeight:number;flaggedCount:number;coverageWeight:number;alternatives:Fund[]}

export interface Position {ticker:string;amount:number}
export interface ExposurePath {positionTicker:string;positionAmount:number;fundWeight:number;companyTicker:string;companyName:string;companyDollars:number;portfolioWeight:number;categories:Category[];source?:string;evidence?:string}
export interface PortfolioAnalysis {totalAmount:number;analyzedAmount:number;coveragePercent:number;positionsAnalyzed:number;unknownTickers:string[];holdings:Holding[];categoryExposure:{category:Category;weight:number;dollars:number}[];flaggedWeight:number;flaggedDollars:number;flaggedCount:number;exposurePaths:ExposurePath[]}
